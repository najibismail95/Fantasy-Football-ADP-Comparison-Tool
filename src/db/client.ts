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

/** Mirror a table to Parquet so the app can query it over HTTPS without a server. */
export async function exportParquet(conn: DuckDBConnection, table: string, dir: string) {
  await fs.mkdir(dir, { recursive: true });
  await conn.run(
    `COPY (SELECT * FROM ${table}) TO '${path.join(dir, `${table}.parquet`)}' (FORMAT PARQUET)`,
  );
}

/**
 * Reload prior history from the committed Parquet into an empty database.
 *
 * CI runners are ephemeral: the .duckdb file is gitignored and does not exist
 * on a fresh machine, but data/silver/*.parquet is committed. Without this
 * step the run would write a single day and then export it over the whole
 * accumulated history — silently destroying a time series that cannot be
 * rebuilt, since nobody publishes historical daily ADP.
 *
 * INSERT ... BY NAME matches columns by name, so adding a column to the schema
 * later doesn't break loading older Parquet (new columns come back NULL).
 */
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
    const existing = await conn.runAndReadAll(`SELECT count(*) AS n FROM ${table}`);
    const rows = existing.getRowObjectsJson() as { n: string | number }[];
    if (Number(rows[0]?.n ?? 0) > 0) continue; // already populated — don't double-load

    await conn.run(`INSERT INTO ${table} BY NAME SELECT * FROM read_parquet('${file}')`);
    const after = await conn.runAndReadAll(`SELECT count(*) AS n FROM ${table}`);
    loaded[table] = Number((after.getRowObjectsJson() as { n: string | number }[])[0]?.n ?? 0);
  }
  return loaded;
}
