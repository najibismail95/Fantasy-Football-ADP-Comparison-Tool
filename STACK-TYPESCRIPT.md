# TypeScript Stack — Verification Record

**TypeScript is the chosen stack.** [PLAN.md §4](./PLAN.md) is the canonical stack table and project structure; this document is the evidence behind it — every library run on Node v24.11.1 on 2026-07-26, with the runnable proofs. See [PLAN.md's top-of-file note](./PLAN.md) for what's changed since — the short version: sources changed (beatadp/FantasyPros → Yahoo), and the natural-language layer (§7 below, PLAN.md §5) was tried and dropped.

Keep this around for two reasons: §2 documents a **correction to the normalization method** that applies regardless of language, and §1.3 contains a working isotonic regression implementation — reference material rather than something in use, since what shipped is the simpler leave-one-out median instead (see PLAN.md §2, point 3, for why).

---

## Why it holds up

The pipeline is SQL-shaped plus about four statistical primitives — not machine learning. All four have working TS equivalents (§1), and DuckDB does the dataframe work in SQL regardless of host language. The one scenario that would change the answer is in §5.

---

## 1. Verified library support

| Need | Package | Version | Verified |
|---|---|---|---|
| Analytics DB | `@duckdb/node-api` | 1.5.5-r.2 | ✅ ran queries |
| LLM tool-calling | `@anthropic-ai/sdk` | 0.115.0 | ✅ present |
| Payload validation (Pydantic role) | `zod` | 4.4.3 | ✅ present |
| Tiering / stats | `simple-statistics` | 7.9.3 | ✅ ran `ckmeans` |
| Fuzzy name matching | `talisman` | 1.1.4 | ✅ ran Jaro-Winkler |
| In-memory dataframe (optional) | `arquero` | 8.0.3 | ✅ present |

Node v24.11.1 is already installed. **This removes the Python 3.9.6 → 3.12 upgrade from the critical path.**

### 1.1 Tiering — `ckmeans` is better than the Python default

`simple-statistics.ckmeans` is Jenks natural-breaks / 1-D optimal k-means. For tiering by projected points it is *strictly better* than reaching for `sklearn.KMeans`, which is a general n-dimensional solver with random initialization. `ckmeans` is exact, deterministic, and purpose-built for one dimension.

Run on QB projections:

```
Tier 4: Allen(402), Jackson(395), Daniels(372)
Tier 3: Burrow(360), Mahomes(330)
Tier 2: Nix(292), Goff(288), Herbert(285)
Tier 1: Stroud(262), Darnold(258), Rodgers(241)
```

It found the tier cliff exactly where a human drafter would draw it.

### 1.2 Name matching — Jaro-Winkler handles the 56% crosswalk gap

```
0.940  "A.J. Brown"          ~ "AJ Brown"
0.958  "Marvin Harrison Jr." ~ "Marvin Harrison"
0.956  "Kenneth Walker III"  ~ "Kenneth Walker"
0.950  "Brian Thomas Jr."    ~ "Brian Thomas"
0.589  "Josh Allen"          ~ "Keenan Allen"     <-- correctly rejected
```

A threshold around **0.90**, applied *within* a `(position, team)` block, cleanly separates true matches from the dangerous same-surname false positive. This is the single most important correctness property in the whole system and TS handles it fine.

### 1.3 Isotonic regression — 25 lines, no scipy needed

The only genuine scipy dependency. Pool-Adjacent-Violators is short enough to own:

```ts
export function isotonic(y: number[]): number[] {
  const stack: {val:number; wt:number; lo:number; hi:number}[] = [];
  for (let i = 0; i < y.length; i++) {
    let cur = { val: y[i], wt: 1, lo: i, hi: i };
    while (stack.length && stack[stack.length-1].val >= cur.val) {
      const p = stack.pop()!;
      const wt = p.wt + cur.wt;
      cur = { val: (p.val*p.wt + cur.val*cur.wt)/wt, wt, lo: p.lo, hi: cur.hi };
    }
    stack.push(cur);
  }
  const out = new Array<number>(y.length);
  for (const b of stack) for (let i = b.lo; i <= b.hi; i++) out[i] = b.val;
  return out;
}
```

Verified against paired ADP where ESPN drafts QBs systematically later, with one planted outlier — see §2.

---

## 2. ⚠️ Correction to PLAN.md §2.3

**The original plan said "quantile normalization," and implementing that literally with SQL `PERCENT_RANK()` is wrong — it destroys the signal.**

Tested in DuckDB across two platforms:

```
player      espn   ffc    pctile_gap
Nabers      22     24.5   0
Gibbs       2      1.8    0
Chase       3      4.1    0
Bowers      18     12     0     <-- a 6-pick real gap, reported as zero
```

Percent-rank is purely ordinal. When two platforms agree on *ordering*, every gap collapses to zero even where the magnitudes differ by half a round. Bowers at 18 vs 12 is exactly the arbitrage the system exists to find, and rank normalization erases it.

**The correct method:** fit a monotone map between the two platforms' paired ADP *values* via isotonic regression, then take the residual in pick units.

```
player     ffc   espn   expected_espn   residual_picks   rounds
Allen      12    14     14              0                0
Jackson    15    18     18              0                0
Mahomes    28    33     33              0                0
Daniels    30    62     55             +7               +0.58
Burrow     41    48     55             -7               -0.58
Herbert    66    74     74              0                0
Nix        95   104    104              0                0
```

The systematic population shift (ESPN drafting QBs 2–12 picks later across the board) is absorbed by the monotone map and correctly reports **zero** for the six players who merely reflect it. Only the genuine disagreement surfaces, in interpretable units.

**Caveat worth knowing:** isotonic pooling flags *both* members of a rank inversion — Daniels and Burrow split ±7 between them. Attribution is shared, not individual. With three or more platforms, compare each platform against the cross-platform **median** rather than pairwise, which localizes the deviation to the actual outlier.

---

## 3. Stack table

Moved to **[PLAN.md §4](./PLAN.md)** — that's the canonical version. This document keeps only the verification evidence.

---

## 4. Where TypeScript is genuinely better here

**Zod on untyped upstream payloads.** The ESPN response is a large, undocumented, drift-prone object. Zod's `.passthrough()`, `.catch()`, and discriminated unions let you pin down the ten fields you need while tolerating everything else, and fail loudly at the boundary when ESPN moves a field — which they already did once (`leagues/0` → `leaguedefaults`).

**One language end to end.** Ingest scripts, metrics, API routes, tool definitions, and UI share types. The tool-call argument types and the React table props come from the same source. In the Python plan those are three separate type boundaries.

**Tool-calling ergonomics.** Zod 4 has native `z.toJSONSchema()`, so a tool schema is declared once and used for both runtime validation and the Anthropic tool definition — no drift between what the model is told and what the function accepts.

---

## 5. The one thing that would change the answer

**If you later decide to model projections yourself** — gradient boosting on historical stats, bayesian hierarchical models, opponent adjustments — Python wins decisively. There is no TS equivalent of XGBoost/statsmodels/PyMC worth using, and hand-rolling is not viable.

That is **not** a reason to reconsider now. The current design consumes ESPN's and Sleeper's projections (verified available in each payload, blended in `metrics/projections.ts`), and everything on top — arbitrage, VORP, tiering — is arithmetic and SQL. (Originally also "ECR comparison" — retired along with FantasyPros, see PLAN.md.) If projection modeling ever happens, it belongs in a **separate Python service** writing into the same DuckDB/Parquet layer, not a rewrite of this one.

Secondary losses, all minor: no notebook workflow for exploration (mitigate with the DuckDB CLI); a smaller pool of copy-pasteable fantasy-analytics code, which skews Python.

Not a concern: JS numbers are IEEE-754 float64, identical to Python floats. No precision difference.

---

## 6. Deployment consequence worth planning for — moot, no app was built

This section planned for a Next.js app serving Parquet over Vercel; that app was never built (§7's natural-language layer, which this was deployment for, was tried and dropped). Kept for the reasoning, which resolved in the simplest of the three options actually listed below — worth noting for what it's worth.

Vercel's filesystem is ephemeral, so a local DuckDB file won't persist between requests. The clean serverless shape:

1. **GitHub Actions** runs the daily ingest on a cron.
2. It writes Parquet snapshots to **Cloudflare R2** (or S3).
3. The Next.js app queries those Parquet files **directly over HTTPS** via DuckDB's `httpfs` extension — no database server at all.

This is near-zero cost, keeps the append-only snapshot history intact, and the ingest runs on a schedule independent of the app. If you'd rather keep it simple, a single small VPS or even just running locally works identically — the DuckDB file is portable.

**What actually happened:** step 1, unchanged. Steps 2–3 never applied — there's no app to serve to. GitHub Actions commits the Parquet straight back into the repo instead of R2/S3, and `REPORT.md` plus the Actions job summary serve the role an app would have (see [README.md — Automation](./README.md#automation)). Closest to the "just running locally" option mentioned above, except automated rather than local.

---

## 7. Project structure

Moved to **[PLAN.md §4.2](./PLAN.md)**.

Phasing is in [PLAN.md §6](./PLAN.md). Phases 1–3 are all done — entity resolution ([CROSSWALK.md](./CROSSWALK.md)), ingestion, and normalization/metrics. Phase 4 (the NL layer) was tried and dropped rather than completed; see PLAN.md §6 for the full picture.
