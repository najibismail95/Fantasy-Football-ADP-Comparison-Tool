import { openDb } from '../db/client.js';
import { DEFAULT_CONFIG } from '../metrics/league-config.js';
import { detectCensoring } from '../lib/assert.js';
import { computeMomentum, selectMomentum, type SnapshotRow, type MomentumResult } from '../metrics/momentum.js';
import { heading, note, table, MARKDOWN } from '../lib/render.js';
import { parsePosition, splitPositionAndDays } from '../lib/args.js';

/**
 * "Who's rising?" — ADP movement over the last N days, per source.
 * npm run rising [POS] [DAYS]
 * npm run rising RB 14
 * npm run rising          -> all positions, 7-day window
 *
 * Deliberately NOT a blended/consensus movement number. Each source is
 * diffed against ITSELF across two dates, never against a different source —
 * see metrics/momentum.ts for why that sidesteps the cross-platform confounds
 * (PLAN.md §2) a same-source day-over-day comparison doesn't have to worry
 * about. ESPN/Sleeper/Yahoo columns are shown side by side so a reader can
 * see directly whether the sources agree on the move, the same philosophy
 * report.ts's arbitrage table and values.ts already use.
 */

const positional = process.argv.slice(2).filter((a) => !a.startsWith('--'));
// A lone number is DAYS — see splitPositionAndDays.
const [posArg, daysArg] = splitPositionAndDays(positional);
const usage = 'usage: npm run rising [POS] [DAYS]   (a lone number is DAYS: `rising 14`)';
const posFilter = parsePosition(posArg, usage);
const days = daysArg ? Number(daysArg) : 7;
// A bad value here isn't a graceful "no results" — it's a raw DuckDB
// "Conversion Error" from an `INTERVAL 'NaN days'` expression deep in the
// query, or (for 0/negative) a silently empty board with no hint the INPUT
// was the problem rather than a quiet week. Catch it here instead.
if (!Number.isFinite(days) || days <= 0) {
  console.error(`\nDAYS must be a positive number, got "${daysArg}".\n${usage}\n`);
  process.exit(1);
}

const cfg = DEFAULT_CONFIG;
const conn = await openDb('fantasy.duckdb', { readonly: true });
const q = async (sql: string) => (await conn.runAndReadAll(sql)).getRowObjectsJson();

const nowDateRow = (await q('SELECT max(captured_at) AS d FROM adp_snapshots')) as { d: string | null }[];
const nowDate = nowDateRow[0]?.d;
if (!nowDate) {
  console.error('no ADP snapshots in the database yet — run `npm run ingest` first.');
  process.exit(1);
}

/**
 * Refuse a window that reaches back past the start of the history.
 *
 * Each source's "then" endpoint is the newest date at or before
 * `nowDate - days`. Ask for more days than exist and that lookup matches
 * nothing for EVERY source, so every source returns empty and the board comes
 * out blank — under the full explanatory note, formatted exactly like a real
 * answer. Measured on a 32-day history: `rising WR 32` returned 28 rows and
 * `rising WR 33` returned zero, with nothing on screen to say the window was
 * the problem rather than a quiet month.
 *
 * The bound is computed, never hardcoded: it grows by one every day the
 * ingest runs, and a hardcoded number would start lying tomorrow.
 */
const spanRow = (await q(
  `SELECT date_diff('day', min(captured_at), max(captured_at)) AS span,
          count(DISTINCT captured_at) AS captured,
          min(captured_at) AS "first"
     FROM adp_snapshots`,
)) as { span: string | number | null; captured: string | number; first: string }[];
const spanDays = Number(spanRow[0]?.span ?? 0);
if (days > spanDays) {
  // Span and captured-day count are reported separately on purpose: they
  // differ whenever a day was missed (2026-08-14 was), and conflating them
  // would overstate how much data is actually behind the window.
  console.error(
    `\nDAYS=${days} reaches back before the history starts — there is nothing to compare against.\n` +
      `History starts ${spanRow[0]?.first} — a ${spanDays}-day span, ${spanRow[0]?.captured} of them captured.\n` +
      `So the longest usable window is ${spanDays}: \`npm run rising ${posFilter ? posFilter + ' ' : ''}${spanDays}\`.\n` +
      `That ceiling rises by one day on every ingest.\n`,
  );
  process.exit(1);
}

const posByPlayer = new Map(
  ((await q('SELECT player_id AS "playerId", position AS pos FROM players')) as {
    playerId: string;
    pos: string;
  }[]).map((r) => [r.playerId, r.pos]),
);
const nameByPlayer = new Map(
  ((await q('SELECT player_id AS "playerId", display_name AS name FROM players')) as {
    playerId: string;
    name: string;
  }[]).map((r) => [r.playerId, r.name]),
);

const SOURCES = ['ESPN', 'SLEEPER', 'YAHOO'] as const;
type Source = (typeof SOURCES)[number];

