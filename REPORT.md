# Fantasy ADP report — 2026-10-12

_Snapshot 2026-10-12 · 77 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 165 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.77 | 170.3 | 99.7 |
| SLEEPER | 2496 | 1.4 | 700.9 | 85 |
| YAHOO | 218 | 1.3 | 143.9 | 90.4 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1175 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 2496 |
| YAHOO | exact | 197 |
| YAHOO | team | 21 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Blake Corum | RB | 145.9 | 100.5 | 100 | ESPN | 3.8 | CHEAPER on ESPN | 117 |
| Brian Thomas | WR | 138.5 | 74.1 | 84.7 | ESPN | 4.9 | CHEAPER on ESPN | 136 |
| Bryce Young | QB | 116.7 | 226.3 | 108.9 | SLEEPER | 9.5 | CHEAPER on SLEEPER | 237 |
| Caleb Williams | QB | 115.4 | 71.6 | 65.3 | ESPN | 3.9 | CHEAPER on ESPN | 254 |
| Chris Godwin | WR | 142.4 | 92.3 | 93.6 | ESPN | 4.1 | CHEAPER on ESPN | 132 |
| Dalton Kincaid | TE | 134.2 | 87.4 | 93.7 | ESPN | 3.6 | CHEAPER on ESPN | 137 |
| David Montgomery | RB | 93.3 | 46.1 | 52.7 | ESPN | 3.7 | CHEAPER on ESPN | 169 |
| J.K. Dobbins | RB | 135.5 | 91.6 | 94.6 | ESPN | 3.5 | CHEAPER on ESPN | 149 |
| Jadarian Price | RB | 114.8 | 61.9 | 63 | ESPN | 4.4 | CHEAPER on ESPN | 141 |
| Jayden Reed | WR | 157.8 | 107.9 | 113 | ESPN | 3.9 | CHEAPER on ESPN | 198 |
| Jordan Mason | RB | 163 | 109.3 | 110.6 | ESPN | 4.4 | CHEAPER on ESPN | 134 |
| Justin Herbert | QB | 125.9 | 83.7 | 71 | ESPN | 4 | CHEAPER on ESPN | 223 |
| Juwan Johnson | TE | 132 | 175.1 | 118.9 | SLEEPER | 4.1 | CHEAPER on SLEEPER | 129 |
| Luther Burden | WR | 100.4 | 56.8 | 57.2 | ESPN | 3.6 | CHEAPER on ESPN | 176 |
| MarShawn Lloyd | RB | 135.5 | 137.7 | 85.4 | YAHOO | 4.3 | pricier on YAHOO | 112 |
| Quentin Johnston | WR | 154.4 | 112 | 105.2 | ESPN | 3.8 | CHEAPER on ESPN | 122 |
| Rico Dowdle | RB | 134.8 | 86.6 | 88.3 | ESPN | 3.9 | CHEAPER on ESPN | 121 |
| TreVeyon Henderson | RB | 108.7 | 59.1 | 70.5 | ESPN | 3.7 | CHEAPER on ESPN | 143 |
| Tucker Kraft | TE | 111.4 | 64.4 | 59.6 | ESPN | 4.1 | CHEAPER on ESPN | 153 |
| Tyler Shough | QB | 121.2 | 181.3 | 123.2 | SLEEPER | 4.9 | CHEAPER on SLEEPER | 237 |


## Who’s rising


