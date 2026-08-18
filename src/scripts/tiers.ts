import { openDb } from '../db/client.js';
import { DEFAULT_CONFIG } from '../metrics/league-config.js';
import { replacementLevels, type ProjectedPlayer } from '../metrics/replacement.js';
import { computeTiers, compositeScore } from '../metrics/tiers.js';
import { buildConsensusAdp, type RawAdpRow } from '../metrics/confidence.js';
import { blendProjections, type SourceProjection } from '../metrics/projections.js';

/**
 * "Take the last guy in a tier before the cliff" (PLAN.md §2) — for any
 * position.
 *   npm run tiers RB        -> tier count scaled to the draftable pool
 *   npm run tiers RB --all  -> include undrafted players too
 *
 * The tier count is deliberately NOT settable. Forcing a small k silently
 * produced 19-player tiers spanning 49 to 151 projected points, which defeats
 * the point of tiering — a tier is supposed to mean "these players are
 * interchangeable". Scaling to the pool is the only setting that holds that
 * promise, so it isn't offered as a knob.
 */

const args = process.argv.slice(2);

/**
 * `npm run tiers RB --all` never reaches argv: npm treats a bare `--all` as
 * one of ITS OWN config flags and strips it, so the script saw only "RB" and
 * silently produced the drafted-only board. Nothing errored and the output
 * looked plausible, which is the worst version of a broken flag.
 *
 * npm does leave the value behind in npm_config_*, so both forms are honoured:
 * `npm run tiers RB --all` and the strictly-correct `npm run tiers RB -- --all`.
 */
const includeAll = args.includes('--all') || process.env.npm_config_all === 'true';
const weightArg =
  args.find((a) => a.startsWith('--weight=')) ??
  (process.env.npm_config_weight ? `--weight=${process.env.npm_config_weight}` : undefined);
const positional = args.filter((a) => !a.startsWith('--'));
const pos = (positional[0] ?? 'QB').toUpperCase();

// Catch the old `npm run tiers RB 8` form rather than silently ignoring it.
if (positional[1] !== undefined) {
  console.error(
    `\nignoring "${positional[1]}": the tier count is no longer settable — it scales to the pool.\n` +
      `usage: npm run tiers ${pos} [--all] [--weight=0..1]\n`,
  );
}

/**
 * How much to weight projections vs ADP when tiering. 1 = pure projection,
 * 0 = pure ADP.
 *
 * Defaults to 0 (pure ADP) because that is what actually reproduces how
 * drafters group players. Projections alone can't: measured on RBs, the top
 * four are an even staircase 22/23/24 points apart, so there's no cluster
 * structure to find and any boundary is arbitrary — yet everyone groups
 * Gibbs/Bijan/CMC/JT together, because ADP encodes role, pedigree and injury
 * history that a point projection flattens away.
 *
 * Projections still drive VORP, value scores and replacement level. This
 * weight only affects how the tier BOUNDARIES are drawn for display.
 */
const ADP_WEIGHT = weightArg ? Number(weightArg.split('=')[1]) : 0;

/**
 * Target players per tier. Tiers exist to answer "take this guy now or wait
 * one more round" — a 20-player tier can't answer that. Around 3-4 keeps each
 * tier small enough that the players inside it are genuinely interchangeable.
 */
const TARGET_PER_TIER = 3.5;

const conn = await openDb();
const q = async (sql: string) => (await conn.runAndReadAll(sql)).getRowObjectsJson();

const cfg = DEFAULT_CONFIG;

// Blended across ESPN + Sleeper — the whole reason tiers are usable. ESPN
// alone rated six RBs within one point of each other, so there was nothing
// for ckmeans to separate. See metrics/projections.ts.
const rawProj = (await q(`
  SELECT pr.player_id AS "playerId", pr.source, pr.scoring, pr.proj_points AS points,
         p.position AS pos
  FROM projections_current pr JOIN players p USING (player_id)
  WHERE pr.scoring = '${cfg.scoring}'
`)) as (SourceProjection & { pos: string })[];

const posByPlayer = new Map(rawProj.map((r) => [r.playerId, r.pos]));
const projRows: ProjectedPlayer[] = blendProjections(rawProj).map((b) => ({
  playerId: b.playerId,
  pos: posByPlayer.get(b.playerId) as ProjectedPlayer['pos'],
  points: b.points,
}));
// Replacement level is computed over the FULL pool — it's a league-wide
// property and must not shift just because we narrowed the display.
const repl = replacementLevels(projRows, cfg);
const replPoints = repl[pos]?.points ?? 0;

const allAtPos = projRows.filter((p) => p.pos === pos).map((p) => ({ playerId: p.playerId, points: p.points }));
if (allAtPos.length === 0) {
  console.log(`\nno projected players at position "${pos}"`);
  process.exit(0);
}

/**
 * Cluster only players who actually get drafted.
 *
 * Undrafted players are a large, tightly-packed blob of near-zero
 * projections — 29 of 99 RBs, 18 of 50 TEs. Clustering them alongside the
 * real board burns 2-3 tiers on players nobody will ever pick, which is what
 * produced 22- and 24-player "tiers" at RB.
 */
const totalPicks = cfg.teams * 16;
const rawAdp = (await q(`SELECT player_id AS "playerId", source, adp FROM adp_current`)) as RawAdpRow[];
const adpByPlayer = new Map(buildConsensusAdp(rawAdp).map((r) => [r.playerId, r.adp]));
const pool = includeAll
  ? allAtPos
  : allAtPos.filter((p) => (adpByPlayer.get(p.playerId) ?? Infinity) <= totalPicks);

