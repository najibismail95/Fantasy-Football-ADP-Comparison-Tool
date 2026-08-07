import { openDb } from '../db/client.js';
import { DEFAULT_CONFIG, type LeagueConfig } from '../metrics/league-config.js';
import { replacementLevels, type ProjectedPlayer } from '../metrics/replacement.js';
import { computeVorp, computeValueScore, gradeValueScores } from '../metrics/vorp.js';
import { buildConsensusAdp, expertConfidence, type RawAdpRow } from '../metrics/confidence.js';
import { blendProjections, type SourceProjection } from '../metrics/projections.js';
import { roundOf, roundNumber } from '../metrics/rounds.js';

/**
 * "Find me value QBs in the late rounds" — for any position, any round range.
 * npm run values [POS] [ROUND_MIN] [ROUND_MAX]
 * npm run values WR 9 15
 * npm run values          -> all positions, whole board
 */

const [, , posArg, minArg, maxArg] = process.argv;
const posFilter = posArg?.toUpperCase();
const roundMin = minArg ? Number(minArg) : 1;
const roundMax = maxArg ? Number(maxArg) : 30;


const conn = await openDb();
const q = async (sql: string) => (await conn.runAndReadAll(sql)).getRowObjectsJson();

// Blended across ESPN + Sleeper. ESPN alone compresses the middle of each
// position (RB5-RB14 inside 20 points, six within one point), which made both
// tiers and value scores mush. See metrics/projections.ts.
const rawProj = (await q(`
  SELECT pr.player_id AS "playerId", pr.source, pr.scoring, pr.proj_points AS points,
         p.position AS pos
  FROM projections_current pr JOIN players p USING (player_id)
  WHERE pr.scoring = '${DEFAULT_CONFIG.scoring}'
`)) as (SourceProjection & { pos: string })[];

const posByPlayer = new Map(rawProj.map((r) => [r.playerId, r.pos]));
const projRows: ProjectedPlayer[] = blendProjections(rawProj).map((b) => ({
  playerId: b.playerId,
  pos: posByPlayer.get(b.playerId) as ProjectedPlayer['pos'],
  points: b.points,
}));

const cfg: LeagueConfig = DEFAULT_CONFIG;
const repl = replacementLevels(projRows, cfg);

console.log(`\nleague: ${cfg.teams}-team ${cfg.scoring}, ` +
  `${cfg.starters.qb}QB/${cfg.starters.rb}RB/${cfg.starters.wr}WR/${cfg.starters.te}TE` +
  `${cfg.starters.flex ? `/${cfg.starters.flex}FLEX` : ''}` +
  `${cfg.starters.superflex ? `/${cfg.starters.superflex}SFLEX` : ''}\n`);

console.log('replacement level:');
for (const [pos, r] of Object.entries(repl)) {
  console.log(`  ${pos.padEnd(4)} ${pos}${r.startersUsed + 1} baseline, ${r.points.toFixed(0)} pts`);
}

const vorpRows = computeVorp(projRows, repl);

// Consensus ADP, built via buildConsensusAdp rather than a plain median:
// ESPN censors ADP above a ceiling (51% of its values pile up at the max it
// ranks to — PLAN.md §0.3), and a "consensus" resting on that single inflated
// reading plus one other source isn't a consensus. Found investigating a false
// A grade on a deep TE whose only surviving sources were 72 picks apart. See
// metrics/confidence.ts.
const rawAdp = (await q(`
  SELECT player_id AS "playerId", source, adp FROM adp_current
`)) as RawAdpRow[];
const consensus = buildConsensusAdp(rawAdp);
const droppedForThinData = rawAdp.length
  ? new Set(rawAdp.map((r) => r.playerId)).size - consensus.length
  : 0;
const adpByPlayer = new Map(consensus.map((r) => [r.playerId, r.adp]));

const valueInput = vorpRows
  .filter((v) => adpByPlayer.has(v.playerId))
  .map((v) => ({ playerId: v.playerId, pos: v.pos, vorp: v.vorp, adp: adpByPlayer.get(v.playerId)! }));

// Grade on the FULL position pool, before any round-range filter. A grade has
// to mean the same thing regardless of what range you happen to query — and
// curving an already-cherry-picked top-15 would push good values down to a
// C purely because they're being compared only to other good values.
const values = computeValueScore(valueInput);
const graded = gradeValueScores(values);

const nameByPlayer = new Map(
  ((await q(`SELECT player_id AS "playerId", display_name AS name FROM players`)) as {
    playerId: string;
    name: string;
  }[]).map((r) => [r.playerId, r.name]),
);

// Expert-disagreement confidence: a FLAG, not a filter — unlike the censored/
// single-source ADP dropped above (bad input), experts genuinely disagreeing
// is real information about a player, not corrupted data. See confidence.ts.
const ecrRows = (await q(`
  SELECT player_id AS "playerId", rank_std AS "rankStd" FROM ecr_current WHERE ecr_format = 'PPR'
`)) as { playerId: string; rankStd: number | null }[];
const stdByPlayer = new Map(ecrRows.map((r) => [r.playerId, r.rankStd]));
const confidence = expertConfidence(
  graded.map((g) => ({ playerId: g.playerId, pos: g.pos, adp: g.adp, rankStd: stdByPlayer.get(g.playerId) ?? null })),
  cfg.teams,
);

const results = graded
  .filter((v) => !posFilter || v.pos === posFilter)
  // Filter on the INTEGER round, not the fractional position: "rounds 9-16"
  // means every pick in those rounds. Comparing the fractional roundOf against
  // roundMax would cut at 16.0 (pick 181) and drop the rest of round 16.
  .filter((v) => {
    const rd = roundNumber(v.adp, cfg.teams);
    return rd >= roundMin && rd <= roundMax;
  })
  .sort((a, b) => b.valueScore - a.valueScore)
  .slice(0, 15);

console.log(`\n${posFilter ?? 'ALL'} · rounds ${roundMin}-${roundMax} · sorted by value score:\n`);
if (droppedForThinData > 0) {
  console.log(
    `(${droppedForThinData} players excluded league-wide: fewer than 2 real ADP sources ` +
      `after removing values censored at a source's ceiling)\n`,
  );
}
console.table(
  results.map((r) => ({
    player: nameByPlayer.get(r.playerId) ?? r.playerId,
    pos: r.pos,
    adp: Number(r.adp.toFixed(1)),
    round: Number(roundOf(r.adp, cfg.teams).toFixed(1)),
    drafted_as: `${r.pos}${r.adpRank}`,
    produces_like: `${r.pos}${r.vorpRank}`,
    grade: r.grade,
    confidence: confidence.get(r.playerId) ?? 'OK',
  })),
);
