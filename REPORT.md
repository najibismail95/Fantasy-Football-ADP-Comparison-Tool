# Fantasy ADP report — 2026-11-03

_Snapshot 2026-11-03 · 99 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 165 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.73 | 170.1 | 99.3 |
| SLEEPER | 2498 | 1.4 | 700.9 | 88.3 |
| YAHOO | 221 | 1.3 | 143.9 | 91.4 |


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
| Alec Pierce | WR | 140.7 | 96.4 | 98.3 | ESPN | 3.6 | CHEAPER on ESPN | 112 |
| Brian Thomas Jr. | WR | 141.9 | 74.3 | 84.8 | ESPN | 5.2 | CHEAPER on ESPN | 132 |
| Chris Godwin Jr. | WR | 145.6 | 92.4 | 94 | ESPN | 4.4 | CHEAPER on ESPN | 124 |
| Dalton Kincaid | TE | 138.1 | 88.4 | 93.4 | ESPN | 3.9 | CHEAPER on ESPN | 130 |
| David Montgomery | RB | 113.5 | 46.4 | 53.4 | ESPN | 5.3 | CHEAPER on ESPN | 161 |
| J.K. Dobbins | RB | 139.3 | 91.6 | 94.8 | ESPN | 3.8 | CHEAPER on ESPN | 118 |
| Jacory Croskey-Merritt | RB | 157.1 | 115.1 | 104.4 | ESPN | 3.9 | CHEAPER on ESPN | 128 |
| Jadarian Price | RB | 119.5 | 61.2 | 63.1 | ESPN | 4.8 | CHEAPER on ESPN | 131 |
| Jalen Hurts | QB | 105 | 58.6 | 54.5 | ESPN | 4 | CHEAPER on ESPN | 311 |
| Jaylen Waddle | WR | 94.8 | 44.2 | 39.3 | ESPN | 4.4 | CHEAPER on ESPN | 163 |
| Jordan Mason | RB | 153 | 109.2 | 110.6 | ESPN | 3.6 | CHEAPER on ESPN | 114 |
| Justin Herbert | QB | 131.2 | 83.9 | 71.1 | ESPN | 4.5 | CHEAPER on ESPN | 204 |
| MarShawn Lloyd | RB | 138.1 | 137.6 | 85.6 | YAHOO | 4.4 | pricier on YAHOO | 93 |
| Marvin Harrison Jr. | WR | 122.4 | 76.3 | 79.4 | ESPN | 3.7 | CHEAPER on ESPN | 128 |
| Matthew Golden | WR | 77.4 | 125.5 | 120.4 | ESPN | 3.8 | pricier on ESPN | 163 |
| Quentin Johnston | WR | 156.1 | 112.1 | 105.2 | ESPN | 4 | CHEAPER on ESPN | 113 |
| Rico Dowdle | RB | 135.2 | 86.7 | 88.7 | ESPN | 4 | CHEAPER on ESPN | 124 |
| Terry McLaurin | WR | 109.9 | 55.8 | 56.9 | ESPN | 4.5 | CHEAPER on ESPN | 214 |
| Tre Tucker | WR | 146 | 202.2 | 124 | SLEEPER | 5.6 | CHEAPER on SLEEPER | 103 |
| TreVeyon Henderson | RB | 122.5 | 60.2 | 70.9 | ESPN | 4.7 | CHEAPER on ESPN | 114 |


## Who’s rising


