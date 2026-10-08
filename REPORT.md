# Fantasy ADP report — 2026-10-08

_Snapshot 2026-10-08 · 73 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 165 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 348 | 1.75 | 170.5 | 98.3 |
| SLEEPER | 2489 | 1.3 | 700.9 | 85.7 |
| YAHOO | 218 | 1.3 | 143.9 | 87.6 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1170 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 2489 |
| YAHOO | exact | 197 |
| YAHOO | team | 21 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Alec Pierce | WR | 138.2 | 95.6 | 98.3 | ESPN | 3.4 | CHEAPER on ESPN | 143 |
| Blake Corum | RB | 145.1 | 100 | 100 | ESPN | 3.8 | CHEAPER on ESPN | 120 |
| Brian Thomas | WR | 138.8 | 74.8 | 84.7 | ESPN | 4.9 | CHEAPER on ESPN | 147 |
| Bryce Young | QB | 127.4 | 226.3 | 110.7 | SLEEPER | 8.9 | CHEAPER on SLEEPER | 236 |
| Caleb Williams | QB | 117 | 71.1 | 65.1 | ESPN | 4.1 | CHEAPER on ESPN | 250 |
| Chris Godwin | WR | 143.2 | 92.8 | 93.5 | ESPN | 4.2 | CHEAPER on ESPN | 132 |
| J.K. Dobbins | RB | 135.3 | 91.5 | 94.5 | ESPN | 3.5 | CHEAPER on ESPN | 150 |
| Jadarian Price | RB | 112.9 | 61.8 | 63 | ESPN | 4.2 | CHEAPER on ESPN | 137 |
| Jayden Reed | WR | 157.1 | 108 | 113 | ESPN | 3.9 | CHEAPER on ESPN | 198 |
| Jonathon Brooks | RB | 134.3 | 98 | 89.9 | ESPN | 3.4 | CHEAPER on ESPN | 155 |
| Jordan Mason | RB | 163.1 | 109.6 | 110.6 | ESPN | 4.4 | CHEAPER on ESPN | 139 |
| Justin Herbert | QB | 124.7 | 83.4 | 70.9 | ESPN | 4 | CHEAPER on ESPN | 238 |
| Juwan Johnson | TE | 132 | 175.5 | 119.1 | SLEEPER | 4.2 | CHEAPER on SLEEPER | 137 |
| Luther Burden | WR | 98.8 | 56 | 57.2 | ESPN | 3.5 | CHEAPER on ESPN | 181 |
| MarShawn Lloyd | RB | 135.8 | 137.1 | 85.4 | YAHOO | 4.3 | pricier on YAHOO | 101 |
| Quentin Johnston | WR | 153.4 | 112.9 | 105.2 | ESPN | 3.7 | CHEAPER on ESPN | 128 |
| Rico Dowdle | RB | 134.9 | 86.6 | 88.2 | ESPN | 4 | CHEAPER on ESPN | 130 |
| TreVeyon Henderson | RB | 107.6 | 59.5 | 70.4 | ESPN | 3.6 | CHEAPER on ESPN | 149 |
| Tucker Kraft | TE | 115.4 | 64.3 | 59.5 | ESPN | 4.5 | CHEAPER on ESPN | 157 |
| Tyler Shough | QB | 111.4 | 182 | 124 | SLEEPER | 5.4 | CHEAPER on SLEEPER | 256 |


## Who’s rising


