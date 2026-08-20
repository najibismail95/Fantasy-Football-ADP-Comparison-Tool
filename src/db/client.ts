import fs from 'node:fs/promises';
import path from 'node:path';
import { DuckDBInstance, type DuckDBConnection } from '@duckdb/node-api';
import { GOLD } from '../config.js';

export async function openDb(file = 'fantasy.duckdb'): Promise<DuckDBConnection> {
  await fs.mkdir(GOLD, { recursive: true });
  const instance = await DuckDBInstance.create(path.join(GOLD, file));
  const conn = await instance.connect();
  const schema = await fs.readFile(
    path.join(path.dirname(new URL(import.meta.url).pathname), 'schema.sql'),
    'utf8',
  );
  // Strip `--` line comments BEFORE splitting on ';' — prose in a comment can
  // contain a semicolon and would otherwise be executed as a statement.
  const stripped = schema.replace(/--[^\n]*/g, '');
  for (const stmt of stripped.split(';')) {
    if (stmt.trim()) await conn.run(stmt);
  }
  return conn;
}

const sql = (v: unknown): string => {
  if (v === null || v === undefined) return 'NULL';
  if (typeof v === 'number') return Number.isFinite(v) ? String(v) : 'NULL';
  if (typeof v === 'boolean') return v ? 'TRUE' : 'FALSE';
  return `'${String(v).replace(/'/g, "''")}'`;
};

/**
 * Idempotent per (table, captured_at): re-running a day's ingest replaces that
 * day rather than duplicating it, so the append-only history stays clean.
 */
export async function replaceDay(
  conn: DuckDBConnection,
  table: string,
  columns: readonly string[],
  rows: readonly Record<string, unknown>[],
  captureDate: string,
): Promise<number> {
  await conn.run(`DELETE FROM ${table} WHERE captured_at = DATE '${captureDate}'`);
  if (!rows.length) return 0;

  const CHUNK = 500;
  for (let i = 0; i < rows.length; i += CHUNK) {
    const values = rows
      .slice(i, i + CHUNK)
      .map((r) => `(${columns.map((c) => sql(r[c])).join(',')})`)
      .join(',');
    await conn.run(`INSERT INTO ${table} (${columns.join(',')}) VALUES ${values}`);
  }
  return rows.length;
}

/**
 * Wholesale replace, for DIMENSION tables rather than time series.
 *
 * `players` carries a PRIMARY KEY on player_id, so it cannot be written with
 * the day-partitioned semantics of replaceDay(): on a new date the DELETE
 * matches nothing and the INSERT collides with yesterday's rows. It is also
 * rebuilt in full from Sleeper on every run, so per-day history would be 4,373
 * near-identical rows a day for no benefit.
 *
 * Trade-off: this keeps only current state, so mid-season team changes are not
 * retained. If that history is wanted later, give the table a composite
 * (player_id, captured_at) key instead of replacing it.
 */
export async function replaceAll(
  conn: DuckDBConnection,
  table: string,
  columns: readonly string[],
  rows: readonly Record<string, unknown>[],
): Promise<number> {
  await conn.run(`DELETE FROM ${table}`);
  if (!rows.length) return 0;
  const CHUNK = 500;
  for (let i = 0; i < rows.length; i += CHUNK) {
    const values = rows
      .slice(i, i + CHUNK)
      .map((r) => `(${columns.map((c) => sql(r[c])).join(',')})`)
      .join(',');
    await conn.run(`INSERT INTO ${table} (${columns.join(',')}) VALUES ${values}`);
  }
  return rows.length;
}

