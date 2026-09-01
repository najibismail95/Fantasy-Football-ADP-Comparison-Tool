# Fantasy ADP report — 2026-09-01

_Snapshot 2026-09-01 · 36 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 167 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.34 | 171.8 | 99 |
| SLEEPER | 2014 | 1.7 | 700.8 | 85 |
| YAHOO | 223 | 1.4 | 144.2 | 89.2 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1175 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 2014 |
| YAHOO | exact | 203 |
| YAHOO | team | 20 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brian Thomas | WR | 113.6 | 74.5 | 84.2 | ESPN | 2.9 | CHEAPER on ESPN | 186 |
| Dalton Kincaid | TE | 130.8 | 87.4 | 98 | ESPN | 3.2 | CHEAPER on ESPN | 160 |
| Jordan Love | QB | 155.5 | 151.6 | 123.2 | YAHOO | 2.5 | pricier on YAHOO | 271 |
| Kyler Murray | QB | 138.8 | 152.2 | 112.5 | YAHOO | 2.8 | pricier on YAHOO | 283 |
| Makai Lemon | WR | 132.6 | 90 | 115.8 | SLEEPER | 2.9 | pricier on SLEEPER | 162 |
| MarShawn Lloyd | RB | 133.2 | 159.8 | 110.2 | SLEEPER | 3.2 | CHEAPER on SLEEPER | 142 |
| RJ Harvey | RB | 126.7 | 79.8 | 107.3 | SLEEPER | 3.1 | pricier on SLEEPER | 147 |
| Travis Hunter | WR | 118.9 | 167.2 | 125.8 | SLEEPER | 3.7 | CHEAPER on SLEEPER | 102 |
| Tyler Shough | QB | 152.8 | 188.7 | 130.1 | SLEEPER | 3.9 | CHEAPER on SLEEPER | 268 |


## Who’s rising


