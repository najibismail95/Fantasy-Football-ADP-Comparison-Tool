# Fantasy ADP report — 2026-10-10

_Snapshot 2026-10-10 · 75 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 166 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.79 | 170.5 | 99.7 |
| SLEEPER | 2489 | 1.3 | 700.9 | 86.7 |
| YAHOO | 218 | 1.3 | 143.9 | 89.4 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1175 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 2489 |
| YAHOO | exact | 197 |
| YAHOO | team | 21 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Alec Pierce | WR | 138.5 | 95.6 | 98.3 | ESPN | 3.5 | CHEAPER on ESPN | 143 |
| Blake Corum | RB | 145.5 | 100.9 | 100 | ESPN | 3.8 | CHEAPER on ESPN | 120 |
| Brian Thomas | WR | 138.6 | 74.7 | 84.7 | ESPN | 4.9 | CHEAPER on ESPN | 147 |
| Bryce Young | QB | 122.1 | 226.3 | 109.8 | SLEEPER | 9.2 | CHEAPER on SLEEPER | 236 |
| Caleb Williams | QB | 116.4 | 71 | 65.2 | ESPN | 4 | CHEAPER on ESPN | 250 |
| Chris Godwin | WR | 142.7 | 92.7 | 93.5 | ESPN | 4.1 | CHEAPER on ESPN | 132 |
| J.K. Dobbins | RB | 135.6 | 91.5 | 94.5 | ESPN | 3.5 | CHEAPER on ESPN | 150 |
| Jadarian Price | RB | 114.6 | 61.7 | 63 | ESPN | 4.4 | CHEAPER on ESPN | 137 |
| Jayden Reed | WR | 157.7 | 108 | 113 | ESPN | 3.9 | CHEAPER on ESPN | 198 |
| Jordan Mason | RB | 163.3 | 109.5 | 110.6 | ESPN | 4.4 | CHEAPER on ESPN | 139 |
| Justin Herbert | QB | 125.3 | 83.3 | 70.9 | ESPN | 4 | CHEAPER on ESPN | 238 |
| Juwan Johnson | TE | 131 | 175.1 | 119 | SLEEPER | 4.2 | CHEAPER on SLEEPER | 137 |
| Luther Burden | WR | 99 | 56 | 57.2 | ESPN | 3.5 | CHEAPER on ESPN | 181 |
| MarShawn Lloyd | RB | 136.2 | 137 | 85.4 | YAHOO | 4.3 | pricier on YAHOO | 101 |
| Quentin Johnston | WR | 153.8 | 111.2 | 105.2 | ESPN | 3.8 | CHEAPER on ESPN | 125 |
| RJ Harvey | RB | 136.2 | 82.8 | 112 | SLEEPER | 3.4 | pricier on SLEEPER | 146 |
| Rico Dowdle | RB | 134.5 | 86.6 | 88.3 | ESPN | 3.9 | CHEAPER on ESPN | 130 |
| TreVeyon Henderson | RB | 107.6 | 60.5 | 70.4 | ESPN | 3.5 | CHEAPER on ESPN | 149 |
| Tucker Kraft | TE | 113.4 | 63.7 | 59.6 | ESPN | 4.3 | CHEAPER on ESPN | 157 |
| Tyler Shough | QB | 114.1 | 182.5 | 123.6 | SLEEPER | 5.3 | CHEAPER on SLEEPER | 256 |


## Who’s rising


