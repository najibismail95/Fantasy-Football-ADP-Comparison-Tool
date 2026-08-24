# Fantasy ADP report — 2026-08-24

_Snapshot 2026-08-24 · 28 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 166 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 350 | 1.44 | 171.4 | 98.7 |
| SLEEPER | 1498 | 1 | 700.8 | 82 |
| YAHOO | 223 | 1.4 | 144.6 | 90.1 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1175 |
| ESPN | id | 465 |
| ESPN | team | 110 |
| SLEEPER | id | 1498 |
| YAHOO | exact | 202 |
| YAHOO | team | 21 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Blake Corum | RB | 137.6 | 103 | 99.6 | ESPN | 3 | CHEAPER on ESPN | 147 |
| Brian Robinson | RB | 165.1 | 153.4 | 121.7 | YAHOO | 3.1 | pricier on YAHOO | 82 |
| Chris Godwin | WR | 144.5 | 95.2 | 97.8 | ESPN | 4 | CHEAPER on ESPN | 165 |
| Chuba Hubbard | RB | 121.9 | 77.9 | 83.7 | ESPN | 3.4 | CHEAPER on ESPN | 160 |
| Dalton Kincaid | TE | 132.3 | 89.6 | 99.1 | ESPN | 3.2 | CHEAPER on ESPN | 160 |
| De'Zhaun Stribling | WR | 152.6 | 155 | 116.4 | YAHOO | 3.1 | pricier on YAHOO | 129 |
| Jordyn Tyson | WR | 155.3 | 86.8 | 94 | ESPN | 5.4 | CHEAPER on ESPN | 105 |
| Justin Herbert | QB | 107.2 | 82.7 | 69.7 | ESPN | 2.6 | CHEAPER on ESPN | 290 |
| Kyler Murray | QB | 146.6 | 159.7 | 111.7 | YAHOO | 3.5 | pricier on YAHOO | 263 |
| Makai Lemon | WR | 143.5 | 87.3 | 111.8 | ESPN | 3.7 | CHEAPER on ESPN | 162 |
| Mike Evans | WR | 93.9 | 60 | 66.9 | ESPN | 2.5 | CHEAPER on ESPN | 202 |
| RJ Harvey | RB | 139.1 | 79.5 | 103.5 | ESPN | 4 | CHEAPER on ESPN | 147 |
| T.J. Hockenson | TE | 133 | 164.1 | 129.2 | SLEEPER | 2.8 | CHEAPER on SLEEPER | 157 |
| Travis Hunter | WR | 120.7 | 166.1 | 126.5 | SLEEPER | 3.5 | CHEAPER on SLEEPER | 107 |


## Unresolved players (surfaced, never dropped)

