# Fantasy ADP report — 2026-08-20

_Snapshot 2026-08-20 · 24 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 166 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_YAHOO ADP is censored above pick 125 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 350 | 1.52 | 171 | 98.7 |
| SLEEPER | 1210 | 1.3 | 700.8 | 86.3 |
| YAHOO | 222 | 1.5 | 144.7 | 89.6 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1175 |
| ESPN | id | 465 |
| ESPN | team | 110 |
| SLEEPER | id | 1210 |
| YAHOO | exact | 201 |
| YAHOO | team | 21 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Blake Corum | RB | 140.7 | 103 | 99.6 | ESPN | 3.3 | CHEAPER on ESPN | 147 |
| Chris Godwin | WR | 147.6 | 95.8 | 98.1 | ESPN | 4.2 | CHEAPER on ESPN | 165 |
| Christian Watson | WR | 101.1 | 70.7 | 67.8 | ESPN | 2.7 | CHEAPER on ESPN | 196 |
| Chuba Hubbard | RB | 118.5 | 76.7 | 80.2 | ESPN | 3.3 | CHEAPER on ESPN | 160 |
| Dalton Kincaid | TE | 135.1 | 89.4 | 99.6 | ESPN | 3.4 | CHEAPER on ESPN | 160 |
| Jordan Mason | RB | 149.2 | 119.7 | 117.9 | ESPN | 2.5 | CHEAPER on ESPN | 152 |
| Jordyn Tyson | WR | 118.2 | 77.1 | 92.3 | ESPN | 2.8 | CHEAPER on ESPN | 105 |
| Justin Herbert | QB | 109 | 84 | 69 | ESPN | 2.7 | CHEAPER on ESPN | 290 |
| Kyle Monangai | RB | 130.5 | 95.4 | 101.6 | ESPN | 2.7 | CHEAPER on ESPN | 165 |
| Kyler Murray | QB | 147.5 | 159.3 | 111.4 | YAHOO | 3.5 | pricier on YAHOO | 263 |
| Makai Lemon | WR | 138.1 | 86.3 | 109.5 | ESPN | 3.3 | CHEAPER on ESPN | 162 |
| Mike Evans | WR | 94.7 | 59.1 | 66.1 | ESPN | 2.7 | CHEAPER on ESPN | 202 |
| Quentin Johnston | WR | 141.4 | 108 | 108.3 | ESPN | 2.8 | CHEAPER on ESPN | 165 |
| RJ Harvey | RB | 135.8 | 79.6 | 101.7 | ESPN | 3.8 | CHEAPER on ESPN | 147 |
| Tucker Kraft | TE | 96.9 | 65.8 | 61.1 | ESPN | 2.8 | CHEAPER on ESPN | 178 |


## Unresolved players (surfaced, never dropped)

_(no rows)_


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 290pts, RB26 184pts, WR36 184pts, TE13 160pts, K13 124pts, DEF13 88pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. Rows are sorted by projected production relative to draft cost — biggest value first._


_1104 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


### QB

| player | pos | adp | round | drafted_as | produces_like | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Baker Mayfield | QB | 144.9 | 13 | QB17 | QB17 | 265 | 275 |
| Bo Nix | QB | 100.4 | 9.3 | QB13 | QB9 | 296 | 296 |
| Brock Purdy | QB | 104.8 | 9.6 | QB14 | QB8 | 292 | 303 |
| Bryce Young | QB | 176 | 15.6 | QB24 | QB23 | 238 | 236 |
| Daniel Jones | QB | 182.6 | 16.1 | QB25 | QB22 | 267 | 224 |
| Jalen Hurts | QB | 56.8 | 5.6 | QB6 | QB4 | 320 | 311 |
| Jared Goff | QB | 133.8 | 12.1 | QB16 | QB16 | 269 | 283 |
| Jaxson Dart | QB | 82.5 | 7.8 | QB9 | QB7 | 300 | 297 |
| Jordan Love | QB | 146.4 | 13.1 | QB18 | QB18 | 259 | 279 |
| Josh Allen | QB | 22.1 | 2.8 | QB1 | QB1 | 370 | 362 |
| Lamar Jackson | QB | 37.2 | 4 | QB2 | QB2 | 323 | 326 |
| Patrick Mahomes | QB | 106.6 | 9.8 | QB15 | QB14 | 291 | 287 |
| Sam Darnold | QB | 162.5 | 14.5 | QB22 | QB21 | 243 | 263 |
| Trevor Lawrence | QB | 94.9 | 8.8 | QB11 | QB10 | 288 | 303 |
| Tyler Shough | QB | 161.8 | 14.4 | QB21 | QB19 | 266 | 271 |


