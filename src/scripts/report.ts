import { openDb, assertHydrated } from '../db/client.js';
import { detectCensoring } from '../lib/assert.js';
import { heading, note, table, MARKDOWN } from '../lib/render.js';

/** Sanity + first-look queries over the ingested data. `npm run report` */
const conn = await openDb('fantasy.duckdb', { readonly: true });
const q = async (sql: string) => (await conn.runAndReadAll(sql)).getRowObjectsJson();

await assertHydrated(conn, ['adp_snapshots', 'players']);

/**
 * Detect a censoring ceiling per source, rather than hardcoding ESPN's — the
 * same detectCensoring() the arbitrage table already relies on, now driving
 * the filter instead of a threshold typed in once and never revisited. If
 * ESPN's pool size changes (or another source starts censoring) this adapts;
 * a hardcoded 166 would silently go stale. See metrics/confidence.ts, which
 * does the equivalent per-player exclusion for values.ts.
 */
const rawAdpBySource = (await q(`SELECT source, adp FROM adp_current`)) as { source: string; adp: number }[];
const adpsBySource = new Map<string, number[]>();
for (const r of rawAdpBySource) {
  let arr = adpsBySource.get(r.source);
  if (!arr) adpsBySource.set(r.source, (arr = []));
  arr.push(Number(r.adp));
}
const censorClauses: string[] = [];
const censorNotes: string[] = [];
for (const [source, adps] of adpsBySource) {
  const ceiling = detectCensoring(adps);
  if (ceiling !== null) {
    censorClauses.push(`(source = '${source}' AND adp > ${ceiling})`);
    censorNotes.push(`${source} ADP is censored above pick ${ceiling.toFixed(0)} — those values mean "very late", not a real average, so they are excluded from arbitrage.`);
  }
}
const CENSOR_FILTER = censorClauses.length ? `NOT (${censorClauses.join(' OR ')})` : 'TRUE';

/**
 * Every query below reads the *_current views, which are pinned to the latest
 * capture date in schema.sql. The base tables are append-only time series, so
 * querying them unscoped silently doubles counts and fans joins out into
 * duplicate rows. Reach for the base tables only for deliberate trend queries.
 */
const asOf = (await q(`SELECT max(captured_at) AS d FROM adp_snapshots`)) as { d: string }[];
const days = (await q(`SELECT count(DISTINCT captured_at) AS n FROM adp_snapshots`)) as { n: string }[];
if (MARKDOWN) {
  console.log(`# Fantasy ADP report — ${asOf[0]?.d}`);
  console.log(`\n_Snapshot ${asOf[0]?.d} · ${days[0]?.n} days of history collected. ` +
    `Generated automatically by the daily ingest workflow._`);
} else {
  console.log(`\nreporting on snapshot ${asOf[0]?.d} (${days[0]?.n} day(s) of history collected)`);
}
for (const n of censorNotes) note(n);

heading('Integrity: ADP must be decimal, not rank (PLAN.md §0.3)');
// ADP values are draft POSITIONS, so min() is the most expensive player and
// max() is how deep the source publishes — named explicitly, since "lo"/"hi"
// read as low/high value and mean the opposite here.
//
// pct_decimal is measured over the TOP 300 by draft position, matching
// assertLooksLikeAdp exactly. Measuring the whole series instead showed
// Sleeper at 55% — permanently alarming under a header saying "must be
// decimal", while the ingest guard passed. That contradiction trains you to
// ignore the table. Deep small-sample players legitimately have integer ADP
// (drafted once at pick 440 -> 440.0); the top of the board is where a
// swapped-in rank column would actually show. See lib/assert.ts.
table(
  await q(`
  WITH ranked AS (
    SELECT source, adp, row_number() OVER (PARTITION BY source ORDER BY adp) AS rn
    FROM adp_current
  )
  SELECT source, count(*) AS players,
         round(min(adp),2) AS earliest_pick, round(max(adp),1) AS deepest_pick,
         round(100.0*sum(CASE WHEN rn <= 300 AND adp != floor(adp) THEN 1 ELSE 0 END)
               / nullif(sum(CASE WHEN rn <= 300 THEN 1 ELSE 0 END), 0), 1) AS pct_decimal_top300
  FROM ranked GROUP BY source ORDER BY source`),
);

heading('Resolution tier distribution (fuzzy should stay ~0)');
table(
  await q(`
  SELECT source, resolve_tier, count(*) AS n
  FROM player_xref_current GROUP BY 1,2 ORDER BY source, n DESC`),
);

