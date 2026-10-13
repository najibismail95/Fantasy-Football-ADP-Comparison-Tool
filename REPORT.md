# Fantasy ADP report — 2026-10-13

_Snapshot 2026-10-13 · 78 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 165 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.77 | 170.3 | 99.3 |
| SLEEPER | 2496 | 1.4 | 700.9 | 84.3 |
| YAHOO | 219 | 1.3 | 143.9 | 88.6 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1175 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 2496 |
| YAHOO | exact | 198 |
| YAHOO | team | 21 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Blake Corum | RB | 145.8 | 100.5 | 100 | ESPN | 3.8 | CHEAPER on ESPN | 115 |
| Brian Thomas | WR | 138.8 | 74.1 | 84.7 | ESPN | 4.9 | CHEAPER on ESPN | 136 |
| Bryce Young | QB | 117.6 | 226.3 | 108.5 | SLEEPER | 9.4 | CHEAPER on SLEEPER | 237 |
| Caleb Williams | QB | 115.2 | 71.6 | 65.3 | ESPN | 3.9 | CHEAPER on ESPN | 254 |
| Chris Godwin | WR | 142.4 | 92.3 | 93.6 | ESPN | 4.1 | CHEAPER on ESPN | 132 |
| Dalton Kincaid | TE | 134.8 | 87.4 | 93.7 | ESPN | 3.7 | CHEAPER on ESPN | 129 |
| David Montgomery | RB | 95.1 | 46 | 52.7 | ESPN | 3.8 | CHEAPER on ESPN | 165 |
| J.K. Dobbins | RB | 134.9 | 90.4 | 94.6 | ESPN | 3.5 | CHEAPER on ESPN | 149 |
| Jadarian Price | RB | 115.5 | 61.9 | 63 | ESPN | 4.4 | CHEAPER on ESPN | 142 |
| Jayden Reed | WR | 158 | 108.1 | 113 | ESPN | 4 | CHEAPER on ESPN | 198 |
| Jordan Mason | RB | 162.9 | 109.3 | 110.6 | ESPN | 4.4 | CHEAPER on ESPN | 134 |
| Justin Herbert | QB | 126.3 | 83.7 | 71 | ESPN | 4.1 | CHEAPER on ESPN | 223 |
| Juwan Johnson | TE | 133.1 | 174.9 | 118.9 | SLEEPER | 4.1 | CHEAPER on SLEEPER | 129 |
| Luther Burden | WR | 101.2 | 55.2 | 57.2 | ESPN | 3.8 | CHEAPER on ESPN | 176 |
| MarShawn Lloyd | RB | 135.1 | 137.6 | 85.4 | YAHOO | 4.2 | pricier on YAHOO | 112 |
| Quentin Johnston | WR | 154.8 | 112 | 105.2 | ESPN | 3.9 | CHEAPER on ESPN | 122 |
| Rico Dowdle | RB | 135.3 | 86.6 | 88.3 | ESPN | 4 | CHEAPER on ESPN | 121 |
| TreVeyon Henderson | RB | 109.7 | 60.9 | 70.5 | ESPN | 3.7 | CHEAPER on ESPN | 133 |
| Tucker Kraft | TE | 111 | 64.4 | 59.6 | ESPN | 4.1 | CHEAPER on ESPN | 154 |
| Tyler Shough | QB | 125.5 | 181.2 | 123 | SLEEPER | 4.7 | CHEAPER on SLEEPER | 237 |


## Who’s rising


