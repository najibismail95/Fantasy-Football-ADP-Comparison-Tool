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

/** Mirror a table to Parquet so the app can query it over HTTPS without a server. */
export async function exportParquet(conn: DuckDBConnection, table: string, dir: string) {
  await fs.mkdir(dir, { recursive: true });
  await conn.run(
    `COPY (SELECT * FROM ${table}) TO '${path.join(dir, `${table}.parquet`)}' (FORMAT PARQUET)`,
  );
}
