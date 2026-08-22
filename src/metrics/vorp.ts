import type { ReplacementLevel } from './replacement.js';
import { curveGrades, type Grade } from './grade.js';

export type { Grade };

export type VorpInput = {
  playerId: string;
  pos: string;
  points: number;
};

export type VorpResult = {
  playerId: string;
  pos: string;
  points: number;
  vorp: number;
};

/** Points above the replacement-level player at the same position. */
export function computeVorp(
  players: readonly VorpInput[],
  repl: Record<string, ReplacementLevel>,
): VorpResult[] {
  return players.map((p) => ({
    ...p,
    vorp: p.points - (repl[p.pos]?.points ?? 0),
  }));
}

export type ValueInput = {
  playerId: string;
  pos: string;
  vorp: number;
  adp: number;
};

export type ValueResult = ValueInput & {
  /** 1 = best VORP at the position. What his production says he's worth. */
  vorpRank: number;
  /** 1 = earliest ADP at the position. Where the market actually takes him. */
  adpRank: number;
  /** VORP minus the VORP typically produced by whoever is drafted at his ADP
   *  rank, in POINTS. Positive = outproduces his draft slot; negative = reach. */
  valueScore: number;
};

const median = (nums: readonly number[]): number => {
  const s = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid]! : (s[mid - 1]! + s[mid]!) / 2;
};

/**
 * Ranks each player against his OWN position on both axes before comparing —
 * the same fix as the ECR-vs-ADP table in report.ts (PLAN.md §2), for the
 * same reason: an overall rank mixes positions with different replacement
 * curves, so an unscoped comparison mostly measures "what position is this"
 * rather than "is he underpriced".
 *
 * valueScore is measured in POINTS relative to expectation at his ADP slot,
 * NOT in rank spots (adpRank - vorpRank). A prior version used rank spots and
 * it was actively misleading: a bench-caliber RB moving 6 rank spots deep in
 * the position (e.g. RB48 -> RB42, both below replacement) scored HIGHER than
 * Derrick Henry moving 2 spots (RB12 -> RB10) — even though Henry's 2 spots
 * are worth ~4x the real points of the 6 deep-bench spots, because ranks are
 * dense and noisy at the bottom of a position and sparse and meaningful at
 * the top. Measured: RB1-6 is ~15.7 pts/rank-spot; RB65-71 is ~2.5. A rank-
 * based score can't tell a 6-spot move at the bottom from one at the top; a
 * points-based score can, because it asks "how many points is he beating the
 * player who WOULD have been taken at his actual ADP slot" directly.
 *
 * ⚠️ "Expectation at his ADP slot" is a WINDOWED MEDIAN of nearby production
 * ranks when his ADP rank and production rank disagree, not one single
 * neighbor. An earlier version compared against exactly one player — whoever
 * holds the matching production rank — and that broke on Bryce Young
 * (2026-08-18, ADP rank 28 of 28 drafted QBs): the player holding
 * production-rank 28 was Aaron Rodgers, the single worst producer in the
 * entire pool despite still going ahead of him on name recognition. Bryce
 * Young "beating" Aaron Rodgers by 38 points looked like a huge value; it was
 * really just "not the worst QB available," inflated by comparing against one
 * outlier instead of a trend. A median over several nearby ranks absorbs one
 * bad neighbor instead of being defined by it.
 *
 * When his ADP rank EQUALS his production rank exactly, valueScore is forced
 * to 0 rather than computed from the window. Windowing alone breaks this case
 * in the opposite direction from the Bryce Young problem: for the actual #1
 * player at a position, every neighbor in any window is necessarily WORSE
 * than him (there is no rank 0), so comparing him against nearby-but-worse
 * players manufactured a large fake edge for players the market prices
 * exactly correctly — Josh Allen showed +45 despite being the consensus QB1
 * by both ADP and production, i.e. zero actual mispricing. The exact-match
 * case has an unambiguous right answer (his own production IS the market's
 * expectation, so there is nothing to be over or under), so it bypasses the
 * window entirely instead of trying to make windowing produce zero.
 *
 * The window itself is NOT leave-one-out (unlike report.ts's arbitrage
 * comparison) — his own value is included alongside his neighbors'. Excluding
 * self mattered less than it first appeared: a median only cares about the
 * middle of a sorted set, so excluding one entry rarely moves it unless that
 * entry WAS the median. Including self does measurably help the near-miss
 * cases (adpRank and vorpRank one apart), pulling the comparison slightly
 * toward his own number rather than purely his neighbors'.
 *
 * Both ADP rank and production rank in the TOP 2 at the position also forces
 * valueScore to 0, the same bypass as an exact match and for the same root
 * cause: at rank 1 there is no rank 0 to compare down from, so any window
 * touching rank 1 or 2 is structurally short on "better" neighbors and long
 * on "worse" ones, and its median comes out lower than a fair symmetric
 * comparison would — inflating a fake edge purely from being near the top,
 * not from any real mispricing. Regression (2026-08-21): Puka Nacua (drafted
 * WR2, produces WR1) showed +29 and Ja'Marr Chase (drafted WR1, produces WR2)
 * showed +9 — the SAME pair, both flagged as "value" against each other, for
 * doing nothing but swapping 1 spot at the very top; Brock Bowers/Trey
 * McBride showed the identical pattern at TE (+37/+14). This was flagged
 * before rollout as a "known residual" and measured small (≤14 points on
 * 2026-08-19's data) — it grew past that on a later day's projections, large
 * enough to read as a real signal instead of noise, so it needed an actual
 * fix rather than continued documentation. The threshold is deliberately
 * tight (top 2, not top 3+): Derrick Henry drafted RB3/producing RB1 is a
 * real, legitimate 2-spot edge worth ~160 points (see the regression test
 * below) and must NOT be zeroed by this rule — the top-2 case is narrower
 * than "near the top" in general, scoped to exactly the ranks where there is
 * no possible "cheaper" comparison point at all, not merely a small one.
 */