### RB

| player | pos | adp | round | drafted_as | produces_like | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Aaron Jones | RB | 123.1 | 11.2 | RB40 | RB36 | 177 | 137 |
| Ashton Jeanty | RB | 14.8 | 2.2 | RB8 | RB7 | 281 | 260 |
| Breece Hall | RB | 32.2 | 3.6 | RB15 | RB14 | 274 | 211 |
| D'Andre Swift | RB | 56.6 | 5.6 | RB23 | RB21 | 212 | 208 |
| De'Von Achane | RB | 12.1 | 1.9 | RB6 | RB5 | 293 | 257 |
| Derrick Henry | RB | 19.8 | 2.6 | RB12 | RB9 | 275 | 247 |
| Javonte Williams | RB | 35.4 | 3.9 | RB17 | RB15 | 259 | 207 |
| Jonathon Brooks | RB | 117.6 | 10.7 | RB38 | RB34 | 171 | 155 |
| Jordan Mason | RB | 119.7 | 10.9 | RB39 | RB37 | 151 | 154 |
| Kenny Gainwell | RB | 117.4 | 10.7 | RB37 | RB33 | 178 | 152 |
| Rhamondre Stevenson | RB | 85 | 8 | RB29 | RB25 | 203 | 169 |
| Rico Dowdle | RB | 88.4 | 8.3 | RB31 | RB29 | 186 | 161 |
| Travis Etienne | RB | 44.4 | 4.6 | RB19 | RB17 | 246 | 208 |
| Tyjae Spears | RB | 168 | 14.9 | RB46 | RB42 | 154 | 115 |
| Woody Marks | RB | 159.6 | 14.2 | RB45 | RB43 | 128 | 84 |


### WR

| player | pos | adp | round | drafted_as | produces_like | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Garrett Wilson | WR | 45.6 | 4.7 | WR19 | WR13 | 250 | 225 |
| Ja'Marr Chase | WR | 3.3 | 1.2 | WR1 | WR2 | 338 | 311 |
| Jalen Coker | WR | 152.6 | 13.6 | WR56 | WR52 | 147 | 166 |
| Jayden Reed | WR | 120 | 10.9 | WR49 | WR37 | 170 | 198 |
| Jerry Jeudy | WR | 177.6 | 15.7 | WR60 | WR57 | 138 | 120 |
| Khalil Shakir | WR | 132.1 | 11.9 | WR50 | WR44 | 171 | 171 |
| Matthew Golden | WR | 119.3 | 10.9 | WR48 | WR39 | 185 | 170 |
| Michael Pittman | WR | 101.4 | 9.4 | WR39 | WR36 | 197 | 171 |
| Nico Collins | WR | 25.6 | 3.1 | WR10 | WR8 | 249 | 262 |
| Parker Washington | WR | 84.3 | 7.9 | WR34 | WR28 | 187 | 212 |
| Puka Nacua | WR | 4.6 | 1.3 | WR2 | WR1 | 356 | 313 |
| Rashee Rice | WR | 27.8 | 3.2 | WR11 | WR9 | 271 | 229 |
| Rashid Shaheed | WR | 158.4 | 14.1 | WR58 | WR55 | 144 | 138 |
| Rome Odunze | WR | 68.4 | 6.6 | WR28 | WR24 | 213 | 208 |
| Xavier Worthy | WR | 137.6 | 12.4 | WR52 | WR45 | 173 | 162 |


### TE

