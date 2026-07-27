# Fantasy Football ADP Arbitrage System — Build Plan

**Date:** 2026-07-26 · **Target season:** 2026 (drafts happening now — data is live)

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

> ✅ **Resolved.** A tiered resolver reaches **100% / 99.8% / 99.4%** across beatadp, FantasyPros, and ESPN — 3 unmatched out of 1,195 rows, versus the 44% baseline documented below. Working implementation and full method: **[CROSSWALK.md](./CROSSWALK.md)** · [`crosswalk-resolver.mjs`](./crosswalk-resolver.mjs). The analysis below is retained as the reason it needed solving.

Sleeper's player dump carries `espn_id` / `yahoo_id` fields, which look like a free Rosetta Stone. Measured coverage among the 511 fantasy-relevant players (`search_rank < 400`, QB/RB/WR/TE):

```
espn_id : 225/511 = 44% coverage
yahoo_id: 226/511 = 44% coverage
```

Missing include **Bucky Irving, Omarion Hampton, Khalil Shakir, Kyle Pitts, Puka Nacua, Kayshon Boutte** — exactly the players an ADP tool is about. The crosswalk is stale for anyone drafted after ~2022.

**Consequence: entity resolution is a first-class component, not a utility function.** Budget real time for it (§3).

---

## 1. What the system actually does

Three analytically distinct products. Conflating them is the most common way these tools go wrong.

**A. Market arbitrage** — *same player, different price across platforms.*
> "Puka Nacua goes 4.9 on Sleeper but 3.65 on ESPN → he's meaningfully cheaper in Sleeper drafts."

Actionable only if you know which platform you're drafting on. This is the cross-platform comparison you asked for.

**B. Value vs. projection (VORP/VBD)** — *is this player worth his cost at all?*
> "This QB is going in round 12 but projects as QB14 — that's a value."

This is what "value" and "bust" conventionally mean in fantasy, and it needs projections (which ESPN gives us free).

**C. Experts vs. market (ECR vs. ADP)** — *do the analysts and the drafting public disagree?*
> "FantasyPros' 73 experts rank him RB12; the market drafts him at RB25."

Newly available via §0.5, and a genuinely different axis from A and B. A is *where* to draft him, B is *whether* he's worth it on projections, C is *whether informed opinion has caught up with the market* — or the reverse. Expert consensus often moves before ADP does, which makes a wide ECR-vs-ADP gap a candidate leading indicator. It is also the one signal here you can compute on day one without waiting to accumulate snapshot history.

**The best signal is the intersection:** cheap on your platform *and* underpriced vs. projection *and* ranked above his cost by experts. A player who's cheap everywhere isn't an arbitrage — the market simply agrees he's bad.

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
3. **Correct for population drift before differencing.** Fit a monotone map (**isotonic regression**) from each platform's paired ADP *values* onto a reference. The residual *after* that map is the player-specific disagreement, in pick units. This removes confound #4, which naive subtraction leaves in.

   > ⚠️ **Do not use rank/quantile normalization (`PERCENT_RANK`) for this.** It is purely ordinal: when two platforms agree on ordering, every gap collapses to zero even where magnitudes differ by half a round — erasing exactly the arbitrage you're looking for. Demonstrated in [STACK-TYPESCRIPT.md §2](./STACK-TYPESCRIPT.md). Use isotonic on values, and with 3+ platforms compare each against the cross-platform **median** rather than pairwise, so deviation localizes to the true outlier instead of being split across both members of a rank inversion.
4. **Weight by confidence.** FantasyPros' `rank_std` (§0.5, across 73 experts) is your dispersion measure. High std → wider error bars. Report a gap as significant only when it clears the noise.
5. **Distinguish two kinds of disagreement:** *cross-platform* gap (arbitrage) vs. *within-source* dispersion (genuine uncertainty — committee backfield, injury question). Different meanings, don't merge them.

### Value & bust metrics

