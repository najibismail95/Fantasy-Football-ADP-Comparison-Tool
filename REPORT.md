# Fantasy ADP report — 2026-08-31

_Snapshot 2026-08-31 · 35 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 167 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.35 | 171.9 | 99.7 |
| SLEEPER | 1971 | 1.9 | 700.8 | 85.7 |
| YAHOO | 225 | 1.4 | 144.2 | 87.6 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1175 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 1971 |
| YAHOO | exact | 204 |
| YAHOO | team | 21 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brian Thomas | WR | 112.7 | 74.6 | 84.2 | ESPN | 2.8 | CHEAPER on ESPN | 186 |
| Chris Godwin | WR | 125.7 | 93.1 | 96.6 | ESPN | 2.6 | CHEAPER on ESPN | 165 |
| Dalton Kincaid | TE | 130.8 | 87.7 | 98.1 | ESPN | 3.2 | CHEAPER on ESPN | 160 |
| De'Zhaun Stribling | WR | 141.9 | 137.3 | 109.3 | YAHOO | 2.5 | pricier on YAHOO | 144 |
| Kyler Murray | QB | 139.9 | 161.6 | 112.4 | YAHOO | 3.2 | pricier on YAHOO | 283 |
| Makai Lemon | WR | 133.2 | 89.5 | 115.3 | SLEEPER | 2.9 | pricier on SLEEPER | 162 |
| RJ Harvey | RB | 127.4 | 79.3 | 106.7 | SLEEPER | 3.1 | pricier on SLEEPER | 147 |
| Travis Hunter | WR | 119 | 167.5 | 125.7 | SLEEPER | 3.8 | CHEAPER on SLEEPER | 102 |
| Tyler Shough | QB | 153 | 187.3 | 130.1 | SLEEPER | 3.8 | CHEAPER on SLEEPER | 268 |


## Who’s rising


