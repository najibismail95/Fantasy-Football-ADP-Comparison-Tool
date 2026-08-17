/**
 * Output helpers so a script can render either for a terminal or for GitHub.
 *
 * `--markdown` swaps console.table's box-drawing for real Markdown tables and
 * `=== headers ===` for `##` headings. The daily workflow uses it twice: once
 * piped into $GITHUB_STEP_SUMMARY (a rendered page on every run) and once
 * committed as REPORT.md.
 *
 * A fenced code block of the raw terminal output would have been less work,
 * but Markdown tables sort, wrap, and stay readable on a phone — and the
 * whole point of publishing this is that someone can read it without cloning
 * the repo.
 */

export const MARKDOWN = process.argv.includes('--markdown');

/**
 * Section header: `=== x ===` in a terminal, `## x` in Markdown.
 *
 * `level` only affects Markdown — a terminal has no heading hierarchy, so
 * nesting there would just be noise.
 */
export function heading(text: string, level = 2): void {
  console.log(MARKDOWN ? `\n${'#'.repeat(level)} ${text}\n` : `=== ${text} ===`);
}

/** Plain line in a terminal; italicised note in Markdown. */
export function note(text: string): void {
  console.log(MARKDOWN ? `\n_${text}_\n` : text);
}

/**
 * DuckDB hands back BIGINT counts as strings and NULLs as null; both need to
 * survive into a cell without printing "null" or breaking the pipe-delimited
 * row. Pipes inside a value are escaped, since one stray `|` silently shifts
 * every column after it.
 */
const cell = (v: unknown): string =>
  v === null || v === undefined ? '' : String(v).replace(/\|/g, '\\|');

export function table(rows: readonly Record<string, unknown>[]): void {
  if (!MARKDOWN) {
    console.table(rows);
    return;
  }
  if (!rows.length) {
    console.log('_(no rows)_\n');
    return;
  }
  // Union of keys, not just the first row's — a row with a missing optional
  // column would otherwise silently drop it from the header for everyone.
  const cols = [...new Set(rows.flatMap((r) => Object.keys(r)))];
  console.log(`| ${cols.join(' | ')} |`);
  console.log(`| ${cols.map(() => '---').join(' | ')} |`);
  for (const r of rows) console.log(`| ${cols.map((c) => cell(r[c])).join(' | ')} |`);
  console.log('');
}
