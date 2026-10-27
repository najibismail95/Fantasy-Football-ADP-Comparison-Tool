# Fantasy ADP report — 2026-10-27

_Snapshot 2026-10-27 · 92 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 165 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.68 | 170.1 | 99 |
| SLEEPER | 2498 | 1.4 | 700.9 | 86.3 |
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
| Alec Pierce | WR | 140.7 | 96.3 | 98.3 | ESPN | 3.6 | CHEAPER on ESPN | 127 |
| Brian Thomas Jr. | WR | 142.1 | 74.1 | 84.8 | ESPN | 5.2 | CHEAPER on ESPN | 128 |
| C.J. Stroud | QB | 146.4 | 199.1 | 124.4 | SLEEPER | 5.3 | CHEAPER on SLEEPER | 209 |
| Chris Godwin Jr. | WR | 145.2 | 92.2 | 93.9 | ESPN | 4.3 | CHEAPER on ESPN | 131 |
| Dalton Kincaid | TE | 141.2 | 88.3 | 93.5 | ESPN | 4.2 | CHEAPER on ESPN | 129 |
| David Montgomery | RB | 110.1 | 46.2 | 53.2 | ESPN | 5 | CHEAPER on ESPN | 160 |
| Jacory Croskey-Merritt | RB | 155.3 | 115 | 104.4 | ESPN | 3.8 | CHEAPER on ESPN | 128 |
| Jadarian Price | RB | 119.1 | 61 | 63.1 | ESPN | 4.8 | CHEAPER on ESPN | 131 |
| Jalen Hurts | QB | 100.5 | 58.4 | 54.5 | ESPN | 3.7 | CHEAPER on ESPN | 311 |
| Jaylen Waddle | WR | 91.8 | 44 | 39.2 | ESPN | 4.2 | CHEAPER on ESPN | 167 |
| Jordan Mason | RB | 155.8 | 109.1 | 110.6 | ESPN | 3.8 | CHEAPER on ESPN | 128 |
| Justin Herbert | QB | 130.3 | 83.7 | 71.1 | ESPN | 4.4 | CHEAPER on ESPN | 216 |
| Ladd McConkey | WR | 85.5 | 35.7 | 46.1 | ESPN | 3.7 | CHEAPER on ESPN | 174 |
| MarShawn Lloyd | RB | 137.2 | 137.4 | 85.6 | YAHOO | 4.3 | pricier on YAHOO | 99 |
| Quentin Johnston | WR | 156 | 112 | 105.2 | ESPN | 4 | CHEAPER on ESPN | 117 |
| Rico Dowdle | RB | 137.3 | 86.6 | 88.6 | ESPN | 4.1 | CHEAPER on ESPN | 128 |
| Terry McLaurin | WR | 102 | 55.6 | 56.9 | ESPN | 3.8 | CHEAPER on ESPN | 214 |
| TreVeyon Henderson | RB | 116 | 60 | 70.8 | ESPN | 4.2 | CHEAPER on ESPN | 116 |
| Tucker Kraft | TE | 104.6 | 64.3 | 59.6 | ESPN | 3.6 | CHEAPER on ESPN | 143 |
| Tyler Shough | QB | 144.8 | 181.8 | 121.5 | SLEEPER | 4.1 | CHEAPER on SLEEPER | 215 |


## Who’s rising