- **VORP**: projected points − replacement-level points at that position. **Replacement level is derived from the league config, never hardcoded** — greedy starter-fill over the projection pool gives QB10/RB23/WR27/TE10 in a 10-team 1-flex, but QB24 in a 12-team superflex. Working calculator: [`replacement-levels.mjs`](./replacement-levels.mjs); measured tables in [FORMATS.md §3](./FORMATS.md).
- **Value score**: VORP-implied rank − actual ADP rank. Large positive = underpriced.
- **Bust score**: the inverse, weighted by downside risk (age, injury history, target competition).
- **Tiers**: cluster projected points per position and detect gaps. "Take the last guy in a tier before the cliff" is more actionable than a flat ranking, and it's how good drafters actually think.

---

## 3. Entity resolution — ✅ solved

Full method and measurements: **[CROSSWALK.md](./CROSSWALK.md)**. Implementation: [`crosswalk-resolver.mjs`](./crosswalk-resolver.mjs) (TypeScript-ready, ~120 lines).

Measured against live data: **beatadp 100.0% · FantasyPros 99.8% · ESPN 99.4%** — 3 unresolved out of 1,195 rows, from a 44% baseline.

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
| Fuzzy matching | `talisman` (Jaro-Winkler) | Already load-bearing in [`crosswalk-resolver.mjs`](./crosswalk-resolver.mjs) |
| API + UI | **Next.js** (route handlers + React) | API and UI in one deploy; shared types end to end |
| LLM | `@anthropic-ai/sdk` | Zod 4's native `z.toJSONSchema()` declares each tool once for both runtime validation and the tool definition — no drift |
| Schedule | GitHub Actions cron | Daily pulls |

### 4.1 The one real gap, and why it's not a problem

Python's genuine advantage here is scipy/sklearn. In practice this pipeline needs four statistical primitives, and all four are covered:

| Need | TypeScript answer |
|---|---|
| Tiering | `simple-statistics.ckmeans` — Jenks natural breaks. **Better than `sklearn.KMeans` for this**: exact and deterministic in 1-D, where KMeans is a general n-dimensional solver with random init |
| Isotonic regression | 25 lines of PAVA — the only real scipy dependency, and short enough to own outright |
| Fuzzy name matching | `talisman` Jaro-Winkler |
| Everything else | DuckDB SQL |

**The decision fork, stated plainly:** this holds as long as you *consume* ESPN's projections. If you later want to **model projections yourself** — gradient boosting on historical stats, bayesian hierarchical models, opponent adjustments — Python wins decisively and there is no TS equivalent worth using. That would be a separate service, not a rewrite of this one.

**The first component is already written in TypeScript** — [`crosswalk-resolver.mjs`](./crosswalk-resolver.mjs) resolves 1,195 rows at 99.4–100% ([CROSSWALK.md](./CROSSWALK.md)). It ports into the pipeline as-is.

### 4.2 Project structure

```
fantasy-adp/
  src/
    ingest/     espn.ts  beatadp.ts  fantasypros.ts  sleeper.ts
    schema/     *.zod.ts                              # boundary validation
    resolve/    crosswalk.ts  aliases.ts              # from crosswalk-resolver.mjs
    metrics/    isotonic.ts  vorp.ts  tiers.ts  arbitrage.ts
    tools/      definitions.ts  handlers.ts           # Claude tool-calling
    db/         schema.sql  client.ts
  app/          api/chat/route.ts  page.tsx           # Next.js
  scripts/      daily-ingest.ts
  data/         bronze/ silver/ gold/
  .github/workflows/ingest.yml
```

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

**The asymmetry is deliberate:** ADP/ECR rows carry the *source's* format; metrics carry the *user's* config. See [FORMATS.md §2](./FORMATS.md) — conflating the two is what limits a tool like this to one league type.

Idempotency key: `(source, adp_format, capture_date)`. Re-running a day's ingest overwrites cleanly.

---

## 5. The natural-language layer

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

**Phase 1 — Ingestion + storage (2–3 days).** ESPN direct API (PPR via `leaguedefaults/3`), beatadp RSC parse (Sleeper + FantasyPros), Sleeper player dump for the canonical roster. Bronze writes, daily cron, retry/backoff, schema validation. **Ship this before analysis** so ADP history starts accumulating during draft season.

