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

/** FantasyPros returns numbers as JSON strings ("2.07"). Coerce explicitly. */
export function num(v: unknown): number | null {
  if (v === null || v === undefined || v === '') return null;
  const n = typeof v === 'number' ? v : Number(String(v));
  return Number.isFinite(n) ? n : null;
}
