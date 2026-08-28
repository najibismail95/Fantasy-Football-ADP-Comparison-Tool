import path from 'node:path';
import fs from 'node:fs/promises';
import { DuckDBInstance } from '@duckdb/node-api';
import { SILVER } from '../config.js';
import { today } from '../lib/bronze.js';

/**
 * Assert that today's ADP actually reached the committed history.
 * `npm run verify:capture`
 *
 * The daily workflow could already tell you a run CRASHED — the failure step
 * opens an issue on `if: failure()`. It could not tell you a run finished
 * cleanly and captured nothing, because that path exits 0:
 *
 *     if git diff --staged --quiet; then
 *       echo "No change in the Parquet exports — nothing to commit."
 *       exit 0
 *     fi
 *
 * Green run, no commit, no alarm — indistinguishable in the Actions tab from
 * a green run that saved the day properly. Daily ADP cannot be re-fetched, so
 * that is the one failure mode that costs data permanently while looking fine.
 *
 * ⚠️ The question deliberately is NOT "did any file change?". Nothing changing
 * is legitimate: trigger the workflow twice in a row and the second run finds
 * identical data and correctly commits nothing. Failing on that would cry wolf
 * on every double-run, and an alarm that fires on healthy days is one you learn
 * to ignore — which is how 2026-08-14 was lost in the first place.
 *
 * "Is today's date present in the history?" separates the two cleanly. The
 * re-run still has today's date (the first run wrote it) and passes quietly;
 * a run that captured nothing does not, and fails.
 *
 * Reads the PARQUET rather than the DuckDB file on purpose. data/silver is
 * what gets committed and is the only copy that survives an ephemeral runner
 * — the .duckdb is gitignored and rebuilt. Checking the database would verify
 * a copy that is about to be thrown away.
 *
 * adp_snapshots is the anchor: ADP is the series with no upstream archive, so
 * it is the one whose absence is unrecoverable.
 */

const file = path.join(SILVER, 'adp_snapshots.parquet');
const date = today();

try {
  await fs.access(file);
} catch {
  console.error(
    `\nno capture to verify: ${file} does not exist.\n` +
      `Expected the ingest to have exported it. Run \`npm run ingest\`.\n`,
  );
  process.exit(1);
}

const instance = await DuckDBInstance.create(':memory:');
const conn = await instance.connect();

const rows = (
  await conn.runAndReadAll(
    `SELECT count(*) AS n FROM read_parquet('${file}') WHERE captured_at = DATE '${date}'`,
  )
).getRowObjectsJson() as { n: string | number }[];
const n = Number(rows[0]?.n ?? 0);

if (n > 0) {
  console.log(`capture verified: ${n} ADP rows for ${date} in the committed history.`);
  process.exit(0);
}

// Show what IS there — the difference between "yesterday is the latest" (the
// run did nothing) and "today is missing but last week is too" (something
// bigger is wrong) changes where you start looking.
const latest = (
  await conn.runAndReadAll(
    `SELECT max(captured_at) AS d, count(DISTINCT captured_at) AS days
       FROM read_parquet('${file}')`,
  )
).getRowObjectsJson() as { d: string | null; days: string | number }[];

console.error(
  `\nNO ADP CAPTURED FOR ${date}.\n\n` +
    `The run finished without writing today into data/silver/adp_snapshots.parquet.\n` +
    `Latest date present: ${latest[0]?.d ?? 'none'} (${latest[0]?.days ?? 0} day(s) total).\n\n` +
    `Daily ADP cannot be backfilled — no source publishes it historically, so\n` +
    `today is lost unless a run captures it before the sources move on.\n` +
    `Check the ingest step's output above: a source returning an empty payload\n` +
    `is the usual cause, and the bronze artifact on this run has the raw bodies.\n`,
);
process.exit(1);
