# League Formats & Strategy

Extends the [PLAN.md §0](./PLAN.md) spike. All findings measured live on 2026-07-26. Working calculator: [`src/metrics/replacement.ts`](./src/metrics/replacement.ts).

> **§1–§3 describe the shipped system. §4 does not** — it proposes a persisted config schema and an NL layer, neither of which was built. See the banner on §4. *Audited 2026-08-25.*

The original plan pinned one canonical format (12-team PPR 1QB) and treated format as a tag on ADP rows. That's too thin: format doesn't just shift prices, **it changes which strategy is correct**. This document reworks the model around that.

---

## 1. What formats we can actually get

Original spike results below (2026-07-26) measured this against ESPN, Sleeper-via-beatadp, and FantasyPros — the only sources available at the time. Sleeper ADP now comes directly from Sleeper's own API instead of beatadp, and Yahoo has since been added. The table shows what each source publishes; ✅ marks what is actually **ingested**, which for Sleeper is one series out of twelve (see below).

| Format | ESPN ADP | ESPN rank | Sleeper ADP | Yahoo ADP |
|---|---|---|---|---|
| **PPR, 1QB** | ✅ | ✅ `PPR` | ✅ `adp_ppr` | ✅ (unlabeled — see below) |
| **Standard** | ⚠️ *same series* | ✅ `STANDARD` | 📦 `adp_std` | ❌ |
| **Half PPR** | ⚠️ *same series* | ❌ | 📦 `adp_half_ppr` | ❌ |
| **Superflex** | ⚠️ *same series* | ✅ `SUPERFLEX` | 📦 `adp_2qb` | ❌ |
| **Dynasty** (4 variants) | ❌ | ❌ | 📦 `adp_dynasty*` | ❌ |
| **IDP / rookie** | ❌ | ❌ | 📦 `adp_idp*`, `adp_rookie` | ❌ |
| TE premium | ❌ | ❌ | ❌ | ❌ |

✅ published **and ingested** · 📦 published, **fetched daily, discarded at parse** · ⚠️ present but not format-specific · ❌ not published

**ESPN projections were also mis-recorded here.** The `⚠️ same series` marks above are correct for ADP but say nothing about projected points, which *do* vary by format: ESPN serves Standard at `leaguedefaults/1`, PPR at `/3`, and Half-PPR at `/8`. Only `/3` is ingested. See [PLAN.md §0.1](./PLAN.md) for the corrected endpoint map.

### ⚠️ ESPN's ADP is a single global series

`leaguedefaults/1` and `leaguedefaults/3` return **byte-identical ADP** (Gibbs 1.66, Bijan 2.60, Nacua 3.65 in both). The `leaguedefaults` ID does *not* select a scoring-specific ADP.

What *is* format-specific is `draftRanksByRankType`, which carries four variants: `STANDARD`, `PPR`, `ELIMINATION`, **`SUPERFLEX`**.

**So for any non-PPR format, ESPN gives you ranks, not ADP** — the same rank-vs-ADP unit distinction as [PLAN.md §0.3](./PLAN.md). Don't let a superflex rank enter an ADP column.

### Yahoo ADP is PPR/1QB only — Sleeper is not

> ⚠️ **Corrected 2026-08-25.** This section previously claimed Sleeper "exposes one series, no format parameter" and that Sleeper and Yahoo ADP "exist for PPR/1QB and nothing else." That is true of Yahoo and **false of Sleeper**. The original probe was against beatadp, a third-party republisher of Sleeper's data, and the finding was carried forward unchanged when Sleeper's own API replaced it — the two are not the same surface.

Originally probed against beatadp — `?scoring=HALF_PPR`, `?format=SUPERFLEX`, `?qb=SUPERFLEX`, `?teams=10` were **all ignored**, identical payload every time. That was a real constraint on *beatadp*.

**Sleeper's own endpoint publishes twelve ADP series**, all in the single payload the daily ingest already fetches (verified in `data/bronze/sleeper/projections/2026-08-20`):

```
adp_ppr          adp_half_ppr     adp_std          adp_2qb
adp_dynasty      adp_dynasty_ppr  adp_dynasty_std  adp_dynasty_half_ppr
adp_dynasty_2qb  adp_idp          adp_idp_1qb      adp_rookie
```