| player | pos | adp | round | drafted_as | produces_like | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Brock Bowers | TE | 22.5 | 2.8 | TE2 | TE1 | 241 | 254 |
| Colston Loveland | TE | 41.8 | 4.4 | TE3 | TE3 | 206 | 215 |
| George Kittle | TE | 91.2 | 8.5 | TE9 | TE10 | 177 | 169 |
| Harold Fannin | TE | 71.4 | 6.9 | TE8 | TE6 | 188 | 180 |
| Hunter Henry | TE | 137.2 | 12.3 | TE16 | TE17 | 150 | 154 |
| Isaiah Likely | TE | 113.6 | 10.4 | TE14 | TE16 | 156 | 157 |
| Jake Ferguson | TE | 112.5 | 10.3 | TE13 | TE12 | 167 | 160 |
| Juwan Johnson | TE | 175.8 | 15.6 | TE19 | TE18 | 143 | 141 |
| Kyle Pitts | TE | 68.8 | 6.6 | TE7 | TE7 | 185 | 172 |
| Mark Andrews | TE | 123.1 | 11.2 | TE15 | TE11 | 169 | 163 |
| Sam LaPorta | TE | 62.9 | 6.2 | TE5 | TE5 | 189 | 197 |
| T.J. Hockenson | TE | 148.9 | 13.3 | TE18 | TE14 | 158 | 155 |
| Travis Kelce | TE | 94 | 8.8 | TE10 | TE9 | 178 | 171 |
| Trey McBride | TE | 20.3 | 2.6 | TE1 | TE2 | 242 | 235 |
| Tyler Warren | TE | 47.2 | 4.8 | TE4 | TE4 | 211 | 201 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Rows are the 24 most-drafted at the position, easiest playoff schedule first._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 147.5 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 99.9 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 94.9 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 82.5 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 161.8 | C · 14th hardest | B · 7th easiest | much easier |
| Bryce Young | CAR | 5 | 176 | D · 7th hardest | B · 9th easiest | easier |
| Aaron Rodgers | PIT | 9 | 172.2 | D · 3rd hardest | C · 11th easiest | easier |
| Lamar Jackson | BAL | 13 | 37.2 | C · 13th hardest | C · 12th easiest | easier |
| Josh Allen | BUF | 7 | 22.1 | D · 2nd hardest | C · 13th easiest | much easier |
| Justin Herbert | LAC | 7 | 84 | D · 6th hardest | C · 14th easiest | easier |
| Fernando Mendoza | LV | 13 | 149.8 | F · 1st hardest | C · 15th easiest | much easier |
| Dak Prescott | DAL | 14 | 81.5 | C · 10th easiest | C · 16th hardest | similar |
| Drake Maye | NE | 11 | 47.4 | D · 4th hardest | C · 15th hardest | easier |
| Jordan Love | GB | 11 | 146.4 | C · 11th hardest | C · 14th hardest | similar |
| Joe Burrow | CIN | 6 | 53.1 | B · 7th easiest | C · 13th hardest | harder |
| Jared Goff | DET | 6 | 133.8 | C · 15th hardest | C · 12th hardest | similar |
| Caleb Williams | CHI | 10 | 71.2 | D · 5th hardest | D · 11th hardest | similar |
| Baker Mayfield | TB | 10 | 144.9 | C · 15th easiest | D · 10th hardest | harder |
| Patrick Mahomes | KC | 5 | 106.6 | D · 9th hardest | D · 8th hardest | harder |
| Jalen Hurts | PHI | 10 | 56.8 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 100.4 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 162.5 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 53.8 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 104.8 | C · 13th easiest | F · 2nd hardest | much harder |


### RB

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 26.4 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.8 | C · 16th hardest | A · 3rd easiest | much easier |
| Travis Etienne | NO | 8 | 44.4 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 19.8 | C · 15th easiest | B · 6th easiest | easier |
| Quinshon Judkins | CLE | 11 | 53.8 | B · 11th easiest | B · 7th easiest | similar |
| Bijan Robinson | ATL | 11 | 2.6 | C · 15th hardest | B · 9th easiest | easier |
| Omarion Hampton | LAC | 7 | 18.6 | C · 11th hardest | B · 10th easiest | easier |
| Chase Brown | CIN | 6 | 17.6 | D · 6th hardest | C · 11th easiest | easier |
| Jahmyr Gibbs | DET | 6 | 1.5 | B · 5th easiest | C · 13th easiest | similar |
| Cam Skattebo | NYG | 8 | 43.5 | C · 13th easiest | C · 15th easiest | similar |
| Josh Jacobs | GB | 11 | 32.6 | C · 14th hardest | C · 16th easiest | similar |
| Kyren Williams | LAR | 11 | 29.7 | A · 3rd easiest | C · 15th hardest | harder |
| D'Andre Swift | CHI | 10 | 56.6 | D · 8th hardest | C · 14th hardest | similar |
| Ashton Jeanty | LV | 13 | 14.8 | F · 2nd hardest | C · 13th hardest | similar |
| Breece Hall | NYJ | 13 | 32.2 | F · 5th hardest | C · 12th hardest | similar |
| Javonte Williams | DAL | 14 | 35.4 | B · 7th easiest | C · 11th hardest | harder |
| TreVeyon Henderson | NE | 11 | 61.5 | D · 7th hardest | D · 10th hardest | similar |
| De'Von Achane | MIA | 6 | 12.1 | B · 10th easiest | D · 9th hardest | harder |
| James Cook | BUF | 7 | 10.8 | F · 4th hardest | D · 8th hardest | similar |
| David Montgomery | HOU | 8 | 52.7 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 54.6 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 13.3 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 19.3 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 5.5 | C · 16th easiest | F · 2nd hardest | much harder |


