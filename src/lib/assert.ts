/**
 * Guards against the failure this project has already hit twice:
 * a RANK series being ingested into an ADP column.
 *
 *  - beatadp's "ESPN" column is ESPN's draft rank, not its ADP  (PLAN.md §0.3)
 *  - ESPN's draftRanksByRankType.SUPERFLEX is a rank            (FORMATS.md §1)
 *
 * A real averaged ADP is almost never a whole number. A rank always is.
 *
 * ⚠️ Only the TOP N values by draft position are checked, not the whole
 * series. Checking everything produced a false positive that broke the daily
 * ingest on 2026-08-14: as draft season ramped up, Sleeper expanded ADP
 * coverage from 311 to 804 players, and the ~490 new ones were nearly all
 * deep guys appearing in a handful of drafts. A player taken once at pick 440
 * has an ADP of exactly 440.0 — legitimate data, but integer, which dragged
 * the overall non-integer ratio from ~87% to 55% and tripped the guard.
 *
 * Scoping to the top of the board is also strictly MORE sensitive to the
 * failure mode being guarded against: if a rank series were swapped in, picks
 * 1-300 would read 1, 2, 3, 4... Measured on the same day this fired, the top
 * 300 were 89.7% non-integer (healthy) while a simulated rank series scored
 * 0%. The deep tail carries no signal about column swaps, only sample-size
 * noise, so including it only adds false positives.
 */
export function assertLooksLikeAdp(
  label: string,
  values: readonly number[],
  { minFractionNonInteger = 0.8, checkTopN = 300 } = {},
): void {
  const finite = values.filter((v) => Number.isFinite(v));
  if (finite.length < 20) return; // too small to judge; don't block the run
  // Ascending = earliest picks first; those are the ones a swapped-in rank
  // column would corrupt most visibly.
  const scoped = [...finite].sort((a, b) => a - b).slice(0, checkTopN);
  const nonInt = scoped.filter((v) => !Number.isInteger(v)).length;
  const ratio = nonInt / scoped.length;
  if (ratio < minFractionNonInteger) {
    throw new Error(
      `[${label}] looks like RANK data, not ADP: only ${(ratio * 100).toFixed(0)}% ` +
        `of the top ${scoped.length} values (of ${finite.length}) are non-integer ` +
        `(expected >=${minFractionNonInteger * 100}%). ` +
        `Refusing to write it into an ADP column.`,
    );
  }
}

/**
 * Detects a CENSORED ADP series — values piling up against a ceiling.
 *
 * ESPN ranks a fixed pool (~348 players), so everyone who would really go
 * undrafted still receives an ADP just under its maximum. Measured: 179 of 348
 * ESPN values (51%) sit between picks 165 and 171, versus ~1.5 players per pick
 * in the range below. Those numbers mean "very late", not an average.
 *
 * This is invisible to assertLooksLikeAdp — the values are still decimals. But
 * differencing them against an uncensored source manufactures fake arbitrage of
 * 20+ picks, so the censoring point has to be known and excluded.
 *
 * Returns the pick beyond which the series is censored, or null if it is clean.
 */
export function detectCensoring(
  values: readonly number[],
  { binWidth = 5, pileUpFactor = 5 } = {},
): number | null {
  const finite = values.filter(Number.isFinite).sort((a, b) => a - b);
  if (finite.length < 50) return null;
  const max = finite.at(-1)!;
  const min = finite[0]!;
  const baselinePerPick = finite.length / Math.max(max - min, 1);

  // Walk down from the top; find where density stops exceeding the baseline.
  let censorAt: number | null = null;
  for (let hi = max; hi > min + binWidth; hi -= binWidth) {
    const inBin = finite.filter((v) => v > hi - binWidth && v <= hi).length;
    if (inBin / binWidth > baselinePerPick * pileUpFactor) censorAt = hi - binWidth;
    else if (censorAt !== null) break;
  }
  return censorAt;
}

/** FantasyPros returns numbers as JSON strings ("2.07"). Coerce explicitly. */
export function num(v: unknown): number | null {
  if (v === null || v === undefined || v === '') return null;
  const n = typeof v === 'number' ? v : Number(String(v));
  return Number.isFinite(n) ? n : null;
}
