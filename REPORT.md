# Fantasy ADP report — 2026-08-22

_Snapshot 2026-08-22 · 26 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 166 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 350 | 1.48 | 171.1 | 97.7 |
| SLEEPER | 1298 | 1.8 | 700.8 | 86.3 |
| YAHOO | 223 | 1.5 | 144.7 | 91.9 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1175 |
| ESPN | id | 465 |
| ESPN | team | 110 |
| SLEEPER | id | 1298 |
| YAHOO | exact | 202 |
| YAHOO | team | 21 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Alvin Kamara | RB | 158 | 159.6 | 126.1 | YAHOO | 2.7 | pricier on YAHOO | 90 |
| Blake Corum | RB | 139.6 | 103.8 | 99.7 | ESPN | 3.2 | CHEAPER on ESPN | 147 |
| Brian Robinson | RB | 166 | 151.6 | 122.7 | YAHOO | 3 | pricier on YAHOO | 82 |
| Chris Godwin | WR | 146.5 | 95.7 | 98 | ESPN | 4.1 | CHEAPER on ESPN | 165 |
| Christian Watson | WR | 99.9 | 70.7 | 67.7 | ESPN | 2.6 | CHEAPER on ESPN | 196 |
| Chuba Hubbard | RB | 119.9 | 76 | 81.7 | ESPN | 3.4 | CHEAPER on ESPN | 160 |
| Dalton Kincaid | TE | 134.1 | 90.3 | 99.5 | ESPN | 3.3 | CHEAPER on ESPN | 160 |
| De'Zhaun Stribling | WR | 157.4 | 155 | 124.4 | YAHOO | 2.6 | pricier on YAHOO | 129 |
| Jordyn Tyson | WR | 132.7 | 79.8 | 92.7 | ESPN | 3.9 | CHEAPER on ESPN | 105 |
| Justin Herbert | QB | 108.5 | 83 | 69.3 | ESPN | 2.7 | CHEAPER on ESPN | 290 |
| Kyle Monangai | RB | 129.7 | 95.4 | 102.6 | ESPN | 2.6 | CHEAPER on ESPN | 165 |
| Kyler Murray | QB | 147.4 | 159.3 | 111.5 | YAHOO | 3.5 | pricier on YAHOO | 263 |
| Makai Lemon | WR | 141.2 | 86 | 110.4 | ESPN | 3.6 | CHEAPER on ESPN | 162 |
| Mike Evans | WR | 94.2 | 59.7 | 66.4 | ESPN | 2.6 | CHEAPER on ESPN | 202 |
| Quentin Johnston | WR | 140.1 | 108.6 | 108.7 | ESPN | 2.6 | CHEAPER on ESPN | 165 |
| RJ Harvey | RB | 137.6 | 78.5 | 102.4 | ESPN | 3.9 | CHEAPER on ESPN | 147 |
| T.J. Hockenson | TE | 133.3 | 164.3 | 129.5 | SLEEPER | 2.7 | CHEAPER on SLEEPER | 157 |
| Travis Hunter | WR | 119.6 | 165.7 | 126.8 | SLEEPER | 3.5 | CHEAPER on SLEEPER | 107 |
| Tucker Kraft | TE | 94.7 | 65.1 | 61 | ESPN | 2.6 | CHEAPER on ESPN | 178 |


## Unresolved players (surfaced, never dropped)

