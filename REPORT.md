# Fantasy ADP report — 2026-09-02

_Snapshot 2026-09-02 · 37 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 167 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.33 | 171.8 | 98.3 |
| SLEEPER | 2077 | 1.5 | 700.8 | 83.3 |
| YAHOO | 225 | 1.3 | 144.1 | 90.2 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1175 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 2077 |
| YAHOO | exact | 205 |
| YAHOO | team | 20 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brian Thomas | WR | 114 | 74.9 | 84.2 | ESPN | 2.9 | CHEAPER on ESPN | 186 |
| Dalton Kincaid | TE | 130.9 | 87.2 | 97.9 | ESPN | 3.2 | CHEAPER on ESPN | 160 |
| Jordan Love | QB | 155.4 | 151.9 | 123.1 | YAHOO | 2.5 | pricier on YAHOO | 271 |
| Kyler Murray | QB | 137.9 | 151.5 | 112.5 | YAHOO | 2.7 | pricier on YAHOO | 283 |
| Makai Lemon | WR | 132.2 | 90.6 | 116.2 | SLEEPER | 2.8 | pricier on SLEEPER | 162 |
| MarShawn Lloyd | RB | 126.4 | 159 | 104.6 | SLEEPER | 3.6 | CHEAPER on SLEEPER | 142 |
| RJ Harvey | RB | 126.1 | 79.2 | 107.8 | SLEEPER | 3.1 | pricier on SLEEPER | 147 |
| Travis Hunter | WR | 118.8 | 167 | 125.7 | SLEEPER | 3.7 | CHEAPER on SLEEPER | 102 |
| Tyler Shough | QB | 152.5 | 188.9 | 130 | SLEEPER | 4 | CHEAPER on SLEEPER | 268 |


## Who’s rising


