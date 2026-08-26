# Fantasy Football ADP Arbitrage System — Build Plan

**Date:** 2026-07-26 · **Target season:** 2026 (drafts happening now — data is live)

> **This is the original planning document, kept as-written.** It's background on *why* things were built the way they were, not a live description of the system today — for that, see [README.md](./README.md). The three biggest divergences from what's below:
>
> - **Sources changed.** beatadp (§0.2) and FantasyPros (§0.5, including expert rankings / ECR) were both replaced by **Yahoo's own API** after both scrapes broke in production. FantasyPros ECR has no key-free replacement, so that signal — §1's "Experts vs. market" — no longer exists. **nflverse** was added as a fourth source, feeding strength of schedule. See [README.md — Data sources](./README.md#data-sources).
> - **§5's natural-language layer was tried and dropped.** The system is CLI-only (`values`/`tiers`/`sos`/`rising`/`report`) by deliberate choice, not because §5 wasn't reached — see [README.md — Status](./README.md#status).
> - **The persisted-metrics schema below was never built.** §4 and §4.2 sketch `league_configs`, `replacement_levels`, and `metrics_gold` tables; none exist. Replacement levels and VORP are computed in-process per run rather than stored. The sections are annotated inline with what actually shipped.
>
> Everything else — the entity-resolution method (§0.6, §3, now [CROSSWALK.md](./CROSSWALK.md)), the analytical reasoning in §2, the format-vs-config split ([FORMATS.md](./FORMATS.md)) — still holds and matches the current implementation.
>
> *Audited against the codebase 2026-08-25; annotations below carry that date.*

---

## 0. Findings from live API probes

Everything below was verified by hitting the real endpoints on 2026-07-26, not recalled from docs.

| Source | Auth | ADP? | Projections? | Status |
|---|---|---|---|---|
| **ESPN** (direct API) | None for read | ✅ real ADP | ✅ Yes | **Verified working** |
| **Sleeper** (via beatadp.com) | None | ✅ real ADP | ❌ | **Verified working** |
| **FantasyPros** (via beatadp.com) | None | ✅ real ADP | ❌ | **Verified working** |
| **FantasyPros ECR** (public pages) | None | ⚠️ ECR, *not* ADP — plus `rank_std` | ❌ | **Verified working** |
| Sleeper (direct API) | None | ❌ **No ADP exists** | ❌ | Verified absent |
| FantasyPros (official API) | API key | — | — | 403 — key-gated, no open path |
| Yahoo | OAuth2 | — | — | **Dropped** — approval process not worth it |
| FantasyFootballCalculator | None | — | — | **Dropped** |

**Three sources with real ADP**, which restores the cross-platform median (§2.3) that two sources couldn't support — plus an independent expert-ranking series carrying the dispersion metric.

### 0.1 ESPN — works, and is the richest source

```
GET https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/2026/segments/0/leaguedefaults/3
    ?view=kona_player_info
Header: x-fantasy-filter: {"players":{"limit":300,"sortDraftRanks":{"sortPriority":100,"sortAsc":true,"value":"PPR"}}}
```

`leaguedefaults/{N}` is the key — it gives a league-less default-scoring context. `3` = PPR.
Enumerate `1`/`2`/`3` to capture standard / half-PPR / PPR separately.

Returns per player:
- `ownership.averageDraftPosition` → **the ADP** (Gibbs 1.66, Bijan 2.58, Nacua 3.65)
- `draftRanksByRankType.{PPR,STANDARD}` → `rank` + **`auctionValue`** (enables auction/dollar analysis)
- `stats[]` → **projections**: `statSourceId=1` (projected) + `statSplitTypeId=0` (full season) + `seasonId=2026`
  → Gibbs 365.1, Bijan 352.5. `statSourceId=0` is actual/historical.
- Also carries weekly projections (`statSplitTypeId=1`) — useful later for playoff-schedule analysis.

⚠️ Note: `.../leagues/0?view=kona_player_info` (a widely-circulated recipe) now **404s**. `leaguedefaults` is the current path. `seasons/2026/players?view=players_wl` works but has **no ADP** — metadata only.

### 0.2 Sleeper ADP — solved via beatadp.com

Sleeper's own API has **no ADP** (§0.4). `beatadp.com/platform-adp` publishes it, and the data is cleanly machine-readable.

**Format: PPR, 1QB** — confirmed on the page, and exactly the canonical format in §2.

The page is Next.js server-rendered (815 KB). There is no `/api/` route, but the full dataset is embedded as JSON in the RSC payload:

```json
{"player":{"id":535,"fullName":"Bijan Robinson","position":"RB","teamId":"ATL"},
 "adps":{"ESPN":2,"SLEEPER":1.4,"FANTASYPROS":3.15},
 "consensus":2.183333333333333}
```

Parse with a regex over the escaped payload — **350 players extracted cleanly** in testing.

**Per-source coverage (of 350 rows):** FantasyPros 329 · ESPN 285 · Sleeper 237.

Sleeper's 237 looks thin until you bucket it by draft position — the gap is entirely past pick 180, i.e. players who go undrafted in a 12-team league:

```
picks   0- 24 (rd  1- 2): 100% sleeper
picks  24- 60 (rd  3- 5): 100%
picks  60- 96 (rd  6- 8):  96%
picks  96-132 (rd  9-11): 100%   ← "late rounds"
picks 132-180 (rd 12-15): 100%   ← "late rounds"
picks 180-400 (rd 16-33):  52%   ← undrafted; doesn't matter
```

**Coverage is effectively complete across the entire drafted pool**, including the late-round range your example query targets.

### 0.3 ⚠️ beatadp's ESPN column is *rank*, not ADP — don't use it

Audited every value in each column for whether it's an integer:

```
ESPN     n=285   non-integer values:   0  (  0%)
SLEEPER  n=237   non-integer values: 228  ( 96%)
```

A real averaged ADP is almost never a whole number. **Every single ESPN value is an integer**, and they line up exactly with ESPN's `draftRanksByRankType.rank` rather than its `averageDraftPosition`:

| Player | beatadp "ESPN" | ESPN true ADP (verified §0.1) |
|---|---|---|
| Jahmyr Gibbs | 1 | **1.66** |
| Bijan Robinson | 2 | **2.58** |
| Puka Nacua | 3 | **3.65** |

Sleeper at 96% non-integer is a genuine averaged ADP. FantasyPros likewise (1.72, 3.14, 8.87…).

**Two consequences:**

1. **Ignore beatadp's ESPN column entirely.** Pull ESPN straight from its own API (§0.1) — free, no auth, real decimal ADP, plus projections and auction values beatadp doesn't carry.
2. **Do not use beatadp's `consensus` field.** It averages a *rank* series with two *ADP* series, which is not a meaningful quantity. Bijan's `2.183` = mean(2, 1.4, 3.15) — mixing units. Compute your own consensus from the three real-ADP series.

### 0.4 Sleeper's own API — no ADP, confirmed

`https://sleeper.app/graphql` introspection returns **238 query fields; none expose ADP**. The commonly cited `adp_dynasty_2qb`-style query does not exist on the schema. The REST API has no ADP endpoint either. This is why beatadp is the path.

Confirmed against the official docs at `docs.sleeper.com`: **ADP appears nowhere in the documentation**, matching the introspection result. The API is read-only and needs no token.

**Still worth ingesting from Sleeper directly — and cheaper than the plan first assumed:**

The docs list query params on the players endpoint that do work. Measured:

| Request | Size | vs full dump |
|---|---|---|
| `/v1/players/nfl` | 14.6 MB (12,201 players) | baseline |
| `?active=true` | 11.4 MB | 78% |
| `?position=QB` | 0.57 MB (477 players) | **4%** |
| `?position=` × QB+RB+WR+TE | **4.99 MB** | **34%** |

**Field parity verified** — a position-filtered player carries all 53 fields the full dump does, crosswalk IDs included. So fetch the four fantasy positions instead of the 14.6 MB blob: same data, one third the bytes.

> ⚠️ K and DEF are *not* in those four. Add `?position=K` and `?position=DEF` if you want a complete draft board — easy to lose silently.

Other useful endpoints:

- **`GET /v1/state/nfl`** — returns `{"season": "2026", "season_type": "off", "week": 0, ...}`. **Use this instead of hardcoding the season anywhere.** `season_type` also tells the cron when preseason flips to regular season.
- `GET /v1/players/nfl/trending/{add,drop}?lookback_hours=24&limit=N` — waiver add/drop velocity.
- `GET /v1/draft/{draft_id}/picks` — real picks, if you know the draft ID (see the fallback note in §7).

**Rate limit, quoted from the docs:** *"stay under 1000 API calls per minute, otherwise, you risk being IP-blocked"*, and the players endpoint should be *"called sparingly...once per day at most"* with data *"saved on your own servers."* One daily pull, cached — well inside the limit.

### 0.5 FantasyPros — API is closed, public pages are open

**The API needs a key. There is no unauthenticated path to it.**

```
GET api.fantasypros.com/public/v2/json/nfl/2026/consensus-rankings  → 403 {"message":"Forbidden"}
GET api.fantasypros.com/v2/json/nfl/2026/consensus-rankings         → 403 Forbidden
GET api.fantasypros.com/public/v2/json/nfl/adp                      → 403 "Missing Authentication Token"
   ...same 403 when sending a dummy x-api-key header
```

It's AWS API Gateway behind a key-based scheme (not OAuth — so there's no consent flow to complete, just a key you don't have). Access requires a partner/paid agreement.

**But the public rankings pages return 200 and embed the full dataset as JSON.** Scoring format is selected by *URL*, not query param — `?scoring=PPR` is silently ignored and returns STD:

| URL | `scoring` |
|---|---|
| `/nfl/rankings/consensus-cheatsheets.php` | `STD` |
| **`/nfl/rankings/ppr-cheatsheets.php`** | **`PPR`** ← use this |
| `/nfl/rankings/half-point-ppr-cheatsheets.php` | `HALF` |

Parse `var ecrData = {...};` — **495 players, 73 experts**:

| Field | Example | Notes |
|---|---|---|
| `rank_ecr` | `1` | Integer consensus rank |
| `rank_ave` | `"2.07"` | 91% non-integer — a genuine average |
| `rank_std` | `"1.26"` | 95% non-integer — **dispersion** |
| `rank_min` / `rank_max` | `"1"` / `"8"` | Expert range |
| `pos_rank` | `"RB1"` | |
| `player_ecr_delta` | `null` | Movement; populates in season |
| `player_id` | `22968` | FantasyPros' own ID |

> ⚠️ **Values are JSON strings, not numbers.** `rank_ave` is `"2.07"`, not `2.07`. Coerce on ingest — a naive numeric type check silently treats every row as an integer. (I hit exactly this while auditing and had to redo it.)

> ⚠️ **`adpData` is a misnomer — it contains no ADP.** Despite the name it's just `[{"player_id":23133,"rank_ecr":1}, ...]`, an ID→rank map. Ignore it.

**This is ECR, not ADP — do not merge the two.** Expert Consensus Ranking is what 73 analysts *say*; ADP is what drafters *actually do*. Different quantities, different uses. This is the same unit-mixing trap as §0.3, and the fix is the same: keep them in separate columns.

**Two things this buys you:**

1. **`rank_std` restores the dispersion metric** lost when FFC was dropped — you can once again separate "the market disagrees about this player" from "stable price, differs by platform."
2. **A third, independent *kind* of signal** — expert opinion vs. market behavior. See §1.

FantasyPros **ADP** still comes from beatadp (verified real decimals). These pages supply **ECR** alongside it.

### 0.6 The ID crosswalk — was the biggest trap, now solved

> ✅ **Resolved.** A tiered resolver reaches **100% / 99.8% / 99.4%** across beatadp, FantasyPros, and ESPN — 3 unmatched out of 1,195 rows, versus the 44% baseline documented below. Working implementation and full method: **[CROSSWALK.md](./CROSSWALK.md)** · [`src/resolve/crosswalk.ts`](./src/resolve/crosswalk.ts). The analysis below is retained as the reason it needed solving.

Sleeper's player dump carries `espn_id` / `yahoo_id` fields, which look like a free Rosetta Stone. Measured coverage among the 511 fantasy-relevant players (`search_rank < 400`, QB/RB/WR/TE):

```
espn_id : 225/511 = 44% coverage
yahoo_id: 226/511 = 44% coverage
```

Missing include **Bucky Irving, Omarion Hampton, Khalil Shakir, Kyle Pitts, Puka Nacua, Kayshon Boutte** — exactly the players an ADP tool is about. The crosswalk is stale for anyone drafted after ~2022.

**Consequence: entity resolution is a first-class component, not a utility function.** Budget real time for it (§3).

---

## 1. What the system actually does

Originally three analytically distinct products; now two — **signal C below was retired along with FantasyPros ECR** (see the note at the top of this document). Conflating what remains is still the most common way these tools go wrong.

**A. Market arbitrage** — *same player, different price across platforms.*
> "Puka Nacua goes 4.9 on Sleeper but 3.65 on ESPN → he's meaningfully cheaper in Sleeper drafts."

Actionable only if you know which platform you're drafting on. This is the cross-platform comparison you asked for. Shipped as `report`'s leave-one-out arbitrage table.

**B. Value vs. projection (VORP/VBD)** — *is this player worth his cost at all?*
> "This QB is going in round 12 but projects as QB14 — that's a value."

This is what "value" and "bust" conventionally mean in fantasy, and it needs projections (ESPN and Sleeper both supply them, blended — see §4.1's note on why one alone isn't enough). Shipped as `values`.

~~**C. Experts vs. market (ECR vs. ADP)**~~ *— retired.* Depended entirely on FantasyPros' expert consensus rankings, which no key-free source replaces. Was genuinely a different axis from A and B — A is *where* to draft him, B is *whether* he's worth it on projections, C would have been *whether informed opinion has caught up with the market*. Left here so a future signal source (if one ever publishes something similar) has a description of what to reconnect.

**With C gone, the best signal is the intersection of what's left:** cheap on your platform *and* underpriced vs. projection. A player who's cheap everywhere isn't an arbitrage — the market simply agrees he's bad.

---

## 2. Why raw ADP diffs are misleading (the core analytical problem)

You cannot subtract ESPN ADP from Sleeper ADP and call the result signal. Five confounds:

1. **Scoring** — PPR vs half vs standard shifts RB/WR/TE substantially. Compare like to like.
2. **League size** — pick 24 is round 2 in a 12-team, round 3 in a 10-team. Convert to rounds, not raw picks.
3. **Roster construction** — **superflex/2QB moves QBs by 3+ rounds.** Directly relevant to your example question; a "value QB" in 1QB is a completely different player than in superflex.
4. **Population sharpness** — ESPN's user base skews casual; Sleeper's skews younger and sharper. A systematic gap between them is a *population* effect, not a player-specific edge. **This is the single biggest source of false positives.**
5. **Recency** — an injury Tuesday moves one platform's trailing average faster than another's depending on sample window.

### Normalization pipeline

1. **Pin a canonical format for *arbitrage*; derive everything else from league config.** Cross-platform ADP comparison is limited to 12-team PPR 1QB (the only format all three sources publish). But VORP, replacement levels, tiers, and strategy are **computed from a roster config**, so they work for any league — superflex, 2-flex, no-kicker, TE-premium. This split is the core of **[FORMATS.md](./FORMATS.md)**; don't model format as a flat tag on ADP rows.
2. **ADP → overall pick → `round.pick`.** Humans think in rounds; "late rounds" is only meaningful once you have this.
3. **Correct for population drift before differencing.** Originally planned as a fitted monotone map (**isotonic regression**) from each platform's paired ADP *values* onto a reference — never built. What shipped instead is simpler and turned out to be sufficient: **leave-one-out median**, comparing each source against the median of the *other* sources rather than fitting a curve. With 3 real ADP sources (ESPN/Sleeper/Yahoo) this localizes the true outlier the same way a fitted correction would, without needing enough historical pairs to fit one. See `report.ts`'s arbitrage query.

   > ⚠️ **Do not use rank/quantile normalization (`PERCENT_RANK`) for this** — still true regardless of which correction method is used. It's purely ordinal: when two platforms agree on ordering, every gap collapses to zero even where magnitudes differ by half a round — erasing exactly the arbitrage you're looking for. Demonstrated in [STACK-TYPESCRIPT.md §2](./STACK-TYPESCRIPT.md).
4. **Weight by confidence.** Originally planned around FantasyPros' `rank_std` (§0.5, across 73 experts) — gone along with FantasyPros. What shipped instead measures a different, still-useful thing: how far ESPN's and Sleeper's own point *projections* disagree for a player, not expert-panel dispersion. See `metrics/confidence.ts`'s `modelAgreement` and `values`' `espn_pts`/`sleeper_pts` columns, which show the disagreement directly rather than collapsing it into a single "confidence" score — a choice made after an earlier version of that score itself caused confusion (a wide model spread on an elite player read as a bust warning, which was backwards).
5. **Distinguish two kinds of disagreement:** *cross-platform* gap (arbitrage) vs. *within-source* dispersion (genuine uncertainty — committee backfield, injury question). Different meanings, don't merge them.

### Value & bust metrics

- **VORP**: projected points − replacement-level points at that position. **Replacement level is derived from the league config, never hardcoded** — greedy starter-fill over the projection pool gives QB10/RB23/WR27/TE10 in a 10-team 1-flex, but QB24 in a 12-team superflex. Shipped as [`src/metrics/replacement.ts`](./src/metrics/replacement.ts) and [`src/metrics/vorp.ts`](./src/metrics/vorp.ts); measured tables in [FORMATS.md §3](./FORMATS.md).
- **Value score**: VORP-implied rank − actual ADP rank. Large positive = underpriced. Shipped as `values`, with four filters this section didn't anticipate — see [README.md](./README.md#what-it-finds) for why each one had to be added.
- ~~**Bust score**: the inverse, weighted by downside risk (age, injury history, target competition).~~ **Never built** (2026-08-25). None of the three inputs named here are available: no source in the pipeline publishes injury history or target competition, and age would have to come from a birthdate field the `players` spine doesn't carry. What partially covers the same ground is `values`' side-by-side `espn_pts`/`sleeper_pts` columns — a wide gap between two independent projections is the closest thing to a downside-risk flag the current data supports, and §2 point 4 explains why it's shown raw rather than scored.
- **Tiers**: cluster per position and detect gaps. "Take the last guy in a tier before the cliff" is more actionable than a flat ranking, and it's how good drafters actually think. ⚠️ Shipped clustering on **ADP, not projected points** as written here — points alone put every elite RB in a tier of one. See [README.md](./README.md#what-it-finds).

---

## 3. Entity resolution — ✅ solved

Full method and measurements: **[CROSSWALK.md](./CROSSWALK.md)**. Implementation: [`src/resolve/crosswalk.ts`](./src/resolve/crosswalk.ts) (~120 lines) — same mechanism the original spike prototyped, now resolving ESPN/Sleeper/Yahoo instead of ESPN/beatadp/FantasyPros.

Measured against live data at the time: **beatadp 100.0% · FantasyPros 99.8% · ESPN 99.4%** — 3 unresolved out of 1,195 rows, from a 44% baseline. (Historical numbers — see CROSSWALK.md for why the mechanism transfers regardless of which sources feed it.)

Tiered resolution against Sleeper as canonical spine: team abbreviation (defenses) → deterministic `espn_id` → exact normalized name + position → Jaro-Winkler ≥ 0.92 blocked by position. Notably **`fuzzy` fires zero times** once names are normalized — it's a safety net, not a load-bearing step.

What actually mattered wasn't better fuzzy matching but two structural fixes: **unifying the position vocabulary** across sources (`DST`/`D/ST`→`DEF`, `FB`/`HB`→`RB` — position was a blocking key, so every mismatch was a silent miss) and **matching defenses by team abbreviation rather than name**. Plus a four-entry alias file for genuine nicknames.

---

## 4. Architecture

**Stack: TypeScript.** Every library below was verified working on Node v24.11.1 — see [STACK-TYPESCRIPT.md](./STACK-TYPESCRIPT.md) for the version table and the runnable proofs.

| Layer | Choice | Why |
|---|---|---|
| Language | **TypeScript on Node 24** | Already installed — no runtime upgrade needed. One language across ingest, metrics, API, and UI. |
| HTTP | native `fetch` + `p-retry` | `fetch` is built in; retries with backoff |
| Validation | **`zod` 4** | The Pydantic role. Ideal for the large untyped ESPN payload: `.passthrough()` / `.catch()` pin the fields you need and fail loudly when a source drifts |
| Storage | **DuckDB + Parquet** (`@duckdb/node-api`) | Embedded, zero ops. See [STORAGE.md](./STORAGE.md) |
| Dataframes | DuckDB SQL (+ `arquero` if needed) | The pipeline is SQL-shaped; pandas isn't missed |
| Stats | `simple-statistics` + 25-line PAVA | `ckmeans` for tiering, hand-rolled isotonic. See §4.1 |
| Fuzzy matching | `talisman` (Jaro-Winkler) | Load-bearing in [`src/resolve/crosswalk.ts`](./src/resolve/crosswalk.ts) |
| ~~API + UI~~ | ~~**Next.js** (route handlers + React)~~ | **Never installed** — no app was built (§5) |
| ~~LLM~~ | ~~`@anthropic-ai/sdk`~~ | **Never installed** — no tool-calling layer to define schemas for (§5) |
| Schedule | GitHub Actions cron | Daily pulls |

**Shipped dependency list** (2026-08-25) is shorter than the table above: `@duckdb/node-api`, `p-retry`, `simple-statistics`, `talisman`, `zod` — plus `tsx`/`typescript`/`@types/node` in dev. `arquero` was listed as an optional dataframe layer and never needed; DuckDB SQL covered it. Scripts run under `tsx`; `package.json` sets `engines.node >= 22`.

### 4.1 The one real gap, and why it's not a problem

Python's genuine advantage here is scipy/sklearn. In practice this pipeline needs four statistical primitives, and all four are covered:

| Need | TypeScript answer |
|---|---|
| Tiering | `simple-statistics.ckmeans` — Jenks natural breaks. **Better than `sklearn.KMeans` for this**: exact and deterministic in 1-D, where KMeans is a general n-dimensional solver with random init |
| Isotonic regression | 25 lines of PAVA — the only real scipy dependency, and short enough to own outright |
| Fuzzy name matching | `talisman` Jaro-Winkler |
| Everything else | DuckDB SQL |

⚠️ **Isotonic regression was never needed** (2026-08-25). Population-drift correction shipped as leave-one-out median instead (§2, point 3), so the one genuine scipy dependency never entered the codebase. The implementation is kept as reference in [STACK-TYPESCRIPT.md §1.3](./STACK-TYPESCRIPT.md), not in `src/`.

**The decision fork, stated plainly:** this holds as long as you *consume* ESPN's projections. If you later want to **model projections yourself** — gradient boosting on historical stats, bayesian hierarchical models, opponent adjustments — Python wins decisively and there is no TS equivalent worth using. That would be a separate service, not a rewrite of this one.

**The first component was written in TypeScript** — the resolver reaches 99.4–100% on 1,195 rows ([CROSSWALK.md](./CROSSWALK.md)) and ported into the pipeline as `src/resolve/crosswalk.ts` unchanged.

### 4.2 Project structure

The planned layout below assumed a Next.js API + React UI and a `tools/` tool-calling layer (§5) — neither was built; §5 was tried and dropped in favor of staying CLI-only. What actually shipped, for reference (see [README.md — Layout](./README.md#layout) for the maintained version):

```
fantasy-adp/
  src/
    config.ts   types.ts                             # source endpoints, shared types
    ingest/     espn.ts  sleeper.ts  sleeper-projections.ts  yahoo.ts  nflverse.ts
    resolve/    crosswalk.ts  normalize.ts
    metrics/    confidence.ts  grade.ts  league-config.ts  momentum.ts  projections.ts
                replacement.ts  rounds.ts  sos.ts  tiers.ts  vorp.ts
    lib/        http.ts  bronze.ts  assert.ts  render.ts
    db/         schema.sql  client.ts
    scripts/    daily-ingest.ts  report.ts  values.ts  tiers.ts  sos.ts  rising.ts
  data/         bronze/ silver/ gold/
  .github/workflows/  ingest.yml  ci.yml
```

Added since this was written: `ingest/nflverse.ts` and `metrics/sos.ts` (strength of schedule), `metrics/momentum.ts` and `scripts/rising.ts` (ADP movement off the snapshot history), `metrics/grade.ts` (the A–F curve shared by `values` and `sos`), plus `config.ts`/`types.ts` at the root of `src/`. Tests live next to what they test as `*.test.ts` and run under `tsx --test`.

No `app/`, no `schema/*.zod.ts` directory (validation lives inline in each ingest module instead), no `tools/`. Zod is still used (§4), just not for tool-calling schemas — there's no tool-calling layer to define them for.

**Runtime note:** use Node, not Bun. `@duckdb/node-api` ships native bindings and Bun's node-api compatibility is the kind of thing that costs an evening. Use `tsx` to run TS scripts directly.

**Medallion data layout** — non-negotiable given the sources are undocumented and drift:

```
data/
  bronze/  raw immutable payloads, gzipped, partitioned by source + capture_date
  silver/  normalized, ID-resolved, format-tagged
  gold/    computed metrics (arbitrage, VORP, tiers)
```

Keeping bronze means an ESPN schema change costs you a reparse, not a re-collection. **ADP is a time series** — snapshot daily and never overwrite. That history is what powers "who's rising/falling," which is one of the most valuable features and is impossible to backfill if you don't start now. **Start collecting on day one, even before the analysis works.**

### Schema sketch

> ⚠️ **Superseded.** [`src/db/schema.sql`](./src/db/schema.sql) is the live schema and the only authoritative version; it carries the reasoning for each table in comments. The sketch below is what was planned. Kept for the *asymmetry* argument under it, which still holds.

```sql
players(player_id PK, full_name, position, team, birthdate, rookie_year)
player_xref(player_id, source, source_player_id, tier, score)   -- see CROSSWALK.md

-- keyed by the SOURCE's own format (what they publish)
adp_snapshots(player_id, source, adp_format, adp, sample_size,
              auction_value, captured_at)                      -- append-only
ecr_snapshots(player_id, source, ecr_format, rank_ecr, rank_ave,
              rank_std, rank_min, rank_max, captured_at)       -- ECR ≠ ADP, §0.5
projections(player_id, source, scoring, proj_points, captured_at)

-- keyed by the USER's league config (what they play)
league_configs(config_id PK, teams, scoring, te_premium,
               qb, rb, wr, te, flex, superflex, k, dst, bench)
replacement_levels(config_id, position, repl_index, repl_points, computed_at)
metrics_gold(player_id, config_id, norm_adp_by_source, arb_gap_rounds,
             vorp, value_score, tier, computed_at)
```

**How the shipped schema differs** (2026-08-25):

- **The bottom three tables don't exist.** `league_configs`, `replacement_levels`, and `metrics_gold` were never created. Replacement levels and VORP are recomputed in-process on every `values`/`tiers` run from `metrics/league-config.ts`'s `DEFAULT_CONFIG` — cheap enough (a few hundred players) that persisting them would add a staleness class of bug for no gain. Nothing is stored keyed by config.
- **Three tables exist that aren't sketched here.** `rank_snapshots` (ESPN's per-format draft ranks — *not* ADP, kept separate for the §0.3 reason), `sos_ratings` (strength of schedule; deliberately **not** a time series, keyed by `(season, basis_season)` and replaced wholesale), and `unresolved` (crosswalk misses, surfaced rather than dropped — CROSSWALK.md's "absent from spine" policy).
- **`players` carries different columns** — `display_name`, `espn_id`, `search_rank`, `active`, `captured_at`. No `birthdate` or `rookie_year`, which is why the bust score in §2 has no age input.
- **`player_xref` persists `(player_id, source, source_id, source_name, resolve_tier, captured_at)`** — the resolve tier is stored, the fuzzy score isn't.
- **`adp_snapshots` has no `sample_size`** — no source publishes one.
- **`ecr_snapshots` is a frozen archive.** Nothing writes it since FantasyPros was dropped; it holds 2026-07-27..2026-08-16 and `ecr_current` is empty on a fresh database.
- **`*_current` views were added** — `adp_current`, `projections_current`, and friends, each pinned to the latest `captured_at`. These matter more than they look: the tables are append-only, so an unscoped join across two capture dates silently returns duplicated rows rather than erroring, and an aggregate over them can come back half-right. The views exist so the safe query is the default one. See the comment block in `schema.sql`.

**The asymmetry is deliberate:** ADP/ECR rows carry the *source's* format; metrics carry the *user's* config. See [FORMATS.md §2](./FORMATS.md) — conflating the two is what limits a tool like this to one league type. That split survived into the implementation even though the config-keyed tables didn't: the config is a runtime object rather than a stored row.

Idempotency key: `(source, adp_format, capture_date)`. Re-running a day's ingest overwrites cleanly.

---

## 5. The natural-language layer — tried, dropped

> **Not built, and no longer planned.** A CLI-based query interface (`values`/`tiers`/`report`) turned out to answer the same questions this section designs for, without a chat layer on top. The design below is kept for the reasoning — the tool-boundary argument in particular is a decision worth remembering even outside this project — but nothing past this point describes the current system. See [README.md — Status](./README.md#status).

**Do not use text-to-SQL.** Use **tool calling over typed functions**, with all math in TypeScript/SQL:

```ts
findValuePlayers({ position, roundMin, roundMax, leagueConfig })
compareAdp({ playerName, platforms })
findArbitrage({ minGapRounds, position, roundRange })      // PPR/1QB only
valueVsProjection({ position, roundRange, leagueConfig })
expertsVsMarket({ position, roundRange, leagueConfig })    // ECR vs ADP — §1C
getTiers({ position, leagueConfig })
getReplacementLevels({ leagueConfig })                     // drives strategy answers
getAdpTrend({ playerName, days })                          // needs snapshot history
playerDetail({ playerName, leagueConfig })
```

> ⚠️ **`leagueConfig` is not optional.** *"Find me value QBs in the late rounds"* has a genuinely different answer in 1QB vs superflex — the same player is a reach in one and a steal in the other. Store a config per user, or ask once and remember it. Defaulting silently to 12-team PPR 1QB gives superflex users confidently wrong answers. Where a source can't cover their format, say so: *"Sleeper ADP isn't published for superflex — showing ESPN superflex ranks and config-derived VORP instead."* See [FORMATS.md §4](./FORMATS.md).

Define each with a Zod schema and derive the Anthropic tool definition from it via `z.toJSONSchema()` — one declaration drives both runtime validation and what the model is told, so the two cannot drift:

```ts
const findValuePlayers = z.object({
  position:  z.enum(['QB','RB','WR','TE','K','DEF']),
  roundMin:  z.number().int().min(1).max(20),
  roundMax:  z.number().int().min(1).max(20),
});
// tool definition ← z.toJSONSchema(findValuePlayers)
// handler input   ← findValuePlayers.parse(toolUse.input)
```

Claude parses *"Find me value QBs in the late rounds"* → `value_vs_projection(position="QB", round_min=9, round_max=16)` and `find_arbitrage(position="QB", ...)`, then narrates the returned rows.

**Why this design:**
- Numbers are computed deterministically — the LLM never does arithmetic on rankings, so it can't hallucinate an ADP.
- Reproducible and auditable: same question → same numbers.
- Cheap and fast; small token payloads.
- Easy to unit-test the analytics independently of the LLM.

**Needed supporting pieces:**
- A **jargon glossary** in the system prompt: "late rounds" → 9–16, plus *sleeper, bust, reach, zero-RB, hero-RB, flex, handcuff, league-winner*. Fantasy vocabulary is dense and non-obvious.
- **Explicit assumption echo**: every answer states "12-team PPR, 1QB" — because the answer is wrong for superflex and the user must see which frame they got.
- **Clarify vs. assume**: if format is ambiguous and it materially changes the answer (QB questions especially), ask; otherwise assume the default and say so.
- **Show the work**: return a table with ADP per platform, projection, VORP, and gap — not just prose. The table is the product; the prose is the summary.

---

## 6. Phased delivery

**Phase 0 — Spike.** ✅ **Done — see §0.** All three sources verified working, no external approvals outstanding.

**Phase 1 — Ingestion + storage.** ✅ **Done, though not as planned.** beatadp (RSC parse) and FantasyPros both shipped, then both broke in production and were replaced by Yahoo's own API. ESPN direct API and Sleeper's player dump held up as designed. Bronze writes, daily cron, retry/backoff, schema validation — all in place; see [README.md — Automation](./README.md#automation).

**Phase 2 — Entity resolution.** ✅ *Solved ahead of schedule — see [CROSSWALK.md](./CROSSWALK.md).* The spike resolver was ported into the pipeline as [`src/resolve/crosswalk.ts`](./src/resolve/crosswalk.ts), and the CI coverage gate (unresolved top-200 fails the ingest) is live in `daily-ingest.ts`. Was budgeted 2–3 days as a top schedule risk; that risk was retired, and stayed retired through a full source swap.

**Phase 3 — Normalization + metrics.** ✅ **Done, by a simpler route than planned.** Format-aware round conversion, VORP, tiers, and arbitrage gaps all shipped. Population-drift correction shipped as leave-one-out median rather than the planned isotonic regression (§2, point 3) — simpler, and sufficient with 3 real ADP sources. "Confidence intervals" shipped as direct per-source number comparison (§2, point 4) rather than a computed interval, after an earlier attempt at a single confidence *score* proved actively misleading.

**Phase 4 — Query API + NL layer.** ❌ **Dropped.** Tried, then deliberately abandoned in favor of the CLI (§5's banner has the reasoning). No Next.js, no chat UI, no tool-calling loop.

**Phase 5 — Stretch.** ✅ **Done.** "Who's rising" — ADP trend/momentum off the snapshot history — shipped 2026-08-25 as `npm run rising`, built on the daily captures that had been accumulating in `data/silver/adp_snapshots.parquet` since day one. Two things shipped here that this plan never anticipated at all: **strength of schedule** (`npm run sos`), which added nflverse as a fourth source, and the **published daily report** (`REPORT.md` + the Actions job summary), which took over the job the dropped Phase 4 app was meant to do.

Auction-value mode was also listed here and is **removed from the roadmap** (2026-08-25) — not deferred, not a decision. ESPN's and Yahoo's auction numbers still land in `adp_snapshots.auction_value` and `rank_snapshots.auction_value` on every run, since they arrive free in payloads already being parsed, so the history is there if that ever changes.

**Nothing is queued after this point.** The phased plan is complete or deliberately closed at every step. Future work should start from [README.md](./README.md), not from this list.

---

## 7. Risks

| Risk | Severity | Mitigation |
|---|---|---|
| ~~**beatadp is a scrape, not an API**~~ | ~~High~~ → **materialized, then retired** | ✅ **This happened.** beatadp redeployed and the RSC parse broke in production — exactly the predicted failure. The speculative draft-crawl fallback below was never built and turned out not to be needed: Sleeper ADP moved to Sleeper's own projections endpoint directly, and the FantasyPros half of beatadp's job moved to Yahoo's API. Both replacements are real APIs, not scrapes, so this entire risk category is gone rather than mitigated. |

**Fallback if beatadp breaks — historical, not implemented.** Left here as-written for the record; it wasn't how the actual break was handled. The idea was computing Sleeper ADP from `/v1/draft/{id}/picks`, but discovering draft IDs at scale (no public directory) made it a poor fit for a market-representative sample. What actually happened was simpler: Sleeper's projections endpoint turned out to carry ADP too, which is why it stopped needing beatadp at all rather than needing a fallback for it.
| ~~ID crosswalk only 44%~~ | ~~High~~ → **Low** | ✅ **Solved** — tiered resolver hits 99.4–100% ([CROSSWALK.md](./CROSSWALK.md)). Residual risk is only maintenance: keep the alias file current and hold the CI gate on top-200 coverage. Held up across the beatadp/FantasyPros → Yahoo swap without changes to the resolver itself. |
| **Mixing rank with ADP** | High | Caught three times now, not once — beatadp's ESPN column (§0.3), ESPN's `SUPERFLEX` rank type, and (2026-08-14, in production) Sleeper's own coverage expansion dragging the whole-series non-integer ratio down as legitimately-thin deep-bench ADP piled up. That third one is why the assertion is scoped to the **top 300 by draft position**, not the whole series — see `lib/assert.ts`. Still ≥80% non-integer as the threshold. |
| **ESPN endpoints undocumented** | Medium | They already moved once (`leagues/0` → `leaguedefaults`). Keep bronze; contract-test daily; alert on schema drift |
| **Population bias faked as signal** | Medium | Shipped as leave-one-out median rather than the isotonic normalization planned here (§2, point 3) — otherwise every ESPN player looks like an arbitrage |
| **Format coverage is uneven** | Medium | Sleeper and Yahoo are both **PPR/1QB only**; ESPN's ADP is one global series regardless of `leaguedefaults`. Mitigate by splitting ADP-dependent from config-derived features ([FORMATS.md §2](./FORMATS.md)) — arbitrage stays PPR/1QB, VORP/tiers/strategy work for any config |
| **Rank leaking into an ADP column** | Medium | Caught repeatedly — see the "Mixing rank with ADP" row above, same underlying guard. `ecr_snapshots` is now a frozen archive (nothing writes to it since FantasyPros was dropped) rather than a live table to keep separate from `adp_snapshots`, but the separation itself is still in the schema. |
| **Rookies break matching in August** | Medium | CI assertion on top-200 coverage; run daily during draft season |

**Terms of service:** ESPN's and Yahoo's fantasy APIs are both undocumented and unofficial. **One request per day, identify your user-agent, cache aggressively, never hammer.** All of this is fine for a personal tool; redistributing or commercializing any of it is a different conversation — revisit licensing before any launch.

---

## 8. Immediate next steps — all done, kept for the record

1. ~~Scaffold the repo + write the two ingesters (ESPN direct, beatadp RSC parse).~~ Done — and the beatadp half was later replaced (see §7).
2. ~~Wire the ingest-time assertion that rejects a rank series masquerading as ADP (§0.3).~~ Done, and since refined to scope the check to the top 300 by draft position (§7).
3. ~~**Get the daily cron running this week.**~~ Running since 2026-07-27, with one real gap: 2026-08-14, when a false-positive from the assertion above (before it was scoped to top 300) failed a run that had genuinely healthy data. Everything else has been captured. See [README.md — Automation](./README.md#automation) for what the pipeline does now, including the failure-notification and history-loss guards added after that incident.

The two root-level spike prototypes this document originally pointed at — `crosswalk-resolver.mjs` and `replacement-levels.mjs` — were **deleted on 2026-08-25**. Both had been dead for weeks: nothing imported them, and they read fixture files from a scratchpad directory that no longer exists, so neither could still run. Their logic lives in `src/resolve/crosswalk.ts` and `src/metrics/replacement.ts`, which is what every reference in these docs now points to. Recoverable from git history if the original spike form is ever wanted.

For what to actually work on next, this list is no longer it — see [README.md](./README.md) and the open items there.