Only `adp_ppr` is ingested. The other eleven are parsed past and discarded — deliberately, not by oversight; see the comment on `parseSleeperAdp` in [`src/ingest/sleeper-projections.ts`](./src/ingest/sleeper-projections.ts), which names the join-fanout risk that adding formats would create in `adp_current`.

**Yahoo** is genuinely single-series: its `pub-api-ro` response carries no scoring metadata to select or even confirm against, so its ADP is captured as `YAHOO_DEFAULT` rather than asserted to be any specific format.

#### How far apart the formats actually are

Measured across the 154 players inside the draftable range (PPR ADP < 156, the cutoff `values` uses), from the 2026-08-20 capture:

| vs PPR | median gap | p90 | max |
|---|---|---|---|
| Half-PPR | **3.8 picks** | 15.6 | 43.8 |
| Standard | 6.9 picks | 26.1 | 69.6 |
| 2QB (superflex) | 11.9 picks | 55.1 | 79.4 |

Half-PPR sits inside normal day-to-day ADP drift — for practical purposes it *is* the PPR board. Standard moves the typical player about half a round, with a tail of roughly fifteen players moving two rounds or more. Superflex is a different board, which independently corroborates the ESPN superflex ranks above.

⚠️ One day's snapshot, Sleeper only, and the `max` column is individual players who may be thin-sample. Enough to answer "does format move ADP"; not enough to build on.

**Why this doesn't change the PPR pin on arbitrage.** The constraint is narrower than "no source publishes other formats" — it's that **ESPN and Yahoo** publish PPR only, so a three-source consensus can exist in PPR and nowhere else. Sleeper's superflex series alone can't produce a leave-one-out median; one source has nothing to be an outlier against. The pin stands, for a more specific reason than the one previously written here.

### ESPN's superflex ranks are real — and dramatic

| Player | PPR rank | SUPERFLEX rank | Δ |
|---|---|---|---|
| Joe Burrow | 108 | **11** | +97 |
| Lamar Jackson | 88 | **6** | +82 |
| Drake Maye | 89 | **7** | +82 |
| Jalen Hurts | 90 | **10** | +80 |
| Josh Allen | 36 | **5** | +31 |
| *Jahmyr Gibbs (control)* | *1* | *8* | *−7* |