_Last 7 days, as of 2026-10-13. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Bryce Young | QB | 139.6 | 118 | — | — | 112.4 | 108.9 |
| Michael Wilson | WR | 111.8 | 93.7 | 87.8 | 88.3 | 100.9 | 100.6 |
| Tetairoa McMillan | WR | 55.1 | 37.8 | 37.5 | 37.4 | 42.3 | 42.2 |
| Isaiah Likely | TE | 122.2 | 108.5 | 105.2 | 105.2 | 107.7 | 107.6 |
| Jared Goff | QB | 131.2 | 119.5 | 131.6 | 131.6 | 110 | 109.6 |
| Sam LaPorta | TE | 87.5 | 76.1 | 57.5 | 57.7 | 62.8 | 62.7 |
| Chuba Hubbard | RB | 90.3 | 79.5 | 81.3 | 81.2 | 90.3 | 89.8 |
| Brian Robinson | RB | 164.8 | 154.2 | 171 | 172.2 | 115.7 | 115.4 |
| T.J. Hockenson | TE | 163 | 153.5 | 163.8 | 163.5 | 126.9 | 126.5 |
| Mike Evans | WR | 101.6 | 92.3 | 63 | 62.9 | 70.7 | 70.6 |
| Aaron Jones | RB | 117.8 | 109 | 127.6 | 127.2 | 122.4 | 121.8 |
| Kyren Williams | RB | 39.6 | 31.3 | 26.2 | 26.6 | 27.6 | 27.5 |
| Jayden Daniels | QB | 70.7 | 62.3 | 68.5 | 68.1 | 58.2 | 58.4 |
| Kyle Monangai | RB | 134.9 | 126.8 | 107.9 | 107.6 | 113.5 | 113.1 |
| Denzel Boston | WR | 149.7 | 141.8 | 170.8 | 169.9 | 122.1 | 119.3 |
| Nico Collins | WR | 34.1 | 26.4 | 23.9 | 23.7 | 21.1 | 21.1 |
| Jaylen Warren | RB | 96.9 | 89.9 | 70.6 | 70.2 | 75.2 | 75 |
| Romeo Doubs | WR | 156.2 | 149.4 | 133.1 | 133.1 | 131.4 | 130.9 |
| Tucker Kraft | TE | 117.9 | 111.6 | 64.2 | 64.3 | 59.5 | 59.6 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Dalton Kincaid | TE | 114.4 | 133.6 | 88 | 87.7 | 93.9 | 93.7 |
| Travis Kelce | TE | 81 | 93.4 | 89.6 | 89.2 | 94.3 | 94.2 |
| Tyler Shough | QB | 108.6 | 120.6 | 180.8 | 181.6 | 124.8 | 123.2 |
| DJ Moore | WR | 77.1 | 88.4 | 53.7 | 53.7 | 56.8 | 56.8 |
| DeVonta Smith | WR | 44.7 | 54.3 | 33.3 | 33.8 | 29.4 | 29.5 |
| Saquon Barkley | RB | 23.8 | 33.1 | 11.7 | 11.8 | 11.1 | 11.2 |
| Lamar Jackson | QB | 27.4 | 36.8 | 31.3 | 31.4 | 38.3 | 38.3 |
| Jalen Hurts | QB | 71 | 80 | 58.4 | 58.3 | 53.9 | 54.1 |
| Kenyon Sadiq | TE | 155.2 | 164.2 | 168.6 | 171.4 | 128.7 | 127.7 |
| Rashee Rice | WR | 37.9 | 46.9 | 29.6 | 29.3 | 38.1 | 38.3 |
| Stefon Diggs | WR | 114.5 | 122.9 | 104.2 | 104.8 | 107.1 | 106.9 |
| Cam Skattebo | RB | 54.4 | 62.3 | 40.1 | 40.7 | 42.7 | 42.7 |
| De'Von Achane | RB | 37.6 | 45.3 | 13.4 | 13.5 | 16.1 | 16.1 |
| Jadarian Price | RB | 107.5 | 115 | 61.1 | 61.8 | 62.9 | 63 |
| Sam Darnold | QB | 154.3 | 160.8 | 162.2 | 161.7 | 121.3 | 121.2 |
| Jeremiyah Love | RB | 30.4 | 36.8 | 28.3 | 28 | 30.4 | 30.4 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 253pts, RB26 164pts, WR36 163pts, TE13 141pts, K13 102pts, DEF13 83pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2339 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_16 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_37 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brock Purdy | QB | 95 | 8.8 | QB10 | QB5 | A | 242 | 303 |
| Jayden Daniels | QB | 59.2 | 5.8 | QB6 | QB2 | B | 261 | 309 |
| Patrick Mahomes | QB | 103.6 | 9.5 | QB13 | QB7 | B | 241 | 287 |
| Trevor Lawrence | QB | 98.9 | 9.2 | QB12 | QB8 | B | 224 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 51.7 | 5.2 | RB19 | RB14 | B | 193 | 197 |
| Chuba Hubbard | RB | 81.6 | 7.7 | RB27 | RB21 | B | 193 | 148 |
| Jaylen Warren | RB | 75 | 7.2 | RB25 | RB18 | B | 187 | 171 |
| Quinshon Judkins | RB | 55 | 5.5 | RB21 | RB17 | B | 167 | 196 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 66.2 | 6.4 | WR27 | WR20 | A | 186 | 208 |
| Michael Wilson | WR | 93.6 | 8.7 | WR35 | WR29 | B | 179 | 166 |
| Mike Evans | WR | 70.6 | 6.8 | WR29 | WR14 | A | 194 | 222 |
| Parker Washington | WR | 72.7 | 7 | WR30 | WR19 | A | 184 | 212 |
| Tetairoa McMillan | WR | 37.5 | 4 | WR16 | WR10 | B | 209 | 223 |
| Zay Flowers | WR | 36.6 | 4 | WR15 | WR12 | B | 202 | 228 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 78.6 | 7.5 | TE9 | TE5 | B | 166 | 169 |
| Isaiah Likely | TE | 104.9 | 9.7 | TE12 | TE6 | A | 165 | 157 |
| Sam LaPorta | TE | 62.7 | 6.1 | TE5 | TE3 | B | 153 | 197 |
| Travis Kelce | TE | 94.2 | 8.8 | TE11 | TE8 | B | 143 | 171 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 150.7 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 98.8 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 98.9 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97.1 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 125.5 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.3 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.5 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 161.6 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 59.2 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 95 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.5 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 6.9 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.7 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 42.4 | B · 8th easiest | B · 5th easiest | easier |
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
| Justin Jefferson | MIN | 6 | 13.7 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.8 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5.3 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11.8 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 37.5 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.7 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 26.5 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.8 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.3 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 48.1 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 154.4 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 22.4 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 73.3 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 151.4 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.9 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.7 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 40.8 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 78.6 | C · 16th easiest | F · 1st hardest | much harder |

