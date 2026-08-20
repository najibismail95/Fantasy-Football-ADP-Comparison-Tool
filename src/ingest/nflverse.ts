import type { DuckDBConnection } from '@duckdb/node-api';
import { SOURCES } from '../config.js';
import { get } from '../lib/http.js';
import { writeBronze } from '../lib/bronze.js';
import { replaceAll } from '../db/client.js';
import {
  byeWeeks, computeSos, defenseIndex, DEFAULT_SPLITS,
  type DefenseAllowed, type ScheduleGame, type SosSplit,
} from '../metrics/sos.js';

/**
 * nflverse ingest — schedule and prior-season defensive results.
 *
 * Two things make this source different from the ADP three, and both simplify
 * it: the payloads are CSV rather than JSON, and they are *static release
 * assets* rather than a live endpoint, so there is no drift to guard against
 * mid-draft-season and no politeness budget to worry about.
 *
 * The files are also large by this project's standards — the weekly stats are
 * ~9MB against ~3.5MB/day for everything else combined — which is why the
 * derived ratings are cached in the database rather than recomputed daily.
 * See scripts/sos.ts.
 */

/**
 * nflverse abbreviations, mapped onto the Sleeper spine's.
 *
 * Exactly one disagreement across all 32 teams, verified by set-differencing
 * both vocabularies: nflverse writes the Rams `LA`, Sleeper writes `LAR`.
 * Small, but not optional — an unmapped code means a team's schedule silently
 * fails to join, which is precisely the class of bug computeSos() throws on.
 */
const TEAM_ALIAS: Record<string, string> = { LA: 'LAR' };
const team = (t: string): string => TEAM_ALIAS[t] ?? t;

/** Positions worth rating. K/DEF schedules aren't how anyone drafts. */
const POSITIONS = ['QB', 'RB', 'WR', 'TE'] as const;

export type NflverseFiles = {
  schedulePath: string;
  statsPath: string;
  /** The season whose defensive results the ratings are built from. */
  basisSeason: number;
};

/**
 * Download both files and archive them to bronze before anything parses them.
 *
 * `basisSeason` is the season BEFORE the one being played: in August 2026 no
 * 2026 defensive snap has happened, so last year's defenses are the only
 * evidence available. That choice is the method's main weakness and is
 * documented at the top of metrics/sos.ts.
 */
export async function fetchNflverse(season: number, captureDate: string): Promise<NflverseFiles> {
  const basisSeason = season - 1;

  const games = await get(SOURCES.nflverse.games);
  const schedulePath = await writeBronze('nflverse-games', captureDate, games, 'csv');

  let stats: string;
  try {
    stats = await get(SOURCES.nflverse.weeklyStats(basisSeason));
  } catch (err) {
    throw new Error(
      `nflverse has no weekly stats for ${basisSeason}, so no defensive baseline can be built ` +
        `(${err instanceof Error ? err.message : String(err)})`,
    );
  }
  const statsPath = await writeBronze('nflverse-stats', captureDate, stats, 'csv');

  return { schedulePath, statsPath, basisSeason };
}

const rows = async (conn: DuckDBConnection, sql: string) =>
  (await conn.runAndReadAll(sql)).getRowObjectsJson();

/**
 * Points allowed per defense, per position, over the basis season.
 *
 * Aggregated in DuckDB rather than TypeScript because the input is ~50k rows
 * of CSV and the output is ~128 — reading it natively and collapsing it in one
 * pass is the entire reason this project uses DuckDB at all. Everything after
 * this point is small enough to be ordinary in-memory arithmetic.
 *
 * `opponent_team` is the join key that matters: a row is one player's game, so
 * summing fantasy_points_ppr grouped by opponent_team gives what that DEFENSE
 * surrendered. Regular season only — playoff games involve a biased subset of
 * teams and would distort the per-game average for whoever went deep.
 */
