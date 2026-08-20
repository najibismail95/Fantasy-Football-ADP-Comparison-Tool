/**
 * Strength of schedule, per position.
 *
 * SOS is a TEAM property that only becomes a player property by inheritance:
 * every Bengals receiver has the Bengals' schedule. What makes it worth
 * computing per position is that defenses are not uniformly good — a defense
 * can smother the run and leak to tight ends — so "easy schedule" is
 * meaningless until you say easy *for whom*.
 *
 * The method, which is the industry-standard one:
 *
 *   1. For each defense, how many PPR points did it allow per game to each
 *      position last season?
 *   2. Index that against the league average for that position (100 = average,
 *      >100 = allows more than average, i.e. an EASIER matchup).
 *   3. A team's SOS over a week range is the mean index of the defenses it
 *      actually plays in those weeks.
 *
 * ⚠️ The load-bearing weakness, stated plainly: step 1 uses LAST season's
 * defenses to price NEXT season's schedule. Defenses turn over hard — free
 * agency, coordinator changes, injury luck that doesn't repeat — so this is a
 * prior, not a projection, and it decays as the season starts and real 2026
 * defensive results exist. It is still the best signal available in August,
 * and it is what the public SOS tables are built from: computing it this way
 * from raw play-by-play reproduced Yahoo's published 2026 WR playoff numbers
 * to within about a point (CLE 114.7 vs their 114.4, TEN 113.6 vs 111.5),
 * which is corroboration that the method matches, not that the future is known.
 *
 * Treat it as a tiebreaker between similar players, never as a reason to move
 * a player across tiers.
 */

import { curveGrades, type Grade } from './grade.js';

/** One defense's season total against one position. */
export type DefenseAllowed = {
  /** The DEFENSE's team code — not the scoring player's team. */
  team: string;
  pos: string;
  /** Total PPR points that position scored against this defense. */
  pointsAllowed: number;
  games: number;
};

/** One team-week of the schedule, already flattened to team-vs-opponent. */
export type ScheduleGame = {
  team: string;
  opponent: string;
  week: number;
};

/** An inclusive week range that some part of a fantasy season occupies. */
export type SosSplit = {
  /** 'regular' | 'playoffs' — free-form so a league can define its own. */
  name: string;
  lo: number;
  hi: number;
};

/**
 * The two windows that actually matter to a drafter.
 *
 * Weeks 15-17 is the modern default playoff bracket on ESPN, Sleeper and
 * Yahoo alike, so the regular season it leaves behind is weeks 1-14. Week 18
 * is excluded from both on purpose: essentially no league plays a fantasy game
 * in it, and starters routinely sit, so including it would blend meaningless
 * matchups into a number people draft on.
 *
 * Leagues that still run a 14-16 bracket can pass their own splits — which is
 * why the week range travels with the rating instead of being implied by the
 * split's name.
 */
export const DEFAULT_SPLITS: readonly SosSplit[] = [
  { name: 'regular', lo: 1, hi: 14 },
  { name: 'playoffs', lo: 15, hi: 17 },
];

export type SosRating = {
  team: string;
  pos: string;
  split: string;
  weekLo: number;
  weekHi: number;
  /** 100 = league average. Higher = easier. */
  index: number;
  /** 1 = easiest, within (pos, split). */
  rank: number;
  /** A-F on a curve within (pos, split). A = easiest ~10%. */
  grade: Grade;
  /** Games actually played in the range — 13, not 14, for a team on bye. */
  games: number;
};

/**
 * Defenses indexed to 100 per position.
 *
 * Indexing is per-position on purpose. Positions score wildly different
 * absolute totals (a defense allows ~2x more to WRs collectively than to TEs),
 * so a raw points-allowed number is only comparable within its own position.
 * Normalizing makes "110" mean the same thing for a TE schedule as for an RB
 * one, which is the only way a single table can carry all four.
 */
export function defenseIndex(rows: readonly DefenseAllowed[]): Map<string, Map<string, number>> {
  const perGame = new Map<string, Map<string, number>>();
  for (const r of rows) {
    if (r.games <= 0) continue;
    let byTeam = perGame.get(r.pos);
    if (!byTeam) perGame.set(r.pos, (byTeam = new Map()));
    byTeam.set(r.team, r.pointsAllowed / r.games);
  }

  const out = new Map<string, Map<string, number>>();
  for (const [pos, byTeam] of perGame) {
    const vals = [...byTeam.values()];
    const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
    const idx = new Map<string, number>();
    // A league average of zero would make every index infinite. It can only
    // happen if a position scored nothing all season, which is not a real
    // scenario, but silently emitting Infinity into a draft table is worse
    // than emitting a flat 100.
    for (const [team, v] of byTeam) idx.set(team, mean === 0 ? 100 : (100 * v) / mean);
    out.set(pos, idx);
  }
  return out;
}