_Last 7 days, as of 2026-10-27. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Caleb Williams | QB | 108.5 | 87.8 | 71.4 | 71.5 | 65.4 | 65.4 |
| Josh Jacobs | RB | 118.4 | 99.4 | 51.2 | 51.3 | — | — |
| Luther Burden III | WR | 104.6 | 89.1 | 56.2 | 55.8 | 57.3 | 57.3 |
| Matthew Golden | WR | 97.7 | 84.1 | 125.4 | 125.7 | 121.4 | 120.9 |
| Jalen Coker | WR | 117 | 104.5 | 146 | 146.7 | 124.2 | 123.3 |
| C.J. Stroud | QB | 157.2 | 146 | 199.2 | 199 | 124.8 | 124.4 |
| Stefon Diggs | WR | 126.6 | 115.4 | 104.1 | 104.2 | 106.8 | 106.7 |
| Isaiah Likely | TE | 81.1 | 71.1 | 105.7 | 105.2 | 107.3 | 107 |
| Trevor Lawrence | QB | 100.8 | 90.8 | 102.2 | 102.5 | 79.6 | 79.4 |
| D'Andre Swift | RB | 59.1 | 49.6 | 49.3 | 49.1 | 43.8 | 43.7 |
| Tre Tucker | WR | 164 | 155.2 | — | — | 127.6 | 126.5 |
| Colston Loveland | TE | 62 | 53.7 | 39 | 39.1 | 41.1 | 41.3 |
| T.J. Hockenson | TE | 160.2 | 151.9 | 163.2 | 163.4 | 126.5 | 126.4 |
| Hunter Henry | TE | 161.9 | 154.8 | 141.8 | 141.9 | 127.2 | 127.2 |
| Malik Nabers | WR | 35.7 | 29.3 | 27.3 | 27.3 | 30.1 | 30.1 |
| DK Metcalf | WR | 109.9 | 103.5 | 75.6 | 75.7 | 84.9 | 84.9 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Davante Adams | WR | 48.4 | 79.4 | 50 | 50.2 | 58.9 | 59 |
| Mike Evans | WR | 75 | 91.2 | 63 | 63 | 70.5 | 70.4 |
| Matthew Stafford | QB | 111.1 | 122.1 | 94.2 | 94.4 | 98.7 | 98.6 |
| Patrick Mahomes | QB | 76.9 | 87.9 | 110 | 110 | 103.3 | 103.1 |
| Juwan Johnson | TE | 143.9 | 154.4 | 175.8 | 175 | 118.7 | 118.7 |
| Bucky Irving | RB | 55.6 | 65.9 | 43.8 | 43.9 | 51.6 | 51.5 |
| Tyler Warren | TE | 59.5 | 69.7 | 48 | 48 | 47.2 | 47.3 |
| Michael Wilson | WR | 103.7 | 112.8 | 88.1 | 87.3 | 100.3 | 100 |
| Terry McLaurin | WR | 91.6 | 100.6 | 55.4 | 55.6 | 56.8 | 56.9 |
| Cam Skattebo | RB | 67.7 | 76.3 | 40.2 | 40.3 | 42.7 | 42.9 |
| Bryce Young | QB | 121.4 | 129.4 | — | — | 107 | 105.6 |
| Denzel Boston | WR | 137.9 | 145.5 | 169.4 | 169.1 | 117.2 | 116.3 |
| Jalen Hurts | QB | 93 | 100.2 | 58.1 | 58.4 | 54.4 | 54.5 |
| Dak Prescott | QB | 93.8 | 100.7 | 77.5 | 77.3 | 72.5 | 72.5 |
| Travis Kelce | TE | 94.4 | 101 | 89.8 | 89.9 | 94.1 | 94 |
| Romeo Doubs | WR | 153.3 | 159.9 | 133.8 | 133.3 | 130.4 | 130.4 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 234pts, RB26 155pts, WR36 154pts, TE13 136pts, K13 99pts, DEF13 77pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2337 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_19 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_40 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brock Purdy | QB | 94.3 | 8.8 | QB10 | QB7 | B | 189 | 303 |
| Jared Goff | QB | 108.9 | 10 | QB13 | QB8 | A | 204 | 283 |
| Jayden Daniels | QB | 58.9 | 5.8 | QB5 | QB2 | B | 236 | 309 |
| Trevor Lawrence | QB | 90.9 | 8.5 | QB9 | QB5 | A | 225 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 51.5 | 5.2 | RB19 | RB12 | B | 172 | 197 |
| Chuba Hubbard | RB | 80.9 | 7.7 | RB28 | RB22 | A | 174 | 148 |
| D'Andre Swift | RB | 49.1 | 5 | RB18 | RB13 | B | 155 | 208 |
| Jaylen Warren | RB | 74.4 | 7.1 | RB26 | RB20 | B | 159 | 171 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 65.7 | 6.4 | WR25 | WR19 | B | 150 | 208 |
| Mike Evans | WR | 70.4 | 6.8 | WR27 | WR18 | A | 145 | 222 |
| Parker Washington | WR | 71.3 | 6.9 | WR28 | WR12 | A | 180 | 212 |
| Tetairoa McMillan | WR | 41.9 | 4.4 | WR17 | WR11 | B | 173 | 223 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 78.3 | 7.4 | TE9 | TE5 | A | 147 | 169 |
| Isaiah Likely | TE | 105.5 | 9.7 | TE12 | TE8 | B | 129 | 157 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 148.3 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 98.6 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 90.9 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97.1 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 144.8 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.4 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.5 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 141.4 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 58.9 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 94.3 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.6 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.1 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.4 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne Jr. | NO | 8 | 43.1 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 17.6 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 53.2 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 51.5 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.9 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker III | KC | 5 | 13.7 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.4 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 29.1 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 13.7 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.9 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5.3 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11.9 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 41.9 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.7 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 26.9 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.8 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 44.6 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.2 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 48.1 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 149.3 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 22.6 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts Sr. | ATL | 11 | 73.7 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 151.7 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.7 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.7 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 41.3 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 78.3 | C · 16th easiest | F · 1st hardest | much harder |