_(no rows)_


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 290pts, RB26 184pts, WR36 184pts, TE13 160pts, K13 124pts, DEF13 88pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_1141 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_7 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 100.3 | 9.3 | QB13 | QB9 | B | 296 | 296 |
| Brock Purdy | QB | 104.3 | 9.6 | QB14 | QB8 | B | 292 | 303 |
| Bryce Young | QB | 176.7 | 15.6 | QB28 | QB25 | A | 238 | 236 |
| C.J. Stroud | QB | 166 | 14.7 | QB25 | QB23 | B | 247 | 248 |
| Jalen Hurts | QB | 56.8 | 5.6 | QB6 | QB4 | B | 320 | 311 |
| Sam Darnold | QB | 162.4 | 14.5 | QB24 | QB22 | B | 243 | 263 |
| Tyler Shough | QB | 155.6 | 13.9 | QB21 | QB19 | B | 266 | 271 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Aaron Jones | RB | 123.8 | 11.2 | RB40 | RB36 | B | 177 | 137 |
| Alvin Kamara | RB | 158 | 14.1 | RB51 | RB47 | B | 117 | 63 |
| Breece Hall | RB | 33 | 3.7 | RB16 | RB14 | B | 274 | 211 |
| D'Andre Swift | RB | 55.1 | 5.5 | RB23 | RB21 | B | 212 | 208 |
| Isiah Pacheco | RB | 161.7 | 14.4 | RB53 | RB49 | A | 124 | 54 |
| Jonathon Brooks | RB | 116.2 | 10.6 | RB37 | RB34 | B | 171 | 155 |
| Kenny Gainwell | RB | 117.6 | 10.7 | RB38 | RB33 | B | 178 | 152 |
| Rhamondre Stevenson | RB | 84.5 | 8 | RB29 | RB25 | B | 203 | 169 |
| Travis Etienne | RB | 44.1 | 4.6 | RB19 | RB17 | B | 246 | 208 |
| Tyjae Spears | RB | 163.8 | 14.6 | RB54 | RB42 | A | 154 | 115 |
| Woody Marks | RB | 151.9 | 13.6 | RB48 | RB43 | B | 128 | 84 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Deebo Samuel | WR | 135.5 | 12.2 | WR55 | WR51 | B | 161 | 156 |
| Garrett Wilson | WR | 45.3 | 4.7 | WR19 | WR13 | B | 250 | 225 |
| Jalen Coker | WR | 143.2 | 12.8 | WR56 | WR52 | B | 147 | 166 |
| Jalen McMillan | WR | 161.9 | 14.4 | WR64 | WR58 | A | 133 | 127 |
| Jayden Reed | WR | 120 | 10.9 | WR48 | WR37 | B | 170 | 198 |
| Jerry Jeudy | WR | 177.7 | 15.7 | WR68 | WR60 | A | 138 | 120 |
| Khalil Shakir | WR | 131.4 | 11.9 | WR52 | WR44 | B | 171 | 171 |
| Matthew Golden | WR | 127.1 | 11.5 | WR50 | WR39 | B | 185 | 170 |
| Parker Washington | WR | 83.6 | 7.9 | WR33 | WR28 | B | 187 | 212 |
| Rashid Shaheed | WR | 157.6 | 14.1 | WR62 | WR55 | A | 144 | 138 |
| Rome Odunze | WR | 67.8 | 6.6 | WR28 | WR24 | B | 213 | 208 |
| Tank Dell | WR | 170 | 15.1 | WR66 | WR57 | A | 153 | 116 |
| Xavier Worthy | WR | 132.3 | 11.9 | WR54 | WR45 | B | 173 | 162 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brenton Strange | TE | 139.8 | 12.6 | TE19 | TE17 | B | 142 | 161 |
| Dalton Schultz | TE | 161.3 | 14.4 | TE23 | TE20 | B | 133 | 139 |
| Harold Fannin | TE | 71.4 | 6.9 | TE8 | TE6 | B | 188 | 180 |
| Juwan Johnson | TE | 163.9 | 14.6 | TE24 | TE19 | A | 143 | 141 |
| Mark Andrews | TE | 122.5 | 11.1 | TE15 | TE11 | B | 169 | 163 |
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
| Kyler Murray | MIN | 6 | 147.3 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 97 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 94.2 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 85 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 155.6 | C · 14th hardest | B · 7th easiest | much easier |
| Daniel Jones | IND | 13 | 159.2 | B · 9th easiest | C · 10th easiest | similar |
| Lamar Jackson | BAL | 13 | 37.4 | C · 13th hardest | C · 12th easiest | easier |
| Josh Allen | BUF | 7 | 22.1 | D · 2nd hardest | C · 13th easiest | much easier |
| Justin Herbert | LAC | 7 | 83 | D · 6th hardest | C · 14th easiest | easier |
| Fernando Mendoza | LV | 13 | 149.7 | F · 1st hardest | C · 15th easiest | much easier |
| Dak Prescott | DAL | 14 | 81.9 | C · 10th easiest | C · 16th hardest | similar |
| Drake Maye | NE | 11 | 47.3 | D · 4th hardest | C · 15th hardest | easier |
| Jordan Love | GB | 11 | 147.6 | C · 11th hardest | C · 14th hardest | similar |
| Joe Burrow | CIN | 6 | 54.9 | B · 7th easiest | C · 13th hardest | harder |
| Jared Goff | DET | 6 | 133.7 | C · 15th hardest | C · 12th hardest | similar |
| Caleb Williams | CHI | 10 | 71 | D · 5th hardest | D · 11th hardest | similar |
| Baker Mayfield | TB | 10 | 140.2 | C · 15th easiest | D · 10th hardest | harder |
| Patrick Mahomes | KC | 5 | 107.5 | D · 9th hardest | D · 8th hardest | harder |
| Jalen Hurts | PHI | 10 | 56.8 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 100.3 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 162.4 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 53.9 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 104.3 | C · 13th easiest | F · 2nd hardest | much harder |
| Malik Willis | MIA | 6 | 158 | C · 12th easiest | F · 1st hardest | much harder |