_(no rows)_


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 290pts, RB26 184pts, WR36 184pts, TE13 160pts, K13 124pts, DEF13 88pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_1341 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_7 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 99.9 | 9.2 | QB13 | QB9 | B | 296 | 296 |
| Brock Purdy | QB | 103.1 | 9.5 | QB14 | QB8 | B | 292 | 303 |
| Bryce Young | QB | 174.7 | 15.5 | QB28 | QB25 | A | 238 | 236 |
| C.J. Stroud | QB | 165.4 | 14.7 | QB25 | QB23 | B | 247 | 248 |
| Jalen Hurts | QB | 56.9 | 5.7 | QB6 | QB4 | B | 320 | 311 |
| Malik Willis | QB | 159.5 | 14.2 | QB23 | QB21 | B | 239 | 270 |
| Sam Darnold | QB | 162 | 14.4 | QB24 | QB22 | B | 243 | 263 |
| Tyler Shough | QB | 155.4 | 13.9 | QB21 | QB19 | B | 266 | 271 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Aaron Jones | RB | 124.9 | 11.3 | RB40 | RB36 | B | 177 | 137 |
| Alvin Kamara | RB | 159.4 | 14.2 | RB52 | RB47 | B | 117 | 63 |
| Breece Hall | RB | 33.7 | 3.7 | RB16 | RB13 | B | 274 | 211 |
| D'Andre Swift | RB | 55.6 | 5.5 | RB23 | RB21 | B | 212 | 208 |
| Derrick Henry | RB | 19.1 | 2.5 | RB11 | RB8 | B | 275 | 247 |
| Isiah Pacheco | RB | 163.5 | 14.5 | RB54 | RB49 | A | 124 | 54 |
| Keaton Mitchell | RB | 156.9 | 14 | RB51 | RB46 | B | 94 | 97 |
| Kenneth Walker | RB | 19.7 | 2.6 | RB12 | RB10 | B | 274 | 244 |
| Kenny Gainwell | RB | 118 | 10.8 | RB39 | RB33 | A | 178 | 152 |
| Travis Etienne | RB | 44.7 | 4.6 | RB19 | RB17 | B | 246 | 208 |
| Tyjae Spears | RB | 161.1 | 14.3 | RB53 | RB42 | A | 154 | 115 |
| Woody Marks | RB | 150.2 | 13.4 | RB48 | RB43 | B | 128 | 84 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Deebo Samuel | WR | 132.3 | 11.9 | WR55 | WR51 | B | 161 | 156 |
| Denzel Boston | WR | 165.2 | 14.7 | WR64 | WR56 | A | 141 | 135 |
| Garrett Wilson | WR | 45.5 | 4.7 | WR19 | WR13 | B | 250 | 225 |
| Jalen Coker | WR | 143.3 | 12.9 | WR57 | WR52 | A | 147 | 166 |
| Jalen McMillan | WR | 169.5 | 15 | WR67 | WR58 | A | 133 | 127 |
| Jayden Reed | WR | 119.4 | 10.9 | WR48 | WR37 | B | 170 | 198 |
| Jerry Jeudy | WR | 178.4 | 15.8 | WR69 | WR60 | A | 138 | 120 |
| Khalil Shakir | WR | 131.4 | 11.9 | WR53 | WR44 | B | 171 | 171 |
| Matthew Golden | WR | 128.3 | 11.6 | WR50 | WR39 | B | 185 | 170 |
| Parker Washington | WR | 82.5 | 7.8 | WR33 | WR28 | B | 187 | 212 |
| Rashid Shaheed | WR | 146.7 | 13.1 | WR58 | WR55 | B | 144 | 138 |
| Tank Dell | WR | 167.4 | 14.9 | WR65 | WR57 | A | 153 | 116 |
| Xavier Worthy | WR | 128.8 | 11.7 | WR52 | WR45 | B | 173 | 162 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brenton Strange | TE | 140.3 | 12.6 | TE19 | TE17 | B | 142 | 161 |
| Dalton Schultz | TE | 160.7 | 14.3 | TE23 | TE20 | B | 133 | 139 |
| Harold Fannin | TE | 71.4 | 6.9 | TE8 | TE6 | B | 188 | 180 |
| Jake Ferguson | TE | 111.3 | 10.2 | TE14 | TE12 | B | 167 | 160 |
| Juwan Johnson | TE | 163.6 | 14.5 | TE24 | TE19 | B | 143 | 141 |
| Mark Andrews | TE | 121.4 | 11 | TE15 | TE11 | B | 169 | 163 |
| Pat Freiermuth | TE | 182.2 | 16.1 | TE28 | TE22 | A | 136 | 128 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Rows are the 24 most-drafted at the position, easiest playoff schedule first._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### Easiest playoff schedules


_Easiest 5 playoff schedules (weeks 15-17) at each position, one player per team — teammates share a schedule, so the most-drafted player stands in for his. Full boards below._

| pos | 1st | 2nd | 3rd | 4th | 5th |
| --- | --- | --- | --- | --- | --- |
| QB | Kyler Murray (MIN) | Matthew Stafford (LAR) | Trevor Lawrence (JAX) | Jaxson Dart (NYG) | Tyler Shough (NO) |
| RB | Jeremiyah Love (ARI) | Jonathan Taylor (IND) | Travis Etienne (NO) | Derrick Henry (BAL) | Quinshon Judkins (CLE) |
| WR | Malik Nabers (NYG) | Justin Jefferson (MIN) | Ja'Marr Chase (CIN) | Puka Nacua (LAR) | CeeDee Lamb (DAL) |
| TE | Mark Andrews (BAL) | Tyler Warren (IND) | T.J. Hockenson (MIN) | Brock Bowers (LV) | Kyle Pitts (ATL) |


