import { openDb } from '../db/client.js';

/** Sanity + first-look queries over the ingested data. `npm run report` */
const conn = await openDb();
const q = async (sql: string) => (await conn.runAndReadAll(sql)).getRowObjectsJson();

/**
 * Every query below reads the *_current views, which are pinned to the latest
 * capture date in schema.sql. The base tables are append-only time series, so
 * querying them unscoped silently doubles counts and fans joins out into
 * duplicate rows. Reach for the base tables only for deliberate trend queries.
 */
const asOf = (await q(`SELECT max(captured_at) AS d FROM adp_snapshots`)) as { d: string }[];
const days = (await q(`SELECT count(DISTINCT captured_at) AS n FROM adp_snapshots`)) as { n: string }[];
console.log(`\nreporting on snapshot ${asOf[0]?.d} (${days[0]?.n} day(s) of history collected)`);

console.log('\n=== integrity: ADP must be decimal, not rank (PLAN.md §0.3) ===');
// ADP values are draft POSITIONS, so min() is the most expensive player and
// max() is how deep the source publishes — named explicitly, since "lo"/"hi"
// read as low/high value and mean the opposite here.
console.table(
  await q(`
  SELECT source, count(*) AS players,
         round(min(adp),2) AS earliest_pick, round(max(adp),1) AS deepest_pick,
         round(100.0*sum(CASE WHEN adp != floor(adp) THEN 1 ELSE 0 END)/count(*),1) AS pct_decimal
  FROM adp_current GROUP BY source ORDER BY source`),
);

console.log('=== resolution tier distribution (fuzzy should stay ~0) ===');
console.table(
  await q(`
  SELECT source, resolve_tier, count(*) AS n
  FROM player_xref_current GROUP BY 1,2 ORDER BY source, n DESC`),
);

console.log('=== A. cross-platform arbitrage: LEAVE-ONE-OUT MEDIAN (PPR/1QB) ===');
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
// `others_agree` is the spread between the two corroborating sources. A small
// spread with a large deviation is the real signal; a wide spread means the
// market simply has no consensus on that player.
//
// Direction: ADP is a draft POSITION, so a HIGHER number means he lasts longer
// = CHEAPER. Stated in words rather than left to a sign.
console.table(
  await q(`
  WITH clean AS (
    -- ESPN ranks a fixed pool, so 51% of its values pile up at picks 166-171.
    -- Those mean "very late", not an average, and differencing them against an
    -- uncensored source manufactures ~23 picks of fake arbitrage. Drop them.
    -- detectCensoring() in lib/assert.ts finds this threshold from the data.
    SELECT * FROM adp_current WHERE NOT (source = 'ESPN' AND adp > 166)
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
  )
  SELECT p.display_name AS player, p.position AS pos,
         r.source AS outlier_source,
         round(r.adp,1) AS its_adp, round(r.others_med,1) AS others_say,
         round(r.others_spread,1) AS others_agree_within,
         round(abs(r.deviation)/12.0,1) AS rounds,
         CASE WHEN r.deviation > 0 THEN 'CHEAPER on ' || r.source
              ELSE 'pricier on ' || r.source END AS verdict,
         round(pr.proj_points,0) AS proj_pts, e.rank_ecr AS expert_rank
  FROM ranked r
  JOIN players p USING (player_id)
  LEFT JOIN projections_current pr USING (player_id)
  LEFT JOIN ecr_current e ON e.player_id = r.player_id AND e.ecr_format = 'PPR'
  WHERE r.rn = 1
    AND r.others_spread <= 25          -- the other two must actually agree
    AND abs(r.deviation) >= 30         -- and the outlier must be >2.5 rounds off
    AND r.others_med < 160             -- keep it to players who get drafted
  ORDER BY abs(r.deviation) DESC LIMIT 10`),
);