// Ranks at or above this, on BOTH axes, have no possible "cheaper" neighbor
// to compare against at all (see the top-2 paragraph above) — not a tunable
// sensitivity knob, a description of where the window's comparison point
// stops existing.
const TOP_OF_POSITION = 2;

export function computeValueScore(
  players: readonly ValueInput[],
  { windowRadius = 3 } = {},
): ValueResult[] {
  const byPos = new Map<string, ValueInput[]>();
  for (const p of players) {
    let arr = byPos.get(p.pos);
    if (!arr) byPos.set(p.pos, (arr = []));
    arr.push(p);
  }

  const out: ValueResult[] = [];
  for (const arr of byPos.values()) {
    const byVorp = [...arr].sort((a, b) => b.vorp - a.vorp);
    const vorpRank = new Map(byVorp.map((p, i) => [p.playerId, i + 1]));

    const byAdp = [...arr].sort((a, b) => a.adp - b.adp);
    const adpRank = new Map(byAdp.map((p, i) => [p.playerId, i + 1]));

    for (const p of arr) {
      const vr = vorpRank.get(p.playerId)!;
      const ar = adpRank.get(p.playerId)!;
      let valueScore: number;
      if (ar === vr || (ar <= TOP_OF_POSITION && vr <= TOP_OF_POSITION)) {
        valueScore = 0;
      } else {
        // Window of production ranks centered on his ADP rank (ar-1 in the
        // 0-indexed byVorp array), clamped to the pool's bounds — a player
        // near either end of the position just gets a one-sided window
        // rather than an out-of-range lookup.
        const centerIdx = ar - 1;
        const lo = Math.max(0, centerIdx - windowRadius);
        const hi = Math.min(byVorp.length - 1, centerIdx + windowRadius);
        const expectedVorp = median(byVorp.slice(lo, hi + 1).map((w) => w.vorp));
        valueScore = p.vorp - expectedVorp;
      }
      out.push({ ...p, vorpRank: vr, adpRank: ar, valueScore });
    }
  }
  return out;
}

export type GradedResult = ValueResult & {
  grade: Grade;
  /** Standard deviations from the mean valueScore at his position. */
  z: number;
};

/**
 * Grades valueScore on a curve WITHIN each position, not on a fixed threshold.
 *
 * A fixed cutoff (e.g. "score >= 10 -> A") would not be comparable across
 * positions: the QB pool here is ~30 players and RB's is ~100, so the same raw
 * score is a different-sized outlier at each. Standardizing within position
 * first makes an A at QB and an A at RB mean the same thing: comparably
 * abnormal for that position's own spread of outcomes.
 *
 * With fewer than 4 players at a position the spread is too small to curve
 * meaningfully; those all grade C rather than produce a noisy A/F split.
 *
 * Not currently called from any script — values.ts settled on showing raw
 * points (espn_pts/sleeper_pts/edge_pts) instead of a letter grade, per
 * direct user feedback that a curved grade obscured more than it clarified.
 * Kept as a standalone, independently-tested capability (see
 * replacement.test.ts) rather than deleted, since the curving logic itself
 * is sound and may be worth surfacing again in a different view.
 */
export function gradeValueScores(results: readonly ValueResult[]): GradedResult[] {
  const byPos = new Map<string, ValueResult[]>();
  for (const r of results) {
    let arr = byPos.get(r.pos);
    if (!arr) byPos.set(r.pos, (arr = []));
    arr.push(r);
  }

  const out: GradedResult[] = [];
  for (const arr of byPos.values()) {
    const graded = curveGrades(arr.map((r) => r.valueScore));
    arr.forEach((r, i) => out.push({ ...r, ...graded[i]! }));
  }
  return out;
}
