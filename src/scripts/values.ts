import { openDb, assertHydrated } from '../db/client.js';
import { DEFAULT_CONFIG, type LeagueConfig } from '../metrics/league-config.js';
import { replacementLevels, type ProjectedPlayer } from '../metrics/replacement.js';
import { computeVorp, computeValueScore, gradeValueScores, qualifiesForValueBoard } from '../metrics/vorp.js';
import { buildConsensusAdp, type RawAdpRow } from '../metrics/confidence.js';
import { blendProjections, type SourceProjection } from '../metrics/projections.js';
import { roundOf } from '../metrics/rounds.js';
import { heading, note, table, MARKDOWN } from '../lib/render.js';
import { parsePosition, parsePositiveNumber } from '../lib/args.js';

/**
 * "Find me a middle-round value" — for any position, any round range.
 * npm run values [POS] [ROUND_MIN] [ROUND_MAX]
 * npm run values WR 9 15
 * npm run values          -> all positions, rounds 4-10
 *
 * The middle rounds are the default, not "the whole draft" (1-30) — that used
 * to be the default and it was actively misleading: an early-round stud
 * showing ADP rank 6 vs production rank 5 isn't a real story (he's already
 * priced correctly, and per-rank point gaps are naturally huge that early —
 * see vorp.ts), and a rounds-1-30 board mixed those in alongside genuine
 * middle-round sleepers, diluting the exact signal this command exists to
 * find. Regression: De'Von Achane (round 1.9, ADP rank 6 vs production rank
 * 5) and Javonte Williams (round 3.9, rank 17 vs 15) both graded as
 * "values" under the old 1-30 default despite neither being a real
 * mid-draft edge — a player already being drafted almost exactly where he
 * produces isn't a value. The middle rounds are where a real one — a player
 * who could be a league-winner or a steady starter relative to where he
 * actually goes — is worth looking for.
 *
 * 4-10 rather than a tighter 5-9: measured against real data, a 5-9 window
 * was cutting the single strongest value plays in the pool purely on the
 * boundary — Travis Etienne (round 4.7, the highest z-score of any player)
 * and Garrett Wilson (round 4.8, the highest raw value score) both sat just
 * outside it, as did Jake Ferguson at 10.3. Widening by one round each way
 * recovers those without reaching into the early-round "already priced
 * correctly" zone the 1-30 default was rejected for.
 */

// Flags are stripped before positional parsing, or `--markdown` lands in the
// position slot and silently filters for a position named "--MARKDOWN" —
// producing an empty board rather than an error. Same pattern as tiers.ts.
const [posArg, minArg, maxArg] = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const usage = 'usage: npm run values [POS] [ROUND_MIN] [ROUND_MAX]';
const posFilter = parsePosition(posArg, usage);
const roundMin = parsePositiveNumber(minArg, 4, 'ROUND_MIN', usage);
const roundMax = parsePositiveNumber(maxArg, 10, 'ROUND_MAX', usage);
if (roundMin > roundMax) {
  console.error(
    `\nROUND_MIN (${roundMin}) is after ROUND_MAX (${roundMax}) — no round can match.\n${usage}\n`,
  );
  process.exit(1);
}

const conn = await openDb('fantasy.duckdb', { readonly: true });
const q = async (sql: string) => (await conn.runAndReadAll(sql)).getRowObjectsJson();

await assertHydrated(conn, ['adp_snapshots', 'projections', 'players']);

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

// A real ADP average past this depth doesn't mean a skill player is actually
// getting drafted — most real drafters spend their last 2-3 rounds of a
// 16-round draft on K/DEF, not a QB4 or RB6, so the realistic ceiling for a
// skill position is shallower than the nominal team*16 full-draft size.
// 13 rounds, not 16: confirmed against real cases the flat round-range
// filter below was letting through as "value" — Bryce Young (ADP 174.7),
// C.J. Stroud (165.4), and Isiah Pacheco (163.5) were all showing up graded
// A/B despite none of them being realistic 12-team picks, because nothing
// upstream of the round-range filter had ever excluded them from the pool
// at all. Same "some ADP readings shouldn't be trusted as real draft signal"
// reasoning as the two filters above (thin ADP data, thin projection data) —
// this is a third population-narrowing rule, not a display-only cutoff, so a
// deep player doesn't quietly distort a real player's windowed-median
// comparison either.
const DRAFTABLE_CUTOFF = cfg.teams * 13;
const droppedForDraftability = vorpRows.filter(
  (v) => adpByPlayer.has(v.playerId) && (sourcesByPlayer.get(v.playerId) ?? 0) >= 2 && adpByPlayer.get(v.playerId)! > DRAFTABLE_CUTOFF,
).length;

const valueInput = vorpRows
  .filter((v) =>
    adpByPlayer.has(v.playerId) &&
    (sourcesByPlayer.get(v.playerId) ?? 0) >= 2 &&
    adpByPlayer.get(v.playerId)! <= DRAFTABLE_CUTOFF,
  )
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

// The selection rules themselves (above replacement, draftable depth, middle
// rounds, graded A/B) live in metrics/vorp.ts's qualifiesForValueBoard —
// extracted there specifically so they have real test coverage instead of
// living as inline script logic nothing could catch a regression in. See its
// doc comment for the full reasoning and the regression case behind each rule.
const boardRules = { draftableCutoff: DRAFTABLE_CUTOFF, roundMin, roundMax, teams: cfg.teams };

const board = (pos?: string) =>
  values
    .filter((v) => !pos || v.pos === pos)
    .filter((v) => qualifiesForValueBoard(v, boardRules))
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
  `own position (A/B = top ~30%). A player must also project ABOVE replacement ` +
  `level to appear — outproducing the typical pick at your draft slot doesn't ` +
  `help if the whole neighborhood is worse than a waiver-wire add. Only A/B ` +
  `players make this board, listed alphabetically — an empty or short section ` +
  `means there's no real value in that range, not a bug.`;
const thinDataNote =
  `${droppedForThinData} players excluded league-wide: fewer than 2 real ADP ` +
  `sources after removing values censored at a source's ceiling.`;
const thinProjNote =
  `${droppedForThinProjections} more excluded league-wide: fewer than 2 ` +
  `projection sources, so "produces_like" would really just be one source's ` +
  `unchecked number — often because a player was dropped from one source's ` +
  `pool (e.g. a season-ending injury) while the other hasn't caught up yet.`;
const draftabilityNote =
  `${droppedForDraftability} more excluded league-wide: ADP beyond ${DRAFTABLE_CUTOFF} ` +
  `picks (${cfg.teams}-team, 13 rounds) — most real drafters spend their last few ` +
  `rounds on K/DEF, not another skill player, so an ADP average past this depth ` +
  `isn't a real signal that someone is actually being drafted there.`;

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
  if (droppedForDraftability > 0) note(draftabilityNote);
  for (const pos of REPORT_POSITIONS) {
    heading(pos, 3);
    table(board(pos));
  }
} else {
  console.log(`\n${posFilter ?? 'ALL'} · rounds ${roundMin}-${roundMax} · A/B value plays, alphabetical:\n`);
  console.log(`${legend}\n`);
  if (droppedForThinData > 0) console.log(`(${thinDataNote})\n`);
  if (droppedForThinProjections > 0) console.log(`(${thinProjNote})\n`);
  if (droppedForDraftability > 0) console.log(`(${draftabilityNote})\n`);
  table(board(posFilter));
}