This confirms the "superflex moves QBs 3+ rounds" claim with measured data, and it means **superflex is genuinely supported** — via ESPN ranks, just not via ADP. (Originally also corroborated by FantasyPros' superflex ECR page; that signal is gone along with FantasyPros — see [README.md](./README.md#data-sources).)

---

## 2. The architectural split that resolves this

Format-sensitivity divides into two classes with completely different data requirements. Conflating them is why the original plan felt stuck.

| | **ADP-dependent** | **Config-derived** |
|---|---|---|
| Features | Cross-platform arbitrage, ADP trends | VORP, replacement levels, tiers, positional scarcity, strategy guidance |
| Needs | Format-matched ADP *from each source* | Projections + a roster config |
| Constraint | **Limited to what sources publish** (PPR/1QB for the full three-source set) | **Works for any configuration you can describe** |

The second column is the important one. **Replacement level is computed, not sourced.** Given projections and a roster config, you can produce correct VORP for 10-team 2-flex no-kicker half-PPR TE-premium — a format no source publishes and never will.

That covers nearly everything in your examples. Two-flex, no-kicker, league size, superflex roster math: all config-derived. Only the *cross-platform arbitrage* view stays pinned to PPR/1QB.

**Design consequence:** stop modelling `format_id` as a tag on ADP rows. Model a **league configuration** as a first-class object, and let replacement levels derive from it.

```ts
type LeagueConfig = {
  teams: number;                       // 8, 10, 12, 14
  scoring: 'STD' | 'HALF' | 'PPR';
  tePremium: number;                   // bonus PPR for TE, usually 0 or 0.5
  starters: {
    qb: number; rb: number; wr: number; te: number;
    flex: number;                      // RB/WR/TE
    superflex: number;                 // QB/RB/WR/TE
    k: number; dst: number;            // 0 disables the position entirely
  };
  benchSize: number;
};
```

✅ **Shipped essentially verbatim** as `LeagueConfigSchema` in [`src/metrics/league-config.ts`](./src/metrics/league-config.ts) — a Zod schema rather than a bare type, so a config is validated at the boundary like any source payload, with `starters` defaulting to 1QB/2RB/2WR/1TE/1FLEX/1K/1DST.

⚠️ **But there is no way to set one from the CLI** (2026-08-25). Every script — `values`, `tiers`, `sos`, `rising` — imports `DEFAULT_CONFIG` (12-team PPR, 1QB) and uses it unchanged; no flag overrides it. So the claim in the table above is precise but easy to over-read: the **metrics layer** genuinely works for any config you can describe, and `replacement.ts` will correctly return QB24 for a superflex config if you hand it one. Nothing hands it one. Making superflex or 10-team actually reachable is a CLI flag threaded through four scripts, not new analysis — the arithmetic underneath is already config-general and tested.

---

## 3. Testing your strategy hypothesis

You proposed: *10-team → prioritize elite onesies (QB/TE), because every roster is stacked so positional advantage is the remaining edge.*

I ran it against real ESPN 2026 projections (342 players) using greedy starter-fill to derive replacement level per config. "Elite-onesie edge" = `(QB1 + TE1 VORP) / (RB1 + WR1 VORP)` — higher means onesies matter more relative to flex positions.

```
config                     QB              RB              WR              TE
10-team  1QB 1flex    QB10   80pt    RB23  160pt    WR27  151pt    TE10   82pt
12-team  1QB 1flex    QB12   83pt    RB27  174pt    WR33  168pt    TE12   89pt
12-team  1QB 2flex    QB12   83pt    RB32  189pt    WR40  182pt    TE12   89pt
12-team  SUPERFLEX    QB24  132pt    RB27  174pt    WR33  168pt    TE12   89pt

elite-onesie edge:
  10-team  1QB 1flex    0.520   #####################
  12-team  1QB 1flex    0.504   ####################
  12-team  1QB 2flex    0.465   ###################
  12-team  SUPERFLEX    0.645   ##########################
```

**Your intuition is directionally correct — 10-team does favor onesies more than 12-team (0.520 vs 0.504).** But the honest read is that it's the *weakest* of the three levers tested:

| Lever | Effect on onesie edge |
|---|---|
| 12-team → 10-team | **+3%** |
| 1-flex → 2-flex | **−8%** (adding a flex meaningfully *devalues* onesies) |
| 1QB → superflex | **+28%** |

Two things worth internalizing:

1. **Roster construction dominates league size.** Going from one flex to two moves the needle nearly 3× as much as dropping two teams. If you're building strategy guidance, weight flex/superflex configuration far above team count.
2. **Even in a 10-team, elite RB/WR VORP (160/151) is roughly double elite QB/TE (80/82).** The onesie heuristic is a real *relative* shift, not a reason to invert the draft board. Presenting it as "take elite QB/TE early in 10-team" would overstate what the numbers support.

**The mechanism, stated properly:** shallower leagues raise replacement level at *every* position, which shrinks VORP everywhere. It shrinks *less* at QB/TE because those talent pools are thin — there's one elite tier regardless of league size — while RB/WR pools are deep enough that the next man up is nearly as good. That's why the ratio moves. It's not that onesies gain value; it's that flex positions lose more.

**And the payoff:** none of this needs hardcoded heuristics. Correct replacement levels *derive* the strategy. Feed the config in, and "10-team favors onesies slightly, superflex favors them enormously" falls out of the arithmetic — which also means it stays correct for configs nobody wrote a heuristic for.

---

## 4. What this changes in the build

> ⚠️ **This section is a proposal that was not implemented as written.** The *reasoning* held and drove the design; the *mechanism* did not. Each part is annotated below with what actually shipped. Audited 2026-08-25.

**Schema** — replace the flat `formats` table:

```sql
league_configs(config_id PK, teams, scoring, te_premium,
               qb, rb, wr, te, flex, superflex, k, dst, bench)
replacement_levels(config_id, position, repl_index, repl_points, computed_at)
metrics_gold(player_id, config_id, vorp, value_score, tier, ...)   -- keyed by config
adp_snapshots(player_id, source, adp_format, adp, ...)             -- source's own format
```

Note `metrics_gold` is keyed by **config**, while `adp_snapshots` is keyed by the **source's** format. That asymmetry is the split from §2 made concrete.

**What shipped instead:** only the last line. `adp_snapshots` exists and is keyed by the source's own format exactly as written. The first three tables were never created — there is no `league_configs`, no `replacement_levels`, no `metrics_gold` in [`src/db/schema.sql`](./src/db/schema.sql).

The asymmetry survived anyway, in a different shape: the config is a **runtime object, not a stored row**, and everything keyed by it is recomputed per run rather than persisted. For a few hundred players that costs milliseconds, and it removes a whole class of bug — a stored `replacement_levels` row goes stale the moment projections update, and nothing in a daily pipeline would tell you it had. Persisting metrics only pays off once something needs to read them without recomputing, which for a CLI that recomputes in under a second is not yet true.

The one real cost of not persisting: there's no history of how VORP or tiers moved over the season, only how *ADP* moved (`rising` reads `adp_snapshots`). Recovering that later means either backfilling from the projection history — which *is* captured, in `projections` — or starting to store computed metrics from that day forward.

**Scoring affects projections, not just replacement level.** ESPN's projections come from `leaguedefaults/3` and are PPR. For half-PPR/standard you must re-derive from component stats (receptions × delta) rather than reusing the PPR total. Half-PPR is *not* the midpoint of two rank lists.

> **Half right, corrected 2026-08-25.** The re-derivation requirement is **wrong**: ESPN serves all three scorings natively (`/1` Standard, `/3` PPR, `/8` Half-PPR — see [PLAN.md §0.1](./PLAN.md)), so nothing needs deriving from component stats. Sleeper already ingests all three itself — `pts_ppr`, `pts_half_ppr`, `pts_std` — so `projections_current` holds ~634 HALF and ~633 STD rows today, at parity with PPR.
>
> What **is** still true is the trap: `LeagueConfigSchema` accepts `scoring: 'STD' | 'HALF' | 'PPR'`, and `values.ts` filters on `pr.scoring = <config scoring>`, but ESPN contributes PPR only — so in HALF or STD every player has one projection source, `values`' 2-source guard rejects all of them, and the board comes back **empty rather than wrong**. Silently accepting a scoring flag is still the one option that isn't safe.
>
> Closing that gap is roughly half a day: fetch `/1` and `/8` alongside `/3` (taking projections from all three but ADP and ranks from `/3` only — ADP is one global series, so writing it three times is the `adp_current` fanout bug), then thread `--scoring=` through `values` and `tiers`. Everything downstream is already scoring-general: `blendProjections` keys on `${playerId}|${scoring}`, and `replacement.ts`/`vorp.ts` consume whatever points they're handed.
>
> **Scoped and declined** (2026-08-25), so this stays documented rather than built. Measured on Sleeper's three scorings, position rank barely moves: QB is identical across all three, TE averages 1.3 spots, RB 2.15, WR 2.6. The real signal is about a dozen WR/RB — Rashee Rice WR12→WR24 in Standard, Mike Evans WR21→WR12 — which didn't justify taking REPORT.md from 254 lines to ~584, printing an identical QB board three times.

~~**The NL layer must know the user's league.**~~ **Moot — there is no NL layer** (see [PLAN.md §5](./PLAN.md)). The argument is kept because it transfers directly to the CLI, where it's still unresolved:

> *"Find me value QBs in the late rounds"* has genuinely different answers in 1QB vs superflex — the same player is a reach in one and a steal in the other. Three options, in order of preference:
>
> 1. **Store a league config per user** and apply it silently. Best UX.
> 2. **Ask once at session start**, then remember it.
> 3. **Default to 12-team PPR 1QB and state the assumption in every answer** — the weakest, because a superflex user gets confidently wrong answers.

**The CLI landed on option 3**, and does the "state the assumption" half properly — every command prints its league line (`league: 12-team PPR, 1QB/2RB/2WR/1TE/1FLEX`) and its replacement levels above the table, so the frame is never implicit. What it can't do is the other half: there's no flag to change the config, so a superflex drafter can *see* that the numbers are 1QB but can't ask for anything else. See the note in §2.

**Coverage caveat on the numbers above.** The 342-player projection pool is ESPN's top 350; QB and TE depth (49/50) is adequate for 12-team superflex (QB24) but thin for deeper configs. Production should pull a wider projection set before computing replacement levels for 14-team or deep-bench formats.

> **Unchanged, and still the binding constraint** (2026-08-25). `src/config.ts` still requests ESPN's top 350. What did change is that projections are now **blended across ESPN and Sleeper** (`metrics/projections.ts`), which deepened the pool without widening the ESPN request — Sleeper projects players ESPN's top 350 cuts off. It also fixed a separate problem: ESPN alone compresses the middle of every position so hard that six startable RBs land within a projected point of each other, which makes tiering and grading meaningless regardless of pool depth. The blend is load-bearing, not a redundancy.
