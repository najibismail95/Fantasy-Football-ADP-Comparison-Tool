import { test, describe, before, after } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { GOLD } from '../config.js';
import {
  assertExportSafe, assertNoHistoryLoss, exportParquet, hydrateFromParquet, openDb,
  replaceAll, replaceDay,
} from './client.js';
import type { DuckDBConnection } from '@duckdb/node-api';

/**
 * These exercise the persistence invariants offline — no network, no live
 * sources. Every bug this project has hit in production was reproducible this
 * way, and none of them were caught by "did the ingest crash".
 */

const TMP_DB = `test-${process.pid}.duckdb`;
const TMP_PARQUET = path.join(GOLD, `test-parquet-${process.pid}`);

const ADP_COLS = ['player_id', 'source', 'adp_format', 'adp', 'auction_value', 'captured_at'] as const;
const PLAYER_COLS = ['player_id', 'display_name', 'position', 'team', 'espn_id', 'search_rank', 'active', 'captured_at'] as const;

const adpRows = (date: string, n: number) =>
  Array.from({ length: n }, (_, i) => ({
    player_id: `p${i}`, source: 'ESPN', adp_format: 'PPR_1QB',
    adp: i + 1.5, auction_value: null, captured_at: date,
  }));

const playerRows = (date: string, n: number) =>
  Array.from({ length: n }, (_, i) => ({
    player_id: `p${i}`, display_name: `Player ${i}`, position: 'WR', team: 'SF',
    espn_id: null, search_rank: i, active: true, captured_at: date,
  }));

const UNRESOLVED_COLS = ['source', 'source_id', 'source_name', 'position', 'team', 'reason', 'captured_at'] as const;
const unresolvedRows = (date: string, n: number) =>
  Array.from({ length: n }, (_, i) => ({
    source: 'ESPN', source_id: `u${i}`, source_name: `Unresolved ${i}`,
    position: 'WR', team: null, reason: 'no match in spine', captured_at: date,
  }));

let conn: DuckDBConnection;
const count = async (t: string) =>
  Number(((await conn.runAndReadAll(`SELECT count(*) AS n FROM ${t}`)).getRowObjectsJson() as { n: string }[])[0]!.n);
const days = async (t: string) =>
  Number(((await conn.runAndReadAll(`SELECT count(DISTINCT captured_at) AS n FROM ${t}`)).getRowObjectsJson() as { n: string }[])[0]!.n);