/**
 * Average opponent index over each split, then rank within (position, split).
 *
 * Averaged over games actually scheduled, NOT over the width of the week
 * range. A bye week is an absent row, and dividing by 14 when a team plays 13
 * would quietly rate every team's regular season easier in proportion to
 * having a bye at all — an artifact of the calendar rather than of who they
 * play.
 *
 * Throws on an opponent with no defensive rating. That case means the schedule
 * and the stats disagree about what a team is called (nflverse says `LA` for
 * the Rams where this project says `LAR`), and the wrong answer is to skip the
 * game: the team would still get a rating, silently averaged over the 16
 * opponents that did match, with nothing in the output to show a game went
 * missing.
 */
export function computeSos(
  schedule: readonly ScheduleGame[],
  index: Map<string, Map<string, number>>,
  splits: readonly SosSplit[],
): SosRating[] {
  const out: SosRating[] = [];

  for (const [pos, byTeam] of index) {
    for (const split of splits) {
      const inSplit = schedule.filter((g) => g.week >= split.lo && g.week <= split.hi);

      const rows: SosRating[] = [];
      const teams = [...new Set(inSplit.map((g) => g.team))].sort();
      for (const team of teams) {
        const games = inSplit.filter((g) => g.team === team);
        let sum = 0;
        for (const g of games) {
          const oppIdx = byTeam.get(g.opponent);
          if (oppIdx === undefined) {
            throw new Error(
              `no ${pos} defensive rating for ${g.opponent} (week ${g.week} opponent of ${team}) — ` +
                `schedule and stats disagree on team codes`,
            );
          }
          sum += oppIdx;
        }
        if (!games.length) continue;
        rows.push({
          team, pos, split: split.name, weekLo: split.lo, weekHi: split.hi,
          index: sum / games.length, rank: 0, grade: 'C', games: games.length,
        });
      }

      // 1 = easiest. Ranked within this (pos, split) only — a rank is a
      // statement about a peer group, and comparing an RB rank against a TE
      // rank, or a playoff rank against a full-season one, is meaningless.
      rows.sort((a, b) => b.index - a.index);
      rows.forEach((r, i) => { r.rank = i + 1; });

      // Graded against the same peer group for the same reason. The curve is
      // shared with the value board's grades (metrics/grade.ts) so an A means
      // one thing across the project.
      const graded = curveGrades(rows.map((r) => r.index));
      rows.forEach((r, i) => { r.grade = graded[i]!.grade; });

      out.push(...rows);
    }
  }
  return out;
}

const ordinal = (n: number): string => {
  const v = n % 100;
  const suffix = v >= 11 && v <= 13 ? 'th' : (['th', 'st', 'nd', 'rd'][n % 10] ?? 'th');
  return `${n}${suffix}`;
};

/**
 * A rank phrased from whichever end of the league it is nearer.
 *
 * "31st easiest" is technically correct and useless — nobody counts a bad
 * schedule from the good end. Ranks past the midpoint flip to counting from
 * the hard end, so the same number arrives as "2nd hardest", which is how the
 * fact would be said out loud.
 *
 * This also does work the letter grade cannot: a grade buckets six teams into
 * one A and throws away the order inside it, and the order inside it is
 * exactly what separates the 2nd-easiest playoff draw from the 6th.
 */
export function rankLabel(rank: number, total: number): string {
  const fromHardEnd = total - rank + 1;
  return rank <= fromHardEnd ? `${ordinal(rank)} easiest` : `${ordinal(fromHardEnd)} hardest`;
}

/**
 * Each team's bye week, derived from absence rather than stated anywhere.
 *
 * The schedule has no "bye" row — a bye is a week between the first and last
 * scheduled week where a team simply has no game. Scanning for the gap is the
 * only way to get it, and it's worth getting: a bye is draft-relevant on its
 * own (two of your starters sharing one is a real cost) and it explains why a
 * team's regular-season SOS is averaged over 13 games instead of 14.
 */
export function byeWeeks(schedule: readonly ScheduleGame[]): Map<string, number> {
  const weeks = schedule.map((g) => g.week);
  const lo = Math.min(...weeks);
  const hi = Math.max(...weeks);

  const played = new Map<string, Set<number>>();
  for (const g of schedule) {
    let s = played.get(g.team);
    if (!s) played.set(g.team, (s = new Set()));
    s.add(g.week);
  }

  const out = new Map<string, number>();
  for (const [team, s] of played) {
    for (let w = lo; w <= hi; w++) {
      if (!s.has(w)) { out.set(team, w); break; }
    }
  }
  return out;
}