### QB

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 146.6 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 95.7 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 93.2 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 87.8 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 155.4 | C · 14th hardest | B · 7th easiest | much easier |
| Daniel Jones | IND | 13 | 158.4 | B · 9th easiest | C · 10th easiest | similar |
| Lamar Jackson | BAL | 13 | 37.6 | C · 13th hardest | C · 12th easiest | easier |
| Josh Allen | BUF | 7 | 22 | D · 2nd hardest | C · 13th easiest | much easier |
| Justin Herbert | LAC | 7 | 82.7 | D · 6th hardest | C · 14th easiest | easier |
| Fernando Mendoza | LV | 13 | 150.6 | F · 1st hardest | C · 15th easiest | much easier |
| Dak Prescott | DAL | 14 | 77.8 | C · 10th easiest | C · 16th hardest | similar |
| Drake Maye | NE | 11 | 47.3 | D · 4th hardest | C · 15th hardest | easier |
| Jordan Love | GB | 11 | 147.5 | C · 11th hardest | C · 14th hardest | similar |
| Joe Burrow | CIN | 6 | 51.5 | B · 7th easiest | C · 13th hardest | harder |
| Jared Goff | DET | 6 | 133.7 | C · 15th hardest | C · 12th hardest | similar |
| Caleb Williams | CHI | 10 | 71.7 | D · 5th hardest | D · 11th hardest | similar |
| Baker Mayfield | TB | 10 | 141.7 | C · 15th easiest | D · 10th hardest | harder |
| Patrick Mahomes | KC | 5 | 106.6 | D · 9th hardest | D · 8th hardest | harder |
| Jalen Hurts | PHI | 10 | 56.9 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 99.9 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 162 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 54 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 103.1 | C · 13th easiest | F · 2nd hardest | much harder |
| Malik Willis | MIA | 6 | 159.5 | C · 12th easiest | F · 1st hardest | much harder |


### RB

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 26.2 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7 | C · 16th hardest | A · 3rd easiest | much easier |
| Travis Etienne | NO | 8 | 44.7 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 19.1 | C · 15th easiest | B · 6th easiest | easier |
| Quinshon Judkins | CLE | 11 | 53.2 | B · 11th easiest | B · 7th easiest | similar |
| Bijan Robinson | ATL | 11 | 2.1 | C · 15th hardest | B · 9th easiest | easier |
| Omarion Hampton | LAC | 7 | 18.7 | C · 11th hardest | B · 10th easiest | easier |
| Chase Brown | CIN | 6 | 16.4 | D · 6th hardest | C · 11th easiest | easier |
| Jahmyr Gibbs | DET | 6 | 1.4 | B · 5th easiest | C · 13th easiest | similar |
| Cam Skattebo | NYG | 8 | 43 | C · 13th easiest | C · 15th easiest | similar |
| Josh Jacobs | GB | 11 | 33.2 | C · 14th hardest | C · 16th easiest | similar |
| Kyren Williams | LAR | 11 | 29.2 | A · 3rd easiest | C · 15th hardest | harder |
| D'Andre Swift | CHI | 10 | 55.6 | D · 8th hardest | C · 14th hardest | similar |
| Ashton Jeanty | LV | 13 | 14.8 | F · 2nd hardest | C · 13th hardest | similar |
| Breece Hall | NYJ | 13 | 33.7 | F · 5th hardest | C · 12th hardest | similar |
| Javonte Williams | DAL | 14 | 35.2 | B · 7th easiest | C · 11th hardest | harder |
| TreVeyon Henderson | NE | 11 | 62.5 | D · 7th hardest | D · 10th hardest | similar |
| De'Von Achane | MIA | 6 | 12 | B · 10th easiest | D · 9th hardest | harder |
| James Cook | BUF | 7 | 10.8 | F · 4th hardest | D · 8th hardest | similar |
| David Montgomery | HOU | 8 | 52.4 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 54.3 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 13.4 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 19.7 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 5.6 | C · 16th easiest | F · 2nd hardest | much harder |