### RB

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 26.8 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.8 | C · 16th hardest | A · 3rd easiest | much easier |
| Travis Etienne | NO | 8 | 44.1 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 19.5 | C · 15th easiest | B · 6th easiest | easier |
| Quinshon Judkins | CLE | 11 | 53.5 | B · 11th easiest | B · 7th easiest | similar |
| Bijan Robinson | ATL | 11 | 2.3 | C · 15th hardest | B · 9th easiest | easier |
| Omarion Hampton | LAC | 7 | 18.7 | C · 11th hardest | B · 10th easiest | easier |
| Chase Brown | CIN | 6 | 17 | D · 6th hardest | C · 11th easiest | easier |
| Jahmyr Gibbs | DET | 6 | 1.5 | B · 5th easiest | C · 13th easiest | similar |
| Cam Skattebo | NYG | 8 | 43 | C · 13th easiest | C · 15th easiest | similar |
| Josh Jacobs | GB | 11 | 32.8 | C · 14th hardest | C · 16th easiest | similar |
| Kyren Williams | LAR | 11 | 29.5 | A · 3rd easiest | C · 15th hardest | harder |
| D'Andre Swift | CHI | 10 | 55.1 | D · 8th hardest | C · 14th hardest | similar |
| Ashton Jeanty | LV | 13 | 14.3 | F · 2nd hardest | C · 13th hardest | similar |
| Breece Hall | NYJ | 13 | 33 | F · 5th hardest | C · 12th hardest | similar |
| Javonte Williams | DAL | 14 | 36.9 | B · 7th easiest | C · 11th hardest | harder |
| TreVeyon Henderson | NE | 11 | 61.8 | D · 7th hardest | D · 10th hardest | similar |
| De'Von Achane | MIA | 6 | 12.2 | B · 10th easiest | D · 9th hardest | harder |
| James Cook | BUF | 7 | 10.9 | F · 4th hardest | D · 8th hardest | similar |
| David Montgomery | HOU | 8 | 52.5 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 54.9 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 13.8 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 19.9 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 5.7 | C · 16th easiest | F · 2nd hardest | much harder |


### WR

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 33 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 12.2 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.3 | B · 6th easiest | B · 6th easiest | easier |
| Tee Higgins | CIN | 6 | 34.3 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 4.8 | C · 9th hardest | B · 8th easiest | easier |
| Davante Adams | LAR | 11 | 49.9 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 10.3 | C · 10th easiest | B · 9th easiest | easier |
| George Pickens | DAL | 14 | 23.1 | C · 10th easiest | B · 9th easiest | easier |
| Chris Olave | NO | 8 | 33.4 | C · 12th easiest | C · 10th easiest | similar |
| Drake London | ATL | 11 | 18.7 | C · 13th hardest | C · 11th easiest | easier |
| Amon-Ra St. Brown | DET | 6 | 7.9 | D · 8th hardest | C · 12th easiest | easier |
| Luther Burden | CHI | 10 | 58.6 | D · 3rd hardest | C · 13th easiest | easier |
| Emeka Egbuka | TB | 10 | 43.2 | C · 13th easiest | C · 14th easiest | similar |
| Ladd McConkey | LAC | 7 | 45.8 | D · 5th hardest | C · 14th hardest | similar |
| Nico Collins | HOU | 8 | 25.2 | A · 2nd easiest | C · 13th hardest | much harder |
| Jaylen Waddle | DEN | 10 | 47.1 | D · 6th hardest | C · 12th hardest | similar |
| Rashee Rice | KC | 5 | 27.6 | D · 4th hardest | D · 11th hardest | similar |
| Terry McLaurin | WAS | 7 | 55.4 | C · 14th easiest | D · 10th hardest | harder |
| Zay Flowers | BAL | 13 | 41.6 | C · 12th hardest | D · 8th hardest | harder |
| Tetairoa McMillan | CAR | 5 | 41.8 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.2 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 24.9 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 37.2 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.3 | C · 16th hardest | F · 2nd hardest | much harder |


### TE

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 122.5 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 47.2 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 133.3 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 22.3 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 68.3 | B · 9th easiest | B · 6th easiest | easier |
| Dalton Kincaid | BUF | 7 | 99.5 | D · 5th hardest | B · 7th easiest | much easier |
| Juwan Johnson | NO | 8 | 163.9 | D · 11th hardest | B · 8th easiest | much easier |
| Kenyon Sadiq | NYJ | 13 | 142.9 | D · 6th hardest | C · 10th easiest | much easier |
| Oronde Gadsden | LAC | 7 | 122.7 | D · 7th hardest | C · 11th easiest | much easier |
| Dallas Goedert | PHI | 10 | 106.7 | A · 1st easiest | C · 13th easiest | similar |
| Tucker Kraft | GB | 11 | 65.1 | F · 2nd hardest | C · 14th easiest | much easier |
| Brenton Strange | JAX | 7 | 139.8 | B · 11th easiest | C · 15th easiest | similar |
| Travis Kelce | KC | 5 | 93.9 | B · 7th easiest | C · 16th easiest | harder |
| Hunter Henry | NE | 11 | 132.1 | F · 3rd hardest | C · 16th hardest | easier |
| Jake Ferguson | DAL | 14 | 112.1 | C · 13th hardest | C · 14th hardest | similar |
| Isaiah Likely | NYG | 8 | 113.4 | B · 4th easiest | C · 12th hardest | much harder |
| Trey McBride | ARI | 14 | 20.5 | D · 10th hardest | C · 11th hardest | similar |
| Harold Fannin | CLE | 11 | 71.4 | A · 2nd easiest | C · 10th hardest | much harder |
| Chig Okonkwo | WAS | 7 | 154.6 | C · 14th easiest | D · 8th hardest | much harder |
| Dalton Schultz | HOU | 8 | 161.3 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 156 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.9 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 41.9 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 91 | C · 16th easiest | F · 1st hardest | much harder |

