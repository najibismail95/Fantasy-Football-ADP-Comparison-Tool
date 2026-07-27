import fs from 'node:fs/promises';
import path from 'node:path';
import zlib from 'node:zlib';
import { promisify } from 'node:util';
import { BRONZE } from '../config.js';

const gzip = promisify(zlib.gzip);

/**
 * Persist the raw payload before parsing anything.
 *
 * Every source here is undocumented and drifts without notice. Keeping bronze
 * means a schema change costs a reparse, not a re-collection — and during draft
 * season a lost day of ADP cannot be backfilled. See PLAN.md §4.
 */
export async function writeBronze(
  source: string,
  captureDate: string,
  body: string,
  ext = 'json',
): Promise<string> {
  const dir = path.join(BRONZE, source, captureDate);
  await fs.mkdir(dir, { recursive: true });
  const file = path.join(dir, `payload.${ext}.gz`);
  await fs.writeFile(file, await gzip(body));
  return file;
}

export const today = (): string => new Date().toISOString().slice(0, 10);
