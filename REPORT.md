# Fantasy ADP report — 2026-11-07

_Snapshot 2026-11-07 · 103 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 165 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.68 | 170.1 | 98 |
| SLEEPER | 2498 | 1.4 | 700.9 | 86.7 |
| YAHOO | 222 | 1.2 | 143.9 | 90.5 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1175 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 2498 |
| YAHOO | exact | 201 |
| YAHOO | team | 21 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Alec Pierce | WR | 142.4 | 96.6 | 98.3 | ESPN | 3.7 | CHEAPER on ESPN | 112 |
| Braelon Allen | RB | 141.8 | 209 | 117.3 | SLEEPER | 6.6 | CHEAPER on SLEEPER | 72 |
| Brian Thomas Jr. | WR | 142.9 | 74.5 | 84.9 | ESPN | 5.3 | CHEAPER on ESPN | 132 |
| C.J. Stroud | QB | 147.6 | 199.2 | 124.1 | SLEEPER | 5.3 | CHEAPER on SLEEPER | 210 |
| Chris Godwin Jr. | WR | 147.4 | 92.5 | 94 | ESPN | 4.5 | CHEAPER on ESPN | 124 |
| David Montgomery | RB | 116.8 | 46.6 | 53.5 | ESPN | 5.6 | CHEAPER on ESPN | 151 |
| J.K. Dobbins | RB | 142 | 91.7 | 94.8 | ESPN | 4.1 | CHEAPER on ESPN | 118 |
| Jacory Croskey-Merritt | RB | 158.1 | 115.2 | 104.4 | ESPN | 4 | CHEAPER on ESPN | 128 |
| Jadarian Price | RB | 119.6 | 61.4 | 63.2 | ESPN | 4.8 | CHEAPER on ESPN | 130 |
| Jalen Hurts | QB | 109.7 | 58.7 | 54.5 | ESPN | 4.4 | CHEAPER on ESPN | 311 |
| Jaylen Waddle | WR | 92.9 | 44.3 | 39.4 | ESPN | 4.3 | CHEAPER on ESPN | 163 |
| Jordan Mason | RB | 160.1 | 109.3 | 110.6 | ESPN | 4.2 | CHEAPER on ESPN | 114 |
| Justin Herbert | QB | 133 | 83 | 71.1 | ESPN | 4.7 | CHEAPER on ESPN | 204 |
| MarShawn Lloyd | RB | 140 | 137.7 | 85.6 | YAHOO | 4.4 | pricier on YAHOO | 93 |
| Marvin Harrison Jr. | WR | 125.2 | 76.4 | 79.4 | ESPN | 3.9 | CHEAPER on ESPN | 129 |
| Matthew Golden | WR | 68.3 | 125.3 | 120.2 | ESPN | 4.5 | pricier on ESPN | 163 |
| Quentin Johnston | WR | 156.9 | 112.2 | 105.2 | ESPN | 4 | CHEAPER on ESPN | 113 |
| Rico Dowdle | RB | 135.9 | 86.8 | 88.7 | ESPN | 4 | CHEAPER on ESPN | 124 |
| Terry McLaurin | WR | 113.2 | 55 | 56.9 | ESPN | 4.8 | CHEAPER on ESPN | 214 |
| TreVeyon Henderson | RB | 125.8 | 60.4 | 71 | ESPN | 5 | CHEAPER on ESPN | 107 |


## Who’s rising