export async function loadDefenseAllowed(
  conn: DuckDBConnection,
  statsPath: string,
  basisSeason: number,
): Promise<DefenseAllowed[]> {
  const posList = POSITIONS.map((p) => `'${p}'`).join(',');
  const out = (await rows(
    conn,
    `WITH per_week AS (
       SELECT opponent_team AS team, position AS pos, week,
              SUM(fantasy_points_ppr) AS pts
       FROM read_csv_auto('${statsPath}')
       WHERE season = ${basisSeason} AND season_type = 'REG'
         AND position IN (${posList}) AND opponent_team IS NOT NULL
       GROUP BY 1, 2, 3
     )
     SELECT team, pos, SUM(pts) AS "pointsAllowed", COUNT(*) AS games
     FROM per_week GROUP BY 1, 2`,
  )) as { team: string; pos: string; pointsAllowed: number; games: number }[];

  if (!out.length) throw new Error(`no ${basisSeason} defensive rows parsed from ${statsPath}`);
  return out.map((r) => ({ ...r, team: team(r.team), games: Number(r.games) }));
}

/**
 * The season's schedule, flattened so every game appears twice — once from
 * each side. SOS is asked per team, and a home/away row pair answers it with a
 * plain filter instead of a union at every call site.
 */
export async function loadSchedule(
  conn: DuckDBConnection,
  schedulePath: string,
  season: number,
): Promise<ScheduleGame[]> {
  const out = (await rows(
    conn,
    `SELECT home_team AS team, away_team AS opponent, week
       FROM read_csv_auto('${schedulePath}')
      WHERE season = ${season} AND game_type = 'REG'
     UNION ALL
     SELECT away_team AS team, home_team AS opponent, week
       FROM read_csv_auto('${schedulePath}')
      WHERE season = ${season} AND game_type = 'REG'`,
  )) as { team: string; opponent: string; week: number }[];

  if (!out.length) throw new Error(`nflverse has no ${season} regular-season schedule yet`);
  return out.map((r) => ({ team: team(r.team), opponent: team(r.opponent), week: Number(r.week) }));
}

export type SosRefresh = {
  /** False when cached ratings were reused and nothing was downloaded. */
  refreshed: boolean;
  basisSeason: number;
  rows: number;
};

/**
 * Ensure sos_ratings holds ratings for `season`, downloading only if it does not.
 *
 * The skip is the point. Ratings for a season are a fixed computation — the
 * schedule's opponents don't move after release and the basis season's results
 * are final — so re-deriving them daily would spend ~11MB of CSV to write the
 * same 256 rows back. Checking first keeps the daily ingest at roughly the
 * cost it had before this feature existed, while a fresh clone or a new season
 * still populates itself with no special ceremony.
 *
 * `force` exists for the case the cache can't detect: nflverse correcting a
 * stat line in the basis season, or a schedule change. Rare, but the only way
 * out would otherwise be deleting rows by hand.
 */
export async function refreshSosRatings(
  conn: DuckDBConnection,
  season: number,
  captureDate: string,
  { force = false, splits = DEFAULT_SPLITS }: { force?: boolean; splits?: readonly SosSplit[] } = {},
): Promise<SosRefresh> {
  if (!force) {
    const cached = (await rows(
      conn,
      `SELECT count(*) AS n, any_value(basis_season) AS basis
         FROM sos_ratings WHERE season = ${season}`,
    )) as { n: string | number; basis: number | null }[];
    const n = Number(cached[0]?.n ?? 0);
    if (n > 0) return { refreshed: false, basisSeason: Number(cached[0]!.basis), rows: n };
  }

  const { schedulePath, statsPath, basisSeason } = await fetchNflverse(season, captureDate);
  const allowed = await loadDefenseAllowed(conn, statsPath, basisSeason);
  const schedule = await loadSchedule(conn, schedulePath, season);

  const ratings = computeSos(schedule, defenseIndex(allowed), splits);
  const byes = byeWeeks(schedule);

  // Wholesale replace, not append: this table holds one current answer per
  // season, and a partial write would leave two basis seasons interleaved.
  const written = await replaceAll(
    conn,
    'sos_ratings',
    ['season', 'basis_season', 'team', 'position', 'split', 'week_lo', 'week_hi',
      'sos_index', 'sos_rank', 'sos_grade', 'games', 'bye_week', 'computed_at'],
    ratings.map((r) => ({
      season, basis_season: basisSeason, team: r.team, position: r.pos, split: r.split,
      week_lo: r.weekLo, week_hi: r.weekHi, sos_index: r.index, sos_rank: r.rank,
      sos_grade: r.grade, games: r.games, bye_week: byes.get(r.team) ?? null,
      computed_at: captureDate,
    })),
  );

  return { refreshed: true, basisSeason, rows: written };
}