/**
 * Refuses to overwrite a Parquet export that would DROP capture dates.
 *
 * The export is a wholesale overwrite, so whatever is in the database at that
 * moment becomes the entire committed history. That is only safe while the
 * database is a superset of what is already on disk — and nothing guarantees
 * it is. A local run whose DB never picked up the days CI committed will
 * happily export a shorter series, and committing it deletes those days for
 * good. Daily ADP is a snapshot: no source will sell it back to us.
 *
 * So the day set is treated as append-only. Days may be added or rewritten;
 * they may never vanish.
 *
 * Deliberately NOT checked: row counts within a day. Those legitimately move
 * (Sleeper's coverage went 311 -> 804 mid-season, and a source outage can push
 * the other way), so guarding them would fire on healthy data.
 *
 * ⚠️ `knownDates` distinguishes "this date vanished" from "this date is
 * legitimately empty", which look identical when you only inspect one table. A
 * zero-row day is not automatically suspicious: `unresolved` is EMPTY on a run
 * where every player matched, which is the target state, not a failure. This
 * fired on exactly that — the Yahoo switch took resolution to 100%, so
 * unresolved had no rows for the day, and the guard read that as the day being
 * deleted. Pass the dates the run actually knows about (from the anchor table)
 * and a date is only flagged when the database has no record of it anywhere.
 */
export async function assertNoHistoryLoss(
  conn: DuckDBConnection,
  table: string,
  dir: string,
  { knownDates = [] as readonly string[] } = {},
): Promise<void> {
  const file = path.join(dir, `${table}.parquet`);
  try {
    await fs.access(file);
  } catch {
    return; // nothing on disk yet, so nothing to lose
  }

  const missing = await conn.runAndReadAll(
    `SELECT DISTINCT p.captured_at AS d
       FROM read_parquet('${file}') p
      WHERE NOT EXISTS (SELECT 1 FROM ${table} t WHERE t.captured_at = p.captured_at)
      ORDER BY 1`,
  );
  const known = new Set(knownDates);
  const days = (missing.getRowObjectsJson() as { d: string }[])
    .map((r) => r.d)
    .filter((d) => !known.has(d));
  if (days.length === 0) return;

  const shown = days.slice(0, 8).join(', ') + (days.length > 8 ? `, +${days.length - 8} more` : '');
  throw new Error(
    `[${table}] refusing to export: ${days.length} capture date(s) would be deleted (${shown}). ` +
      `The Parquet on disk holds days this database does not, and the export overwrites it wholesale. ` +
      `Daily ADP cannot be re-fetched, so this is permanent. ` +
      `Most likely this database is stale — it missed days that CI captured. ` +
      `Re-run the ingest: hydrateFromParquet merges any missing dates back in before the export. ` +
      `If it still fails, the Parquet holds dates that no longer exist anywhere else — investigate before forcing.`,
  );
}

/**
 * Mirror a table to Parquet so the app can query it over HTTPS without a server.
 *
 * Guarded by default — see assertNoHistoryLoss. Opting out is only correct for
 * dimension tables, whose single captured_at moves forward on every run.
 */
export async function exportParquet(
  conn: DuckDBConnection,
  table: string,
  dir: string,
  { guardHistory = true, knownDates = [] as readonly string[] } = {},
) {
  if (guardHistory) await assertNoHistoryLoss(conn, table, dir, { knownDates });
  await fs.mkdir(dir, { recursive: true });
  await conn.run(
    `COPY (SELECT * FROM ${table}) TO '${path.join(dir, `${table}.parquet`)}' (FORMAT PARQUET)`,
  );
}

/**
 * Check every table BEFORE writing any of them.
 *
 * exportParquet guards itself, but the export is a loop: a guard firing on the
 * last table leaves the earlier ones already overwritten. That happened —
 * `unresolved` tripped after five files had been rewritten, leaving the set
 * half-updated. Checking up front makes a refusal leave the committed Parquet
 * exactly as it was, which is the whole point of refusing.
 *
 * The per-export guard stays as a backstop for anything calling exportParquet
 * directly.
 */
export async function assertExportSafe(
  conn: DuckDBConnection,
  tables: readonly string[],
  dir: string,
  { knownDates = [] as readonly string[] } = {},
): Promise<void> {
  for (const t of tables) await assertNoHistoryLoss(conn, t, dir, { knownDates });
}