// K/DEF excluded and a draftable-depth cutoff applied — same reasoning
// report.ts's arbitrage table already uses (`p.position NOT IN ('K','DEF')`,
// `others_med < 160`): kicker/DEF ADP swings aren't actionable, and beyond a
// realistic draft pool an "ADP" average is built from a handful of deep,
// barely-drafted picks, so it swings wildly for reasons that have nothing to
// do with real market movement. DRAFTABLE_CUTOFF (200, ~16-17 rounds in a
// 12-team league) is deliberately a bit deeper than arbitrage's 160 — this
// feature is specifically about catching a player trending INTO relevance,
// so cutting at "already clearly drafted" would miss the story.
const DRAFTABLE_CUTOFF = 200;

/**
 * Each endpoint is a TRAILING AVERAGE over SMOOTH_DAYS available dates, not a
 * single day's snapshot — a real, standard smoothing technique, and one that
 * uses only data this project already collects (no new source needed). This
 * attacks the noise problem more directly than corroboration alone: a
 * single-day ADP number for a thinly-drafted player can swing hard just from
 * a handful of new mock/real drafts landing that day, and averaging several
 * days absorbs that the same way computeValueScore's windowed median absorbs
 * one noisy neighbor (metrics/vorp.ts) — same principle, applied on the date
 * axis instead of the rank axis.
 *
 * 3 days is a starting point: enough to smooth a single bad day without
 * blurring a real, sustained move into mush. Not empirically tuned.
 */
const SMOOTH_DAYS = 3;

/**
 * thenDate is found PER SOURCE, independently — not one global date shared
 * across all three. That is what makes Yahoo's short history (4 days as of
 * this writing) a non-issue instead of a special case: a 7-day request
 * simply finds no Yahoo row that old yet, so Yahoo comes back empty for that
 * player rather than crashing or being hardcoded out of the feature. It also
 * makes the 2026-08-14 gap day harmless for ESPN/Sleeper, whose 24-day
 * history means "closest available <= target" is almost always the exact
 * target date anyway. The SMOOTH_DAYS window is likewise sized from
 * whatever's actually available up to that point — Yahoo naturally gets a
 * thinner (or empty) average near the start of its own history rather than
 * a crash or a fabricated day.
 */
const perSource = new Map<Source, Map<string, MomentumResult>>();
for (const source of SOURCES) {
  // recentDates: the SMOOTH_DAYS most recent available dates at or before
  // `upToExpr` (a raw SQL date expression, so the "then" window can express
  // "nowDate - INTERVAL 'days'" directly rather than pre-computing it in JS).
  const recentDates = async (upToExpr: string) =>
    ((await q(`
      SELECT captured_at AS d FROM adp_snapshots
      WHERE source = '${source}' AND captured_at <= ${upToExpr}
      GROUP BY captured_at ORDER BY captured_at DESC LIMIT ${SMOOTH_DAYS}
    `)) as { d: string }[]).map((r) => r.d);

  const thenWindowDates = await recentDates(`DATE '${nowDate}' - INTERVAL '${days} days'`);
  if (thenWindowDates.length === 0) {
    perSource.set(source, new Map());
    continue;
  }
  const nowWindowDates = await recentDates(`DATE '${nowDate}'`);

  const neededDates = [...new Set([...thenWindowDates, ...nowWindowDates])];
  const rawRows = (await q(`
    SELECT s.player_id AS "playerId", s.adp, s.captured_at AS "capturedAt"
    FROM adp_snapshots s JOIN players p USING (player_id)
    WHERE s.source = '${source}' AND s.captured_at IN (${neededDates.map((d) => `DATE '${d}'`).join(',')})
      AND s.adp <= ${DRAFTABLE_CUTOFF} AND p.position NOT IN ('K', 'DEF')
  `)) as { playerId: string; adp: number; capturedAt: string }[];

  // Censoring is detected PER DAY, independently — the same rule
  // buildConsensusAdp already applies for the value board, since the pileup
  // ceiling itself can shift day to day as a source's pool changes
  // (report.ts's censoring comment has the full reasoning). A censored row
  // is dropped for that specific day before it ever reaches the average.
  const byDate = new Map<string, { playerId: string; adp: number }[]>();
  for (const r of rawRows) {
    let arr = byDate.get(r.capturedAt);
    if (!arr) byDate.set(r.capturedAt, (arr = []));
    arr.push({ playerId: r.playerId, adp: r.adp });
  }
  const cleanByDate = new Map<string, Map<string, number>>();
  for (const [date, dayRows] of byDate) {
    const ceiling = detectCensoring(dayRows.map((r) => r.adp));
    const clean = dayRows.filter((r) => ceiling === null || r.adp <= ceiling);
    cleanByDate.set(date, new Map(clean.map((r) => [r.playerId, r.adp])));
  }

  // Averaged over whichever of the window's days a player actually has a
  // clean row on — a player missing one day (or censored out of it) just
  // gets a slightly shorter average, not excluded outright.
  const avgOver = (dates: string[]): SnapshotRow[] => {
    const sums = new Map<string, number>();
    const counts = new Map<string, number>();
    for (const date of dates) {
      const dayMap = cleanByDate.get(date);
      if (!dayMap) continue;
      for (const [playerId, adp] of dayMap) {
        sums.set(playerId, (sums.get(playerId) ?? 0) + adp);
        counts.set(playerId, (counts.get(playerId) ?? 0) + 1);
      }
    }
    return [...sums.entries()].map(([playerId, sum]) => ({
      playerId,
      pos: posByPlayer.get(playerId) ?? '?',
      adp: sum / counts.get(playerId)!,
    }));
  };

  const results = computeMomentum(avgOver(thenWindowDates), avgOver(nowWindowDates), cfg.teams);
  perSource.set(source, new Map(results.map((r) => [r.playerId, r])));
}

