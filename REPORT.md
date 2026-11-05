# Fantasy ADP report — 2026-11-05

_Snapshot 2026-11-05 · 101 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 165 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.69 | 170.1 | 98.7 |
| SLEEPER | 2498 | 1.4 | 700.9 | 86.7 |
| YAHOO | 222 | 1.2 | 143.9 | 91.4 |


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
| Alec Pierce | WR | 142.2 | 96.5 | 98.3 | ESPN | 3.7 | CHEAPER on ESPN | 112 |
| Brian Thomas Jr. | WR | 143 | 74.4 | 84.8 | ESPN | 5.3 | CHEAPER on ESPN | 132 |
| C.J. Stroud | QB | 147.7 | 199.2 | 124.2 | SLEEPER | 5.3 | CHEAPER on SLEEPER | 210 |
| Chris Godwin Jr. | WR | 147 | 92.5 | 94 | ESPN | 4.5 | CHEAPER on ESPN | 124 |
| David Montgomery | RB | 115.7 | 46.6 | 53.4 | ESPN | 5.5 | CHEAPER on ESPN | 151 |
| J.K. Dobbins | RB | 141 | 90.3 | 94.8 | ESPN | 4 | CHEAPER on ESPN | 118 |
| Jacory Croskey-Merritt | RB | 157.8 | 115.2 | 104.4 | ESPN | 4 | CHEAPER on ESPN | 128 |
| Jadarian Price | RB | 120.1 | 61.3 | 63.2 | ESPN | 4.8 | CHEAPER on ESPN | 130 |
| Jalen Hurts | QB | 108.9 | 58.7 | 54.5 | ESPN | 4.4 | CHEAPER on ESPN | 311 |
| Jaylen Waddle | WR | 93.8 | 44.3 | 39.4 | ESPN | 4.3 | CHEAPER on ESPN | 163 |
| Jordan Mason | RB | 156.6 | 109.2 | 110.6 | ESPN | 3.9 | CHEAPER on ESPN | 114 |
| Justin Herbert | QB | 133 | 83 | 71.1 | ESPN | 4.7 | CHEAPER on ESPN | 204 |
| MarShawn Lloyd | RB | 139.7 | 137.7 | 85.6 | YAHOO | 4.4 | pricier on YAHOO | 93 |
| Marvin Harrison Jr. | WR | 124.7 | 76.4 | 79.4 | ESPN | 3.9 | CHEAPER on ESPN | 129 |
| Matthew Golden | WR | 70.2 | 125.3 | 120.3 | ESPN | 4.4 | pricier on ESPN | 163 |
| Quentin Johnston | WR | 156.8 | 111.8 | 105.2 | ESPN | 4 | CHEAPER on ESPN | 113 |
| Rico Dowdle | RB | 135.9 | 86.8 | 88.7 | ESPN | 4 | CHEAPER on ESPN | 124 |
| Terry McLaurin | WR | 112.8 | 55.9 | 56.9 | ESPN | 4.7 | CHEAPER on ESPN | 214 |
| Tre Tucker | WR | 148.1 | 202 | 123.5 | SLEEPER | 5.5 | CHEAPER on SLEEPER | 103 |
| TreVeyon Henderson | RB | 125.6 | 60.3 | 71 | ESPN | 5 | CHEAPER on ESPN | 114 |


## Who’s rising


