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

-- ---------------------------------------------------------------------------
-- LATEST-SNAPSHOT VIEWS — query these unless you specifically want history.
--
-- The tables above are append-only time series: every run appends a full copy
-- of the board. Querying them unscoped does not error, it silently returns the
-- wrong answer, and the error grows every day:
--
--     SELECT count(*) FROM adp_snapshots   -- 914 on day 1, 27,420 by day 30
--
-- Joins are worse: adp x projections across 2 days returns 4 rows per player.
-- Worst of all, a filter can quietly change meaning — "n_others = 2" was
-- intended as "two other sources agree" and became "one source counted twice
-- on two dates", so a source corroborated its own previous day.
--
-- Some aggregates hide it completely: AVG over duplicated rows is still ~right,
-- so a result set can be half correct and half wrong with nothing to show it.
--
-- These views exist so the safe query is the one you write by default.
-- ---------------------------------------------------------------------------

CREATE OR REPLACE VIEW adp_current AS
  SELECT * FROM adp_snapshots
  WHERE captured_at = (SELECT max(captured_at) FROM adp_snapshots);

CREATE OR REPLACE VIEW ecr_current AS
  SELECT * FROM ecr_snapshots
  WHERE captured_at = (SELECT max(captured_at) FROM ecr_snapshots);

CREATE OR REPLACE VIEW rank_current AS
  SELECT * FROM rank_snapshots
  WHERE captured_at = (SELECT max(captured_at) FROM rank_snapshots);

CREATE OR REPLACE VIEW projections_current AS
  SELECT * FROM projections
  WHERE captured_at = (SELECT max(captured_at) FROM projections);

CREATE OR REPLACE VIEW player_xref_current AS
  SELECT * FROM player_xref
  WHERE captured_at = (SELECT max(captured_at) FROM player_xref);

CREATE OR REPLACE VIEW unresolved_current AS
  SELECT * FROM unresolved
  WHERE captured_at = (SELECT max(captured_at) FROM unresolved);
