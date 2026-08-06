import { test, describe, before, after } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { GOLD } from '../config.js';
import { exportParquet, hydrateFromParquet, openDb, replaceAll, replaceDay } from './client.js';
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

  test('hydrate does not double-load an already-populated table', async () => {
    const before_ = await count('adp_snapshots');
    const loaded = await hydrateFromParquet(conn, ['adp_snapshots'], TMP_PARQUET);
    assert.deepEqual(loaded, {}, 'a populated table must be skipped');
    assert.equal(await count('adp_snapshots'), before_);
  });

  test('the *_current view exposes one day, the base table exposes all', async () => {
    // Regression: unscoped queries silently doubled counts and fanned joins out
    // once a second day landed.
    assert.equal(await count('adp_snapshots'), 20, 'base table = full history');
    assert.equal(await count('adp_current'), 10, 'view = latest snapshot only');
  });
});
