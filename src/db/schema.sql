-- Canonical player spine (Sleeper).
CREATE TABLE IF NOT EXISTS players (
  player_id     VARCHAR PRIMARY KEY,
  display_name  VARCHAR,
  position      VARCHAR,
  team          VARCHAR,
  espn_id       VARCHAR,
  search_rank   INTEGER,
  active        BOOLEAN,
  captured_at   DATE
);

-- How each source's id maps onto the spine, with the tier that produced it.
CREATE TABLE IF NOT EXISTS player_xref (
  player_id     VARCHAR,
  source        VARCHAR,
  source_id     VARCHAR,
  source_name   VARCHAR,
  resolve_tier  VARCHAR,
  captured_at   DATE
);

-- Append-only. ADP is a time series; never overwrite. Keyed by the SOURCE's format.
CREATE TABLE IF NOT EXISTS adp_snapshots (
  player_id     VARCHAR,
  source        VARCHAR,
  adp_format    VARCHAR,
  adp           DOUBLE,
  auction_value DOUBLE,
  captured_at   DATE
);

-- ECR is NOT ADP. Kept separate on purpose (PLAN.md §0.5).
CREATE TABLE IF NOT EXISTS ecr_snapshots (
  player_id     VARCHAR,
  source        VARCHAR,
  ecr_format    VARCHAR,
  rank_ecr      INTEGER,
  rank_ave      DOUBLE,
  rank_std      DOUBLE,
  rank_min      DOUBLE,
  rank_max      DOUBLE,
  captured_at   DATE
);

-- Per-format draft ranks (STANDARD / PPR / SUPERFLEX). Also not ADP.
CREATE TABLE IF NOT EXISTS rank_snapshots (
  player_id     VARCHAR,
  source        VARCHAR,
  rank_type     VARCHAR,
  rank          INTEGER,
  auction_value DOUBLE,
  captured_at   DATE
);

CREATE TABLE IF NOT EXISTS projections (
  player_id     VARCHAR,
  source        VARCHAR,
  scoring       VARCHAR,
  proj_points   DOUBLE,
  captured_at   DATE
);

-- Surfaced, never silently dropped — a missing player during draft season is
-- exactly the rookie/UDFA case you most need to notice.
CREATE TABLE IF NOT EXISTS unresolved (
  source        VARCHAR,
  source_id     VARCHAR,
  source_name   VARCHAR,
  position      VARCHAR,
  team          VARCHAR,
  reason        VARCHAR,
  captured_at   DATE
);