_Last 7 days, as of 2026-11-07. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Jonah Coleman | RB | 163.8 | 136.8 | 164.8 | 164.4 | 127.3 | 125.5 |
| Jordan Love | QB | 134.6 | 116.5 | 158.8 | 158.7 | 119.3 | 119.1 |
| Josh Jacobs | RB | 87.2 | 70.3 | 51.3 | 51.2 | 71.3 | 71.2 |
| Braelon Allen | RB | 159.1 | 143.1 | — | — | 119.5 | 117.6 |
| Tony Pollard | RB | 106.2 | 90.8 | 84.1 | 84.1 | 87.3 | 87.2 |
| Matthew Golden | WR | 84.3 | 69 | 125.5 | 125.3 | 120.6 | 120.3 |
| Tee Higgins | WR | 50 | 37.4 | 36 | 36 | 34.5 | 34.5 |
| Chuba Hubbard | RB | 77.2 | 64.7 | 80 | 80 | 88.8 | 88.5 |
| Joe Burrow | QB | 50.1 | 38.9 | 52.3 | 52.3 | 51.3 | 51.2 |
| Trevor Lawrence | QB | 89.8 | 79.2 | 102.5 | 102.5 | 79.3 | 79.2 |
| Dalton Kincaid | TE | 142.2 | 131.9 | 88.1 | 88.2 | 93.4 | 93.4 |
| Bhayshul Tuten | RB | 67.1 | 58.3 | 62.4 | 62.4 | 61.1 | 61 |
| Bucky Irving | RB | 58.3 | 49.5 | 43.9 | 43.9 | 51.4 | 51.4 |
| Tucker Kraft | TE | 101.3 | 92.7 | 64.1 | 64.1 | 59.6 | 59.6 |
| Rashee Rice | WR | 51.9 | 44.1 | 29.3 | 29.4 | 38.7 | 38.8 |
| Michael Wilson | WR | 115 | 107.3 | 87.3 | 87.3 | 99.9 | 99.8 |
| Jameson Williams | WR | 82.3 | 75.2 | 59.1 | 59.1 | 64.8 | 64.7 |
| T.J. Hockenson | TE | 142.9 | 135.8 | 163.4 | 163.4 | 126.3 | 125.9 |
| Ollie Gordon II | RB | 127.7 | 121.2 | — | — | 96.7 | 94.1 |
| DJ Moore | WR | 92.6 | 86 | 53.8 | 53.9 | 57 | 57.1 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Lamar Jackson | QB | 43.5 | 65.4 | 31.6 | 31.8 | 38.5 | 38.6 |
| Davante Adams | WR | 87.1 | 98 | 50.4 | 50.7 | 59.1 | 59.3 |
| A.J. Brown | WR | 39.9 | 50.2 | 17 | 17.2 | 27 | 27.1 |
| RJ Harvey | RB | 141.7 | 150.7 | 82.4 | 82.6 | 112 | 112 |
| De'Von Achane | RB | 47.2 | 55.9 | 13.1 | 13.3 | 16.2 | 16.2 |
| TreVeyon Henderson | RB | 118 | 125.8 | 60.1 | 60.4 | 70.9 | 71 |
| Terry McLaurin | WR | 105.3 | 113 | 55.8 | 55.3 | 56.9 | 56.9 |
| Bryce Young | QB | 139.6 | 147.2 | — | — | 105.4 | 105.2 |
| Jalen Hurts | QB | 101.8 | 109.4 | 58.5 | 58.7 | 54.5 | 54.5 |
| Zay Flowers | WR | 31.9 | 38.9 | 41.4 | 41.4 | 34.8 | 34.8 |
| Jordan Mason | RB | 152.1 | 158.4 | 109.1 | 109.2 | 110.6 | 110.6 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 229pts, RB27 149pts, WR35 149pts, TE13 129pts, K13 98pts, DEF13 75pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2334 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_22 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_37 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brock Purdy | QB | 93.9 | 8.7 | QB9 | QB6 | B | 191 | 303 |
| Trevor Lawrence | QB | 79.1 | 7.5 | QB7 | QB4 | B | 214 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bhayshul Tuten | RB | 61 | 6 | RB22 | RB15 | B | 162 | 175 |
| Bucky Irving | RB | 49 | 5 | RB19 | RB12 | B | 158 | 197 |
| Chuba Hubbard | RB | 80.9 | 7.7 | RB28 | RB16 | A | 184 | 148 |
| D'Andre Swift | RB | 45.7 | 4.7 | RB18 | RB11 | A | 161 | 208 |
| Jaylen Warren | RB | 72.2 | 6.9 | RB26 | RB21 | B | 138 | 171 |
| Tony Pollard | RB | 87.2 | 8.2 | RB29 | RB23 | A | 145 | 160 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 65.5 | 6.4 | WR25 | WR16 | B | 142 | 208 |
| Mike Evans | WR | 70.3 | 6.8 | WR27 | WR15 | B | 129 | 222 |
| Parker Washington | WR | 72 | 6.9 | WR28 | WR18 | A | 132 | 212 |
| Rashee Rice | WR | 38.8 | 4.2 | WR15 | WR13 | B | 139 | 229 |
| Tetairoa McMillan | WR | 42.1 | 4.4 | WR17 | WR12 | B | 149 | 223 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 78.1 | 7.4 | TE9 | TE4 | A | 148 | 169 |
| Isaiah Likely | TE | 105.4 | 9.7 | TE12 | TE7 | B | 130 | 157 |
| Travis Kelce | TE | 94 | 8.8 | TE11 | TE9 | B | 105 | 171 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 149.2 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 98.6 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 79.1 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97.3 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 148.3 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.7 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.7 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 141.3 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 59 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 93.9 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.8 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.2 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 61 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne Jr. | NO | 8 | 43.4 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 17.5 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 53.5 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 49 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.7 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker III | KC | 5 | 13.6 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.4 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 27.5 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 13.8 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.9 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5.3 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11.4 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 42.1 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.7 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 27.2 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.3 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 126 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 48.3 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 136 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 21.9 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts Sr. | ATL | 11 | 74 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 151.8 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.7 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.7 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 41.4 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 78.1 | C · 16th easiest | F · 1st hardest | much harder |