### WR

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 33.5 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 12.2 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.3 | B · 6th easiest | B · 6th easiest | easier |
| Tee Higgins | CIN | 6 | 34.3 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 4.6 | C · 9th hardest | B · 8th easiest | easier |
| Davante Adams | LAR | 11 | 50.5 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 10.2 | C · 10th easiest | B · 9th easiest | easier |
| George Pickens | DAL | 14 | 23.9 | C · 10th easiest | B · 9th easiest | easier |
| Chris Olave | NO | 8 | 33.2 | C · 12th easiest | C · 10th easiest | similar |
| Drake London | ATL | 11 | 18.6 | C · 13th hardest | C · 11th easiest | easier |
| Amon-Ra St. Brown | DET | 6 | 8.4 | D · 8th hardest | C · 12th easiest | easier |
| Luther Burden | CHI | 10 | 58.5 | D · 3rd hardest | C · 13th easiest | easier |
| Emeka Egbuka | TB | 10 | 43.2 | C · 13th easiest | C · 14th easiest | similar |
| Ladd McConkey | LAC | 7 | 45.9 | D · 5th hardest | C · 14th hardest | similar |
| Nico Collins | HOU | 8 | 25.6 | A · 2nd easiest | C · 13th hardest | much harder |
| Jaylen Waddle | DEN | 10 | 47.1 | D · 6th hardest | C · 12th hardest | similar |
| Rashee Rice | KC | 5 | 27.8 | D · 4th hardest | D · 11th hardest | similar |
| Terry McLaurin | WAS | 7 | 55.3 | C · 14th easiest | D · 10th hardest | harder |
| Zay Flowers | BAL | 13 | 41.2 | C · 12th hardest | D · 8th hardest | harder |
| Tetairoa McMillan | CAR | 5 | 41.7 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 5.9 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 25 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 37.1 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.6 | C · 16th hardest | F · 2nd hardest | much harder |


### TE

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 123.1 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 47.2 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 148.9 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 22.5 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 68.8 | B · 9th easiest | B · 6th easiest | easier |
| Dalton Kincaid | BUF | 7 | 99.6 | D · 5th hardest | B · 7th easiest | much easier |
| Juwan Johnson | NO | 8 | 175.8 | D · 11th hardest | B · 8th easiest | much easier |
| Kenyon Sadiq | NYJ | 13 | 143.4 | D · 6th hardest | C · 10th easiest | much easier |
| Dallas Goedert | PHI | 10 | 106.6 | A · 1st easiest | C · 13th easiest | similar |
| Tucker Kraft | GB | 11 | 65.8 | F · 2nd hardest | C · 14th easiest | much easier |
| Travis Kelce | KC | 5 | 94 | B · 7th easiest | C · 16th easiest | harder |
| Hunter Henry | NE | 11 | 137.2 | F · 3rd hardest | C · 16th hardest | easier |
| Jake Ferguson | DAL | 14 | 112.5 | C · 13th hardest | C · 14th hardest | similar |
| Isaiah Likely | NYG | 8 | 113.6 | B · 4th easiest | C · 12th hardest | much harder |
| Trey McBride | ARI | 14 | 20.3 | D · 10th hardest | C · 11th hardest | similar |
| Harold Fannin | CLE | 11 | 71.4 | A · 2nd easiest | C · 10th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.9 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 41.8 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 91.2 | C · 16th easiest | F · 1st hardest | much harder |

