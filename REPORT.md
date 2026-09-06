# Fantasy ADP report — 2026-09-06

_Snapshot 2026-09-06 · 41 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 167 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 666 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 348 | 1.32 | 171.7 | 99.7 |
| SLEEPER | 2229 | 1.7 | 700.9 | 84.3 |
| YAHOO | 225 | 1.3 | 144.1 | 90.2 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1165 |
| ESPN | id | 465 |
| ESPN | team | 110 |
| SLEEPER | id | 2229 |
| YAHOO | exact | 205 |
| YAHOO | team | 20 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brian Thomas | WR | 113.7 | 74 | 83.9 | ESPN | 2.9 | CHEAPER on ESPN | 186 |
| Dalton Kincaid | TE | 131.2 | 88 | 97.2 | ESPN | 3.2 | CHEAPER on ESPN | 160 |
| Jordan Love | QB | 155.4 | 153.8 | 122.4 | YAHOO | 2.7 | pricier on YAHOO | 271 |
| Josh Jacobs | RB | 90 | 39.4 | 54.5 | ESPN | 3.6 | CHEAPER on ESPN | 126 |
| Kyler Murray | QB | 137.2 | 150.5 | 113.1 | YAHOO | 2.6 | pricier on YAHOO | 283 |
| Makai Lemon | WR | 133.7 | 91 | 117.9 | SLEEPER | 2.9 | pricier on SLEEPER | 162 |
| MarShawn Lloyd | RB | 105.1 | 159.4 | 90.6 | SLEEPER | 5.1 | CHEAPER on SLEEPER | 142 |
| RJ Harvey | RB | 126.9 | 79.4 | 109.5 | SLEEPER | 3.2 | pricier on SLEEPER | 147 |
| T.J. Hockenson | TE | 153.3 | 165.2 | 128 | YAHOO | 2.6 | pricier on YAHOO | 157 |
| Tyler Shough | QB | 152.6 | 186.6 | 130.1 | SLEEPER | 3.8 | CHEAPER on SLEEPER | 268 |


## Who’s rising