_Last 7 days, as of 2026-10-08. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Michael Wilson | WR | 123.1 | 106.1 | 87.1 | 87.7 | 101.1 | 100.8 |
| Jaylen Warren | RB | 109.4 | 94.1 | 69.7 | 70.9 | 75.4 | 75.2 |
| Juwan Johnson | TE | 147.9 | 132.8 | 174.9 | 175.5 | 119.6 | 119.2 |
| Brock Purdy | QB | 75.7 | 61.3 | 122.5 | 122.5 | 96.1 | 95.5 |
| Aaron Jones | RB | 125.5 | 114.5 | 127.8 | 127.5 | 123.1 | 122.2 |
| Chuba Hubbard | RB | 96.6 | 85.8 | 81.3 | 81.3 | 90.6 | 90.1 |
| Harold Fannin | TE | 94.5 | 84.3 | 73.2 | 73.7 | 70.9 | 71 |
| Trevor Lawrence | QB | 111.1 | 101.4 | 102.2 | 102.1 | 80.5 | 80.1 |
| Tyler Shough | QB | 118.6 | 109.6 | 178.5 | 182.4 | 126.3 | 124.3 |
| Nico Collins | WR | 38.7 | 30.1 | 24.1 | 23.9 | 21 | 21.1 |
| Quinshon Judkins | RB | 71.6 | 63 | 54.5 | 53.9 | 55 | 55 |
| Bryce Young | QB | 139.5 | 131.3 | — | — | 113.6 | 111.3 |
| George Kittle | TE | 63.5 | 55.6 | 79.3 | 79.6 | 79.1 | 78.8 |
| Matthew Golden | WR | 118.7 | 110.9 | 126.1 | 126 | 123 | 122.5 |
| Zach Charbonnet | RB | 161.9 | 154.8 | 151.4 | 151.1 | — | — |
| Kyren Williams | RB | 43.1 | 36.8 | 26.1 | 26.1 | 27.6 | 27.6 |
| Zay Flowers | WR | 43.4 | 37.1 | 41.6 | 41.3 | 35.1 | 35 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Dalton Kincaid | TE | 101.2 | 120.7 | 88.1 | 88.1 | 94.2 | 93.8 |
| De'Von Achane | RB | 24.2 | 41.4 | 13.9 | 13.2 | 16.1 | 16.1 |
| Jalen Hurts | QB | 61.6 | 74.5 | 58.7 | 58.3 | 53.9 | 53.9 |
| DeVonta Smith | WR | 37.1 | 49.6 | 33.9 | 33.6 | 29.4 | 29.4 |
| Ladd McConkey | WR | 67 | 76.8 | 34.9 | 35.8 | 45.2 | 45.3 |
| Jadarian Price | RB | 102.1 | 111.1 | 60.7 | 61.8 | 62.7 | 62.9 |
| Breece Hall | RB | 42.7 | 51 | 34.2 | 34.3 | 34 | 34.3 |
| Dalton Schultz | TE | 156.7 | 164.8 | 182 | 179.7 | 124.7 | 124.7 |
| Drake Maye | QB | 64.3 | 72.1 | 47.3 | 47.1 | 48.9 | 49.3 |
| Matthew Stafford | QB | 108.3 | 115.6 | 94.8 | 94.3 | 99 | 98.9 |
| Travis Etienne | RB | 65 | 71.8 | 41.9 | 42.1 | 41.5 | 42 |
| Isaiah Likely | TE | 112.8 | 119.6 | 105.1 | 105.7 | 107.7 | 107.7 |
| Jalen Coker | WR | 123.5 | 130.2 | 146.7 | 147.2 | 127.2 | 126 |
| Travis Kelce | TE | 77.9 | 84.5 | 89.8 | 89.5 | 94.6 | 94.3 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 256pts, RB26 166pts, WR36 157pts, TE13 142pts, K13 106pts, DEF13 84pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2333 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_13 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_43 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brock Purdy | QB | 95.4 | 8.9 | QB10 | QB4 | A | 259 | 303 |
| Jayden Daniels | QB | 68.2 | 6.6 | QB6 | QB3 | B | 258 | 309 |
| Patrick Mahomes | QB | 104 | 9.6 | QB13 | QB10 | B | 242 | 287 |
| Trevor Lawrence | QB | 101.1 | 9.3 | QB12 | QB6 | A | 250 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 51.8 | 5.2 | RB19 | RB14 | B | 197 | 197 |
| Chuba Hubbard | RB | 83.8 | 7.9 | RB27 | RB23 | B | 188 | 148 |
| Jaylen Warren | RB | 75.1 | 7.2 | RB25 | RB22 | B | 181 | 171 |
| Quinshon Judkins | RB | 55 | 5.5 | RB21 | RB17 | B | 191 | 196 |
| Tony Pollard | RB | 87.4 | 8.2 | RB28 | RB24 | B | 174 | 160 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 66.4 | 6.5 | WR27 | WR20 | B | 186 | 208 |
| Garrett Wilson | WR | 45.2 | 4.7 | WR19 | WR14 | B | 194 | 225 |
| Michael Wilson | WR | 100.8 | 9.3 | WR37 | WR25 | A | 198 | 166 |
| Mike Evans | WR | 70.6 | 6.8 | WR29 | WR19 | A | 174 | 222 |
| Parker Washington | WR | 72.9 | 7 | WR30 | WR18 | A | 185 | 212 |
| Tetairoa McMillan | WR | 42.3 | 4.4 | WR17 | WR11 | B | 208 | 223 |
| Zay Flowers | WR | 36.4 | 3.9 | WR15 | WR10 | B | 211 | 228 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 78.8 | 7.5 | TE9 | TE5 | A | 184 | 169 |
| Harold Fannin | TE | 73.7 | 7.1 | TE8 | TE7 | B | 155 | 180 |
| Isaiah Likely | TE | 107.6 | 9.9 | TE12 | TE8 | A | 164 | 157 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 150.9 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 98.9 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 101.1 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97.4 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 124 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.3 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.6 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 157.4 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 68.2 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 95.4 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.4 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.5 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 42.1 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 16 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 52.6 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 51.8 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.8 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 14.8 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.3 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 30 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 13.6 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.8 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5.2 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 10.6 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 42.3 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 5.7 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 26.3 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.9 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.2 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.6 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 47.4 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 157.6 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 22.9 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 73.2 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 165.2 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 153.8 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.8 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 40.6 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 78.8 | C · 16th easiest | F · 1st hardest | much harder |