**Phase 2 — Entity resolution (½ day).** ✅ *Solved ahead of schedule — see [CROSSWALK.md](./CROSSWALK.md).* Remaining work is porting [`crosswalk-resolver.mjs`](./crosswalk-resolver.mjs) into the pipeline, adding the overrides file, and wiring the CI coverage gate. Was budgeted 2–3 days as a top schedule risk; that risk is retired.

**Phase 3 — Normalization + metrics (3–4 days).** Format-aware round conversion, quantile normalization, VORP, tiers, arbitrage gaps with confidence intervals. Gold tables.

**Phase 4 — Query API + NL layer (2–3 days).** Next.js route handlers, Zod-derived tool definitions, Claude tool-calling loop, jargon glossary, React chat UI.

**Phase 5 — Stretch (ongoing).** ADP trend/momentum charts off the snapshot history ("who's rising"), injury-news correlation, draft-day live assistant, auction-value mode using ESPN's `auctionValue`.

**Realistic total to a working v1: ~1.5 weeks of focused evenings.** With Phase 2 retired, **Phase 3 is the only remaining schedule risk.**

---

## 7. Risks

| Risk | Severity | Mitigation |
|---|---|---|
| **beatadp is a scrape, not an API** | **High** — it's now your only Sleeper source | No `/api/` route; you parse the RSC payload, which breaks on any Next.js redeploy. Keep bronze HTML; contract-test the parse daily; alert loudly on row-count drop. Document the draft-crawl fallback (below) without building it. |

**Fallback if beatadp breaks.** Compute Sleeper ADP yourself from `/v1/draft/{id}/picks`. Sleeper's published limit of 1000 calls/min is generous enough that the *volume* was never the obstacle — the obstacle is **discovering draft IDs**, since there's no public draft directory. You'd walk `user → /v1/user/{id}/leagues/nfl/{season} → /v1/league/{id}/drafts → picks`, which means seeding user IDs at scale. Viable for a small known cohort; unlikely to be market-representative. Keep it as a documented escape hatch, not a plan.
| ~~ID crosswalk only 44%~~ | ~~High~~ → **Low** | ✅ **Solved** — tiered resolver hits 99.4–100% ([CROSSWALK.md](./CROSSWALK.md)). Residual risk is only maintenance: keep the alias file current and hold the CI gate on top-200 coverage. |
| **Mixing rank with ADP** | High | Already caught once (§0.3). Assert on ingest that any column claiming to be ADP is ≥80% non-integer; fail the run if not |
| **ESPN endpoints undocumented** | Medium | They already moved once (`leagues/0` → `leaguedefaults`). Keep bronze; contract-test daily; alert on schema drift |
| **Population bias faked as signal** | Medium | Isotonic normalization before differencing (§2.3) — otherwise every ESPN player looks like an arbitrage |
| **Format coverage is uneven** | Medium | beatadp is **PPR/1QB only** (params ignored) and ESPN's ADP is one global series regardless of `leaguedefaults`. Mitigate by splitting ADP-dependent from config-derived features ([FORMATS.md §2](./FORMATS.md)) — arbitrage stays PPR/1QB, VORP/tiers/strategy work for any config |
| **Rank leaking into an ADP column** | Medium | Already caught twice — beatadp's ESPN column (§0.3) and ESPN's `SUPERFLEX` rank type. Enforce the ≥80%-non-integer assertion on every ADP field, and keep `ecr_snapshots` separate from `adp_snapshots` |
| **Rookies break matching in August** | Medium | CI assertion on top-200 coverage; run daily during draft season |

**Terms of service:** ESPN's fantasy API is undocumented and unofficial. beatadp is a third-party site with no published API — scraping it is a courtesy you should not abuse. **One request per day, identify your user-agent, cache aggressively, never hammer.** All of this is fine for a personal tool; redistributing or commercializing any of it is a different conversation — revisit licensing before any launch.

---

## 8. Immediate next steps

1. Scaffold the repo + write the two ingesters (ESPN direct, beatadp RSC parse).
2. Wire the ingest-time assertion that rejects a rank series masquerading as ADP (§0.3).
3. **Get the daily cron running this week** — every day without a snapshot is draft-season ADP history permanently lost, and it cannot be backfilled.

No external approvals are outstanding. Node 24 is already installed (see [STACK-TYPESCRIPT.md](./STACK-TYPESCRIPT.md)).