_Last 7 days, as of 2026-09-06. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MarShawn Lloyd | RB | 164.9 | 110.8 | 181.7 | 159.4 | 128.2 | 93.7 |
| Kyler Murray | QB | 143.6 | 137.2 | 158.8 | 151.3 | 112.2 | 112.8 |
| Jonathon Brooks | RB | 111.6 | 104.3 | 106.1 | 99.4 | 94.9 | 91.1 |
| Stefon Diggs | WR | 118.8 | 102 | 110.3 | 108 | 105.7 | 104.8 |
| Justin Herbert | QB | 100.1 | 85.5 | 82.3 | 82.6 | 70.1 | 70.3 |
| George Kittle | TE | 86.6 | 72.3 | 88.6 | 83.9 | 85.4 | 82.5 |
| Tony Pollard | RB | 100.5 | 87 | 84.1 | 84 | 85.5 | 86 |
| Chris Godwin | WR | 135.7 | 122.3 | 95.6 | 93.4 | 97.1 | 95.3 |
| Woody Marks | RB | 149.2 | 152 | 160.1 | 147.1 | 130.9 | 130.7 |
| Kenny Gainwell | RB | 111.8 | 99.9 | 111.7 | 111.5 | 118.6 | 120.1 |
| Aaron Jones | RB | 125.8 | 114.5 | 124.5 | 127.5 | 123.5 | 124.3 |
| Dak Prescott | QB | 80.9 | 71.8 | 78.1 | 77.2 | 74 | 73.1 |
| D'Andre Swift | RB | 60.4 | 51.8 | 53.7 | 51.3 | 46.9 | 45.6 |
| Juwan Johnson | TE | 161.6 | 157.5 | 187.8 | 179.2 | 126.1 | 123.3 |
| Jaylen Warren | RB | 94.5 | 86.2 | 71.9 | 71.7 | 76.7 | 76 |
| De'Zhaun Stribling | WR | 146.3 | 138.3 | 138.1 | 137.5 | 110.4 | 108.8 |
| Chuba Hubbard | RB | 116.8 | 108.8 | 77.4 | 78.5 | 86.8 | 90.6 |
| Bhayshul Tuten | RB | 69 | 61.2 | 62.4 | 61.7 | 62.5 | 61.2 |
| RJ Harvey | RB | 133.4 | 126.2 | 79.5 | 79.5 | 105.4 | 109.2 |
| Mike Evans | WR | 90.9 | 83.7 | 61.4 | 62.2 | 67.8 | 69.7 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Josh Jacobs | RB | 38 | 83.1 | 31.6 | 38.9 | 34.5 | 51.9 |
| Kenyon Sadiq | TE | 152.6 | 165.5 | 157.3 | 173.4 | 130 | 130 |
| Tank Dell | WR | 157.3 | 164.8 | 178.4 | 189.6 | — | — |
| T.J. Hockenson | TE | 138.6 | 153 | 164 | 165.2 | 129.1 | 128.2 |
| Bo Nix | QB | 91.3 | 103.6 | 119.6 | 117.5 | 99.5 | 98.7 |
| Jayden Reed | WR | 129.3 | 139.6 | 111.8 | 109.4 | 118.4 | 116.1 |
| Khalil Shakir | WR | 129.8 | 139.9 | 143.4 | 144.6 | 131.3 | 130.8 |
| Deebo Samuel | WR | 134 | 143.9 | 132.4 | 130.4 | 127.3 | 127.3 |
| Matthew Stafford | QB | 84.5 | 93.3 | 96.2 | 95 | 100.4 | 99.6 |
| Matthew Golden | WR | 105 | 113.4 | 127.6 | 125.3 | 127.3 | 125.6 |
| Jakobi Meyers | WR | 116.5 | 122.3 | 117.7 | 126.1 | 129.5 | 130.4 |
| Trevor Lawrence | QB | 94.1 | 101.8 | 100.6 | 100.7 | 84.4 | 83.6 |
| Brian Thomas | WR | 106.2 | 113.6 | 73.4 | 74.1 | 84 | 84 |
| Hunter Henry | TE | 146.3 | 153.1 | 141.3 | 141.4 | 127.7 | 127.5 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 290pts, RB25 184pts, WR37 184pts, TE13 160pts, K13 124pts, DEF13 88pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2068 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_7 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_45 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 103.9 | 9.6 | QB13 | QB10 | B | 296 | 296 |
| Brock Purdy | QB | 110 | 10.1 | QB15 | QB8 | B | 292 | 303 |
| Jalen Hurts | QB | 56.2 | 5.6 | QB6 | QB4 | B | 320 | 311 |
| Trevor Lawrence | QB | 100.7 | 9.3 | QB12 | QB9 | B | 290 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Quinshon Judkins | RB | 53.6 | 5.4 | RB22 | RB19 | B | 227 | 196 |
| Rhamondre Stevenson | RB | 77.7 | 7.4 | RB28 | RB24 | B | 203 | 169 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Garrett Wilson | WR | 46.6 | 4.8 | WR21 | WR14 | A | 250 | 225 |
| Jayden Reed | WR | 115.6 | 10.5 | WR45 | WR36 | A | 174 | 198 |
| Rome Odunze | WR | 66 | 6.4 | WR27 | WR24 | B | 214 | 208 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 82.2 | 7.8 | TE9 | TE7 | B | 193 | 169 |
| Harold Fannin | TE | 70.6 | 6.8 | TE8 | TE6 | B | 189 | 180 |
| Jake Ferguson | TE | 112.5 | 10.3 | TE14 | TE12 | B | 167 | 160 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 137.2 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 94.8 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 100.7 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 93.2 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 152.6 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 56.2 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 103.9 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 162.6 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 55.9 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 110 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 27.5 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 6.2 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 61.3 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 41.7 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 17 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 53 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 53.6 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 12.2 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 20.2 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 30.2 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 12.5 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.5 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11.2 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 41.9 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.6 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 21.1 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 31.8 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 46.6 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 126.5 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 49.1 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 153.3 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 23.3 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 68.7 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 153.8 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.3 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 63.1 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 39.5 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 82.2 | C · 16th easiest | F · 1st hardest | much harder |