_Last 7 days, as of 2026-09-01. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| De'Zhaun Stribling | WR | 152.9 | 142.5 | 155.5 | 137.7 | 117 | 109.5 |
| George Kittle | TE | 97.4 | 79.1 | 91 | 84.5 | 87.1 | 84.4 |
| Jonathon Brooks | RB | 118.7 | 107.6 | 111.5 | 104.6 | 98 | 93.5 |
| Stefon Diggs | WR | 128.1 | 108 | 114.1 | 108.7 | 108.4 | 104.9 |
| Chris Godwin | WR | 144.6 | 127.2 | 95.3 | 94.1 | 97.8 | 96.6 |
| Justin Herbert | QB | 107.3 | 91.3 | 82.6 | 82.3 | 69.6 | 70.2 |
| Mike Washington | RB | 165.2 | 163.8 | 173.2 | 158.3 | 124.1 | 122.7 |
| Aaron Jones | RB | 133 | 118.1 | 124.2 | 125.4 | 123 | 123.9 |
| Sam Darnold | QB | 162.1 | 162.2 | 176.8 | 162 | 122.8 | 122.6 |
| Kenny Gainwell | RB | 118.9 | 105.4 | 112 | 112.9 | 118 | 119.1 |
| Tyjae Spears | RB | 161.4 | 148.2 | 167.3 | 164.4 | 133.3 | 133.1 |
| Tony Pollard | RB | 106.8 | 93.6 | 85 | 84.4 | 85.5 | 85.7 |
| Chuba Hubbard | RB | 121.7 | 110.5 | 77.2 | 78.5 | 83.5 | 88.6 |
| Dak Prescott | QB | 85.6 | 75.1 | 78.7 | 77.2 | 74.3 | 73.8 |
| RJ Harvey | RB | 138.7 | 128.3 | 79.4 | 79.5 | 103.4 | 106.6 |
| D'Andre Swift | RB | 65.8 | 55.6 | 55.3 | 51.9 | 47.5 | 46.4 |
| Bhayshul Tuten | RB | 74.1 | 64.6 | 62.7 | 61.8 | 62.4 | 62.2 |
| Blake Corum | RB | 137.6 | 128.3 | 103.2 | 102.4 | 99.6 | 99.4 |
| Jaylen Warren | RB | 99.8 | 90.7 | 73.3 | 71.9 | 76.8 | 76.7 |
| Makai Lemon | WR | 142.9 | 133.9 | 87.2 | 89.6 | 111.7 | 115.2 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Kenyon Sadiq | TE | 145.8 | 159.8 | 149.9 | 169.5 | 130 | 130 |
| Jakobi Meyers | WR | 113.7 | 121.2 | 108.8 | 121.9 | 129 | 129.9 |
| Hunter Henry | TE | 142.9 | 150.6 | 134.9 | 142.3 | 127.8 | 127.6 |
| Brian Robinson | RB | 165.2 | 166.3 | 152.9 | 168.7 | 121.8 | 119.8 |
| Tyler Shough | QB | 155.5 | 153.2 | 173.9 | 188.2 | 130 | 130.1 |
| Josh Jacobs | RB | 36.4 | 50.2 | 31.7 | 34.6 | 33.2 | 37.1 |
| T.J. Hockenson | TE | 133 | 146.6 | 164.5 | 164.3 | 129.3 | 128.8 |
| Khalil Shakir | WR | 124.8 | 137.8 | 139.3 | 143.9 | 131.4 | 131.1 |
| Bo Nix | QB | 87.4 | 98.3 | 120.3 | 117.9 | 99.9 | 99.1 |
| Matthew Stafford | QB | 80 | 89.8 | 96.2 | 95.7 | 100.5 | 100.1 |
| Tank Dell | WR | 159.1 | 161.6 | 175.5 | 184.5 | — | — |
| Jayden Reed | WR | 128.5 | 136.3 | 116.1 | 110.1 | 119.4 | 117.8 |
| Brian Thomas | WR | 103.8 | 111.6 | 71.5 | 74.2 | 83.9 | 84.1 |
| Alec Pierce | WR | 101.1 | 107.3 | 101.4 | 98.4 | 91.1 | 95.1 |
| Matthew Golden | WR | 104 | 110 | 128.5 | 127.4 | 128.3 | 126.7 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 290pts, RB25 184pts, WR37 184pts, TE13 160pts, K13 124pts, DEF13 88pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_1856 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_7 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_43 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 100.9 | 9.3 | QB13 | QB10 | B | 296 | 296 |
| Brock Purdy | QB | 109.7 | 10.1 | QB15 | QB8 | B | 292 | 303 |
| Jalen Hurts | QB | 56.8 | 5.6 | QB6 | QB4 | B | 320 | 311 |
| Trevor Lawrence | QB | 98.9 | 9.2 | QB12 | QB9 | B | 290 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 54.9 | 5.5 | RB23 | RB22 | B | 207 | 197 |
| Quinshon Judkins | RB | 53.7 | 5.4 | RB22 | RB19 | B | 227 | 196 |
| Rhamondre Stevenson | RB | 80 | 7.6 | RB28 | RB24 | B | 203 | 169 |
| Travis Etienne | RB | 42.4 | 4.4 | RB18 | RB16 | B | 247 | 208 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Garrett Wilson | WR | 46.5 | 4.8 | WR21 | WR14 | B | 250 | 225 |
| Jayden Reed | WR | 117.5 | 10.7 | WR46 | WR36 | B | 174 | 198 |
| Parker Washington | WR | 78.6 | 7.5 | WR32 | WR28 | B | 187 | 212 |
| Rome Odunze | WR | 64.9 | 6.3 | WR27 | WR24 | B | 214 | 208 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 83.6 | 7.9 | TE9 | TE7 | B | 193 | 169 |
| Harold Fannin | TE | 71 | 6.8 | TE8 | TE6 | B | 189 | 180 |
| Jake Ferguson | TE | 109.4 | 10 | TE14 | TE12 | B | 167 | 160 |
| Sam LaPorta | TE | 63.2 | 6.2 | TE6 | TE5 | B | 189 | 197 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 138.8 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 95.9 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 98.9 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 91 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 152.8 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 56.8 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 100.9 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 162.3 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 54.7 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 109.7 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 27.9 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 6.5 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 61.9 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 42.4 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 17.4 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 53.2 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 54.9 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 12.5 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 19.8 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 5.8 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 30.9 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 12.7 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.6 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 4.9 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 10.9 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 41.7 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.2 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 21.5 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 32.4 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 46.5 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 126.1 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 48.5 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 149.5 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 23.6 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 68.2 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 156.4 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 153.3 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 63.2 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 40.3 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 83.6 | C · 16th easiest | F · 1st hardest | much harder |

