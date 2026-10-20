# Fantasy ADP report — 2026-10-20

_Snapshot 2026-10-20 · 85 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 165 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.76 | 170 | 99.7 |
| SLEEPER | 2498 | 1.4 | 700.9 | 84.7 |
| YAHOO | 221 | 1.3 | 143.9 | 89.1 |


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
| Alec Pierce | WR | 140.2 | 96 | 98.3 | ESPN | 3.6 | CHEAPER on ESPN | 131 |
| Blake Corum | RB | 143.5 | 100.2 | 100.1 | ESPN | 3.6 | CHEAPER on ESPN | 119 |
| Brian Thomas | WR | 141.3 | 74.9 | 84.8 | ESPN | 5.1 | CHEAPER on ESPN | 128 |
| Bryce Young | QB | 121.9 | 226.3 | 106.8 | SLEEPER | 9.3 | CHEAPER on SLEEPER | 229 |
| Chris Godwin | WR | 145 | 92 | 93.8 | ESPN | 4.3 | CHEAPER on ESPN | 137 |
| Dalton Kincaid | TE | 142.6 | 87.1 | 93.5 | ESPN | 4.4 | CHEAPER on ESPN | 129 |
| David Montgomery | RB | 107.1 | 46.9 | 53 | ESPN | 4.8 | CHEAPER on ESPN | 168 |
| Denzel Boston | WR | 138.2 | 169.3 | 117 | SLEEPER | 3.5 | CHEAPER on SLEEPER | 137 |
| Jadarian Price | RB | 116.5 | 61.7 | 63.1 | ESPN | 4.5 | CHEAPER on ESPN | 140 |
| Jaylen Waddle | WR | 88.1 | 44.8 | 39 | ESPN | 3.9 | CHEAPER on ESPN | 169 |
| Jordan Mason | RB | 161.3 | 109 | 110.6 | ESPN | 4.3 | CHEAPER on ESPN | 133 |
| Justin Herbert | QB | 128.9 | 83.5 | 71.1 | ESPN | 4.3 | CHEAPER on ESPN | 213 |
| Ladd McConkey | WR | 82.4 | 35.5 | 45.8 | ESPN | 3.5 | CHEAPER on ESPN | 173 |
| Luther Burden | WR | 103.5 | 56.6 | 57.3 | ESPN | 3.9 | CHEAPER on ESPN | 175 |
| MarShawn Lloyd | RB | 133 | 137.1 | 85.6 | YAHOO | 4.1 | pricier on YAHOO | 89 |
| Quentin Johnston | WR | 156 | 112.8 | 105.2 | ESPN | 3.9 | CHEAPER on ESPN | 117 |
| Rico Dowdle | RB | 136.9 | 86.3 | 88.5 | ESPN | 4.1 | CHEAPER on ESPN | 118 |
| TreVeyon Henderson | RB | 115.4 | 59.2 | 70.7 | ESPN | 4.2 | CHEAPER on ESPN | 125 |
| Tucker Kraft | TE | 108.1 | 64.2 | 59.6 | ESPN | 3.8 | CHEAPER on ESPN | 150 |
| Tyler Shough | QB | 145.9 | 181.8 | 122.1 | SLEEPER | 4 | CHEAPER on SLEEPER | 229 |


## Who’s rising


