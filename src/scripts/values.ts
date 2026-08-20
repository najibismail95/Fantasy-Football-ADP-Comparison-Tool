import { openDb } from '../db/client.js';
import { DEFAULT_CONFIG, type LeagueConfig } from '../metrics/league-config.js';
import { replacementLevels, type ProjectedPlayer } from '../metrics/replacement.js';
import { computeVorp, computeValueScore } from '../metrics/vorp.js';
import { buildConsensusAdp, type RawAdpRow } from '../metrics/confidence.js';
import { blendProjections, type SourceProjection } from '../metrics/projections.js';
import { roundOf, roundNumber } from '../metrics/rounds.js';
import { heading, note, table, MARKDOWN } from '../lib/render.js';

/**
 * "Find me value QBs in the late rounds" — for any position, any round range.
 * npm run values [POS] [ROUND_MIN] [ROUND_MAX]
 * npm run values WR 9 15
 * npm run values          -> all positions, whole board
 */

// Flags are stripped before positional parsing, or `--markdown` lands in the
// position slot and silently filters for a position named "--MARKDOWN" —
// producing an empty board rather than an error. Same pattern as tiers.ts.
const [posArg, minArg, maxArg] = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const posFilter = posArg?.toUpperCase();
const roundMin = minArg ? Number(minArg) : 1;
const roundMax = maxArg ? Number(maxArg) : 30;


const conn = await openDb();
const q = async (sql: string) => (await conn.runAndReadAll(sql)).getRowObjectsJson();

// Blended across ESPN + Sleeper ONLY. Yahoo has no third projection to add
// here — checked directly: its public pub-api-ro endpoint carries no points
// field at all (only draft_analysis: average_pick, average_cost,
// percent_drafted), and its own draftanalysis page shows ADP only for free
// users, with deeper columns paywalled behind Yahoo Fantasy Plus. The
// projected points Yahoo shows inside an actual (mock) draft room live behind
// a login session, not the public endpoint this project uses — pulling those
// would mean storing Yahoo login credentials in CI and automating against an
// authenticated session, which is a different risk category than every other
// source here (all public, no login, ToS-friendlier) and was deliberately
// not done. See ingest/yahoo.ts for what Yahoo DOES contribute: adp + auction
// value, both real and public.
//
// ESPN alone compresses the middle of each position (RB5-RB14 inside 20
// points, six within one point), which made both tiers and value scores mush.
// See metrics/projections.ts.
const rawProj = (await q(`
  SELECT pr.player_id AS "playerId", pr.source, pr.scoring, pr.proj_points AS points,
         p.position AS pos
  FROM projections_current pr JOIN players p USING (player_id)
  WHERE pr.scoring = '${DEFAULT_CONFIG.scoring}'
`)) as (SourceProjection & { pos: string })[];

const posByPlayer = new Map(rawProj.map((r) => [r.playerId, r.pos]));
const blended = blendProjections(rawProj);
const projRows: ProjectedPlayer[] = blended.map((b) => ({
  playerId: b.playerId,
  pos: posByPlayer.get(b.playerId) as ProjectedPlayer['pos'],
  points: b.points,
}));
// Shown as their own columns below rather than folded into edge_pts, so a
// player where the two disagree (e.g. Tyjae Spears: ESPN 154 / Sleeper 115)
// is visible directly instead of behind a flag on the blended number.
const rawPtsByPlayer = new Map<string, Record<string, number>>();
for (const r of rawProj) {
  let bySource = rawPtsByPlayer.get(r.playerId);
  if (!bySource) rawPtsByPlayer.set(r.playerId, (bySource = {}));
  bySource[r.source] = r.points;
}

const cfg: LeagueConfig = DEFAULT_CONFIG;
const repl = replacementLevels(projRows, cfg);

const leagueLine =
  `${cfg.teams}-team ${cfg.scoring}, ` +
  `${cfg.starters.qb}QB/${cfg.starters.rb}RB/${cfg.starters.wr}WR/${cfg.starters.te}TE` +
  `${cfg.starters.flex ? `/${cfg.starters.flex}FLEX` : ''}` +
  `${cfg.starters.superflex ? `/${cfg.starters.superflex}SFLEX` : ''}`;

