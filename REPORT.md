# Fantasy ADP report — 2026-10-09

_Snapshot 2026-10-09 · 74 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 166 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.79 | 170.6 | 99 |
| SLEEPER | 2489 | 1.3 | 700.9 | 87.3 |
| YAHOO | 218 | 1.3 | 143.9 | 89 |


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
| Alec Pierce | WR | 138.5 | 96.4 | 98.3 | ESPN | 3.4 | CHEAPER on ESPN | 143 |
| Blake Corum | RB | 145.4 | 100.9 | 100 | ESPN | 3.7 | CHEAPER on ESPN | 120 |
| Brian Thomas | WR | 138.8 | 74.7 | 84.7 | ESPN | 4.9 | CHEAPER on ESPN | 147 |
| Bryce Young | QB | 124.3 | 226.3 | 110.2 | SLEEPER | 9.1 | CHEAPER on SLEEPER | 236 |
| Caleb Williams | QB | 117.1 | 71 | 65.2 | ESPN | 4.1 | CHEAPER on ESPN | 250 |
| Chris Godwin | WR | 142.9 | 92.8 | 93.5 | ESPN | 4.1 | CHEAPER on ESPN | 132 |
| J.K. Dobbins | RB | 135.6 | 90.5 | 94.5 | ESPN | 3.6 | CHEAPER on ESPN | 150 |
| Jadarian Price | RB | 114.4 | 61.8 | 63 | ESPN | 4.3 | CHEAPER on ESPN | 137 |
| Jayden Reed | WR | 157.6 | 108 | 113 | ESPN | 3.9 | CHEAPER on ESPN | 198 |
| Jonathon Brooks | RB | 134.7 | 97.1 | 89.9 | ESPN | 3.4 | CHEAPER on ESPN | 155 |
| Jordan Mason | RB | 163.3 | 109.5 | 110.6 | ESPN | 4.4 | CHEAPER on ESPN | 139 |
| Justin Herbert | QB | 125.3 | 83.3 | 70.9 | ESPN | 4 | CHEAPER on ESPN | 238 |
| Juwan Johnson | TE | 131.6 | 174.8 | 119.1 | SLEEPER | 4.1 | CHEAPER on SLEEPER | 137 |
| Luther Burden | WR | 99.1 | 56 | 57.2 | ESPN | 3.5 | CHEAPER on ESPN | 181 |
| MarShawn Lloyd | RB | 136.4 | 137.1 | 85.4 | YAHOO | 4.3 | pricier on YAHOO | 101 |
| Quentin Johnston | WR | 153.6 | 111.2 | 105.2 | ESPN | 3.8 | CHEAPER on ESPN | 128 |
| Rico Dowdle | RB | 134.6 | 86.6 | 88.2 | ESPN | 3.9 | CHEAPER on ESPN | 130 |
| TreVeyon Henderson | RB | 107.8 | 60.5 | 70.4 | ESPN | 3.5 | CHEAPER on ESPN | 149 |
| Tucker Kraft | TE | 114.3 | 64.3 | 59.6 | ESPN | 4.4 | CHEAPER on ESPN | 157 |
| Tyler Shough | QB | 113 | 181.3 | 123.8 | SLEEPER | 5.2 | CHEAPER on SLEEPER | 256 |


## Who’s rising