_Last 7 days, as of 2026-11-05. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Josh Jacobs | RB | 94.2 | 71.8 | 51.3 | 51.2 | 71.4 | 71.2 |
| Jonah Coleman | RB | 164.9 | 147.5 | 164.8 | 164.6 | 127.6 | 126.1 |
| Jordan Love | QB | 136.6 | 121.4 | 158.8 | 158.8 | 119.3 | 119.1 |
| Tony Pollard | RB | 109.9 | 94.9 | 83.8 | 83.9 | 87.4 | 87.3 |
| Bucky Irving | RB | 63.1 | 50.8 | 43.9 | 43.9 | 51.5 | 51.4 |
| Tee Higgins | WR | 53.2 | 41 | 36 | 36 | 34.5 | 34.5 |
| Braelon Allen | RB | 159.9 | 148 | — | — | 119.6 | 118.3 |
| Matthew Golden | WR | 85 | 73.8 | 125.6 | 125.4 | 120.8 | 120.4 |
| Tucker Kraft | TE | 103.9 | 93.5 | 64.3 | 64.4 | 59.6 | 59.6 |
| Ollie Gordon II | RB | 132 | 121.7 | — | — | 97.8 | 94.8 |
| T.J. Hockenson | TE | 147.2 | 136.9 | 163.4 | 163.4 | 126.4 | 126 |
| Joe Burrow | QB | 52.2 | 42.3 | 52.3 | 52.3 | 51.3 | 51.2 |
| Chuba Hubbard | RB | 77.3 | 68 | 80.7 | 80 | 88.8 | 88.6 |
| Jameson Williams | WR | 85.6 | 76.6 | 59.1 | 59.1 | 64.8 | 64.8 |
| Trevor Lawrence | QB | 90.9 | 82.1 | 102.2 | 102.2 | 79.4 | 79.2 |
| Dak Prescott | QB | 99.4 | 91.5 | 77.2 | 77.3 | 72.5 | 72.4 |
| Blake Corum | RB | 139.6 | 132 | 100.3 | 100.3 | 100.1 | 100.1 |
| KC Concepcion Jr. | WR | 156.8 | 149.2 | 120.2 | 120.3 | 122 | 122 |
| DJ Moore | WR | 94.3 | 87.1 | 53.8 | 53.9 | 57 | 57.1 |
| Rashee Rice | WR | 52.5 | 45.5 | 29.3 | 29.3 | 38.7 | 38.8 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Davante Adams | WR | 83.9 | 95.8 | 50.3 | 50.6 | 59.1 | 59.2 |
| Bryce Young | QB | 135 | 146.2 | — | — | 105.4 | 105.3 |
| Lamar Jackson | QB | 43.9 | 54.4 | 31.6 | 31.7 | 38.4 | 38.5 |
| A.J. Brown | WR | 38.8 | 47.4 | 17 | 17.1 | 26.9 | 27.1 |
| Terry McLaurin | WR | 103.1 | 111.4 | 55.7 | 55.9 | 56.9 | 56.9 |
| De'Von Achane | RB | 45.5 | 53.6 | 13 | 13.2 | 16.2 | 16.2 |
| RJ Harvey | RB | 140.6 | 148.5 | 82.4 | 82.5 | 112 | 112 |
| TreVeyon Henderson | RB | 116.5 | 124.1 | 60 | 60.1 | 70.8 | 71 |
| J.K. Dobbins | RB | 133.5 | 140.3 | 91.1 | 91.2 | 94.8 | 94.8 |
| Patrick Mahomes | QB | 92.3 | 98.8 | 110.1 | 110.2 | 103 | 102.9 |
| Jalen Coker | WR | 107 | 113.4 | 146.7 | 146.5 | 123.1 | 122.5 |
| Jalen Hurts | QB | 100.9 | 107 | 58.4 | 58.6 | 54.5 | 54.5 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 229pts, RB27 149pts, WR35 149pts, TE13 129pts, K13 98pts, DEF13 75pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2335 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_23 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_35 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brock Purdy | QB | 94 | 8.8 | QB9 | QB6 | B | 191 | 303 |
| Trevor Lawrence | QB | 80.1 | 7.6 | QB7 | QB4 | B | 214 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bhayshul Tuten | RB | 61 | 6 | RB22 | RB15 | B | 162 | 175 |
| Bucky Irving | RB | 50 | 5.1 | RB19 | RB12 | B | 158 | 197 |
| Chuba Hubbard | RB | 80 | 7.6 | RB28 | RB16 | A | 184 | 148 |
| D'Andre Swift | RB | 48.2 | 4.9 | RB18 | RB11 | A | 161 | 208 |
| Jaylen Warren | RB | 72.3 | 6.9 | RB26 | RB22 | B | 138 | 171 |
| Tony Pollard | RB | 87.3 | 8.2 | RB29 | RB23 | A | 145 | 160 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 65.5 | 6.4 | WR25 | WR16 | B | 142 | 208 |
| Mike Evans | WR | 70.3 | 6.8 | WR27 | WR15 | B | 129 | 222 |
| Parker Washington | WR | 72.1 | 6.9 | WR28 | WR19 | A | 132 | 212 |
| Rashee Rice | WR | 38.8 | 4.2 | WR16 | WR13 | B | 139 | 229 |
| Tee Higgins | WR | 36.1 | 3.9 | WR14 | WR10 | B | 167 | 224 |
| Tetairoa McMillan | WR | 42.1 | 4.4 | WR17 | WR12 | B | 149 | 223 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 78.1 | 7.4 | TE9 | TE4 | A | 148 | 169 |
| Isaiah Likely | TE | 104.6 | 9.6 | TE12 | TE7 | B | 130 | 157 |
| Travis Kelce | TE | 94 | 8.8 | TE11 | TE9 | B | 106 | 171 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 147.8 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 98.6 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 80.1 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97.3 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 148 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.7 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.6 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 141.8 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 59 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 94 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.8 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 6.8 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 61 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne Jr. | NO | 8 | 43.4 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 18.4 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 53.4 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 50 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.7 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker III | KC | 5 | 13.6 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.4 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 27.9 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 13.8 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.9 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5.3 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11.3 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 42.1 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.7 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 27.1 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.5 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 126 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 48.3 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 135.8 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 21.9 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts Sr. | ATL | 11 | 73.9 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 151.8 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.8 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.7 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 41.4 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 78.1 | C · 16th easiest | F · 1st hardest | much harder |

