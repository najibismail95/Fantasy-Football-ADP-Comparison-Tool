# Fantasy ADP report — 2026-10-24

_Snapshot 2026-10-24 · 89 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 165 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.72 | 170.1 | 99.3 |
| SLEEPER | 2498 | 1.4 | 700.9 | 87 |
| YAHOO | 221 | 1.3 | 143.9 | 90.5 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1175 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 2498 |
| YAHOO | exact | 200 |
| YAHOO | team | 21 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Alec Pierce | WR | 140.5 | 95.8 | 98.3 | ESPN | 3.6 | CHEAPER on ESPN | 131 |
| Brian Thomas Jr. | WR | 141.9 | 74.1 | 84.8 | ESPN | 5.2 | CHEAPER on ESPN | 128 |
| Bryce Young | QB | 125.1 | 226.3 | 106 | SLEEPER | 9.2 | CHEAPER on SLEEPER | 229 |
| C.J. Stroud | QB | 147.7 | 199 | 124.5 | SLEEPER | 5.2 | CHEAPER on SLEEPER | 222 |
| Chris Godwin Jr. | WR | 145.2 | 92.2 | 93.8 | ESPN | 4.4 | CHEAPER on ESPN | 138 |
| Dalton Kincaid | TE | 141.7 | 87.2 | 93.5 | ESPN | 4.3 | CHEAPER on ESPN | 129 |
| David Montgomery | RB | 108.6 | 46.2 | 53.1 | ESPN | 4.9 | CHEAPER on ESPN | 162 |
| Jacory Croskey-Merritt | RB | 154.8 | 115 | 104.4 | ESPN | 3.8 | CHEAPER on ESPN | 128 |
| Jadarian Price | RB | 117.9 | 61 | 63.1 | ESPN | 4.6 | CHEAPER on ESPN | 140 |
| Jalen Hurts | QB | 99.8 | 58.3 | 54.5 | ESPN | 3.6 | CHEAPER on ESPN | 311 |
| Jaylen Waddle | WR | 90.6 | 44 | 39.1 | ESPN | 4.1 | CHEAPER on ESPN | 169 |
| Jordan Mason | RB | 159.5 | 109.1 | 110.6 | ESPN | 4.1 | CHEAPER on ESPN | 133 |
| Justin Herbert | QB | 129.9 | 83.7 | 71.1 | ESPN | 4.4 | CHEAPER on ESPN | 213 |
| Ladd McConkey | WR | 83.8 | 35.7 | 46 | ESPN | 3.6 | CHEAPER on ESPN | 173 |
| MarShawn Lloyd | RB | 135.9 | 137.3 | 85.6 | YAHOO | 4.2 | pricier on YAHOO | 89 |
| Quentin Johnston | WR | 155.8 | 112 | 105.2 | ESPN | 3.9 | CHEAPER on ESPN | 117 |
| Rico Dowdle | RB | 137.3 | 86.5 | 88.5 | ESPN | 4.2 | CHEAPER on ESPN | 118 |
| TreVeyon Henderson | RB | 115.1 | 59.1 | 70.8 | ESPN | 4.2 | CHEAPER on ESPN | 125 |
| Tucker Kraft | TE | 106.2 | 64.3 | 59.6 | ESPN | 3.7 | CHEAPER on ESPN | 150 |
| Tyler Shough | QB | 142.4 | 181.8 | 121.7 | SLEEPER | 4.1 | CHEAPER on SLEEPER | 229 |


## Who’s rising


