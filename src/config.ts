import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const DATA = path.join(ROOT, 'data');
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
  // Only source of Sleeper ADP. PPR/1QB only — query params are ignored.
  beatadp: { url: 'https://www.beatadp.com/platform-adp' },
  // ECR (not ADP) + rank_std dispersion. Scoring is selected by URL, not param.
  fantasypros: {
    ppr: 'https://www.fantasypros.com/nfl/rankings/ppr-cheatsheets.php',
    half: 'https://www.fantasypros.com/nfl/rankings/half-point-ppr-cheatsheets.php',
    std: 'https://www.fantasypros.com/nfl/rankings/consensus-cheatsheets.php',
    superflex: 'https://www.fantasypros.com/nfl/rankings/superflex-cheatsheets.php',
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