_Last 7 days, as of 2026-10-12. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Bryce Young | QB | 142.1 | 119.4 | — | — | 112.8 | 109.4 |
| Michael Wilson | WR | 114.5 | 95 | 87.9 | 87.9 | 100.9 | 100.6 |
| Tetairoa McMillan | WR | 56.2 | 39.5 | 37.6 | 37.3 | 42.3 | 42.2 |
| Chuba Hubbard | RB | 92.4 | 80.2 | 81 | 81.3 | 90.3 | 89.9 |
| T.J. Hockenson | TE | 163.7 | 153.4 | 163.8 | 163.4 | 126.9 | 126.5 |
| Nico Collins | WR | 36.2 | 26.2 | 24.1 | 23.9 | 21.1 | 21.1 |
| Jared Goff | QB | 131.7 | 121.8 | 131.3 | 131.5 | 110 | 109.7 |
| Kyle Monangai | RB | 136.2 | 126.3 | 107.9 | 107.5 | 113.5 | 113.2 |
| Aaron Jones | RB | 119.6 | 110 | 127.5 | 127.2 | 122.6 | 121.9 |
| Sam LaPorta | TE | 87.4 | 77.8 | 57.4 | 57.6 | 62.8 | 62.7 |
| Isaiah Likely | TE | 121.7 | 112.3 | 105.1 | 105.4 | 107.7 | 107.6 |
| Brian Robinson | RB | 164.8 | 155.4 | 170.6 | 171.8 | 115.8 | 115.5 |
| Kyren Williams | RB | 40.9 | 32.1 | 26.1 | 26.3 | 27.6 | 27.5 |
| Quinshon Judkins | RB | 68.8 | 59.9 | 53.9 | 54 | 55 | 55 |
| Denzel Boston | WR | 150.9 | 142.4 | 170.8 | 170.2 | 122.5 | 119.7 |
| Mike Evans | WR | 102.7 | 95 | 62.7 | 63.1 | 70.7 | 70.6 |
| Brock Purdy | QB | 66 | 58.4 | 122.3 | 122.3 | 95.7 | 95.2 |
| Romeo Doubs | WR | 157 | 149.4 | 133 | 133.2 | 131.5 | 131 |
| Deebo Samuel | WR | 132.6 | 125.3 | 130.1 | 130.4 | 121.7 | 120.5 |
| Jaylen Warren | RB | 99.3 | 91.9 | 70.6 | 70.6 | 75.3 | 75 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Dalton Kincaid | TE | 111.2 | 131.6 | 88.2 | 87.8 | 94 | 93.7 |
| Travis Kelce | TE | 79.9 | 91.9 | 89.6 | 89.3 | 94.4 | 94.2 |
| DeVonta Smith | WR | 42 | 53.6 | 33.5 | 33.9 | 29.4 | 29.5 |
| DJ Moore | WR | 76.4 | 87.1 | 53.8 | 53.6 | 56.8 | 56.8 |
| De'Von Achane | RB | 34.7 | 45.2 | 13.7 | 13.4 | 16.1 | 16.1 |
| Jalen Hurts | QB | 68.8 | 78.7 | 58.5 | 58.2 | 53.9 | 54.1 |
| Saquon Barkley | RB | 22.5 | 32.1 | 11.6 | 11.8 | 11.1 | 11.2 |
| Rashee Rice | WR | 37.1 | 46.1 | 29.5 | 29.5 | 38 | 38.2 |
| Jadarian Price | RB | 105.9 | 114.7 | 60.7 | 61.8 | 62.9 | 63 |
| Kenyon Sadiq | TE | 155 | 163.7 | 168.2 | 170.5 | 128.8 | 127.9 |
| Lamar Jackson | QB | 26.6 | 35.1 | 31.2 | 31.4 | 38.4 | 38.3 |
| Stefon Diggs | WR | 114.1 | 121.1 | 104.3 | 104.3 | 107.1 | 107 |
| Tyler Shough | QB | 109.9 | 116.8 | 179.4 | 182.1 | 125.1 | 123.4 |
| Cam Skattebo | RB | 54.2 | 61.1 | 40.6 | 40.2 | 42.7 | 42.7 |
| Matthew Stafford | QB | 111.8 | 118.1 | 94.4 | 94.7 | 99 | 98.9 |
| Sam Darnold | QB | 153.9 | 159.9 | 162 | 161.8 | 121.4 | 121.2 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 253pts, RB26 161pts, WR36 163pts, TE13 141pts, K13 102pts, DEF13 83pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2339 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_14 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_41 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brock Purdy | QB | 95.1 | 8.8 | QB10 | QB6 | B | 240 | 303 |
| Jayden Daniels | QB | 61.9 | 6.1 | QB6 | QB2 | B | 260 | 309 |
| Patrick Mahomes | QB | 103.7 | 9.6 | QB13 | QB8 | A | 239 | 287 |
| Trevor Lawrence | QB | 99.3 | 9.2 | QB12 | QB7 | B | 224 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 51.7 | 5.2 | RB19 | RB14 | B | 192 | 197 |
| Chuba Hubbard | RB | 81.7 | 7.7 | RB27 | RB21 | B | 193 | 148 |
| Jaylen Warren | RB | 75 | 7.2 | RB25 | RB18 | B | 187 | 171 |
| Quinshon Judkins | RB | 55 | 5.5 | RB21 | RB17 | B | 167 | 196 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 66.2 | 6.4 | WR27 | WR20 | B | 185 | 208 |
| Michael Wilson | WR | 92.9 | 8.7 | WR35 | WR29 | B | 177 | 166 |
| Mike Evans | WR | 70.6 | 6.8 | WR29 | WR14 | A | 192 | 222 |
| Parker Washington | WR | 72.8 | 7 | WR30 | WR19 | A | 184 | 212 |
| Tetairoa McMillan | WR | 37.6 | 4.1 | WR16 | WR10 | B | 209 | 223 |
| Zay Flowers | WR | 36.2 | 3.9 | WR15 | WR12 | B | 202 | 228 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 78.7 | 7.5 | TE9 | TE5 | B | 165 | 169 |
| Isaiah Likely | TE | 107.6 | 9.9 | TE12 | TE6 | A | 165 | 157 |
| Sam LaPorta | TE | 62.7 | 6.1 | TE5 | TE3 | B | 153 | 197 |
| Travis Kelce | TE | 94.1 | 8.8 | TE11 | TE8 | B | 142 | 171 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 149.3 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 98.9 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 99.3 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97.2 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 123.2 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.3 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.6 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 161.1 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 61.9 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 95.1 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.4 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.1 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.7 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 42.3 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 16 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 52.7 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 51.7 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.8 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 13.8 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.3 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 30.1 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 13.6 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.8 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5.3 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11.2 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 37.6 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 5.3 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 26.4 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.8 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.3 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 47.9 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 153.4 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 22.6 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 73.3 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 151.4 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.9 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.7 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 40.7 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 78.7 | C · 16th easiest | F · 1st hardest | much harder |