_Last 7 days, as of 2026-10-10. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Michael Wilson | WR | 118.9 | 100.4 | 87.3 | 87.6 | 101 | 100.7 |
| Bryce Young | QB | 141.6 | 124.6 | — | — | 113.2 | 110.2 |
| Chuba Hubbard | RB | 94.8 | 82.6 | 81.3 | 81.8 | 90.5 | 90 |
| Jaylen Warren | RB | 104.6 | 93 | 70.3 | 70.2 | 75.3 | 75.1 |
| Brock Purdy | QB | 71 | 59.6 | 122.3 | 122.3 | 95.9 | 95.3 |
| Nico Collins | WR | 38.6 | 27.4 | 24.1 | 23.9 | 21.1 | 21.1 |
| Quinshon Judkins | RB | 71 | 60.2 | 54.2 | 54 | 55.1 | 55 |
| Aaron Jones | RB | 122.7 | 112 | 127.5 | 127.3 | 122.8 | 122 |
| Tetairoa McMillan | WR | 55.2 | 44.5 | 37.8 | 37.2 | 42.3 | 42.2 |
| Juwan Johnson | TE | 142.1 | 131.5 | 175.5 | 175.1 | 119.4 | 119.1 |
| Kyle Monangai | RB | 136.7 | 127.6 | 108.1 | 107.5 | 113.6 | 113.3 |
| Denzel Boston | WR | 151.5 | 143.4 | 171.1 | 170.6 | 123.2 | 120.5 |
| Kyren Williams | RB | 42.3 | 34.3 | 26.1 | 26.1 | 27.6 | 27.5 |
| T.J. Hockenson | TE | 163.5 | 155.7 | 163.8 | 163.4 | 127 | 126.7 |
| Trevor Lawrence | QB | 107.6 | 100.8 | 102.1 | 102.6 | 80.4 | 80.1 |
| Deebo Samuel | WR | 133.3 | 126.6 | 130.2 | 130.6 | 122 | 120.8 |
| Zach Charbonnet | RB | 160.2 | 153.6 | 151.8 | 151.5 | — | — |
| RJ Harvey | RB | 143.5 | 137.1 | 82.3 | 82.8 | 112 | 112 |
| Jared Goff | QB | 131.9 | 125.5 | 131.1 | 131.4 | 110.1 | 109.7 |
| George Kittle | TE | 60.9 | 54.6 | 79.8 | 79.5 | 79 | 78.8 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Dalton Kincaid | TE | 106.1 | 126.3 | 88 | 88.1 | 94 | 93.8 |
| De'Von Achane | RB | 29 | 44.5 | 13.9 | 13.2 | 16.1 | 16.1 |
| DeVonta Smith | WR | 38.8 | 52.3 | 33.8 | 33.9 | 29.4 | 29.5 |
| Jalen Hurts | QB | 65.2 | 76.4 | 58.6 | 58.2 | 53.9 | 54 |
| Jadarian Price | RB | 103.3 | 113.9 | 60.6 | 61.8 | 62.8 | 63 |
| Travis Kelce | TE | 78.7 | 88.3 | 89.6 | 89.4 | 94.5 | 94.2 |
| Ladd McConkey | WR | 69.5 | 78 | 35.1 | 35.2 | 45.2 | 45.4 |
| Saquon Barkley | RB | 21.8 | 29.6 | 11.5 | 11.8 | 11.1 | 11.2 |
| Terry McLaurin | WR | 85.5 | 92.6 | 55.4 | 55.4 | 56.4 | 56.6 |
| Travis Etienne | RB | 66.3 | 73.3 | 42 | 41.9 | 41.7 | 42.2 |
| Matthew Stafford | QB | 110.4 | 117.3 | 94.6 | 94.8 | 99 | 98.9 |
| Rashee Rice | WR | 37.1 | 43.8 | 29.4 | 29.7 | 38 | 38.2 |
| DJ Moore | WR | 77.7 | 84.2 | 53.8 | 53.6 | 56.8 | 56.8 |
| Breece Hall | RB | 45.7 | 51.8 | 34.1 | 34.3 | 34.1 | 34.4 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 256pts, RB26 166pts, WR36 157pts, TE13 142pts, K13 106pts, DEF13 84pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2333 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_13 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_42 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brock Purdy | QB | 95.3 | 8.9 | QB10 | QB4 | A | 259 | 303 |
| Jayden Daniels | QB | 67.9 | 6.6 | QB6 | QB3 | B | 258 | 309 |
| Patrick Mahomes | QB | 103.9 | 9.6 | QB13 | QB10 | B | 242 | 287 |
| Trevor Lawrence | QB | 100.4 | 9.3 | QB12 | QB6 | A | 250 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 51.7 | 5.2 | RB19 | RB14 | B | 197 | 197 |
| Chuba Hubbard | RB | 81.8 | 7.7 | RB27 | RB23 | B | 188 | 148 |
| Jaylen Warren | RB | 75.1 | 7.2 | RB25 | RB22 | B | 181 | 171 |
| Quinshon Judkins | RB | 55 | 5.5 | RB21 | RB17 | B | 191 | 196 |
| Tony Pollard | RB | 87.4 | 8.2 | RB28 | RB24 | B | 174 | 160 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 66.3 | 6.4 | WR27 | WR20 | B | 186 | 208 |
| Garrett Wilson | WR | 45.2 | 4.7 | WR19 | WR14 | B | 194 | 225 |
| Michael Wilson | WR | 97.7 | 9.1 | WR36 | WR25 | A | 198 | 166 |
| Mike Evans | WR | 70.6 | 6.8 | WR29 | WR19 | A | 174 | 222 |
| Parker Washington | WR | 72.9 | 7 | WR30 | WR18 | A | 185 | 212 |
| Tetairoa McMillan | WR | 42.2 | 4.4 | WR17 | WR11 | B | 208 | 223 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 78.7 | 7.5 | TE9 | TE5 | A | 184 | 169 |
| Harold Fannin | TE | 73.6 | 7 | TE8 | TE7 | B | 155 | 180 |
| Isaiah Likely | TE | 107.6 | 9.9 | TE12 | TE8 | B | 164 | 157 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 151.6 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 98.9 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 100.4 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97.4 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 123.6 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.2 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.5 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 158.9 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 67.9 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 95.3 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.4 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.5 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 42.3 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 16 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 52.6 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 51.7 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.8 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 14.1 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.3 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 30.1 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 13.6 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.8 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5.2 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 10.6 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 42.2 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.3 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 26.3 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.9 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.2 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.5 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 47.4 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 154.1 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 22.9 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 73.2 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 151.9 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 153.7 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.8 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 40.7 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 78.7 | C · 16th easiest | F · 1st hardest | much harder |

