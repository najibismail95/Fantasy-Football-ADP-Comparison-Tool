export type SourceProjection = {
  playerId: string;
  source: string;
  scoring: string;
  points: number;
};

export type BlendedProjection = {
  playerId: string;
  scoring: string;
  /** Mean across sources — the value VORP and tiers consume. */
  points: number;
  sources: number;
  /** Max-min across sources, in points. Large = the models disagree about
   *  this player, which is real information the way expert_std is. */
  spread: number;
};

/**
 * Blends projections across sources by simple mean — the standard "consensus
 * projection" approach.
 *
 * Why blend at all: ESPN alone compresses RB5-RB14 into 20 points, six of them
 * within ONE point, which is what produced unusable 10-player tiers. Sleeper
 * spreads that same band over 58 points. Neither source is authoritative —
 * where they disagree, Sleeper tracked the market better on RBs, but that's
 * one position on one day, not grounds for picking a winner.
 *
 * On the scale difference: ESPN runs systematically ~37 points higher than
 * Sleeper for top RBs, so the blend sits between them. That offset is harmless
 * for VORP, because replacement level is recomputed from the same blended pool
 * and a constant shift cancels out of (player - replacement). It would NOT be
 * harmless if the two were compared against each other directly — hence
 * `spread` is reported rather than silently averaged away.
 *
 * Deliberately unweighted: with two sources and no back-tested accuracy for
 * either, any weighting would be a guess dressed up as precision. Revisit once
 * there's a season of outcomes to score them against.
 */
export function blendProjections(rows: readonly SourceProjection[]): BlendedProjection[] {
  const grouped = new Map<string, SourceProjection[]>();
  for (const r of rows) {
    if (!Number.isFinite(r.points)) continue;
    const key = `${r.playerId}|${r.scoring}`;
    let arr = grouped.get(key);
    if (!arr) grouped.set(key, (arr = []));
    arr.push(r);
  }

  const out: BlendedProjection[] = [];
  for (const [key, group] of grouped) {
    const [playerId, scoring] = key.split('|') as [string, string];
    // Guard against one source appearing twice for the same player/scoring —
    // otherwise it would silently get double weight in the mean.
    const bySource = new Map(group.map((g) => [g.source, g.points]));
    const points = [...bySource.values()];
    const mean = points.reduce((a, b) => a + b, 0) / points.length;
    out.push({
      playerId,
      scoring,
      points: mean,
      sources: points.length,
      spread: points.length > 1 ? Math.max(...points) - Math.min(...points) : 0,
    });
  }
  return out;
}
