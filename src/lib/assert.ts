/**
 * Guards against the failure this project has already hit twice:
 * a RANK series being ingested into an ADP column.
 *
 *  - beatadp's "ESPN" column is ESPN's draft rank, not its ADP  (PLAN.md §0.3)
 *  - ESPN's draftRanksByRankType.SUPERFLEX is a rank            (FORMATS.md §1)
 *
 * A real averaged ADP is almost never a whole number. A rank always is.
 */
export function assertLooksLikeAdp(
  label: string,
  values: readonly number[],
  { minFractionNonInteger = 0.8 } = {},
): void {
  const finite = values.filter((v) => Number.isFinite(v));
  if (finite.length < 20) return; // too small to judge; don't block the run
  const nonInt = finite.filter((v) => !Number.isInteger(v)).length;
  const ratio = nonInt / finite.length;
  if (ratio < minFractionNonInteger) {
    throw new Error(
      `[${label}] looks like RANK data, not ADP: only ${(ratio * 100).toFixed(0)}% ` +
        `of ${finite.length} values are non-integer (expected >=${minFractionNonInteger * 100}%). ` +
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
