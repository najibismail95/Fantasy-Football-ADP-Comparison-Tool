# Entity Resolution — Solved

Answers [PLAN.md §0.6](./PLAN.md) ("the ID crosswalk is the biggest hidden trap"). Working implementation: [`crosswalk-resolver.mjs`](./crosswalk-resolver.mjs), later ported into [`src/resolve/crosswalk.ts`](./src/resolve/crosswalk.ts). All numbers below measured against live data on 2026-07-26, back when beatadp and FantasyPros were still ingested sources — both have since been replaced by Yahoo's own API (see [README.md](./README.md#data-sources)).

The numbers are kept as historical validation of the *design*, not a claim about current sources: the mechanism described here — tiered resolution, name normalization, the team-join for defenses, the 0.92 fuzzy threshold — is exactly what `crosswalk.ts` still does today against ESPN, Sleeper, and Yahoo. Swapping a source has never required touching the resolver itself, only which raw fields feed into it.

---

## Result (original spike, ESPN + beatadp + FantasyPros)

| Source | Rows | Resolved | Unmatched |
|---|---|---|---|
| **beatadp** (Sleeper + FantasyPros ADP) | 350 | **100.0%** | 0 |
| **FantasyPros ECR** | 495 | **99.8%** | 1 |
| **ESPN** | 350 | **99.4%** | 2 |

**3 unresolved out of 1,195 rows.** The starting point was Sleeper's built-in `espn_id` crosswalk at **44%** coverage.

Tier breakdown:

```
              team    id   exact  fuzzy  MISS
ESPN            22   101     225      0     2
beatadp          0     0     350      0     0
FantasyPros     28     0     466      0     1
```

Note `fuzzy=0` everywhere. **Once names are normalized properly, fuzzy matching is never needed** — it stays in as a safety net for in-season roster churn, not as a load-bearing step. That's a much stronger position than the original plan assumed.

---

## The design

**Canonical spine: Sleeper's player dump** (4,255 players at fantasy positions). It's the richest registry — positions, teams, active flags, and alternate IDs — and you're already pulling it daily.

Resolution runs in tiers, cheapest first, stopping at the first hit:

| Tier | Method | Catches |
|---|---|---|
| 1 | **Team abbreviation** (defenses only) | All 32 D/ST |
| 2 | **Deterministic `espn_id` join** | 101 ESPN rows |
| 3 | **Exact normalized name + position** | The overwhelming majority |
| 4 | **Jaro-Winkler ≥ 0.92**, blocked by position, tie-broken by team then relevance | Safety net |

### Four fixes that did the work

**1. Name normalization.** Lowercase, strip accents, drop punctuation (`A.J.` → `aj`, `Ja'Marr` → `jamarr`), remove generational suffixes (`Jr`, `III`), collapse whitespace.

**2. Position vocabulary is not shared across sources.** This one is invisible until it bites:

| Concept | Sleeper | ESPN | FantasyPros (original spike) |
|---|---|---|---|
| Defense | `DEF` | `16` | `DST` |
| Fullback | `FB` | `2` (RB) | `RB` |

Because position was a *blocking key*, every mismatch became a silent miss. Hunter Luepke is `FB` in Sleeper and `RB` everywhere else — he didn't fail fuzzy matching, he was never compared. Map everything through one vocabulary: `DST`/`D/ST` → `DEF`, `FB`/`HB` → `RB`, `PK` → `K`. The FantasyPros/`DST` mapping is now unreachable dead-source aliasing, kept intentionally rather than pruned — position is a blocking key, so a stale alias costs nothing while a missing one costs a silent miss. See `normPos` in `src/resolve/normalize.ts`.

**3. Match defenses by team, never by name.** Three irreconcilable conventions:

```
ESPN         "Broncos D/ST"
FantasyPros  "Denver Broncos"      (position "DST")
Sleeper      full_name: null, first_name "Denver", last_name "Broncos", player_id "DEN"
```

No name matcher bridges those. But every source knows the team, and Sleeper keys defenses by team abbreviation — so join on that and all 32 resolve deterministically. This single fix took ESPN 92% → 99.4% and FantasyPros 93% → 99.8%.

**4. A tiny alias file for genuine nicknames.** Four entries closed every remaining real-player gap:

```js
'hollywood brown'   → 'marquise brown'
'kenneth gainwell'  → 'kenny gainwell'
'cameron ward'      → 'cam ward'
'bam knight'        → 'zonovan knight'
```

These are unfixable by algorithm — Jaro-Winkler scores `hollywood brown` vs `marquise brown` near zero, correctly. Expect to add a handful each preseason. Keep it in version control.

### Bonus: the ESPN team map derives itself

ESPN returns `proTeamId: 8`, not `DET`. Rather than hardcode a 32-row table from memory, the resolver **derives it**: match players by name+position first, then take the modal Sleeper team for each `proTeamId`.

Measured result: **32 teams, agreement 1.00** — every single vote unanimous. Self-validating, and it survives ESPN renumbering a franchise.

---

## The 3 that remain — and why they're not matching bugs

| Player | Cause |
|---|---|
| Connor Heyward | Sleeper `TE`, ESPN `RB` — genuine cross-source disagreement (TE/FB tweener) |
| Riley Nowakowski | Same |
| Tommy Myers | **Not in Sleeper's dump at all** — a source that DID list him didn't have him in the spine |

Two distinct classes, each needing a policy decision rather than a better matcher:

**Position disagreement (2).** Relax tier 3: when name+position fails, retry on name+**team** and log the position conflict. Takes ESPN to 100%. Cheap, and the log tells you when sources are drifting.

**Absent from spine (1).** Nothing to match against. **Route these to an `unresolved` table and surface them — never drop them silently.** A player missing from your spine during draft season is exactly the rookie/UDFA case you most need to notice. Sleeper adds players fast, so most self-heal within a day.

---

## Operationalizing it

- **CI gate:** fail the build if any top-200-by-ADP player is unresolved. Catches August rookie-class breakage when it matters most.
- **Track tier distribution over time.** A rise in `fuzzy` or `MISS` is the earliest signal a source changed its naming.
- **Log every fuzzy match with its score** for spot-checking. At `fuzzy=0` today, any fuzzy hit is worth a look.
- **Keep the threshold at 0.92.** Verified earlier that it cleanly separates true matches (`Kenneth Walker III` ~ `Kenneth Walker` = 0.956) from the dangerous same-surname false positive (`Josh Allen` ~ `Keenan Allen` = 0.589).
- **`player_xref` spans four ID spaces** — yours, Sleeper's, ESPN's, and Yahoo's. Persist `(source, source_id, canonical_id, tier, score)` so every match is auditable after the fact.

---

## Revised effort estimate

PLAN.md §6 budgeted **2–3 days** for entity resolution as its own phase, and called it one of the two schedule risks. That was the right call given 44% coverage — but the problem is now solved and measured, and the implementation is ~120 lines.

**Revised to half a day, and it held.** [`crosswalk-resolver.mjs`](./crosswalk-resolver.mjs) was ported into the ingest pipeline as `src/resolve/crosswalk.ts`, the overrides file (`normalize.ts`'s `ALIASES`) is in place, and the CI coverage gate is live in `daily-ingest.ts`. All of PLAN.md §6's phases 1–3 are done now — see [PLAN.md §6](./PLAN.md) for the full status, including the one that was dropped rather than completed.