// Arbitrage is deliberately the LAST section this script prints — the daily
// workflow concatenates `rising:md` right after `report:md`, so whatever
// prints last here is what "who's rising" ends up sitting directly under in
// the assembled REPORT.md. Both are ADP-focused market-signal sections, so
// that adjacency is the point, not an accident of file order.
heading('Cross-platform arbitrage: leave-one-out median (PPR/1QB)');
// Each source is compared against the MEDIAN OF THE OTHER SOURCES, not against
// one other platform pairwise.
//
// Why: a pairwise gap cannot tell you which side moved. ESPN-vs-Sleeper showed
// Gadsden as the top "signal" (73-pick gap) — but ESPN and FantasyPros agree on
// him within 4 picks and it is SLEEPER that is the outlier, so there is no
// cheap platform to exploit. Meanwhile Godwin looked like noise pairwise, yet
// Sleeper and FantasyPros agree he goes ~80-93 while ESPN alone lets him fall
// to 139. Two independent markets corroborating one price is far stronger
// evidence than one pairwise gap being statistically large.
//
// espn_adp/sleeper_adp/yahoo_adp are shown RAW, one column per platform,
// rather than collapsed into "its_adp"/"others_say" — with only 3 sources you
// can see for yourself which two agree and which one is the outlier, instead
// of trusting a median+spread summary. A blank cell means that source's value
// was censored out (see CENSOR_FILTER) or it just doesn't rank the player.
//
// `outlier_source` and `rounds` still name the pick and size the gap directly,
// since "which platform, by how much" is still worth stating rather than
// making you diff three numbers yourself. The filter behind the scenes still
// requires the OTHER two sources to agree within 25 picks of each other —
// that part doesn't change, only what's displayed does.
//
// Direction: ADP is a draft POSITION, so a HIGHER number means he lasts longer
// = CHEAPER. Stated in words rather than left to a sign.
table(
  await q(`
  WITH clean AS (
    -- Ceiling(s) detected above from THIS run's data, not hardcoded — a source
    -- that ranks a fixed pool piles values up near its max, and those mean
    -- "very late" rather than a real average. Differencing them against an
    -- uncensored source manufactures fake arbitrage. See CENSOR_FILTER above.
    SELECT * FROM adp_current WHERE ${CENSOR_FILTER}
  ),
  loo AS (
    SELECT a.player_id, a.source, a.adp,
           median(o.adp)              AS others_med,
           max(o.adp) - min(o.adp)    AS others_spread,
           count(*)                   AS n_others
    FROM clean a
    JOIN clean o ON o.player_id = a.player_id AND o.source <> a.source
    GROUP BY 1,2,3
  ),
  ranked AS (
    SELECT *, a.adp - a.others_med AS deviation,
           row_number() OVER (PARTITION BY player_id ORDER BY abs(a.adp - a.others_med) DESC) AS rn
    FROM loo a WHERE n_others = 2
  ),
  per_source AS (
    -- Pivoted from clean (censoring already applied), one row per player.
    SELECT player_id,
           round(max(adp) FILTER (WHERE source = 'ESPN'),1)    AS espn_adp,
           round(max(adp) FILTER (WHERE source = 'SLEEPER'),1) AS sleeper_adp,
           round(max(adp) FILTER (WHERE source = 'YAHOO'),1)   AS yahoo_adp
    FROM clean GROUP BY 1
  ),
  -- Selection happens HERE: biggest gap first, capped at 20. That ordering is
  -- what decides who makes the table at all, so it stays inside the CTE.
  -- Display order (outer SELECT below) is alphabetical instead, same reasoning
  -- as values.ts — a browsable list, not a ranking the row order implies.
  selected AS (
    SELECT p.display_name AS player, p.position AS pos,
           s.espn_adp, s.sleeper_adp, s.yahoo_adp,
           r.source AS outlier_source,
           round(abs(r.deviation)/12.0,1) AS rounds,
           CASE WHEN r.deviation > 0 THEN 'CHEAPER on ' || r.source
                ELSE 'pricier on ' || r.source END AS verdict,
           round(pr.proj_points,0) AS proj_pts,
           abs(r.deviation) AS abs_deviation
    FROM ranked r
    JOIN players p USING (player_id)
    JOIN per_source s USING (player_id)
    -- Aggregated, NOT joined raw: projections now carry one row per SOURCE
    -- (ESPN + Sleeper), so a plain LEFT JOIN would duplicate every arbitrage
    -- row per source — the same fanout that multi-day data caused earlier.
    LEFT JOIN (
      SELECT player_id, avg(proj_points) AS proj_points
      FROM projections_current WHERE scoring = 'PPR' GROUP BY 1
    ) pr USING (player_id)
    WHERE r.rn = 1
      AND r.others_spread <= 25          -- the other two must actually agree
      AND abs(r.deviation) >= 30         -- and the outlier must be >2.5 rounds off
      AND r.others_med < 160             -- keep it to players who get drafted
      AND p.position NOT IN ('K','DEF')  -- kicker/DEF ADP swings aren't actionable
    ORDER BY abs_deviation DESC LIMIT 20
  )
  SELECT player, pos, espn_adp, sleeper_adp, yahoo_adp, outlier_source, rounds, verdict, proj_pts
  FROM selected ORDER BY player`),
);

/*
 * REMOVED: "experts vs market" and its bias check.
 *
 * Both compared FantasyPros ECR against ADP, and ECR came from a page scrape
 * that was removed along with beatadp — no key-free source publishes expert
 * consensus ranks. The historical rows (2026-07-27..08-16) are still in
 * ecr_snapshots.parquet if you want to query them by hand, but nothing writes
 * new ones, so joining ecr_current against today's ADP would silently compare
 * live prices to a frozen August snapshot. Deleted rather than left to rot.
 *
 * What they measured is worth remembering if an expert-rank source ever turns
 * up: the comparison has to be WITHIN position. Overall ECR and overall ADP are
 * not on the same scale — experts rank TEs low because only one starts, while
 * drafters reach for the scarce starting TEs. Measured, the overall-rank
 * version carried a positional offset of TE -18.3 / RB -7.2 / WR -2.4 / QB -0.9
 * picks, so it mostly reported "this player is a TE" rather than "this player
 * is mispriced".
 */
