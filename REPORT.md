# Fantasy ADP report — 2026-10-18

_Snapshot 2026-10-18 · 83 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 165 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.76 | 170 | 98.7 |
| SLEEPER | 2498 | 1.4 | 700.9 | 85 |
| YAHOO | 220 | 1.3 | 143.9 | 88.6 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1175 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 2498 |
| YAHOO | exact | 199 |
| YAHOO | team | 21 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Blake Corum | RB | 145.4 | 100.2 | 100 | ESPN | 3.8 | CHEAPER on ESPN | 115 |
| Brian Thomas | WR | 141 | 74.9 | 84.8 | ESPN | 5.1 | CHEAPER on ESPN | 136 |
| Bryce Young | QB | 120.7 | 226.3 | 107.3 | SLEEPER | 9.4 | CHEAPER on SLEEPER | 237 |
| Caleb Williams | QB | 112.7 | 71.4 | 65.4 | ESPN | 3.7 | CHEAPER on ESPN | 254 |
| Chris Godwin | WR | 144.9 | 92 | 93.7 | ESPN | 4.3 | CHEAPER on ESPN | 130 |
| Dalton Kincaid | TE | 141.1 | 87.1 | 93.6 | ESPN | 4.2 | CHEAPER on ESPN | 128 |
| David Montgomery | RB | 106.3 | 46.9 | 52.9 | ESPN | 4.7 | CHEAPER on ESPN | 165 |
| Jadarian Price | RB | 117.1 | 61.7 | 63.1 | ESPN | 4.6 | CHEAPER on ESPN | 143 |
| Jayden Reed | WR | 158.2 | 108.9 | 113 | ESPN | 3.9 | CHEAPER on ESPN | 198 |
| Jaylen Waddle | WR | 87.2 | 44.8 | 39 | ESPN | 3.8 | CHEAPER on ESPN | 172 |
| Jordan Mason | RB | 162.1 | 109 | 110.6 | ESPN | 4.4 | CHEAPER on ESPN | 134 |
| Justin Herbert | QB | 128.8 | 83.5 | 71 | ESPN | 4.3 | CHEAPER on ESPN | 223 |
| Juwan Johnson | TE | 142.2 | 175.9 | 118.8 | SLEEPER | 3.8 | CHEAPER on SLEEPER | 131 |
| Luther Burden | WR | 105.8 | 55.4 | 57.3 | ESPN | 4.1 | CHEAPER on ESPN | 177 |
| MarShawn Lloyd | RB | 132.6 | 137.1 | 85.5 | YAHOO | 4.1 | pricier on YAHOO | 102 |
| Quentin Johnston | WR | 156.4 | 111.2 | 105.2 | ESPN | 4 | CHEAPER on ESPN | 121 |
| Rico Dowdle | RB | 137.7 | 86.3 | 88.4 | ESPN | 4.2 | CHEAPER on ESPN | 121 |
| TreVeyon Henderson | RB | 116.4 | 60.7 | 70.6 | ESPN | 4.2 | CHEAPER on ESPN | 142 |
| Tucker Kraft | TE | 109.2 | 63.8 | 59.6 | ESPN | 4 | CHEAPER on ESPN | 154 |
| Tyler Shough | QB | 145.9 | 181.9 | 122.4 | SLEEPER | 4 | CHEAPER on SLEEPER | 237 |


## Who’s rising


