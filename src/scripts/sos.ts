import { openDb } from '../db/client.js';
import { DEFAULT_CONFIG } from '../metrics/league-config.js';
import { buildConsensusAdp, type RawAdpRow } from '../metrics/confidence.js';
import { rankLabel } from '../metrics/sos.js';
import { heading, note, table, MARKDOWN } from '../lib/render.js';
import { parsePosition } from '../lib/args.js';

/**
 * "Who has the easiest schedule, and does it hold up in the playoffs?"
 * npm run sos [POS]
 * npm run sos RB
 * npm run sos          -> QB/RB/WR/TE
 *
 * A pure reader, like report and values: the ratings are written by the daily
 * ingest so this stays instant and offline. Running it against a database that
 * has never ingested says so rather than quietly printing an empty board.
 */

const [posArg] = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const posFilter = parsePosition(posArg, 'usage: npm run sos [POS]');

const conn = await openDb();
const q = async (sql: string) => (await conn.runAndReadAll(sql)).getRowObjectsJson();

const seasonRow = (await q('SELECT max(season) AS s, any_value(basis_season) AS b FROM sos_ratings')) as {
  s: number | null; b: number | null;
}[];
const season = seasonRow[0]?.s;
if (!season) {
  console.error(
    'no strength-of-schedule ratings in the database yet — run `npm run ingest` first.',
  );
  process.exit(1);
}
const basisSeason = Number(seasonRow[0]!.b);

/**
 * One row per player, with both splits pivoted onto it.
 *
 * Joined on (team, position) because SOS is a team property: every Lions
 * receiver inherits the Lions' WR schedule. Players with no team — free
 * agents, and anyone Sleeper lists without one — drop out of the join, which
 * is correct: there is no schedule to rate.
 */
const sos = (await q(`
  SELECT p.player_id AS "playerId", p.display_name AS player, p.position AS pos, p.team,
         max(s.bye_week) AS bye,
         max(CASE WHEN s.split = 'regular'  THEN s.sos_index END) AS "regIdx",
         max(CASE WHEN s.split = 'regular'  THEN s.sos_grade END) AS "regGrade",
         max(CASE WHEN s.split = 'regular'  THEN s.sos_rank  END) AS "regRank",
         max(CASE WHEN s.split = 'playoffs' THEN s.sos_index END) AS "postIdx",
         max(CASE WHEN s.split = 'playoffs' THEN s.sos_grade END) AS "postGrade",
         max(CASE WHEN s.split = 'playoffs' THEN s.sos_rank  END) AS "postRank"
  FROM players p
  JOIN sos_ratings s ON s.team = p.team AND s.position = p.position
  WHERE s.season = ${season}
  GROUP BY 1, 2, 3, 4
`)) as {
  playerId: string; player: string; pos: string; team: string; bye: number | null;
  regIdx: number; regGrade: string; regRank: number;
  postIdx: number; postGrade: string; postRank: number;
}[];

// The size of the peer group a rank is stated against. Read from the data
// rather than hardcoded to 32: it is what the ratings were actually ranked
// within, so "4th easiest" cannot drift from the set it describes.
const teamCount = Number(
  ((await q(`SELECT count(DISTINCT team) AS n FROM sos_ratings WHERE season = ${season}`)) as {
    n: string | number;
  }[])[0]!.n,
);

// Same consensus ADP the value board uses — censoring-aware, so a player whose
// only surviving source is ESPN's piled-up ceiling doesn't sneak into a top-24
// on a number that isn't really an average. See metrics/confidence.ts.
const consensus = buildConsensusAdp((await q('SELECT player_id AS "playerId", source, adp FROM adp_current')) as RawAdpRow[]);
const adpByPlayer = new Map(consensus.map((r) => [r.playerId, r.adp]));

const POSITIONS = ['QB', 'RB', 'WR', 'TE'] as const;
const TOP_N = 24;

/**
 * The regular-season-to-playoff move, in words rather than index points.
 *
 * A signed number here would need the reader to already know what an index
 * point is worth, which is the exact thing the letter grades exist to avoid.
 * The bands are deliberately coarse: below about 3 index points the difference
 * is well inside the noise of pricing a schedule off last year's defenses, and
 * calling that "easier" would be inventing precision.
 */
function shiftLabel(delta: number): string {
  if (delta >= 8) return 'much easier';
  if (delta >= 3) return 'easier';
  if (delta > -3) return 'similar';
  if (delta > -8) return 'harder';
  return 'much harder';
}

/**
 * Selection is by ADP — the top 24 drafted at a position is the pool a drafter
 * is actually choosing between, and letting schedule pick the pool would
 * surface deep bench players whose easy schedule nobody will ever use.
 */
const pool = (pos: string) =>
  sos
    .filter((r) => r.pos === pos && adpByPlayer.has(r.playerId))
    .sort((a, b) => adpByPlayer.get(a.playerId)! - adpByPlayer.get(b.playerId)!)
    .slice(0, TOP_N);

/**
 * Deduplicated by team, sorted easiest playoff schedule first — what board()
 * slices its easiest/hardest tables from.
 *
 * SOS is a team property, so an undeduplicated top-N at WR spends slots on
 * Chase and Higgins describing one Bengals schedule twice — dedup turns ~16
 * distinct schedules into 16 rows instead of 24 readings of the same ~16
 * facts. The lowest-ADP player on each team stands in for it, since he's the
 * one a drafter is most likely to actually be weighing.
 */