console.log('=== C. experts vs market: WITHIN-POSITION disagreement ===');
// Compared within position, not on overall rank.
//
// Overall ECR and overall ADP are not on the same scale: experts rank TEs low
// because only one starts, while drafters reach for the scarce starting TEs.
// Measured, the overall-rank version carried a positional offset of TE -18.3 /
// RB -7.2 / WR -2.4 / QB -0.9 picks, so it mostly reported "this player is a
// TE" rather than "this player is mispriced" — the same artifact that made
// kickers and defenses dominate before they were excluded. Ranking each player
// against his OWN position removes the offset by construction.
//
// Direction is spelled out in `verdict` rather than left to the sign, because
// a bare signed gap gets read backwards.
// Two filters, so the table shows disagreements worth acting on:
//
//  1. DRAFTABLE POOL — cutoffs per position for a 12-team league. Without this
//     the list fills with the ~100th WR, where nobody has a real opinion.
//
//  2. CONFIDENT EXPERTS — expert_std relative to typical uncertainty at the
//     same depth, NOT a fixed cutoff. Measured medians: 6.3 (rds 1-3), 11.3
//     (4-7), 15.6 (8-11), 31.3 (12+). A flat "std < 10" would silently keep
//     only early-round players. std_ratio < 0.8 means experts agree on this
//     player unusually well FOR HIS DEPTH.
//
// NOTE: expert_std is in overall-rank units while the gap is in positional-rank
// units, so they are deliberately NOT divided into a single z-score — that
// would be mixing units. std is compared only against other std values.
console.table(
  await q(`
  WITH a AS (SELECT player_id, min(adp) AS adp FROM adp_current GROUP BY 1),
       e AS (SELECT player_id, rank_ecr, rank_std FROM ecr_current WHERE ecr_format='PPR'),
       j AS (
         SELECT p.display_name, p.position, a.adp, e.rank_std,
                rank() OVER (PARTITION BY p.position ORDER BY a.adp)      AS pos_adp_rank,
                rank() OVER (PARTITION BY p.position ORDER BY e.rank_ecr) AS pos_ecr_rank,
                CASE WHEN a.adp < 36 THEN 1 WHEN a.adp < 84 THEN 2
                     WHEN a.adp < 132 THEN 3 ELSE 4 END AS depth
         FROM a JOIN e USING (player_id) JOIN players p USING (player_id)
         WHERE p.position NOT IN ('K','DEF') AND a.adp < 200
       ),
       s AS (
         SELECT *, rank_std / median(rank_std) OVER (PARTITION BY depth) AS std_ratio
         FROM j
       )
  SELECT display_name AS player,
         -- Rendered as fantasy shorthand (TE21) rather than a bare rank, since
         -- a positional rank is meaningless without the position attached.
         position || pos_adp_rank AS "drafted_as",
         position || pos_ecr_rank AS "experts_say",
         abs(pos_ecr_rank - pos_adp_rank) AS spots,
         CASE WHEN pos_ecr_rank > pos_adp_rank
              THEN 'market higher than experts'
              ELSE 'experts higher than market' END AS verdict,
         rank_std AS expert_std, round(std_ratio, 2) AS std_vs_peers
  FROM s
  WHERE std_ratio < 0.8
    AND ( (position = 'QB' AND pos_adp_rank <= 24)
       OR (position = 'RB' AND pos_adp_rank <= 48)
       OR (position = 'WR' AND pos_adp_rank <= 60)
       OR (position = 'TE' AND pos_adp_rank <= 24) )
  ORDER BY abs(pos_ecr_rank - pos_adp_rank) DESC LIMIT 8`),
);

console.log('=== bias check: within-position gap should now center near 0 ===');
console.table(
  await q(`
  WITH a AS (SELECT player_id, min(adp) AS adp FROM adp_current GROUP BY 1),
       e AS (SELECT player_id, rank_ecr FROM ecr_current WHERE ecr_format='PPR'),
       j AS (
         SELECT p.position,
                rank() OVER (PARTITION BY p.position ORDER BY a.adp)      AS pos_adp_rank,
                rank() OVER (PARTITION BY p.position ORDER BY e.rank_ecr) AS pos_ecr_rank
         FROM a JOIN e USING (player_id) JOIN players p USING (player_id)
         WHERE p.position NOT IN ('K','DEF') AND a.adp < 200
       )
  SELECT position AS pos, count(*) AS players,
         round(avg(pos_ecr_rank - pos_adp_rank),2) AS avg_gap,
         round(median(pos_ecr_rank - pos_adp_rank),2) AS median_gap
  FROM j GROUP BY 1 ORDER BY 1`),
);

console.log('=== superflex: ESPN rank shift for QBs (FORMATS.md §1) ===');
console.table(
  await q(`
  WITH r AS (
    SELECT player_id,
           max(rank) FILTER (WHERE rank_type='PPR')       AS ppr,
           max(rank) FILTER (WHERE rank_type='SUPERFLEX') AS sflex
    FROM rank_current GROUP BY 1)
  SELECT p.display_name AS player, r.ppr, r.sflex, r.ppr - r.sflex AS moves_up
  FROM r JOIN players p USING (player_id)
  WHERE p.position='QB' AND r.ppr IS NOT NULL AND r.sflex IS NOT NULL
  ORDER BY r.sflex LIMIT 6`),
);

console.log('=== unresolved_current (surfaced, never dropped) ===');
console.table(await q(`SELECT source, source_name, position FROM unresolved_current`));