_Last 7 days, as of 2026-10-18. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Isaiah Likely | TE | 115.2 | 87.9 | 105.2 | 105.2 | 107.6 | 107.4 |
| Mike Evans | WR | 96.9 | 77 | 62.9 | 63 | 70.6 | 70.5 |
| Drake Maye | QB | 71.1 | 54.6 | 47 | 47.9 | 49.4 | 49.5 |
| Jaylen Warren | RB | 92.9 | 76.4 | 70.2 | 70.1 | 75.1 | 74.8 |
| Jordan Love | QB | 159.8 | 144.3 | 159.5 | 158.4 | 119.9 | 119.7 |
| Jayden Daniels | QB | 67.8 | 53.9 | 68.2 | 68.9 | 58.3 | 58.6 |
| Christian Watson | WR | 79.2 | 67.4 | 66 | 66.6 | 66.3 | 66 |
| Parker Washington | WR | 84.6 | 73 | 71.8 | 71.8 | 72.9 | 72.6 |
| Bucky Irving | RB | 64.1 | 53.7 | 43.1 | 43.9 | 51.7 | 51.6 |
| Jared Goff | QB | 123.8 | 114.4 | 131.4 | 131.3 | 109.7 | 109.3 |
| Matthew Golden | WR | 110.9 | 102.2 | 126 | 126 | 122.2 | 121.6 |
| Woody Marks | RB | 161.4 | 152.9 | 148.8 | 147.2 | 130.3 | 129.7 |
| Rhamondre Stevenson | RB | 110.4 | 102.1 | 78.7 | 78.1 | 74.1 | 74 |
| Jalen Coker | WR | 129.3 | 121.5 | 146.2 | 146.2 | 125.6 | 124.5 |
| Malik Nabers | WR | 43.9 | 37.7 | 27.1 | 27.8 | 30.1 | 30.1 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tyler Shough | QB | 114.1 | 142.3 | 182.1 | 181.4 | 123.6 | 122.5 |
| Deebo Samuel | WR | 125.4 | 145.2 | 130.5 | 130.8 | 120.7 | 120.1 |
| Quinshon Judkins | RB | 59.4 | 74.4 | 54.1 | 54.3 | 55 | 55 |
| David Montgomery | RB | 90.3 | 104.3 | 46 | 46.9 | 52.6 | 52.8 |
| Dak Prescott | QB | 80.1 | 92.3 | 77.2 | 77.2 | 72.7 | 72.5 |
| Jalen Hurts | QB | 77.2 | 88.7 | 58.2 | 58.1 | 54 | 54.3 |
| Dalton Kincaid | TE | 129 | 140.4 | 88.1 | 87.1 | 93.8 | 93.6 |
| Harold Fannin | TE | 85.1 | 95.7 | 73.6 | 73.4 | 71.1 | 71.2 |
| Juwan Johnson | TE | 131.1 | 141.1 | 175 | 175.3 | 119 | 118.8 |
| Carnell Tate | WR | 102.4 | 111.4 | 69 | 69.1 | 84.1 | 84.1 |
| Jaylen Waddle | WR | 78.1 | 86 | 44.6 | 44.8 | 38.8 | 39 |
| Stefon Diggs | WR | 119.5 | 127.3 | 104.3 | 104.2 | 107 | 106.8 |
| TreVeyon Henderson | RB | 107.6 | 115.4 | 60.5 | 60.2 | 70.4 | 70.6 |
| Lamar Jackson | QB | 33.3 | 39.8 | 31.3 | 31.4 | 38.3 | 38.4 |
| Jeremiyah Love | RB | 35.6 | 41.8 | 28 | 28.2 | 30.4 | 30.5 |
| Luther Burden | WR | 99.1 | 105.1 | 56.3 | 55.8 | 57.2 | 57.3 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 253pts, RB25 160pts, WR37 153pts, TE13 139pts, K13 102pts, DEF13 83pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2339 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_17 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_40 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brock Purdy | QB | 94.7 | 8.8 | QB9 | QB4 | B | 242 | 303 |
| Jayden Daniels | QB | 58.6 | 5.8 | QB5 | QB2 | B | 261 | 309 |
| Patrick Mahomes | QB | 103.4 | 9.5 | QB12 | QB7 | B | 241 | 287 |
| Trevor Lawrence | QB | 102.2 | 9.4 | QB11 | QB8 | B | 224 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 51.6 | 5.2 | RB19 | RB13 | B | 194 | 197 |
| Chuba Hubbard | RB | 81.3 | 7.7 | RB27 | RB21 | A | 194 | 148 |
| Jaylen Warren | RB | 73.9 | 7.1 | RB25 | RB18 | B | 188 | 171 |
| Quinshon Judkins | RB | 55 | 5.5 | RB21 | RB17 | B | 167 | 196 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 66 | 6.4 | WR27 | WR20 | B | 181 | 208 |
| Michael Wilson | WR | 100.3 | 9.3 | WR37 | WR29 | A | 178 | 166 |
| Mike Evans | WR | 70.5 | 6.8 | WR29 | WR13 | A | 191 | 222 |
| Parker Washington | WR | 71.3 | 6.9 | WR30 | WR18 | A | 185 | 212 |
| Tetairoa McMillan | WR | 38.7 | 4.1 | WR17 | WR10 | B | 209 | 223 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 78.5 | 7.5 | TE9 | TE5 | B | 166 | 169 |
| Isaiah Likely | TE | 105.7 | 9.7 | TE12 | TE6 | A | 164 | 157 |
| Sam LaPorta | TE | 62.7 | 6.1 | TE5 | TE3 | B | 153 | 197 |
| Travis Kelce | TE | 94.1 | 8.8 | TE11 | TE8 | B | 141 | 171 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 150.4 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 98.7 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 102.2 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97.9 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 145.9 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.1 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.3 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 162.2 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 58.6 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 94.7 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.5 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.1 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.4 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 42.7 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 15.9 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 52.9 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 51.6 | C · 12th easiest | D · 6th hardest | harder |
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
| CeeDee Lamb | DAL | 14 | 11.9 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 38.7 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.7 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 26.7 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.6 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.2 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.6 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 48 | D · 8th hardest | A · 3rd easiest | much easier |
| Brock Bowers | LV | 13 | 21.8 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 73.5 | B · 9th easiest | B · 6th easiest | easier |
| Dalton Kincaid | BUF | 7 | 93.6 | D · 5th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 151.6 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.7 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.7 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 41 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 78.5 | C · 16th easiest | F · 1st hardest | much harder |