_Last 7 days, as of 2026-10-09. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Michael Wilson | WR | 120.9 | 103.3 | 87 | 87.6 | 101 | 100.8 |
| Jaylen Warren | RB | 107.2 | 93.4 | 70 | 70.3 | 75.4 | 75.1 |
| Bryce Young | QB | 140.5 | 127.6 | — | — | 113.4 | 110.8 |
| Brock Purdy | QB | 73.3 | 60.4 | 122.4 | 122.4 | 96 | 95.4 |
| Juwan Johnson | TE | 144.9 | 132.1 | 175.4 | 175.4 | 119.5 | 119.1 |
| Chuba Hubbard | RB | 95.6 | 84.1 | 81.6 | 81.6 | 90.5 | 90 |
| Aaron Jones | RB | 124.2 | 113.2 | 127.6 | 127.4 | 122.9 | 122.1 |
| Nico Collins | WR | 38.8 | 28.6 | 23.9 | 24.1 | 21.1 | 21.1 |
| Quinshon Judkins | RB | 71.4 | 61.4 | 54.5 | 53.9 | 55.1 | 55 |
| Trevor Lawrence | QB | 109.3 | 101.1 | 102.2 | 102.3 | 80.4 | 80.1 |
| Harold Fannin | TE | 92.5 | 84.5 | 73.2 | 73.7 | 71 | 71 |
| Kyle Monangai | RB | 136.7 | 129.2 | 108.2 | 107.6 | 113.6 | 113.3 |
| Tetairoa McMillan | WR | 54.3 | 47 | 37.8 | 37.2 | 42.3 | 42.3 |
| Kyren Williams | RB | 42.7 | 35.5 | 26.1 | 26.1 | 27.6 | 27.5 |
| George Kittle | TE | 62.2 | 55.1 | 79.6 | 79.6 | 79 | 78.8 |
| Zach Charbonnet | RB | 161.1 | 154.1 | 151.6 | 151.3 | — | — |
| Denzel Boston | WR | 151 | 144.6 | 171.4 | 170.4 | 123.7 | 120.9 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Dalton Kincaid | TE | 103.7 | 123.6 | 87.9 | 88.4 | 94.1 | 93.8 |
| De'Von Achane | RB | 26.6 | 43.2 | 13.9 | 13.2 | 16.1 | 16.1 |
| DeVonta Smith | WR | 38 | 51.2 | 33.9 | 33.9 | 29.4 | 29.4 |
| Jalen Hurts | QB | 63.4 | 75.5 | 58.6 | 58.3 | 53.9 | 54 |
| Jadarian Price | RB | 102.5 | 112.8 | 60.6 | 61.8 | 62.8 | 63 |
| Ladd McConkey | WR | 68.2 | 77.6 | 35.2 | 35.3 | 45.2 | 45.3 |
| Travis Kelce | TE | 78.3 | 86.5 | 89.7 | 89.4 | 94.5 | 94.3 |
| Breece Hall | RB | 44.2 | 51.4 | 34.2 | 34.3 | 34 | 34.3 |
| Matthew Stafford | QB | 109.5 | 116.5 | 94.7 | 94.6 | 99 | 98.9 |
| Travis Etienne | RB | 65.6 | 72.7 | 42 | 41.9 | 41.6 | 42.1 |
| Dalton Schultz | TE | 158.2 | 165.2 | 182.2 | 179.5 | 124.7 | 124.7 |
| Terry McLaurin | WR | 85.4 | 92 | 55.5 | 55.4 | 56.4 | 56.6 |
| Saquon Barkley | RB | 22.1 | 28.3 | 11.5 | 11.8 | 11.1 | 11.2 |


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
| Jayden Daniels | QB | 68.2 | 6.6 | QB6 | QB3 | B | 258 | 309 |
| Patrick Mahomes | QB | 103.9 | 9.6 | QB13 | QB10 | B | 242 | 287 |
| Trevor Lawrence | QB | 100.8 | 9.3 | QB12 | QB6 | A | 250 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 51.7 | 5.2 | RB19 | RB14 | B | 197 | 197 |
| Chuba Hubbard | RB | 82.6 | 7.8 | RB27 | RB23 | B | 188 | 148 |
| Jaylen Warren | RB | 75.1 | 7.2 | RB25 | RB22 | B | 181 | 171 |
| Quinshon Judkins | RB | 55 | 5.5 | RB21 | RB17 | B | 191 | 196 |
| Tony Pollard | RB | 87.4 | 8.2 | RB28 | RB24 | B | 174 | 160 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 66.3 | 6.4 | WR27 | WR19 | B | 186 | 208 |
| Garrett Wilson | WR | 45.2 | 4.7 | WR19 | WR14 | B | 194 | 225 |
| Michael Wilson | WR | 100.4 | 9.3 | WR37 | WR25 | A | 198 | 166 |
| Mike Evans | WR | 70.6 | 6.8 | WR29 | WR18 | A | 174 | 222 |
| Parker Washington | WR | 72.9 | 7 | WR30 | WR17 | A | 185 | 212 |
| Tetairoa McMillan | WR | 42.2 | 4.4 | WR17 | WR11 | B | 208 | 223 |
| Zay Flowers | WR | 36.2 | 3.9 | WR15 | WR10 | B | 211 | 228 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 78.8 | 7.5 | TE9 | TE5 | A | 184 | 169 |
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
| Trevor Lawrence | JAX | 7 | 100.8 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97.4 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 123.8 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.2 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.5 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 158.2 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 68.2 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 95.3 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.4 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 6.5 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 42.2 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 16 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 52.6 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 51.7 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.8 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 14.5 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.3 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 30 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 13.6 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.8 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5.2 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 10.4 | C · 10th easiest | B · 9th easiest | easier |


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
| Tyler Warren | IND | 13 | 48.6 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 155.5 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 23 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 73.2 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Chig Okonkwo | WAS | 7 | 158.7 | C · 14th easiest | D · 8th hardest | much harder |
| AJ Barner | SEA | 11 | 153.8 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.8 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 40.6 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 78.8 | C · 16th easiest | F · 1st hardest | much harder |

