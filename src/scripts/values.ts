import { openDb } from '../db/client.js';
import { DEFAULT_CONFIG, type LeagueConfig } from '../metrics/league-config.js';
import { replacementLevels, type ProjectedPlayer } from '../metrics/replacement.js';
import { computeVorp, computeValueScore, gradeValueScores } from '../metrics/vorp.js';
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
// Kept for the value board's own 2-source guard below (see valueInput) — a
// player missing from ESPN entirely (dropped, or never added) gets a
// "blended" number that's really just Sleeper's alone, unconfirmed by a
// second source. Found on Jayden Higgins: ESPN had no projection or ADP for
// him at all (season-ending injury, PLAN.md's population-drift risk in
// miniature — one source updates, the other hasn't caught up), so his
// "value" was really just Sleeper's stale pre-injury number riding
// unchecked. replacementLevels/computeVorp above still use the FULL pool
// including single-source players — replacement level is a league-wide
// baseline and narrowing that pool would shift it for everyone else; the
// guard belongs on the value board specifically, the thing that puts a
// player in front of a drafter as a recommendation.
const sourcesByPlayer = new Map(blended.map((b) => [b.playerId, b.sources]));
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

const droppedForThinProjections = vorpRows.filter(
  (v) => adpByPlayer.has(v.playerId) && (sourcesByPlayer.get(v.playerId) ?? 0) < 2,
).length;
const valueInput = vorpRows
  .filter((v) => adpByPlayer.has(v.playerId) && (sourcesByPlayer.get(v.playerId) ?? 0) >= 2)
  .map((v) => ({ playerId: v.playerId, pos: v.pos, vorp: v.vorp, adp: adpByPlayer.get(v.playerId)! }));

// Ranked on the FULL position pool, before any round-range filter. adpRank
// and vorpRank have to mean the same thing regardless of what range you
// happen to query — ranking an already-cherry-picked top-15 would make
// everyone look average purely because they're being compared only to other
// good values.
// Graded here, over the FULL position pool, for the same reason valueScore
// itself is ranked pre-filter (see comment above): a player's A/B/C/D/F has
// to mean the same thing regardless of what round range you happen to query.
const values = gradeValueScores(computeValueScore(valueInput));

const nameByPlayer = new Map(
  ((await q(`SELECT player_id AS "playerId", display_name AS name FROM players`)) as {
    playerId: string;
    name: string;
  }[]).map((r) => [r.playerId, r.name]),
);

// Safety valve only, not the normal path: a huge round range with a genuinely
// deep position could in principle grade a lot of players A/B. The grade
// filter below is what actually decides the board's size in practice.
const MAX_ROWS = 20;

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
    // Graded, not force-capped: only players whose valueScore is a real
    // outlier WITHIN THEIR OWN POSITION (top ~30%, curved — see grade.ts) make
    // the board at all. Early rounds legitimately return few or zero rows,
    // because ADP and production already agree closely at the top of a
    // position — there is no real value to find there, and a flat top-15 used
    // to paper over that by relisting the consensus order every time.
    .filter((r) => r.grade === 'A' || r.grade === 'B')
    .sort((a, b) => b.valueScore - a.valueScore)
    .slice(0, MAX_ROWS)
    .map((r) => ({
      player: nameByPlayer.get(r.playerId) ?? r.playerId,
      pos: r.pos,
      adp: Number(r.adp.toFixed(1)),
      round: Number(roundOf(r.adp, cfg.teams).toFixed(1)),
      drafted_as: `${r.pos}${r.adpRank}`,
      produces_like: `${r.pos}${r.vorpRank}`,
      grade: r.grade,
      espn_pts: rawPtsByPlayer.get(r.playerId)?.ESPN?.toFixed(0) ?? '—',
      sleeper_pts: rawPtsByPlayer.get(r.playerId)?.SLEEPER?.toFixed(0) ?? '—',
    }))
    // Selection above is by value — that decides WHO makes the board. Display
    // order is alphabetical by name, so the printed table reads as a
    // browsable list rather than a ranking, since there's no visible score on
    // the row itself to justify a "best to worst" order.
    .sort((a, b) => a.player.localeCompare(b.player));

// Column names are backticked in Markdown: they contain underscores, and bare
// underscores inside the italicised note below are ambiguous emphasis markers.
// Code formatting is the right rendering for a column name anyway.
const col = (name: string) => (MARKDOWN ? `\`${name}\`` : name);
const legend =
  `${col('espn_pts')}/${col('sleeper_pts')}: each source's own ${cfg.scoring} ` +
  `projection, compare them yourself. ${col('drafted_as')}/${col('produces_like')} ` +
  `are his rank by ADP vs. by production, per position — the gap between them ` +
  `is the story. ${col('grade')} curves the underlying point edge within his ` +
  `own position (A/B = top ~30%). Only A/B players make this board, listed ` +
  `alphabetically — an empty or short section means there's no real ` +
  `value in that range, not a bug.`;
const thinDataNote =
  `${droppedForThinData} players excluded league-wide: fewer than 2 real ADP ` +
  `sources after removing values censored at a source's ceiling.`;
const thinProjNote =
  `${droppedForThinProjections} more excluded league-wide: fewer than 2 ` +
  `projection sources, so "produces_like" would really just be one source's ` +
  `unchecked number — often because a player was dropped from one source's ` +
  `pool (e.g. a season-ending injury) while the other hasn't caught up yet.`;

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
  if (droppedForThinProjections > 0) note(thinProjNote);
  for (const pos of REPORT_POSITIONS) {
    heading(pos, 3);
    table(board(pos));
  }
} else {
  console.log(`\n${posFilter ?? 'ALL'} · rounds ${roundMin}-${roundMax} · A/B value plays, alphabetical:\n`);
  console.log(`${legend}\n`);
  if (droppedForThinData > 0) console.log(`(${thinDataNote})\n`);
  if (droppedForThinProjections > 0) console.log(`(${thinProjNote})\n`);
  table(board(posFilter));
}