// Terminal only: in Markdown this is folded into a one-line note below the
// heading, since a committed report shouldn't open with eight lines of setup
// before the first thing worth reading.
if (!MARKDOWN) {
  console.log(`\nleague: ${leagueLine}\n`);
  console.log('replacement level:');
  for (const [pos, r] of Object.entries(repl)) {
    console.log(`  ${pos.padEnd(4)} ${pos}${r.startersUsed + 1} baseline, ${r.points.toFixed(0)} pts`);
  }
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

// Ranked on the FULL position pool, before any round-range filter. adpRank
// and vorpRank have to mean the same thing regardless of what range you
// happen to query — ranking an already-cherry-picked top-15 would make
// everyone look average purely because they're being compared only to other
// good values.
const values = computeValueScore(valueInput);

const nameByPlayer = new Map(
  ((await q(`SELECT player_id AS "playerId", display_name AS name FROM players`)) as {
    playerId: string;
    name: string;
  }[]).map((r) => [r.playerId, r.name]),
);

const TOP_N = 15;

/**
 * Positions listed when rendering the whole board for the daily report. K and
 * DEF are left out for the same reason they're excluded from the arbitrage
 * table: their ADP swings are large and nobody drafts off a kicker value board.
 */
const REPORT_POSITIONS = ['QB', 'RB', 'WR', 'TE'] as const;

const board = (pos?: string) =>
  values
    .filter((v) => !pos || v.pos === pos)
    // Filter on the INTEGER round, not the fractional position: "rounds 9-16"
    // means every pick in those rounds. Comparing the fractional roundOf against
    // roundMax would cut at 16.0 (pick 181) and drop the rest of round 16.
    .filter((v) => {
      const rd = roundNumber(v.adp, cfg.teams);
      return rd >= roundMin && rd <= roundMax;
    })
    .sort((a, b) => b.valueScore - a.valueScore)
    .slice(0, TOP_N)
    .map((r) => ({
      player: nameByPlayer.get(r.playerId) ?? r.playerId,
      pos: r.pos,
      adp: Number(r.adp.toFixed(1)),
      round: Number(roundOf(r.adp, cfg.teams).toFixed(1)),
      drafted_as: `${r.pos}${r.adpRank}`,
      produces_like: `${r.pos}${r.vorpRank}`,
      espn_pts: rawPtsByPlayer.get(r.playerId)?.ESPN?.toFixed(0) ?? '—',
      sleeper_pts: rawPtsByPlayer.get(r.playerId)?.SLEEPER?.toFixed(0) ?? '—',
      // valueScore (formerly a printed edge_pts column) still drives the sort
      // above and decides who makes this top-15 — just not printed as its own
      // number. It survived one real bug (Bryce Young inflated by one outlier
      // neighbor, see vorp.ts) and, once fixed, a second look decided a raw
      // points differential between two sources doesn't need its own column
      // when drafted_as/produces_like/espn_pts/sleeper_pts already show
      // everything a reader needs to judge the pick themselves.
    }))
    // Selection above is by value — that decides WHO makes this top-15.
    // Display order is alphabetical by name, so the printed table reads as a
    // browsable list rather than a ranking a reader might mistake for "best
    // to worst" now that there's no visible score to justify the order.
    .sort((a, b) => a.player.localeCompare(b.player));

// Column names are backticked in Markdown: they contain underscores, and bare
// underscores inside the italicised note below are ambiguous emphasis markers.
// Code formatting is the right rendering for a column name anyway.
const col = (name: string) => (MARKDOWN ? `\`${name}\`` : name);
const legend =
  `${col('espn_pts')}/${col('sleeper_pts')}: each source's own ${cfg.scoring} ` +
  `projection, compare them yourself. Rows are sorted by projected production ` +
  `relative to draft cost — biggest value first.`;
const thinDataNote =
  `${droppedForThinData} players excluded league-wide: fewer than 2 real ADP ` +
  `sources after removing values censored at a source's ceiling.`;

// One pass over the already-computed board per position, rather than four
// separate invocations of this script — the expensive part (projections, VORP,
// consensus ADP) is identical for every position and only worth doing once.
if (MARKDOWN && !posFilter) {
  heading('Value board');
  note(
    `${leagueLine}. Replacement level: ` +
      Object.entries(repl)
        .map(([pos, r]) => `${pos}${r.startersUsed + 1} ${r.points.toFixed(0)}pts`)
        .join(', ') +
      '.',
  );
  note(legend);
  if (droppedForThinData > 0) note(thinDataNote);
  for (const pos of REPORT_POSITIONS) {
    heading(pos, 3);
    table(board(pos));
  }
} else {
  console.log(`\n${posFilter ?? 'ALL'} · rounds ${roundMin}-${roundMax} · sorted by value score:\n`);
  console.log(`${legend}\n`);
  if (droppedForThinData > 0) console.log(`(${thinDataNote})\n`);
  table(board(posFilter));
}
