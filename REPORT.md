# Fantasy ADP report — 2026-10-22

_Snapshot 2026-10-22 · 87 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 165 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.74 | 170 | 100 |
| SLEEPER | 2498 | 1.4 | 700.9 | 86.7 |
| YAHOO | 221 | 1.3 | 143.9 | 92.3 |


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
| Alec Pierce | WR | 140.3 | 95.8 | 98.3 | ESPN | 3.6 | CHEAPER on ESPN | 131 |
| Blake Corum | RB | 143 | 100.2 | 100.1 | ESPN | 3.6 | CHEAPER on ESPN | 119 |
| Brian Thomas Jr. | WR | 141.5 | 74 | 84.8 | ESPN | 5.2 | CHEAPER on ESPN | 128 |
| Bryce Young | QB | 123.1 | 226.3 | 106.4 | SLEEPER | 9.3 | CHEAPER on SLEEPER | 229 |
| Chris Godwin Jr. | WR | 145.2 | 92.1 | 93.8 | ESPN | 4.4 | CHEAPER on ESPN | 137 |
| Dalton Kincaid | TE | 142.2 | 87.2 | 93.5 | ESPN | 4.3 | CHEAPER on ESPN | 129 |
| David Montgomery | RB | 107.6 | 46.1 | 53 | ESPN | 4.8 | CHEAPER on ESPN | 162 |
| Jacory Croskey-Merritt | RB | 153.6 | 115 | 104.4 | ESPN | 3.7 | CHEAPER on ESPN | 128 |
| Jadarian Price | RB | 117.1 | 61.9 | 63.1 | ESPN | 4.6 | CHEAPER on ESPN | 140 |
| Jalen Hurts | QB | 98.9 | 58.3 | 54.5 | ESPN | 3.5 | CHEAPER on ESPN | 311 |
| Jaylen Waddle | WR | 89 | 44.9 | 39.1 | ESPN | 3.9 | CHEAPER on ESPN | 169 |
| Jordan Mason | RB | 160.2 | 109 | 110.6 | ESPN | 4.2 | CHEAPER on ESPN | 133 |
| Justin Herbert | QB | 129.4 | 83.6 | 71.1 | ESPN | 4.3 | CHEAPER on ESPN | 213 |
| Luther Burden III | WR | 101.3 | 55.3 | 57.3 | ESPN | 3.7 | CHEAPER on ESPN | 175 |
| MarShawn Lloyd | RB | 134.7 | 137.3 | 85.6 | YAHOO | 4.2 | pricier on YAHOO | 89 |
| Quentin Johnston | WR | 155.7 | 111.1 | 105.2 | ESPN | 4 | CHEAPER on ESPN | 117 |
| Rico Dowdle | RB | 137 | 86.5 | 88.5 | ESPN | 4.1 | CHEAPER on ESPN | 118 |
| TreVeyon Henderson | RB | 115.2 | 60.9 | 70.7 | ESPN | 4.1 | CHEAPER on ESPN | 125 |
| Tucker Kraft | TE | 107 | 63.7 | 59.6 | ESPN | 3.8 | CHEAPER on ESPN | 150 |
| Tyler Shough | QB | 143.9 | 181.8 | 121.9 | SLEEPER | 4.1 | CHEAPER on SLEEPER | 229 |


## Who’s rising