_Last 7 days, as of 2026-10-24. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Josh Jacobs | RB | 125.2 | 104.5 | 51.3 | 51.3 | — | — |
| Isaiah Likely | TE | 91.8 | 73.6 | 105.3 | 105.5 | 107.4 | 107.1 |
| Caleb Williams | QB | 113.4 | 96.2 | 71.4 | 71.4 | 65.4 | 65.4 |
| Jalen Coker | WR | 122.7 | 107.2 | 146.3 | 146.8 | 124.6 | 123.6 |
| Matthew Golden | WR | 103.7 | 89 | 125.9 | 126.1 | 121.7 | 121.1 |
| Jordan Love | QB | 147.1 | 136.5 | 158.2 | 158.8 | 119.7 | 119.5 |
| C.J. Stroud | QB | 159.4 | 149.7 | 199.5 | 199 | 124.8 | 124.5 |
| D'Andre Swift | RB | 61.4 | 53.5 | 49.1 | 49.2 | 43.8 | 43.7 |
| Trevor Lawrence | QB | 101.2 | 93.7 | 102.2 | 102.2 | 79.8 | 79.5 |
| Malik Nabers | WR | 38.5 | 31.6 | 27.3 | 27.3 | 30.1 | 30.1 |
| DeVonta Smith | WR | 56.3 | 49.4 | 33.7 | 33.7 | 29.6 | 29.7 |
| Stefon Diggs | WR | 127 | 120.6 | 104.5 | 104.2 | 106.9 | 106.7 |
| A.J. Brown | WR | 46 | 39.7 | 17.9 | 17.3 | 26.6 | 26.8 |
| Bhayshul Tuten | RB | 73.1 | 67.1 | 62.5 | 62.4 | 61.5 | 61.3 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Davante Adams | WR | 47.2 | 65.4 | 50 | 50.2 | 59 | 59 |
| Jalen Hurts | QB | 86.4 | 99.5 | 58.2 | 58.3 | 54.3 | 54.5 |
| Deebo Samuel Sr. | WR | 141.7 | 153.8 | 130.6 | 130.9 | 120.1 | 119.9 |
| Michael Wilson | WR | 98.3 | 109.2 | 88.4 | 88.1 | 100.4 | 100.1 |
| Juwan Johnson | TE | 139.3 | 149.5 | 175.2 | 175.9 | 118.8 | 118.7 |
| Tyler Warren | TE | 56.4 | 66.3 | 48 | 48 | 47.2 | 47.3 |
| Bucky Irving | RB | 53.6 | 63.2 | 43.9 | 43.9 | 51.6 | 51.5 |
| Jeremiyah Love | RB | 40.2 | 48.2 | 28.2 | 28.7 | 30.5 | 30.6 |
| Cam Skattebo | RB | 65.2 | 73.1 | 40.6 | 40.2 | 42.7 | 42.8 |
| Harold Fannin Jr. | TE | 94.1 | 101.4 | 73.5 | 73.6 | 71.2 | 71.3 |
| Dak Prescott | QB | 91.1 | 98.1 | 77.2 | 77.6 | 72.5 | 72.5 |
| Brian Robinson Jr. | RB | 157.7 | 164 | 173.5 | 173.5 | 115.3 | 115.2 |
| Quinshon Judkins | RB | 71.9 | 78.2 | 53.7 | 54 | 55 | 55 |
| David Montgomery | RB | 102 | 108.1 | 46.6 | 46.1 | 52.8 | 53.1 |
| Terry McLaurin | WR | 90.6 | 96.7 | 55.4 | 55.6 | 56.8 | 56.9 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 245pts, RB25 155pts, WR37 155pts, TE13 135pts, K13 102pts, DEF13 82pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2337 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_19 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_43 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brock Purdy | QB | 94.4 | 8.8 | QB10 | QB7 | B | 223 | 303 |
| Jared Goff | QB | 109.4 | 10 | QB13 | QB8 | B | 222 | 283 |
| Patrick Mahomes | QB | 103.2 | 9.5 | QB12 | QB9 | B | 213 | 287 |
| Trevor Lawrence | QB | 92.3 | 8.6 | QB9 | QB6 | B | 224 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 51.5 | 5.2 | RB19 | RB15 | B | 164 | 197 |
| Chuba Hubbard | RB | 81.2 | 7.7 | RB28 | RB22 | A | 179 | 148 |
| D'Andre Swift | RB | 49.2 | 5 | RB18 | RB13 | B | 170 | 208 |
| Jaylen Warren | RB | 74.5 | 7.1 | RB25 | RB17 | A | 175 | 171 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 65.2 | 6.4 | WR25 | WR19 | B | 173 | 208 |
| DK Metcalf | WR | 84.9 | 8 | WR32 | WR29 | B | 148 | 183 |
| Mike Evans | WR | 70.4 | 6.8 | WR27 | WR20 | B | 156 | 222 |
| Parker Washington | WR | 71.3 | 6.9 | WR28 | WR15 | A | 179 | 212 |
| Tetairoa McMillan | WR | 39.8 | 4.2 | WR17 | WR10 | B | 194 | 223 |
| Zay Flowers | WR | 37.8 | 4.1 | WR15 | WR11 | B | 187 | 228 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 78.3 | 7.4 | TE9 | TE5 | A | 167 | 169 |
| Isaiah Likely | TE | 105.5 | 9.7 | TE12 | TE7 | A | 158 | 157 |
| Sam LaPorta | TE | 62.7 | 6.1 | TE5 | TE4 | B | 153 | 197 |
| Travis Kelce | TE | 94.1 | 8.8 | TE11 | TE9 | B | 124 | 171 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 148.7 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 98.7 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 92.3 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97.1 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 142.4 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.3 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.4 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 141.4 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 58.8 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 94.4 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.6 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.1 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.4 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne Jr. | NO | 8 | 43 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 16.7 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 53.1 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 51.5 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.9 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker III | KC | 5 | 13.7 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.4 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 30.1 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 13.7 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.8 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5.3 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11.9 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 39.8 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 5.3 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 26.8 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.7 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.3 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.2 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 47.9 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 156.4 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 21.9 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts Sr. | ATL | 11 | 73.7 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 151.7 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.7 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.7 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 41.2 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 78.3 | C · 16th easiest | F · 1st hardest | much harder |