_Last 7 days, as of 2026-11-03. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Josh Jacobs | RB | 99.4 | 76.5 | 51.3 | 51.2 | 71.4 | 71.3 |
| Tony Pollard | RB | 113.2 | 99.7 | 84.1 | 84.1 | 87.4 | 87.3 |
| Bucky Irving | RB | 65.9 | 52.8 | 43.9 | 43.9 | 51.5 | 51.4 |
| T.J. Hockenson | TE | 151.9 | 138.8 | 163.4 | 163.4 | 126.4 | 126.1 |
| KC Concepcion Jr. | WR | 160.6 | 148.3 | 120.2 | 120.3 | 122.1 | 122 |
| Ollie Gordon II | RB | 135.2 | 123.1 | — | — | 99.2 | 95.4 |
| Tee Higgins | WR | 56.8 | 44.9 | 36 | 36 | 34.5 | 34.5 |
| Jameson Williams | WR | 89.2 | 78.2 | 59 | 59.1 | 64.8 | 64.8 |
| Omar Cooper Jr. | WR | 163.1 | 152.7 | 192.2 | 192.2 | — | — |
| Tre Tucker | WR | 155.2 | 145.4 | — | — | 126.5 | 124.3 |
| Tucker Kraft | TE | 105.4 | 95.8 | 64.1 | 64.1 | 59.6 | 59.6 |
| Luther Burden III | WR | 89.1 | 80.1 | 55.8 | 55.8 | 57.3 | 57.2 |
| Hunter Henry | TE | 154.8 | 146.7 | 141.9 | 141.9 | 127.2 | 127.2 |
| Joe Burrow | QB | 54.3 | 46.3 | 52.3 | 52.3 | 51.3 | 51.3 |
| Jordan Love | QB | 136 | 128 | 158.8 | 158.8 | 119.4 | 119.2 |
| Dak Prescott | QB | 100.7 | 92.9 | 77.3 | 77.3 | 72.5 | 72.4 |
| Blake Corum | RB | 141.4 | 133.8 | 100.3 | 100.3 | 100.1 | 100.1 |
| Zach Charbonnet | RB | 147.7 | 140.3 | 149.6 | 149.5 | — | — |
| Zay Flowers | WR | 36.7 | 30.4 | 41.4 | 41.4 | 34.8 | 34.8 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Bryce Young | QB | 129.4 | 145.4 | — | — | 105.6 | 105.3 |
| Patrick Mahomes | QB | 87.9 | 100.6 | 110 | 110.1 | 103.1 | 103 |
| Davante Adams | WR | 79.4 | 91.7 | 50.2 | 50.5 | 59 | 59.2 |
| Aaron Jones Sr. | RB | 115.2 | 124.9 | 127.6 | 127.7 | 120.8 | 120.6 |
| Brock Purdy | QB | 57.1 | 66.4 | 122.6 | 122.6 | 94.3 | 94.1 |
| Isaiah Likely | TE | 71.1 | 80.1 | 105.2 | 105.2 | 107 | 106.8 |
| Jalen Coker | WR | 104.5 | 112.8 | 146.7 | 146.5 | 123.3 | 122.6 |
| Terry McLaurin | WR | 100.6 | 108.5 | 55.6 | 55.8 | 56.9 | 56.9 |
| J.K. Dobbins | RB | 131.3 | 138.4 | 91.1 | 91.2 | 94.8 | 94.8 |
| Tyler Shough | QB | 143.3 | 150 | 181.8 | 181.9 | 121.6 | 121.1 |
| DeVonta Smith | WR | 52.7 | 59.3 | 33.7 | 33.9 | 29.7 | 29.8 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 229pts, RB28 149pts, WR34 150pts, TE13 129pts, K13 95pts, DEF13 75pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2336 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_22 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_37 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brock Purdy | QB | 94 | 8.8 | QB9 | QB6 | B | 191 | 303 |
| Patrick Mahomes | QB | 103 | 9.5 | QB11 | QB9 | B | 175 | 287 |
| Trevor Lawrence | QB | 84.2 | 7.9 | QB8 | QB4 | A | 214 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bhayshul Tuten | RB | 62.4 | 6.1 | RB22 | RB15 | B | 162 | 175 |
| Bucky Irving | RB | 51.4 | 5.2 | RB19 | RB12 | B | 158 | 197 |
| Chuba Hubbard | RB | 80 | 7.6 | RB28 | RB17 | A | 184 | 148 |
| D'Andre Swift | RB | 49.2 | 5 | RB18 | RB11 | B | 158 | 208 |
| Tony Pollard | RB | 87.3 | 8.2 | RB29 | RB25 | A | 145 | 160 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 65.6 | 6.4 | WR25 | WR16 | B | 142 | 208 |
| Mike Evans | WR | 70.4 | 6.8 | WR27 | WR14 | A | 145 | 222 |
| Parker Washington | WR | 71.4 | 6.9 | WR28 | WR19 | A | 132 | 212 |
| Rashee Rice | WR | 38.8 | 4.2 | WR16 | WR13 | B | 139 | 229 |
| Tetairoa McMillan | WR | 42.1 | 4.4 | WR17 | WR12 | B | 149 | 223 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 78.1 | 7.4 | TE9 | TE4 | A | 148 | 169 |
| Isaiah Likely | TE | 105.5 | 9.7 | TE12 | TE7 | B | 130 | 157 |
| Travis Kelce | TE | 94 | 8.8 | TE11 | TE9 | B | 105 | 171 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 147.9 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 98.6 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 84.2 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97.2 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 149.8 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.6 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.6 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 141.3 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 59 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 94 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.7 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.2 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.4 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne Jr. | NO | 8 | 43.3 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 17.6 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 53.4 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 51.4 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.7 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker III | KC | 5 | 13.6 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.4 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 29.2 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 13.8 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.9 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5.3 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11.2 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 42.1 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.7 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 27.1 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.9 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.3 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 126 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 48.3 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 138 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 22.6 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts Sr. | ATL | 11 | 73.9 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 151.7 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.7 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.7 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 41.4 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 78.1 | C · 16th easiest | F · 1st hardest | much harder |