_Last 7 days, as of 2026-10-22. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Isaiah Likely | TE | 100.3 | 76.6 | 105.3 | 105.2 | 107.5 | 107.2 |
| Jordan Love | QB | 152.7 | 136.8 | 158.5 | 158.9 | 119.8 | 119.5 |
| Matthew Golden | WR | 106.6 | 92.4 | 125.9 | 125.7 | 121.8 | 121.2 |
| Josh Jacobs | RB | 125.6 | 111.5 | 51.3 | 51.2 | — | — |
| Jalen Coker | WR | 124.9 | 111.2 | 146.7 | 146.6 | 124.9 | 123.9 |
| Caleb Williams | QB | 114.5 | 102 | 71.6 | 71.4 | 65.3 | 65.4 |
| Drake Maye | QB | 61.8 | 51.4 | 47.3 | 47.9 | 49.5 | 49.5 |
| Jaylen Warren | RB | 84.1 | 74.1 | 70.1 | 70 | 74.9 | 74.6 |
| Christian Watson | WR | 73.2 | 63.6 | 66.1 | 66.3 | 66.1 | 65.9 |
| Parker Washington | WR | 78.9 | 69.6 | 71.7 | 71.8 | 72.7 | 72.4 |
| Woody Marks | RB | 157.7 | 150.5 | 146.9 | 147.2 | 130.1 | 129.4 |
| Malik Nabers | WR | 40.7 | 33.5 | 27.3 | 27.8 | 30.1 | 30.1 |
| Ollie Gordon II | RB | 144.8 | 137.7 | — | — | 106 | 101.9 |
| Pat Freiermuth | TE | 163.9 | 156.9 | — | — | 122.7 | 123 |
| Mike Evans | WR | 85.6 | 78.8 | 63 | 63 | 70.6 | 70.4 |
| D'Andre Swift | RB | 62.5 | 56.3 | 49.1 | 49.1 | 43.8 | 43.7 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Deebo Samuel Sr. | WR | 133.9 | 152.8 | 130.1 | 130.8 | 120.2 | 119.9 |
| Tyler Shough | QB | 130 | 144.9 | 181.2 | 181.8 | 122.8 | 122 |
| Jalen Hurts | QB | 82.7 | 97 | 58.3 | 58.2 | 54.2 | 54.5 |
| Juwan Johnson | TE | 135 | 146.7 | 175.4 | 175.3 | 118.9 | 118.7 |
| Michael Wilson | WR | 94.7 | 106.2 | 88.2 | 88.1 | 100.5 | 100.2 |
| Quinshon Judkins | RB | 66.8 | 78 | 53.7 | 54 | 55 | 55 |
| David Montgomery | RB | 97 | 107.2 | 46 | 46.3 | 52.7 | 53 |
| Jeremiyah Love | RB | 38 | 47.4 | 28.2 | 28.2 | 30.5 | 30.6 |
| Harold Fannin Jr. | TE | 90.5 | 99.5 | 73.6 | 73.5 | 71.2 | 71.3 |
| Dak Prescott | QB | 87.1 | 95.9 | 77.2 | 77.2 | 72.6 | 72.5 |
| Davante Adams | WR | 47.3 | 55.5 | 50.1 | 50.1 | 59 | 58.9 |
| Brian Robinson Jr. | RB | 154.9 | 162.5 | 173.6 | 173.4 | 115.3 | 115.2 |
| Jaylen Waddle | WR | 81.5 | 88.5 | 44.9 | 44.9 | 38.9 | 39 |
| Tyler Warren | TE | 56.5 | 62.9 | 48 | 48 | 47.2 | 47.2 |
| Dalton Kincaid | TE | 136.1 | 142.3 | 87.3 | 87.2 | 93.7 | 93.5 |
| Cam Skattebo | RB | 64.4 | 70.4 | 40.2 | 40.2 | 42.7 | 42.8 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 245pts, RB25 155pts, WR37 155pts, TE13 135pts, K13 102pts, DEF13 82pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2337 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_20 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_42 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brock Purdy | QB | 94.5 | 8.8 | QB9 | QB6 | B | 223 | 303 |
| Jared Goff | QB | 110.2 | 10.1 | QB13 | QB8 | B | 222 | 283 |
| Jayden Daniels | QB | 58.7 | 5.8 | QB5 | QB4 | B | 236 | 309 |
| Patrick Mahomes | QB | 103.2 | 9.5 | QB12 | QB9 | B | 213 | 287 |
| Trevor Lawrence | QB | 95.3 | 8.9 | QB10 | QB5 | B | 224 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 51.5 | 5.2 | RB19 | RB15 | B | 164 | 197 |
| Chuba Hubbard | RB | 81.2 | 7.7 | RB28 | RB22 | A | 179 | 148 |
| D'Andre Swift | RB | 49.2 | 5 | RB18 | RB13 | B | 170 | 208 |
| Jaylen Warren | RB | 74.6 | 7.1 | RB25 | RB17 | A | 175 | 171 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 65.8 | 6.4 | WR25 | WR20 | B | 173 | 208 |
| DK Metcalf | WR | 84.9 | 8 | WR32 | WR29 | B | 148 | 183 |
| Mike Evans | WR | 70.4 | 6.8 | WR27 | WR21 | B | 156 | 222 |
| Parker Washington | WR | 71.3 | 6.9 | WR28 | WR16 | A | 179 | 212 |
| Tetairoa McMillan | WR | 39.2 | 4.2 | WR17 | WR10 | B | 194 | 223 |
| Zay Flowers | WR | 37.8 | 4.1 | WR15 | WR11 | B | 187 | 228 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 78.4 | 7.5 | TE9 | TE5 | A | 167 | 169 |
| Isaiah Likely | TE | 105.6 | 9.7 | TE12 | TE7 | A | 158 | 157 |
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
| Kyler Murray | MIN | 6 | 149.5 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 98.7 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 95.3 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 143.9 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.3 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.4 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 141.7 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 58.7 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 94.5 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.6 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.1 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.4 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne Jr. | NO | 8 | 42.9 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 16 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 53 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 51.5 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.9 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker III | KC | 5 | 13.7 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.4 | C · 16th easiest | F · 2nd hardest | much harder |


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
| Tetairoa McMillan | CAR | 5 | 39.2 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.7 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 26.8 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.7 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.3 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.8 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 47.9 | D · 8th hardest | A · 3rd easiest | much easier |
| Brock Bowers | LV | 13 | 21.8 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts Sr. | ATL | 11 | 73.6 | B · 9th easiest | B · 6th easiest | easier |
| Dalton Kincaid | BUF | 7 | 93.5 | D · 5th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 151.7 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.7 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.7 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 41.2 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 78.4 | C · 16th easiest | F · 1st hardest | much harder |

