export type SnapshotRow = { playerId: string; pos: string; adp: number };

export type MomentumResult = {
  playerId: string;
  pos: string;
  adpThen: number;
  adpNow: number;
  /** (adpThen - adpNow) / teams. Positive = rising (an earlier pick now,
   *  i.e. cheaper picks got MORE expensive); negative = falling. A plain
   *  ratio, not roundOf — roundOf's "+1" offset answers "which round is pick
   *  N in", a different question from "how many rounds did this MOVE", the
   *  same reasoning report.ts's arbitrage `rounds` column already uses for
   *  its own deviation-to-rounds conversion. */
  moveRounds: number;
};

/**
 * Day-over-day ADP movement for ONE source. Diffing a source against ITSELF
 * across two dates, rather than against a different source, is what makes
 * this safe without the leave-one-out correction report.ts's arbitrage table
 * needs: comparing ESPN-then to ESPN-now holds scoring, league-size
 * assumptions, roster-construction assumptions, and population all constant
 * — the same confounds PLAN.md §2 lists for CROSS-source diffs (points 1-4)
 * don't apply here, because nothing about the source's own methodology
 * changed between the two snapshots.
 *
 * Inner-joins on playerId: a player missing from EITHER snapshot is dropped,
 * not scored. This is the guard against a source's pool simply growing
 * between the two dates (Sleeper's ADP pool grew from ~240 to ~1150 rows over
 * the 2026 preseason as the season approached) — a player who wasn't tracked
 * yet in `then` isn't "rising from nothing," he just wasn't covered, and
 * treating that as infinite movement would misreport pool growth as a market
 * signal. Falls out of the join for free; no source-specific case needed.
 *
 * Callers are responsible for censoring cleanup (dropping each date's own
 * pileup-at-the-ceiling values via detectCensoring) BEFORE calling this —
 * same division of labor as computeVorp/computeValueScore, which don't know
 * about ADP censoring either. A ceiling detected on one date must never be
 * applied to another date's raw values, since the pileup point can shift day
 * to day as the source's pool changes.
 */
export function computeMomentum(
  then: readonly SnapshotRow[],
  now: readonly SnapshotRow[],
  teams: number,
): MomentumResult[] {
  const thenByPlayer = new Map(then.map((r) => [r.playerId, r]));
  const out: MomentumResult[] = [];
  for (const n of now) {
    const t = thenByPlayer.get(n.playerId);
    if (!t) continue;
    out.push({
      playerId: n.playerId,
      pos: n.pos,
      adpThen: t.adp,
      adpNow: n.adp,
      moveRounds: (t.adp - n.adp) / teams,
    });
  }
  return out;
}

export type MomentumSelection = {
  /** The biggest single-source |moveRounds| across the player's available
   *  sources — what decides Rising vs Falling and the sort position. */
  bestAbsMove: number;
  bestSign: number;
  /** How many of the player's available sources independently show
   *  softRounds+ movement in bestSign's direction. Always >= 1 (the source
   *  that produced bestAbsMove trivially agrees with itself). */
  agreeCount: number;
};

/**
 * Whether a player's cross-source momentum is worth showing at all, and how
 * to rank it if so — the pure, testable core of rising.ts's selection logic.
 * Extracted here (rather than left inline in the script) after several
 * regression-driven rewrites accumulated with zero test coverage: nothing
 * would have caught a reintroduction of any of the bugs below by hand.
 *
 * Returns null (exclude the player entirely) when:
 *  - `requiredSource` has no data for him. In rising.ts this is ESPN — the
 *    one source with a genuinely continuous, stable history. Regression
 *    (2026-08-24): Chris Rodriguez/Tank Bigsby/Jayden Higgins/Chig Okonkwo
 *    all showed real Sleeper moves with ESPN not ranking them at all; "2 of
 *    3 sources present" let them through even though neither present source
 *    was really vouching for the move the way ESPN would.
 *  - Fewer than 2 sources have data for him at all. A single source moving
 *    alone has nobody else to check it against, which is a STRONGER reason
 *    to distrust it than mere disagreement-with-a-second-source, not a
 *    weaker one — same "don't trust one source in isolation" reasoning as
 *    buildConsensusAdp's 2-source ADP minimum and the value board's
 *    2-projection-source rule.
 *  - Even the biggest available move doesn't clear `softRounds` — below the
 *    noise floor regardless of source count.
 *
 * Otherwise returns a selection with `agreeCount` — NOT a second gate.
 * Requiring every present source to independently clear softRounds the same
 * direction was tried and left the board nearly empty (most week-over-week
 * movement for a well-tracked player is small); a real disagreement between
 * two tracked sources (e.g. ESPN +0.7, Sleeper -0.1 — regression: Jordan
 * Love, 2026-08-24, actually the OPPOSITE sign on Sleeper) is worth showing
 * ranked low, not hidden — same "show the raw disagreement, don't collapse
 * it into one verdict" philosophy as report.ts's arbitrage table.
 */
export function selectMomentum<S extends string>(
  bySource: Partial<Record<S, MomentumResult>>,
  sources: readonly S[],
  requiredSource: S,
  softRounds: number,
): MomentumSelection | null {
  const present = sources.map((s) => bySource[s]).filter((m): m is MomentumResult => m !== undefined);
  if (!bySource[requiredSource] || present.length < 2) return null;

  let bestAbsMove = 0;
  let bestSign = 0;
  for (const m of present) {
    if (Math.abs(m.moveRounds) > bestAbsMove) {
      bestAbsMove = Math.abs(m.moveRounds);
      bestSign = Math.sign(m.moveRounds);
    }
  }
  if (bestAbsMove < softRounds) return null;

  const agreeCount = present.filter(
    (m) => Math.sign(m.moveRounds) === bestSign && Math.abs(m.moveRounds) >= softRounds,
  ).length;

  return { bestAbsMove, bestSign, agreeCount };
}