describe('persistence', () => {
  before(async () => {
    conn = await openDb(TMP_DB);
    await fs.mkdir(TMP_PARQUET, { recursive: true });
  });

  after(async () => {
    await fs.rm(path.join(GOLD, TMP_DB), { force: true });
    await fs.rm(TMP_PARQUET, { recursive: true, force: true });
  });

  test('replaceDay is idempotent — re-running a date replaces, never duplicates', async () => {
    await replaceDay(conn, 'adp_snapshots', ADP_COLS, adpRows('2026-07-27', 10), '2026-07-27');
    await replaceDay(conn, 'adp_snapshots', ADP_COLS, adpRows('2026-07-27', 10), '2026-07-27');
    assert.equal(await count('adp_snapshots'), 10, 're-running the same date must not double rows');
  });

  test('a second date accumulates instead of overwriting', async () => {
    await replaceDay(conn, 'adp_snapshots', ADP_COLS, adpRows('2026-07-28', 10), '2026-07-28');
    assert.equal(await count('adp_snapshots'), 20);
    assert.equal(await days('adp_snapshots'), 2);
  });

  test('players survives a date rollover (the primary-key crash)', async () => {
    // Regression: players has a PK on player_id, so writing it per-day threw
    // "Duplicate key violates primary key constraint" the moment the date changed.
    await replaceAll(conn, 'players', PLAYER_COLS, playerRows('2026-07-27', 10));
    await assert.doesNotReject(
      () => replaceAll(conn, 'players', PLAYER_COLS, playerRows('2026-07-28', 10)),
      'writing players on a new date must not violate the primary key',
    );
    assert.equal(await count('players'), 10, 'players is current-state, not per-day');
  });

  test('parquet round-trip preserves every day (history is not recoverable if lost)', async () => {
    await exportParquet(conn, 'adp_snapshots', TMP_PARQUET);

    // Simulate a fresh CI runner: the DB is gone, only the committed parquet remains.
    await conn.run('DELETE FROM adp_snapshots');
    assert.equal(await count('adp_snapshots'), 0);

    const loaded = await hydrateFromParquet(conn, ['adp_snapshots'], TMP_PARQUET);
    assert.equal(loaded['adp_snapshots'], 20, 'hydrate must restore every row');
    assert.equal(await days('adp_snapshots'), 2, 'hydrate must restore every DAY');
  });

  test('hydrate does not duplicate days it already holds', async () => {
    const before_ = await count('adp_snapshots');
    const loaded = await hydrateFromParquet(conn, ['adp_snapshots'], TMP_PARQUET);
    assert.deepEqual(loaded, {}, 'nothing to add when every day is already present');
    assert.equal(await count('adp_snapshots'), before_, 're-hydrating must not double rows');
  });

  test('hydrate MERGES days the database is missing (the local-vs-CI divergence)', async () => {
    // The bug: hydrate used to skip entirely whenever the table had any rows.
    // On CI that was harmless — the DB is always empty on a fresh runner. On a
    // laptop the .duckdb file persists, so the days CI committed while you
    // weren't running never arrived, and the next export wrote a SHORTER
    // history over the committed one. Four days died that way.
    //
    // The parquet here holds 07-27 and 07-28. Drop 07-27 from the table to
    // stand in for a day the local DB never saw, and hydrate must bring it back
    // without touching the day already present.
    await conn.run("DELETE FROM adp_snapshots WHERE captured_at = DATE '2026-07-27'");
    assert.equal(await days('adp_snapshots'), 1, 'precondition: one day missing');
    const rowsBefore = await count('adp_snapshots');

    const loaded = await hydrateFromParquet(conn, ['adp_snapshots'], TMP_PARQUET);

    assert.equal(await days('adp_snapshots'), 2, 'the missing day must be restored');
    assert.equal(await count('adp_snapshots'), rowsBefore + 10, 'only the missing day is added');
    assert.equal(loaded['adp_snapshots'], 10, 'reports rows ADDED, not the table total');
  });

  test('the *_current view exposes one day, the base table exposes all', async () => {
    // Regression: unscoped queries silently doubled counts and fanned joins out
    // once a second day landed.
    assert.equal(await count('adp_snapshots'), 20, 'base table = full history');
    assert.equal(await count('adp_current'), 10, 'view = latest snapshot only');
  });

  test('unresolved_current stays anchored to TODAY even when today resolved perfectly', async () => {
    // Regression: unresolved_current used to self-reference MAX(captured_at)
    // FROM unresolved. replaceDay leaves no row at all for a date with nothing
    // to write, so a day with ZERO unresolved players — the success case —
    // has no row for that date, and self-referencing MAX skips straight past
    // it to the last day that DID have unresolved rows. Once a source stops
    // being ingested, that freezes "current" on that source's old entries
    // forever, even after weeks of clean resolution.
    //
    // adp_snapshots already sits at 2026-07-28 (20 rows across two days, from
    // earlier tests in this file). Give unresolved some old rows on 07-27
    // only — 07-28 resolved everything, so nothing was ever written for it.
    await replaceDay(conn, 'unresolved', UNRESOLVED_COLS, unresolvedRows('2026-07-27', 3), '2026-07-27');
    assert.equal(await days('adp_snapshots'), 2, 'precondition: today is 07-28');
    assert.equal(await count('unresolved'), 3, 'precondition: only 07-27 has rows');

    assert.equal(await count('unresolved_current'), 0,
      "today (07-28, no unresolved) must show empty, not fall back to 07-27's stale rows");
  });
});

/**
 * The export overwrites the committed Parquet wholesale, so a database holding
 * fewer days than the file on disk will silently delete history that cannot be
 * re-fetched. These pin the refusal.
 */