/**
 * Merge prior history from the committed Parquet into the database, one capture
 * date at a time. Returns the number of rows ADDED per table.
 *
 * CI runners are ephemeral: the .duckdb file is gitignored and does not exist
 * on a fresh machine, but data/silver/*.parquet is committed. Without this
 * step the run would write a single day and then export it over the whole
 * accumulated history — silently destroying a time series that cannot be
 * rebuilt, since nobody publishes historical daily ADP.
 *
 * ⚠️ This used to skip the load entirely whenever the table already held rows,
 * which was only ever safe on CI. A laptop keeps its .duckdb between runs, so
 * the days CI committed while you weren't running never arrived — and since
 * exportParquet overwrites wholesale, the next local ingest wrote a SHORTER
 * history over the committed one. Four days (2026-08-08/09/11/12) were one
 * `git add data/silver` away from being deleted that way.
 *
 * Merging per date fixes the cause; assertNoHistoryLoss above is the backstop
 * for whatever causes it next.
 *
 * Days already in the table are left alone rather than replaced: the table is
 * the fresher copy (today's ingest has already written it), and replaceDay owns
 * rewriting a date.
 *
 * INSERT ... BY NAME matches columns by name, so adding a column to the schema
 * later doesn't break loading older Parquet (new columns come back NULL).
 */
/**
 * Load a REFERENCE table from Parquet, but only when it is empty.
 *
 * hydrateFromParquet above is the wrong tool for a table that isn't keyed by
 * capture date. Its merge is "add every date I don't already have", which is
 * exactly right for a time series and actively wrong for reference data: a
 * laptop holding sos_ratings computed on the 19th, hydrating a Parquet CI
 * computed on the 20th, would keep BOTH — two complete rating sets differing
 * only in computed_at, silently doubling every row the next query touches.
 *
 * Empty-or-nothing is the whole contract. A populated reference table is
 * already authoritative; refreshing it is replaceAll's job, not hydration's.
 */
export async function hydrateReference(
  conn: DuckDBConnection,
  table: string,
  dir: string,
): Promise<number> {
  const file = path.join(dir, `${table}.parquet`);
  try {
    await fs.access(file);
  } catch {
    return 0; // never exported yet
  }

  const have = await conn.runAndReadAll(`SELECT count(*) AS n FROM ${table}`);
  if (Number((have.getRowObjectsJson() as { n: string | number }[])[0]?.n ?? 0) > 0) return 0;

  await conn.run(`INSERT INTO ${table} BY NAME SELECT * FROM read_parquet('${file}')`);
  const after = await conn.runAndReadAll(`SELECT count(*) AS n FROM ${table}`);
  return Number((after.getRowObjectsJson() as { n: string | number }[])[0]?.n ?? 0);
}

export async function hydrateFromParquet(
  conn: DuckDBConnection,
  tables: readonly string[],
  dir: string,
): Promise<Record<string, number>> {
  const loaded: Record<string, number> = {};
  for (const table of tables) {
    const file = path.join(dir, `${table}.parquet`);
    try {
      await fs.access(file);
    } catch {
      continue; // first ever run for this table
    }

    // Read the day set first rather than referencing the target table inside
    // the INSERT's own SELECT, so there is no question about self-reference
    // semantics mid-statement.
    const have = await conn.runAndReadAll(`SELECT DISTINCT captured_at AS d FROM ${table}`);
    const days = (have.getRowObjectsJson() as { d: string }[]).map((r) => r.d);
    const exclude = days.length
      ? `WHERE captured_at NOT IN (${days.map((d) => `DATE '${d}'`).join(',')})`
      : '';

    const before = await conn.runAndReadAll(`SELECT count(*) AS n FROM ${table}`);
    const n0 = Number((before.getRowObjectsJson() as { n: string | number }[])[0]?.n ?? 0);

    await conn.run(
      `INSERT INTO ${table} BY NAME SELECT * FROM read_parquet('${file}') ${exclude}`,
    );

    const after = await conn.runAndReadAll(`SELECT count(*) AS n FROM ${table}`);
    const added = Number((after.getRowObjectsJson() as { n: string | number }[])[0]?.n ?? 0) - n0;
    if (added > 0) loaded[table] = added;
  }
  return loaded;
}