if (pool.length === 0) {
  console.log(`\nno drafted players at "${pos}" — try --all`);
  process.exit(0);
}

const k = Math.max(2, Math.round(pool.length / TARGET_PER_TIER));

// Tier on the projection+ADP composite, but keep real points for display.
// computeTiers clusters whatever it's handed as `points`, so the composite
// goes in and the actual point totals are joined back for the table.
const pointsById = new Map(pool.map((p) => [p.playerId, p.points]));
const composite = compositeScore(
  pool.map((p) => ({ playerId: p.playerId, points: p.points, adp: adpByPlayer.get(p.playerId)! })),
  ADP_WEIGHT,
);
const clustered = computeTiers(
  composite.map((c) => ({ playerId: c.playerId, points: c.score })),
  k,
);

// computeTiers returned tierMin/tierMax/cliffBelow in COMPOSITE units. Those
// are meaningless to display as "pts", so recompute the bounds from the real
// point totals now that tier membership is settled.
const pointsInTier = new Map<number, number[]>();
for (const t of clustered) {
  const pts = pointsById.get(t.playerId)!;
  (pointsInTier.get(t.tier) ?? pointsInTier.set(t.tier, []).get(t.tier)!).push(pts);
}
const tiered = clustered
  .map((t) => {
    const pts = pointsInTier.get(t.tier)!;
    const nextWorse = pointsInTier.get(t.tier + 1);
    return {
      ...t,
      points: pointsById.get(t.playerId)!,
      tierMin: Math.min(...pts),
      tierMax: Math.max(...pts),
      cliffBelow: nextWorse ? Math.min(...pts) - Math.max(...nextWorse) : null,
    };
  })
  // Sort by TIER first, then by the same signal the tiers were built on, so
  // the ordering inside a tier is consistent with the boundaries around it.
  // (Sorting by points alone also broke tier grouping outright: a player can
  // out-project someone in a better tier, which made headings repeat.)
  .sort((a, b) => {
    if (a.tier !== b.tier) return a.tier - b.tier;
    if (ADP_WEIGHT === 0) {
      // Pure-ADP tiers: order by draft cost, cheapest-to-reach first.
      return (adpByPlayer.get(a.playerId) ?? Infinity) - (adpByPlayer.get(b.playerId) ?? Infinity);
    }
    return b.points - a.points;
  });

const nameByPlayer = new Map(
  ((await q(`SELECT player_id AS "playerId", display_name AS name FROM players`)) as {
    playerId: string;
    name: string;
  }[]).map((r) => [r.playerId, r.name]),
);

const replLabel = repl[pos] ? `${pos}${repl[pos]!.startersUsed + 1}` : '?';
const basis =
  ADP_WEIGHT === 0 ? 'ADP only'
  : ADP_WEIGHT === 1 ? 'projections only'
  : `${Math.round(ADP_WEIGHT * 100)}% projection / ${Math.round((1 - ADP_WEIGHT) * 100)}% ADP`;
console.log(
  `\n${pos} tiers — ${cfg.teams}-team ${cfg.scoring}, ` +
    `${pool.length}${includeAll ? '' : ` of ${allAtPos.length}`} players in ${k} tiers` +
    `${includeAll ? ' (--all: includes undrafted)' : ' (drafted only)'}\n` +
    `tiered on: ${basis}   ·   replacement level ${replLabel} at ${replPoints.toFixed(0)} pts\n`,
);

const sizeOf = (tier: number) => tiered.filter((t) => t.tier === tier).length;
const adpRange = (tier: number) => {
  const a = tiered.filter((t) => t.tier === tier).map((t) => adpByPlayer.get(t.playerId)!);
  return `${Math.min(...a).toFixed(0)}-${Math.max(...a).toFixed(0)}`;
};

let lastTier: number | null = null;
let crossedReplacement = false;
for (const p of tiered) {
  if (p.tier !== lastTier) {
    if (lastTier !== null) console.log('');
    // Header leads with ADP when ADP is what drew the boundaries. Labelling
    // tiers by point range while tiering on ADP made the output look broken:
    // Purdy (298 pts) landed a tier BELOW Herbert (289) because he costs more,
    // and the point ranges overlapped with no visible explanation.
    console.log(
      `Tier ${p.tier}  (adp ${adpRange(p.tier)}, ` +
        `${p.tierMin.toFixed(0)}–${p.tierMax.toFixed(0)} pts, ${sizeOf(p.tier)} players)`,
    );
    lastTier = p.tier;
  }
  if (!crossedReplacement && p.points < replPoints) {
    console.log(`  ---- replacement level (${replPoints.toFixed(0)} pts) ----`);
    crossedReplacement = true;
  }
  const adp = adpByPlayer.get(p.playerId);
  console.log(
    `  ${(nameByPlayer.get(p.playerId) ?? p.playerId).padEnd(24)}` +
      `${p.points.toFixed(0).padStart(4)} pts   adp ${adp !== undefined ? adp.toFixed(1).padStart(6) : '     ?'}`,
  );
}

const withGaps = [...new Set(tiered.map((t) => t.tier))]
  .map((t) => tiered.find((x) => x.tier === t)!)
  .filter((t) => t.cliffBelow !== null);
if (withGaps.length) {
  console.log('\ncliffs between tiers (points lost dropping to the next tier):');
  for (const t of withGaps) {
    // Can go NEGATIVE when tiering on ADP: the next tier down may contain a
    // higher-projecting player who simply costs less. That is real information
    // (a value opportunity), not a defect.
    console.log(`  Tier ${t.tier} -> ${t.tier + 1}: ${t.cliffBelow!.toFixed(0)} pts`);
  }
}
