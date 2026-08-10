import type { ReplacementLevel } from './replacement.js';

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
 */
export function computeValueScore(players: readonly ValueInput[]): ValueResult[] {
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
    // What a typical pick at rank K actually produces, in VORP points —
    // the "expectation" a player's own production is compared against.
    const vorpAtRank = new Map(byVorp.map((p, i) => [i + 1, p.vorp]));

    const byAdp = [...arr].sort((a, b) => a.adp - b.adp);
    const adpRank = new Map(byAdp.map((p, i) => [p.playerId, i + 1]));

    for (const p of arr) {
      const vr = vorpRank.get(p.playerId)!;
      const ar = adpRank.get(p.playerId)!;
      // Same pool backs both maps, so rank ar always has an entry — no
      // fallback needed, but ?? guards against a future refactor breaking that.
      const expectedVorp = vorpAtRank.get(ar) ?? p.vorp;
      out.push({ ...p, vorpRank: vr, adpRank: ar, valueScore: p.vorp - expectedVorp });
    }
  }
  return out;
}

export type Grade = 'A' | 'B' | 'C' | 'D' | 'F';

export type GradedResult = ValueResult & {
  grade: Grade;
  /** Standard deviations from the mean valueScore at his position. */
  z: number;
};

/**
 * Classic 10-20-40-20-10 grading curve, in standard deviations from the mean.
 * These cutoffs are the traditional ones for curving a normal distribution:
 * A = top ~10%, B = next ~20%, C = middle ~40%, D = next ~20%, F = bottom ~10%.
 */
const CURVE: readonly [number, Grade][] = [
  [1.28, 'A'],
  [0.52, 'B'],
  [-0.52, 'C'],
  [-1.28, 'D'],
];

function letterFor(z: number): Grade {
  for (const [cutoff, grade] of CURVE) if (z >= cutoff) return grade;
  return 'F';
}

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
    const scores = arr.map((r) => r.valueScore);
    const mean = scores.reduce((a, b) => a + b, 0) / scores.length;
    const variance = scores.reduce((a, b) => a + (b - mean) ** 2, 0) / scores.length;
    const sd = Math.sqrt(variance);

    for (const r of arr) {
      const z = arr.length < 4 || sd === 0 ? 0 : (r.valueScore - mean) / sd;
      out.push({ ...r, z, grade: letterFor(z) });
    }
  }
  return out;
}