// The actual selection/ranking rule (ESPN required, 2-source minimum, noise
// floor, agreement count) lives in metrics/momentum.ts's selectMomentum —
// extracted there specifically so it has real test coverage instead of
// living as inline script logic nothing could catch a regression in. See its
// doc comment for the full reasoning and the regression cases it guards.
//
// Not shown as its own column in the table below — tried both a high/low
// label and a literal "2/3 agree" count, and both read as one more thing to
// decode sitting next to a row that already shows the raw *_then/*_now
// numbers a reader can look at directly. Still used to ORDER the rows,
// though, so a real corroborated move surfaces above an uncorroborated one
// without a reader needing to know why.
const SOFT_ROUNDS = 0.5;
const MAX_ROWS = 20;

type Row = {
  player: string;
  pos: string;
  espn_then: number | string;
  espn_now: number | string;
  sleeper_then: number | string;
  sleeper_now: number | string;
  yahoo_then: number | string;
  yahoo_now: number | string;
  bestAbsMove: number;
  bestSign: number;
  agreeCount: number;
};

const playerIds = new Set<string>();
for (const bySource of perSource.values()) for (const id of bySource.keys()) playerIds.add(id);

const rows: Row[] = [];
for (const playerId of playerIds) {
  const pos = posByPlayer.get(playerId) ?? '?';
  if (posFilter && pos !== posFilter) continue;

  const bySource = Object.fromEntries(SOURCES.map((s) => [s, perSource.get(s)!.get(playerId)])) as Record<
    Source,
    MomentumResult | undefined
  >;

  const selection = selectMomentum(bySource, SOURCES, 'ESPN', SOFT_ROUNDS);
  if (!selection) continue;
  const { bestAbsMove, bestSign, agreeCount } = selection;

  const cell = (v: number | undefined, digits: number) => (v === undefined ? '—' : Number(v.toFixed(digits)));
  rows.push({
    player: nameByPlayer.get(playerId) ?? playerId,
    pos,
    espn_then: cell(bySource.ESPN?.adpThen, 1),
    espn_now: cell(bySource.ESPN?.adpNow, 1),
    sleeper_then: cell(bySource.SLEEPER?.adpThen, 1),
    sleeper_now: cell(bySource.SLEEPER?.adpNow, 1),
    yahoo_then: cell(bySource.YAHOO?.adpThen, 1),
    yahoo_now: cell(bySource.YAHOO?.adpNow, 1),
    bestAbsMove,
    bestSign,
    agreeCount,
  });
}

const section = (sign: 1 | -1) =>
  rows
    .filter((r) => r.bestSign === sign)
    // Agreement count first, magnitude second — a corroborated 0.6-round move
    // outranks an uncorroborated 3-round one, because the uncorroborated
    // number might just be one source's sampling noise (see the `agree`
    // field's comment above). Within the same agree count, biggest move first.
    .sort((a, b) => b.agreeCount - a.agreeCount || b.bestAbsMove - a.bestAbsMove)
    .slice(0, MAX_ROWS)
    .map(({ bestAbsMove: _a, bestSign: _b, agreeCount: _c, ...display }) => display);

const col = (name: string) => (MARKDOWN ? `\`${name}\`` : name);
const legend =
  `${col('*_then')}/${col('*_now')} are that source's OWN ADP ${days} days ago ` +
  `and today — a lower number now than then means rising, higher means ` +
  `falling. '—' means that source has no data for him this window (often ` +
  `Yahoo, whose history is still short — shorter windows fill it in). ` +
  `A player needs ESPN plus at least one other source to appear at all — ` +
  `one source moving alone, with nobody else to check it against, isn't ` +
  `shown no matter how big that move looks, and ESPN specifically has to ` +
  `be one of the sources backing it (see the code comment for why). Rows ` +
  `are sorted so players whose sources actually agree on direction surface ` +
  `above ones where only a single source backs the move — a real ` +
  `disagreement between tracked sources is still shown, not hidden, just ` +
  `ranked lower.`;

if (MARKDOWN) {
  heading('Who’s rising');
  note(`Last ${days} days, as of ${nowDate}. ${legend}`);
  heading('Rising', 3);
  table(section(1));
  heading('Falling', 3);
  table(section(-1));
} else {
  console.log(`\n${posFilter ?? 'ALL'} · last ${days} days (as of ${nowDate}):\n`);
  console.log(`${legend}\n`);
  console.log('Rising:');
  table(section(1));
  console.log('\nFalling:');
  table(section(-1));
}