_Last 7 days, as of 2026-08-31. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| De'Zhaun Stribling | WR | 155 | 144.4 | 155.2 | 138.2 | 120.2 | 109.8 |
| Jonathon Brooks | RB | 120.7 | 109.6 | 113.8 | 105.5 | 98.9 | 94.2 |
| George Kittle | TE | 98.8 | 82.8 | 91.2 | 86.5 | 87.4 | 84.9 |
| Stefon Diggs | WR | 129 | 113.1 | 114.9 | 109.3 | 109.3 | 105.2 |
| Sam Darnold | QB | 162.2 | 162.2 | 176.4 | 161.3 | 122.9 | 122.7 |
| Chris Godwin | WR | 145.6 | 131.3 | 95.4 | 94.8 | 97.9 | 96.9 |
| Justin Herbert | QB | 107.9 | 95.5 | 82.8 | 82.3 | 69.5 | 70.2 |
| Tyjae Spears | RB | 162.5 | 150.9 | 167.4 | 164.4 | 133.2 | 133.1 |
| Kenny Gainwell | RB | 120 | 108.5 | 111.8 | 112.2 | 117.8 | 118.9 |
| Aaron Jones | RB | 132.6 | 121.8 | 123.9 | 124.9 | 122.9 | 123.7 |
| D'Andre Swift | RB | 66.8 | 58 | 55.3 | 52.9 | 47.7 | 46.7 |
| Tony Pollard | RB | 105.7 | 97 | 86.4 | 84.4 | 85.4 | 85.6 |
| Blake Corum | RB | 138.7 | 130 | 103.4 | 102.8 | 99.6 | 99.4 |
| Jaylen Warren | RB | 101 | 92.6 | 73.4 | 71.9 | 76.8 | 76.7 |
| Bhayshul Tuten | RB | 75.1 | 66.8 | 62.5 | 62.1 | 62.2 | 62.4 |
| Rhamondre Stevenson | RB | 89.8 | 81.6 | 82.9 | 81.4 | 80.4 | 79.1 |
| Dak Prescott | QB | 86 | 77.8 | 79.9 | 78 | 74.4 | 73.9 |
| RJ Harvey | RB | 138.4 | 130.7 | 79 | 79.4 | 102.9 | 106 |
| Rico Dowdle | RB | 106.4 | 98.7 | 87.1 | 85.5 | 87.2 | 86.9 |
| Chuba Hubbard | RB | 120.9 | 113.3 | 77 | 77.8 | 82.6 | 87.8 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Kenyon Sadiq | TE | 144.5 | 156.3 | 148.4 | 163.1 | 130 | 130 |
| Tyler Shough | QB | 155.5 | 153.8 | 170 | 187.8 | 130 | 130.2 |
| Jakobi Meyers | WR | 113.9 | 119 | 106.3 | 120.2 | 128.8 | 129.7 |
| Brian Robinson | RB | 165.6 | 165.9 | 152.4 | 163.4 | 122.2 | 120.3 |
| T.J. Hockenson | TE | 133.1 | 142.7 | 164.4 | 164.3 | 129.4 | 128.9 |
| Khalil Shakir | WR | 125.1 | 134.2 | 138.9 | 143.3 | 131.4 | 131.2 |
| Hunter Henry | TE | 142.9 | 148.6 | 133.9 | 142.1 | 127.8 | 127.6 |
| Josh Downs | WR | 128.8 | 136.7 | 108.8 | 110.8 | 109.7 | 108.2 |
| Matthew Stafford | QB | 79.9 | 87.3 | 96.5 | 96 | 100.5 | 100.2 |
| Josh Jacobs | RB | 35.9 | 43 | 31.6 | 33 | 33 | 35.2 |
| Bo Nix | QB | 88.1 | 94.9 | 121.1 | 118.7 | 100.1 | 99.3 |
| Zach Charbonnet | RB | 156.2 | 153.8 | 142.4 | 148.7 | 129.3 | 130 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 290pts, RB25 184pts, WR37 184pts, TE13 160pts, K13 124pts, DEF13 88pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_1812 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_8 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_42 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 99.4 | 9.2 | QB13 | QB10 | B | 296 | 296 |
| Brock Purdy | QB | 108.9 | 10 | QB15 | QB8 | B | 292 | 303 |
| Jalen Hurts | QB | 56.8 | 5.6 | QB6 | QB4 | B | 320 | 311 |
| Trevor Lawrence | QB | 97.5 | 9 | QB12 | QB9 | B | 290 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 55.1 | 5.5 | RB23 | RB22 | B | 207 | 197 |
| Quinshon Judkins | RB | 53.9 | 5.4 | RB22 | RB19 | B | 227 | 196 |
| Rhamondre Stevenson | RB | 80.6 | 7.6 | RB28 | RB24 | B | 203 | 169 |
| Travis Etienne | RB | 42.5 | 4.5 | RB19 | RB16 | B | 247 | 208 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Garrett Wilson | WR | 46.4 | 4.8 | WR21 | WR14 | B | 250 | 225 |
| Jayden Reed | WR | 117.8 | 10.7 | WR46 | WR36 | B | 171 | 198 |
| Parker Washington | WR | 79.1 | 7.5 | WR32 | WR28 | B | 187 | 212 |
| Rome Odunze | WR | 64.7 | 6.3 | WR27 | WR24 | B | 214 | 208 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 83.2 | 7.9 | TE9 | TE7 | B | 200 | 169 |
| Harold Fannin | TE | 71.1 | 6.8 | TE8 | TE6 | B | 189 | 180 |
| Sam LaPorta | TE | 63.2 | 6.2 | TE6 | TE5 | B | 189 | 197 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 139.8 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 95.3 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 97.5 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 90.6 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 153 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 56.8 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 99.4 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 162.2 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 54.5 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 108.9 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 26 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 6.5 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.2 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 42.5 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 17.4 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 53.2 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 55.1 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 12.6 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 19.9 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 5.7 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 31.1 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 12.6 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.4 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 4.9 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 10.8 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 41.7 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.2 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 21.9 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 32.1 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 46.4 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.6 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 49.7 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 147.9 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 23.2 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 68.6 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 157.8 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 153.3 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 63.2 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 40.5 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 83.2 | C · 16th easiest | F · 1st hardest | much harder |

