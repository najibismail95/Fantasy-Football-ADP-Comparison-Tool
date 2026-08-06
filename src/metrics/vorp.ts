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
  /** vorpRank - adpRank: positive means he outproduces where he's drafted. */
  valueScore: number;
};

/**
 * Ranks each player against his OWN position on both axes before comparing —
 * the same fix as the ECR-vs-ADP table in report.ts (PLAN.md §2), for the
 * same reason: an overall rank mixes positions with different replacement
 * curves, so an unscoped comparison mostly measures "what position is this"
 * rather than "is he underpriced".
 *
 * valueScore > 0: drafted later than his production justifies — a value.
 * valueScore < 0: drafted earlier than his production justifies — a reach.
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

    const byAdp = [...arr].sort((a, b) => a.adp - b.adp);
    const adpRank = new Map(byAdp.map((p, i) => [p.playerId, i + 1]));

    for (const p of arr) {
      const vr = vorpRank.get(p.playerId)!;
      const ar = adpRank.get(p.playerId)!;
      out.push({ ...p, vorpRank: vr, adpRank: ar, valueScore: ar - vr });
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