_Last 7 days, as of 2026-09-02. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 95.6 | 76.5 | 91 | 83.3 | 86.7 | 83.9 |
| De'Zhaun Stribling | WR | 151.4 | 140.9 | 155.7 | 137.3 | 114.8 | 109.3 |
| Jonathon Brooks | RB | 117.1 | 106.1 | 109.3 | 102.9 | 97.2 | 92.8 |
| Stefon Diggs | WR | 127.4 | 104.4 | 112.8 | 108.3 | 107.7 | 104.6 |
| Chris Godwin | WR | 143.7 | 124.2 | 95.4 | 93.4 | 97.7 | 96.3 |
| Justin Herbert | QB | 106.9 | 88.3 | 82.6 | 82.3 | 69.8 | 70.3 |
| Aaron Jones | RB | 133 | 115.5 | 124.8 | 125.7 | 123.1 | 124 |
| Tony Pollard | RB | 107 | 90.8 | 83.9 | 84.1 | 85.5 | 85.8 |
| Kenny Gainwell | RB | 118 | 102.9 | 111.7 | 113.4 | 118.1 | 119.4 |
| Tyjae Spears | RB | 160.6 | 146.6 | 167 | 165.2 | 133.3 | 133 |
| Mike Washington | RB | 165 | 164.3 | 173 | 159.6 | 122.1 | 122.9 |
| Chuba Hubbard | RB | 122 | 108.6 | 77.4 | 78.5 | 84.4 | 89.4 |
| Sam Darnold | QB | 162.1 | 162.3 | 176.3 | 163.1 | 122.7 | 122.5 |
| Dak Prescott | QB | 85.3 | 73.1 | 78 | 77.1 | 74.2 | 73.7 |
| RJ Harvey | RB | 138.7 | 126.7 | 79.7 | 79.4 | 103.9 | 107.3 |
| D'Andre Swift | RB | 64.9 | 53.7 | 55.5 | 51.8 | 47.4 | 46.2 |
| Rachaad White | RB | 136.3 | 125.8 | 131.5 | 133.1 | 122.3 | 123.6 |
| Bhayshul Tuten | RB | 73.2 | 62.8 | 62.6 | 61.4 | 62.5 | 61.9 |
| Makai Lemon | WR | 142.8 | 132.7 | 87.5 | 90 | 112.2 | 115.8 |
| Blake Corum | RB | 136.7 | 127 | 103.3 | 102.8 | 99.6 | 99.4 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Josh Jacobs | RB | 36.7 | 59.1 | 31.4 | 36.6 | 33.4 | 39.7 |
| Kenyon Sadiq | TE | 146.6 | 162.3 | 150.4 | 172.4 | 130 | 130 |
| Jakobi Meyers | WR | 113.4 | 122.5 | 110 | 123.2 | 129.1 | 130 |
| Tank Dell | WR | 157 | 163.4 | 175.3 | 187.3 | — | — |
| T.J. Hockenson | TE | 132.9 | 149.4 | 164.2 | 165.1 | 129.3 | 128.6 |
| Khalil Shakir | WR | 124.5 | 140.1 | 140 | 143.9 | 131.4 | 131 |
| Bo Nix | QB | 86.9 | 100.8 | 120.2 | 117.2 | 99.8 | 99 |
| Jayden Reed | WR | 126.5 | 138.5 | 115.5 | 109.5 | 119.2 | 117.5 |
| Matthew Stafford | QB | 80 | 91.6 | 95.7 | 95.7 | 100.5 | 99.9 |
| Deebo Samuel | WR | 131.3 | 141.8 | 137.6 | 130.5 | 127.5 | 127.3 |
| Brian Thomas | WR | 103.2 | 113.4 | 72.2 | 74.7 | 83.9 | 84.2 |
| Tyler Shough | QB | 155.5 | 152.8 | 178.7 | 188.3 | 130 | 130.1 |
| Hunter Henry | TE | 142.9 | 152 | 136.3 | 142.1 | 127.7 | 127.6 |
| Matthew Golden | WR | 103 | 111.6 | 128.5 | 127.2 | 128.1 | 126.5 |
| Alec Pierce | WR | 101.5 | 108.5 | 101.4 | 97.9 | 92 | 95.4 |
| Brock Purdy | QB | 103 | 109.6 | 121.3 | 122.6 | 98.3 | 98.4 |
| Jaxson Dart | QB | 76.2 | 82.8 | 90.1 | 94.5 | 88.1 | 91 |
| Rashee Rice | WR | 22.1 | 28.6 | 27.2 | 29.4 | 34.5 | 35.3 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 290pts, RB25 184pts, WR37 184pts, TE13 160pts, K13 124pts, DEF13 88pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_1916 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_7 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_44 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 102.1 | 9.4 | QB13 | QB10 | B | 296 | 296 |
| Brock Purdy | QB | 110.3 | 10.1 | QB15 | QB8 | B | 292 | 303 |
| Jalen Hurts | QB | 56.8 | 5.6 | QB6 | QB4 | B | 320 | 311 |
| Trevor Lawrence | QB | 99.6 | 9.2 | QB12 | QB9 | B | 290 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 54.7 | 5.5 | RB23 | RB22 | B | 207 | 197 |
| Quinshon Judkins | RB | 53.3 | 5.4 | RB22 | RB19 | B | 227 | 196 |
| Rhamondre Stevenson | RB | 79.3 | 7.5 | RB28 | RB24 | B | 203 | 169 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Garrett Wilson | WR | 46.2 | 4.8 | WR21 | WR14 | B | 250 | 225 |
| Jayden Reed | WR | 117.3 | 10.7 | WR46 | WR36 | B | 174 | 198 |
| Parker Washington | WR | 78.2 | 7.4 | WR31 | WR28 | B | 187 | 212 |
| Rome Odunze | WR | 65 | 6.3 | WR27 | WR24 | B | 214 | 208 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 83.2 | 7.9 | TE9 | TE7 | B | 193 | 169 |
| Harold Fannin | TE | 70.9 | 6.8 | TE8 | TE6 | B | 189 | 180 |
| Jake Ferguson | TE | 109.9 | 10.1 | TE14 | TE12 | B | 167 | 160 |
| Sam LaPorta | TE | 63.2 | 6.2 | TE6 | TE5 | B | 189 | 197 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 137.9 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 95.8 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 99.6 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 91.4 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 152.5 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 56.8 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 102.1 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 162.4 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 54.9 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 110.3 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 27.7 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 6.4 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 61.6 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 42.3 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 17.3 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 53.2 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 54.7 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 12.9 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 19.5 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 5.8 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 30.7 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 12.7 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.5 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 4.9 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 10.9 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 41.8 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.3 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 21.2 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 31.1 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 46.2 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 126.5 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 49.9 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 150.9 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 23.9 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 68.5 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 154.9 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 153.9 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 63.2 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 39.5 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 83.2 | C · 16th easiest | F · 1st hardest | much harder |