describe('export history guard', () => {
  const DB2 = `test-guard-${process.pid}.duckdb`;
  const DIR2 = path.join(GOLD, `test-guard-parquet-${process.pid}`);
  let c2: DuckDBConnection;

  before(async () => {
    c2 = await openDb(DB2);
    await fs.mkdir(DIR2, { recursive: true });
    for (const d of ['2026-08-01', '2026-08-02', '2026-08-03']) {
      await replaceDay(c2, 'adp_snapshots', ADP_COLS, adpRows(d, 5), d);
    }
    await exportParquet(c2, 'adp_snapshots', DIR2);
  });

  after(async () => {
    await fs.rm(path.join(GOLD, DB2), { force: true });
    await fs.rm(DIR2, { recursive: true, force: true });
  });

  test('first ever export has nothing to lose', async () => {
    await assert.doesNotReject(() => assertNoHistoryLoss(c2, 'ecr_snapshots', DIR2));
  });

  test('exporting the same days again is fine', async () => {
    await assert.doesNotReject(() => assertNoHistoryLoss(c2, 'adp_snapshots', DIR2));
  });

  test('adding a day is fine — the guard blocks loss, not growth', async () => {
    await replaceDay(c2, 'adp_snapshots', ADP_COLS, adpRows('2026-08-04', 5), '2026-08-04');
    await assert.doesNotReject(() => exportParquet(c2, 'adp_snapshots', DIR2));
  });

  test('rewriting a day with different rows is fine', async () => {
    // Re-running today's ingest legitimately replaces the day.
    await replaceDay(c2, 'adp_snapshots', ADP_COLS, adpRows('2026-08-04', 40), '2026-08-04');
    await assert.doesNotReject(() => exportParquet(c2, 'adp_snapshots', DIR2));
  });

  test('a DB missing a committed day REFUSES to export (the data-loss bug)', async () => {
    // Exactly the local-vs-CI divergence: the DB never picked up 08-02, so the
    // export would drop it from the committed history forever.
    await c2.run("DELETE FROM adp_snapshots WHERE captured_at = DATE '2026-08-02'");
    await assert.rejects(
      () => exportParquet(c2, 'adp_snapshots', DIR2),
      /refusing to export.*2026-08-02/s,
    );
  });

  test('the refusal names every missing day, not just the first', async () => {
    await c2.run("DELETE FROM adp_snapshots WHERE captured_at = DATE '2026-08-03'");
    await assert.rejects(
      () => exportParquet(c2, 'adp_snapshots', DIR2),
      (e: Error) =>
        /2026-08-02/.test(e.message) && /2026-08-03/.test(e.message) && /2 capture date/.test(e.message),
    );
  });

  test('a refused export leaves the file on disk untouched', async () => {
    // The whole point: the committed history must survive the failure.
    const check = await c2.runAndReadAll(
      `SELECT count(DISTINCT captured_at) AS n FROM read_parquet('${path.join(DIR2, 'adp_snapshots.parquet')}')`,
    );
    assert.equal(Number((check.getRowObjectsJson() as { n: string }[])[0]!.n), 4,
      'the parquet must still hold all 4 days after two refused exports');
  });

  test('a legitimately EMPTY day is not treated as a deleted day', async () => {
    // Regression, found running the Yahoo ingest: resolution hit 100%, so
    // `unresolved` had zero rows for the date. Zero rows there is the GOAL, but
    // the guard saw the date missing from the table and refused to export,
    // after five other files had already been written.
    //
    // knownDates carries the dates the run actually holds (from the anchor
    // table), so "empty for this table" stops looking like "gone entirely".
    // Earlier tests here left days deleted; start from a table matching the file.
    for (const d of ['2026-08-01', '2026-08-02', '2026-08-03', '2026-08-04']) {
      await replaceDay(c2, 'adp_snapshots', ADP_COLS, adpRows(d, 5), d);
    }
    await assert.doesNotReject(() => assertNoHistoryLoss(c2, 'adp_snapshots', DIR2),
      'precondition: table and file agree');

    await c2.run("DELETE FROM adp_snapshots WHERE captured_at = DATE '2026-08-04'");
    await assert.rejects(
      () => assertNoHistoryLoss(c2, 'adp_snapshots', DIR2),
      /refusing to export.*2026-08-04/s,
      'precondition: without knownDates an empty date reads as lost',
    );
    await assert.doesNotReject(
      () => assertNoHistoryLoss(c2, 'adp_snapshots', DIR2, { knownDates: ['2026-08-04'] }),
      'a date the run knows about is legitimately empty, not deleted',
    );
    await replaceDay(c2, 'adp_snapshots', ADP_COLS, adpRows('2026-08-04', 5), '2026-08-04');
  });

  test('assertExportSafe checks every table before any is written', async () => {
    // The atomicity half of the same bug: exportParquet guards itself, but in a
    // loop a late refusal leaves earlier files already overwritten.
    await c2.run("DELETE FROM adp_snapshots WHERE captured_at = DATE '2026-08-01'");
    await assert.rejects(
      () => assertExportSafe(c2, ['adp_snapshots'], DIR2),
      /refusing to export.*2026-08-01/s,
    );
    await replaceDay(c2, 'adp_snapshots', ADP_COLS, adpRows('2026-08-01', 5), '2026-08-01');
    await assert.doesNotReject(() => assertExportSafe(c2, ['adp_snapshots'], DIR2));
  });

  test('dimension tables can opt out — their single day moves forward by design', async () => {
    await replaceAll(c2, 'players', PLAYER_COLS, playerRows('2026-08-01', 5));
    await exportParquet(c2, 'players', DIR2, { guardHistory: false });
    await replaceAll(c2, 'players', PLAYER_COLS, playerRows('2026-08-09', 5));
    await assert.doesNotReject(
      () => exportParquet(c2, 'players', DIR2, { guardHistory: false }),
      'players is current-state, so replacing its captured_at is not history loss',
    );
    // And it WOULD be blocked if someone forgot the opt-out — proving the
    // default is the safe one. (The file now holds 08-09; move the table to
    // 08-10 so the guarded export actually has a day to lose.)
    await replaceAll(c2, 'players', PLAYER_COLS, playerRows('2026-08-10', 5));
    await assert.rejects(() => exportParquet(c2, 'players', DIR2), /refusing to export/);
  });
});

