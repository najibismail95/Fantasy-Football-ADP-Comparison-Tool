import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Internal: only used to derive the three exported layer paths below.
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = path.join(ROOT, 'data');
export const BRONZE = path.join(DATA, 'bronze');
export const SILVER = path.join(DATA, 'silver');
export const GOLD = path.join(DATA, 'gold');

/**
 * Be a good citizen. Every source here is either an undocumented API or a
 * third-party site with no published API. One pull per day, identified UA.
 * See PLAN.md §7 "Terms of service".
 */
export const USER_AGENT =
  'fantasy-adp/0.1 (personal research tool; one request per source per day)';

export const SOURCES = {
  // Verified: real decimal ADP + full-season projections + auction values.
  espn: {
    // leaguedefaults/3 = PPR. NOTE: ADP is a single GLOBAL series — it does not
    // vary by leaguedefaults id. Only draftRanksByRankType varies. See FORMATS.md §1.
    url: (season: number) =>
      `https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/${season}` +
      `/segments/0/leaguedefaults/3?view=kona_player_info`,
    limit: 350,
  },
  /**
   * Yahoo ADP — a real platform, via the public read-only host their own
   * frontend calls. No OAuth: the 3-legged flow is only needed for PRIVATE
   * league data, not the game-wide draft analysis.
   *
   * `draft_analysis` carries average_pick (real decimal ADP), average_cost
   * (auction), and percent_drafted. sort=AR walks the board top-down, so
   * paging from start=0 gets the drafted players first.
   */
  yahoo: {
    players: (start: number, count: number) =>
      'https://pub-api-ro.fantasysports.yahoo.com/fantasy/v2/game/nfl/players' +
      `;position=ALL;count=${count};start=${start};sort=AR/draft_analysis?format=json_f`,
    pageSize: 100,
    // Measured 2026-08-16: 223 players carry a real average_pick and coverage
    // is exhausted by ~start=300 (5 of 100 on that page). 4 pages walks past
    // the end deliberately rather than stopping exactly at today's depth.
    maxPages: 4,
  },
  // Canonical player spine. Position-filtered = 1/3 the bytes of the full dump.
  sleeper: {
    state: 'https://api.sleeper.app/v1/state/nfl',
    players: (pos: string) => `https://api.sleeper.app/v1/players/nfl?position=${pos}`,
    positions: ['QB', 'RB', 'WR', 'TE', 'K', 'DEF'] as const,
    /**
     * Undocumented, but a genuinely better projection source than ESPN and
     * already keyed by Sleeper player_id — our canonical spine id — so it
     * needs no entity resolution at all.
     *
     * Measured on RBs: ESPN compresses RB5-RB14 into 20 points, Sleeper
     * spreads the same band over 58. Where the two disagree, Sleeper tracks
     * the market better (Chase Brown: ESPN RB15, Sleeper RB7, market RB9).
     * That compression is what made RB tiers useless — no clustering
     * algorithm can separate players a projection source rates identically.
     *
     * Also carries pts_ppr / pts_half_ppr / pts_std, which is the only route
     * we have to HALF and STD scoring (FORMATS.md §4).
     */
    projections: (season: number) =>
      `https://api.sleeper.app/v1/projections/nfl/regular/${season}`,
  },
  /**
   * nflverse — the open-source NFL data project behind most of the public
   * R/Python fantasy analytics work. Used for strength of schedule, which
   * needs two things no ADP source publishes: who each team plays in each
   * week, and how many points each defense allowed by position.
   *
   * Different in kind from the sources above, and better: these are static,
   * versioned release assets on GitHub rather than an undocumented endpoint
   * that can change shape without notice. Nothing here is scraped.
   *
   * `games` carries every season's schedule in one file, including the full
   * 2026 slate with scores still empty. `weeklyStats` is per season and is
   * where fantasy_points_ppr + opponent_team come from.
   */
  nflverse: {
    games: 'https://github.com/nflverse/nflverse-data/releases/download/schedules/games.csv',
    weeklyStats: (season: number) =>
      'https://github.com/nflverse/nflverse-data/releases/download/stats_player/' +
      `stats_player_week_${season}.csv`,
  },
} as const;

/** Sleeper's per-scoring projection keys. */
export const SLEEPER_PTS_KEY = {
  PPR: 'pts_ppr',
  HALF: 'pts_half_ppr',
  STD: 'pts_std',
} as const;

/** ESPN defaultPositionId -> position. */
export const ESPN_POSITION: Record<number, string> = {
  1: 'QB', 2: 'RB', 3: 'WR', 4: 'TE', 5: 'K', 16: 'DEF',
};