_Last 7 days, as of 2026-10-20. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Isaiah Likely | TE | 108.5 | 81.1 | 105.2 | 105.7 | 107.6 | 107.3 |
| Jordan Love | QB | 157.7 | 139.1 | 159 | 158.9 | 119.8 | 119.6 |
| Mike Evans | WR | 92.3 | 75 | 62.9 | 63 | 70.6 | 70.5 |
| Jaylen Warren | RB | 89.9 | 73.3 | 70.2 | 70.1 | 75 | 74.7 |
| Drake Maye | QB | 67.2 | 51.8 | 47 | 47.8 | 49.5 | 49.5 |
| Parker Washington | WR | 83.7 | 70.1 | 71.8 | 71.3 | 72.8 | 72.5 |
| Christian Watson | WR | 77.5 | 64.1 | 66 | 66.3 | 66.2 | 65.9 |
| Matthew Golden | WR | 109.8 | 97.7 | 125.7 | 125.4 | 122 | 121.4 |
| Jalen Coker | WR | 127.7 | 117 | 146.6 | 146 | 125.2 | 124.2 |
| Woody Marks | RB | 160.6 | 150.7 | 147.6 | 147.6 | 130.3 | 129.5 |
| Jayden Daniels | QB | 62.3 | 53.7 | 68.1 | 68.8 | 58.4 | 58.7 |
| Rhamondre Stevenson | RB | 109 | 100.5 | 78.2 | 78.1 | 74.1 | 74 |
| Jared Goff | QB | 119.5 | 112.6 | 131.6 | 131.2 | 109.6 | 109.2 |
| Matthew Stafford | QB | 118 | 111.1 | 94.7 | 94.2 | 98.9 | 98.7 |
| Caleb Williams | QB | 115.3 | 108.5 | 71.4 | 71.4 | 65.3 | 65.4 |
| Josh Jacobs | RB | 125.1 | 118.4 | 51.7 | 51.2 | — | — |
| Malik Nabers | WR | 42.3 | 35.7 | 27.5 | 27.3 | 30.1 | 30.1 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tyler Shough | QB | 120.6 | 146.3 | 181.6 | 181.8 | 123.2 | 122.2 |
| Deebo Samuel | WR | 126.9 | 150.7 | 130.3 | 130.8 | 120.4 | 120 |
| Quinshon Judkins | RB | 61.6 | 77.5 | 53.9 | 53.7 | 55 | 55 |
| David Montgomery | RB | 93 | 106.7 | 46 | 46.9 | 52.7 | 52.9 |
| Jalen Hurts | QB | 80 | 93 | 58.3 | 58.1 | 54.1 | 54.4 |
| Juwan Johnson | TE | 131.9 | 143.9 | 175 | 175.8 | 118.9 | 118.7 |
| Dak Prescott | QB | 82.7 | 93.8 | 77.3 | 77.5 | 72.6 | 72.5 |
| Harold Fannin | TE | 87.1 | 97.8 | 73.6 | 73.4 | 71.1 | 71.2 |
| Michael Wilson | WR | 93.7 | 103.7 | 88.3 | 88.1 | 100.6 | 100.3 |
| Carnell Tate | WR | 102.7 | 112 | 69.2 | 69.1 | 84.1 | 84.1 |
| Jaylen Waddle | WR | 79.1 | 87.7 | 44.8 | 44.8 | 38.9 | 39 |
| Jeremiyah Love | RB | 36.8 | 45.3 | 28 | 28.6 | 30.4 | 30.5 |
| Dalton Kincaid | TE | 133.6 | 142 | 87.7 | 87.1 | 93.7 | 93.6 |
| TreVeyon Henderson | RB | 108.6 | 115.8 | 60.2 | 60.2 | 70.5 | 70.7 |
| Brian Robinson | RB | 154.2 | 161 | 172.2 | 173.3 | 115.4 | 115.3 |
| T.J. Hockenson | TE | 153.5 | 160.2 | 163.5 | 163.2 | 126.5 | 126.5 |
| Alvin Kamara | RB | 156.3 | 162.4 | 166.5 | 166 | 124.2 | 124.2 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 245pts, RB25 155pts, WR37 155pts, TE13 135pts, K13 100pts, DEF13 81pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2336 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_20 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_41 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brock Purdy | QB | 94.6 | 8.8 | QB9 | QB7 | B | 222 | 303 |
| Jared Goff | QB | 111.9 | 10.2 | QB13 | QB8 | B | 222 | 283 |
| Jayden Daniels | QB | 58.7 | 5.8 | QB5 | QB2 | B | 247 | 309 |
| Patrick Mahomes | QB | 103.3 | 9.5 | QB12 | QB9 | B | 213 | 287 |
| Trevor Lawrence | QB | 99.3 | 9.2 | QB11 | QB6 | A | 224 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Chuba Hubbard | RB | 81.3 | 7.7 | RB27 | RB23 | B | 179 | 148 |
| D'Andre Swift | RB | 49.3 | 5 | RB18 | RB13 | B | 168 | 208 |
| Jaylen Warren | RB | 73.3 | 7 | RB25 | RB17 | A | 175 | 171 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 65.1 | 6.3 | WR25 | WR21 | B | 173 | 208 |
| DK Metcalf | WR | 84.9 | 8 | WR32 | WR29 | B | 148 | 183 |
| Mike Evans | WR | 70.4 | 6.8 | WR27 | WR14 | A | 177 | 222 |
| Parker Washington | WR | 71.3 | 6.9 | WR28 | WR18 | A | 179 | 212 |
| Tetairoa McMillan | WR | 38.9 | 4.2 | WR17 | WR10 | B | 194 | 223 |
| Zay Flowers | WR | 37.2 | 4 | WR15 | WR11 | B | 188 | 228 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 78.4 | 7.5 | TE9 | TE6 | B | 151 | 169 |
| Isaiah Likely | TE | 105.7 | 9.7 | TE12 | TE7 | A | 158 | 157 |
| Sam LaPorta | TE | 62.7 | 6.1 | TE5 | TE3 | B | 153 | 197 |
| Travis Kelce | TE | 94.1 | 8.8 | TE11 | TE9 | B | 124 | 171 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 149.6 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 98.7 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 99.3 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 145.9 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.2 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.3 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 141.4 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 58.7 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 94.6 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.6 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.1 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.4 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 42.8 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 15.9 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 53 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 51.6 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.8 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 13.7 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.3 | C · 16th easiest | F · 2nd hardest | much harder |


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
| Tetairoa McMillan | CAR | 5 | 38.9 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 5.4 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 26.7 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.7 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.3 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.6 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 48 | D · 8th hardest | A · 3rd easiest | much easier |
| Brock Bowers | LV | 13 | 21.8 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 73.6 | B · 9th easiest | B · 6th easiest | easier |
| Dalton Kincaid | BUF | 7 | 93.5 | D · 5th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 151.6 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.7 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.7 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 41.1 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 78.4 | C · 16th easiest | F · 1st hardest | much harder |