/**
 * Read-only opening is what lets two commands run at the same time. Before it,
 * every command took DuckDB's exclusive write lock — including the five that
 * only SELECT — so a second terminal got a driver error naming a PID and a
 * lock file.
 */
describe('openDb readonly', () => {
  const RO_DB = `test-ro-${process.pid}.duckdb`;
  const roPath = path.join(GOLD, RO_DB);

  before(async () => {
    // Build it read-write first: readonly deliberately cannot create a schema.
    const rw = await openDb(RO_DB);
    await replaceDay(rw, 'adp_snapshots', [...ADP_COLS], adpRows('2026-08-01', 5), '2026-08-01');
    await rw.disconnectSync();
  });

  after(async () => {
    await fs.rm(roPath, { force: true });
    await fs.rm(`${roPath}.wal`, { force: true });
  });

  test('reads an existing database', async () => {
    const c = await openDb(RO_DB, { readonly: true });
    const n = Number(
      ((await c.runAndReadAll('SELECT count(*) AS n FROM adp_snapshots')).getRowObjectsJson() as { n: string }[])[0]!.n,
    );
    assert.equal(n, 5);
    await c.disconnectSync();
  });

  test('the schema views exist without being recreated', async () => {
    // readonly skips schema.sql entirely, so the views have to already be
    // there from the ingest that built the file.
    const c = await openDb(RO_DB, { readonly: true });
    await assert.doesNotReject(() => c.runAndReadAll('SELECT count(*) FROM adp_current'));
    await c.disconnectSync();
  });

  test('several readonly connections coexist — the point of the mode', async () => {
    const conns = await Promise.all([
      openDb(RO_DB, { readonly: true }),
      openDb(RO_DB, { readonly: true }),
      openDb(RO_DB, { readonly: true }),
    ]);
    const counts = await Promise.all(
      conns.map(async (c) =>
        Number(
          ((await c.runAndReadAll('SELECT count(*) AS n FROM adp_snapshots')).getRowObjectsJson() as { n: string }[])[0]!.n,
        ),
      ),
    );
    assert.deepEqual(counts, [5, 5, 5]);
    for (const c of conns) await c.disconnectSync();
  });

  test('a readonly connection cannot write', async () => {
    const c = await openDb(RO_DB, { readonly: true });
    await assert.rejects(() => c.run(`INSERT INTO adp_snapshots (player_id) VALUES ('nope')`));
    await c.disconnectSync();
  });
});