### WR

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 32.5 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 12.1 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.9 | B · 6th easiest | B · 6th easiest | easier |
| Tee Higgins | CIN | 6 | 34.2 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 4.9 | C · 9th hardest | B · 8th easiest | easier |
| Davante Adams | LAR | 11 | 50.9 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 10.4 | C · 10th easiest | B · 9th easiest | easier |
| George Pickens | DAL | 14 | 24 | C · 10th easiest | B · 9th easiest | easier |
| Chris Olave | NO | 8 | 31.8 | C · 12th easiest | C · 10th easiest | similar |
| Drake London | ATL | 11 | 18.6 | C · 13th hardest | C · 11th easiest | easier |
| Amon-Ra St. Brown | DET | 6 | 8.3 | D · 8th hardest | C · 12th easiest | easier |
| Luther Burden | CHI | 10 | 58.7 | D · 3rd hardest | C · 13th easiest | easier |
| Emeka Egbuka | TB | 10 | 43.7 | C · 13th easiest | C · 14th easiest | similar |
| Ladd McConkey | LAC | 7 | 45.6 | D · 5th hardest | C · 14th hardest | similar |
| Nico Collins | HOU | 8 | 25.5 | A · 2nd easiest | C · 13th hardest | much harder |
| Jaylen Waddle | DEN | 10 | 46.9 | D · 6th hardest | C · 12th hardest | similar |
| Rashee Rice | KC | 5 | 27 | D · 4th hardest | D · 11th hardest | similar |
| Terry McLaurin | WAS | 7 | 56.5 | C · 14th easiest | D · 10th hardest | harder |
| Zay Flowers | BAL | 13 | 41 | C · 12th hardest | D · 8th hardest | harder |
| Tetairoa McMillan | CAR | 5 | 41.8 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 24.8 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 37 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.5 | C · 16th hardest | F · 2nd hardest | much harder |


### TE

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 121.4 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 47.9 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 133 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 23 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 69.5 | B · 9th easiest | B · 6th easiest | easier |
| Dalton Kincaid | BUF | 7 | 99.1 | D · 5th hardest | B · 7th easiest | much easier |
| Juwan Johnson | NO | 8 | 163.6 | D · 11th hardest | B · 8th easiest | much easier |
| Kenyon Sadiq | NYJ | 13 | 146.3 | D · 6th hardest | C · 10th easiest | much easier |
| Oronde Gadsden | LAC | 7 | 125.8 | D · 7th hardest | C · 11th easiest | much easier |
| Dallas Goedert | PHI | 10 | 106.4 | A · 1st easiest | C · 13th easiest | similar |
| Tucker Kraft | GB | 11 | 63.4 | F · 2nd hardest | C · 14th easiest | much easier |
| Brenton Strange | JAX | 7 | 140.3 | B · 11th easiest | C · 15th easiest | similar |
| Travis Kelce | KC | 5 | 93.9 | B · 7th easiest | C · 16th easiest | harder |
| Hunter Henry | NE | 11 | 135.5 | F · 3rd hardest | C · 16th hardest | easier |
| Jake Ferguson | DAL | 14 | 111.3 | C · 13th hardest | C · 14th hardest | similar |
| Isaiah Likely | NYG | 8 | 109.1 | B · 4th easiest | C · 12th hardest | much harder |
| Trey McBride | ARI | 14 | 21.6 | D · 10th hardest | C · 11th hardest | similar |
| Harold Fannin | CLE | 11 | 71.4 | A · 2nd easiest | C · 10th hardest | much harder |
| Chig Okonkwo | WAS | 7 | 156.7 | C · 14th easiest | D · 8th hardest | much harder |
| Dalton Schultz | HOU | 8 | 160.7 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.7 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 63 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 40.8 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 91.5 | C · 16th easiest | F · 1st hardest | much harder |

