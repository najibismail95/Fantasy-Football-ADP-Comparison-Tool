import { ckmeans } from 'simple-statistics';

export type TierInput = { playerId: string; points: number };

export type SignalInput = { playerId: string; points: number; adp: number };
export type CompositeScore = { playerId: string; score: number; projZ: number; adpZ: number };

/**
 * Combines projected points with ADP into one score to tier on.
 *
 * Projections alone can't reproduce how drafters actually think about tiers.
 * Measured on RBs: the top four are an even staircase 22/23/24 points apart,
 * so there is no cluster structure to find and any boundary is arbitrary —
 * yet drafters clearly group Gibbs/Bijan/CMC together, because ADP encodes
 * role, pedigree and injury history that a point projection flattens away.
 *
 * Both signals are z-scored WITHIN the pool passed in (callers filter by
 * position first) so they share a scale, and ADP is negated because a lower
 * draft position means a better player. Z-scoring rather than rank-averaging
 * preserves gap magnitude, which is the entire point of tiering.
 *
 * ⚠️ This deliberately does NOT feed value scores. Those compare projections
 * AGAINST ADP, so an ADP-flavoured input there would be circular and would
 * report artificially small edges. Tiering is display-only; keep it that way.
 *
 * adpWeight 0 = pure ADP, 1 = pure projection.
 */
export function compositeScore(
  players: readonly SignalInput[],
  adpWeight: number,
): CompositeScore[] {
  const usable = players.filter((p) => Number.isFinite(p.points) && Number.isFinite(p.adp));
  if (usable.length === 0) return [];

  const z = (vals: number[]) => {
    const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
    const sd = Math.sqrt(vals.reduce((a, b) => a + (b - mean) ** 2, 0) / vals.length);
    return (v: number) => (sd === 0 ? 0 : (v - mean) / sd);
  };
  const zPoints = z(usable.map((p) => p.points));
  const zAdp = z(usable.map((p) => p.adp));

  const w = Math.min(1, Math.max(0, adpWeight));
  return usable.map((p) => {
    const projZ = zPoints(p.points);
    const adpZ = -zAdp(p.adp); // negate: earlier pick = better
    return { playerId: p.playerId, projZ, adpZ, score: w * projZ + (1 - w) * adpZ };
  });
}

export type TieredResult = TierInput & {
  /** 1 = best tier at the position, counting down — matches how "Tier 1 RB"
   *  is used in the fantasy community. ckmeans itself returns clusters in
   *  ascending order (worst first); STACK-TYPESCRIPT.md's original proof used
   *  that raw order, which reads backwards for this purpose. Flipped here. */
  tier: number;
  tierMin: number;
  tierMax: number;
  /** Points gap down to the best player in the next (worse) tier — the
   *  "cliff" PLAN.md refers to: take the last guy in a tier before this drop.
   *  null for the worst tier, since there's nothing below it to fall to. */
  cliffBelow: number | null;
};

/**
 * Clusters projected points into tiers via ckmeans (Jenks natural breaks /
 * exact optimal 1-D k-means) — see STACK-TYPESCRIPT.md §1.1 for why this
 * beats a general n-dimensional KMeans here: deterministic, no random init to
 * get unlucky with, purpose-built for clustering a single number line.
 *
 * `k` is a target tier count, not a guarantee — asking for more tiers than
 * there are players just gives one player per tier instead of throwing.
 */
export function computeTiers(players: readonly TierInput[], k: number): TieredResult[] {
  if (players.length === 0) return [];
  const effectiveK = Math.max(1, Math.min(Math.floor(k), players.length));

  // ckmeans clusters are CONTIGUOUS ranges of the ascending-sorted sequence —
  // that contiguity is what makes exact 1-D clustering tractable at all. So
  // instead of matching cluster values back to players (which breaks on tied
  // point totals), sort players the same way and slice by cluster SIZE. Any
  // tie-order ambiguity is harmless: tied points are numerically
  // indistinguishable, so which specific player lands on which side of a
  // boundary between identical values doesn't change what the tiers mean.
  const ascending = [...players].sort((a, b) => a.points - b.points);
  const clusters = ckmeans(ascending.map((p) => p.points), effectiveK);

  const out: TieredResult[] = [];
  let cursor = 0;
  for (let i = 0; i < clusters.length; i++) {
    const cluster = clusters[i]!;
    const tier = clusters.length - i; // ascending index 0 (worst) -> highest tier number
    const tierMin = Math.min(...cluster);
    const tierMax = Math.max(...cluster);
    const worseCluster = clusters[i - 1]; // the tier just below this one
    const cliffBelow = worseCluster ? tierMin - Math.max(...worseCluster) : null;
    for (let j = 0; j < cluster.length; j++) {
      const player = ascending[cursor++]!;
      out.push({ ...player, tier, tierMin, tierMax, cliffBelow });
    }
  }
  return out;
}