const dedupedByTeam = (pos: string) => {
  // pool() is ADP-ascending, so the first player seen for a team is its
  // most-drafted one.
  const byTeam = new Map<string, ReturnType<typeof pool>[number]>();
  for (const r of pool(pos)) if (!byTeam.has(r.team)) byTeam.set(r.team, r);
  return [...byTeam.values()].sort((a, b) => b.postIdx - a.postIdx); // easiest first
};

const formatRow = (r: ReturnType<typeof pool>[number]) => ({
  player: r.player,
  team: r.team,
  bye: r.bye ?? '—',
  adp: Number(adpByPlayer.get(r.playerId)!.toFixed(1)),
  // Letter first for scanning a whole column at once, exact placing after
  // it because the letter alone buckets six teams into one A and hides the
  // ordering inside it — and "2nd easiest vs 6th easiest" is the entire
  // difference a drafter is trying to see.
  'weeks 1-14': `${r.regGrade} · ${rankLabel(r.regRank, teamCount)}`,
  'weeks 15-17': `${r.postGrade} · ${rankLabel(r.postRank, teamCount)}`,
  // The column worth reading last and thinking about first: a player who
  // looks cheap all year and then meets his hardest defenses in the exact
  // three weeks a title is decided.
  'playoff shift': shiftLabel(r.postIdx - r.regIdx),
});

const EASIEST_N = 5;
const HARDEST_N = 5;

/**
 * The 5 easiest AND 5 hardest playoff schedules at the position, as two
 * SEPARATE tables — not the full top-24-by-ADP board this used to be, and
 * not one combined 10-row table either. 24 rows of grade+ranking+shift per
 * position was more than anyone actually reads; the two ends are where the
 * real drafting decisions live (who to prioritize for a title week, who's a
 * real playoff-schedule risk), and the middle ~14 teams cluster too close to
 * average to be worth a row each (see gradeNote's magnitude caveat).
 * Splitting easiest/hardest into their own tables — rather than one table a
 * reader has to notice the rank jumps in — makes which half of the gap
 * they're looking at explicit instead of inferred. Deduplicated by team,
 * same reasoning as dedupedByTeam.
 *
 * Sliced with an overlap guard (Math.max(EASIEST_N, len - HARDEST_N)) rather
 * than a flat slice(-HARDEST_N), so a position with fewer than 10 distinct
 * teams in its pool never double-lists the same team in both tables.
 */
const board = (pos: string) => {
  const byEase = dedupedByTeam(pos);
  return {
    easiest: byEase.slice(0, EASIEST_N).map(formatRow),
    hardest: byEase.slice(Math.max(EASIEST_N, byEase.length - HARDEST_N)).map(formatRow),
  };
};

const col = (name: string) => (MARKDOWN ? `\`${name}\`` : name);
const legend =
  `${col('weeks 1-14')} is the fantasy regular season and ${col('weeks 15-17')} the ` +
  `playoffs. Each shows a grade curved against all ${teamCount} teams (A = easiest ~10%, ` +
  `F = hardest ~10%) followed by that team's exact placing, counted from whichever end ` +
  `is closer — so 4th easiest and 2nd hardest both mean what they say. ` +
  `${col('playoff shift')} says whether it gets easier or harder when it counts. Each ` +
  `position below is split into its ${EASIEST_N} easiest and ${HARDEST_N} hardest playoff ` +
  `schedules among the most-drafted (one row per team) — two separate tables, not one ` +
  `combined list, so which end you're looking at is never something you have to notice ` +
  `from a rank jumping mid-table.`;
const gradeNote =
  `Both are placings, not magnitudes: three playoff games swing much wider than fourteen ` +
  `regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th ` +
  `easiest over weeks 1-14, where the whole league sits within a few points of average.`;
const basisNote =
  `Built from ${basisSeason} defensive results — last year's defenses pricing this year's ` +
  `schedule. Personnel turns over, so treat this as a tiebreaker between similar players, ` +
  `not a reason to move anyone across tiers.`;

const shown = POSITIONS.filter((pos) => !posFilter || pos === posFilter);

if (MARKDOWN) {
  heading('Strength of schedule');
  note(`${season} season, ${DEFAULT_CONFIG.scoring} scoring. ${basisNote}`);
  note(legend);
  note(gradeNote);

  for (const pos of shown) {
    heading(pos, 3);
    const { easiest, hardest } = board(pos);
    heading('Easiest', 4);
    table(easiest);
    heading('Hardest', 4);
    table(hardest);
  }
} else {
  console.log(`\nstrength of schedule — ${season} season, ${DEFAULT_CONFIG.scoring}\n`);
  console.log(`${legend}\n`);
  console.log(`${gradeNote}\n`);
  console.log(`(${basisNote})\n`);

  for (const pos of shown) {
    console.log(`${pos}:`);
    const { easiest, hardest } = board(pos);
    console.log('Easiest:');
    table(easiest);
    console.log('\nHardest:');
    table(hardest);
  }
}
