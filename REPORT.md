# Fantasy ADP report — 2026-10-16

_Snapshot 2026-10-16 · 81 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 165 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.75 | 170 | 99 |
| SLEEPER | 2497 | 1.4 | 700.9 | 86.7 |
| YAHOO | 220 | 1.3 | 143.9 | 89.1 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1175 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 2497 |
| YAHOO | exact | 199 |
| YAHOO | team | 21 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Alec Pierce | WR | 140.1 | 95.9 | 98.3 | ESPN | 3.6 | CHEAPER on ESPN | 131 |
| Blake Corum | RB | 145.4 | 100.2 | 100 | ESPN | 3.8 | CHEAPER on ESPN | 115 |
| Brian Thomas | WR | 140.3 | 74.9 | 84.8 | ESPN | 5 | CHEAPER on ESPN | 136 |
| Bryce Young | QB | 120.3 | 226.3 | 107.7 | SLEEPER | 9.4 | CHEAPER on SLEEPER | 237 |
| Caleb Williams | QB | 113.4 | 71.4 | 65.4 | ESPN | 3.7 | CHEAPER on ESPN | 254 |
| Chris Godwin | WR | 144 | 92 | 93.7 | ESPN | 4.3 | CHEAPER on ESPN | 130 |
| Dalton Kincaid | TE | 139.6 | 87.2 | 93.6 | ESPN | 4.1 | CHEAPER on ESPN | 128 |
| David Montgomery | RB | 102.3 | 46.9 | 52.8 | ESPN | 4.4 | CHEAPER on ESPN | 165 |
| Jadarian Price | RB | 116.2 | 61.7 | 63 | ESPN | 4.5 | CHEAPER on ESPN | 143 |
| Jayden Reed | WR | 158 | 108 | 113 | ESPN | 4 | CHEAPER on ESPN | 198 |
| Jordan Mason | RB | 162.3 | 109 | 110.6 | ESPN | 4.4 | CHEAPER on ESPN | 134 |
| Justin Herbert | QB | 127.9 | 83.5 | 71 | ESPN | 4.2 | CHEAPER on ESPN | 223 |
| Juwan Johnson | TE | 139.9 | 175.1 | 118.8 | SLEEPER | 3.8 | CHEAPER on SLEEPER | 131 |
| Luther Burden | WR | 104.4 | 56.7 | 57.3 | ESPN | 4 | CHEAPER on ESPN | 177 |
| MarShawn Lloyd | RB | 133.3 | 137.2 | 85.5 | YAHOO | 4.1 | pricier on YAHOO | 113 |
| Quentin Johnston | WR | 156 | 112.9 | 105.2 | ESPN | 3.9 | CHEAPER on ESPN | 121 |
| Rico Dowdle | RB | 137 | 86.4 | 88.4 | ESPN | 4.1 | CHEAPER on ESPN | 121 |
| TreVeyon Henderson | RB | 114.2 | 59.2 | 70.6 | ESPN | 4.1 | CHEAPER on ESPN | 133 |
| Tucker Kraft | TE | 110.7 | 64.2 | 59.6 | ESPN | 4.1 | CHEAPER on ESPN | 155 |
| Tyler Shough | QB | 138.7 | 181.3 | 122.6 | SLEEPER | 4.2 | CHEAPER on SLEEPER | 237 |


## Who’s rising


_Last 7 days, as of 2026-10-16. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Isaiah Likely | TE | 118.1 | 96.1 | 105.3 | 105.6 | 107.6 | 107.5 |
| Mike Evans | WR | 98.5 | 82.1 | 62.8 | 63 | 70.6 | 70.5 |
| Jayden Daniels | QB | 70.4 | 55.5 | 68.2 | 68.6 | 58.3 | 58.5 |
| Drake Maye | QB | 72 | 59.1 | 47.1 | 47.6 | 49.4 | 49.5 |
| Bucky Irving | RB | 66.5 | 54.3 | 43.2 | 43.6 | 51.8 | 51.6 |
| Jaylen Warren | RB | 93.4 | 81.5 | 70.3 | 70.3 | 75.1 | 74.9 |
| Jared Goff | QB | 127.3 | 115.6 | 131.5 | 131.5 | 109.8 | 109.4 |
| Jordan Love | QB | 159.8 | 149.9 | 159.6 | 158.3 | 119.9 | 119.7 |
| Tetairoa McMillan | WR | 47 | 37.9 | 37.2 | 37.5 | 42.3 | 42.2 |
| Bryce Young | QB | 127.6 | 119.3 | — | — | 110.8 | 107.9 |
| Sam LaPorta | TE | 83 | 75 | 57.6 | 57.7 | 62.8 | 62.7 |
| Dallas Goedert | TE | 136.9 | 129.4 | 119.1 | 119.3 | 103.3 | 103.4 |
| Christian Watson | WR | 78.3 | 71.3 | 66.1 | 66 | 66.4 | 66.1 |
| Michael Wilson | WR | 103.3 | 96.4 | 87.6 | 88.1 | 100.8 | 100.4 |
| Jalen Coker | WR | 129.9 | 123.8 | 146.7 | 146.5 | 125.9 | 124.7 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tyler Shough | QB | 111.2 | 134.4 | 181.9 | 181.3 | 124 | 122.7 |
| Dalton Kincaid | TE | 123.6 | 137.6 | 88.4 | 87.2 | 93.8 | 93.6 |
| David Montgomery | RB | 89.4 | 99.4 | 46.1 | 46.3 | 52.6 | 52.8 |
| Deebo Samuel | WR | 128 | 137.9 | 130.7 | 130.3 | 121 | 120.2 |
| Dak Prescott | QB | 79.8 | 89.3 | 77.3 | 77.6 | 72.7 | 72.6 |
| Stefon Diggs | WR | 117 | 126.5 | 104.6 | 104.1 | 107 | 106.9 |
| Jalen Hurts | QB | 75.5 | 84.5 | 58.3 | 58.2 | 54 | 54.3 |
| Travis Kelce | TE | 86.5 | 94.6 | 89.4 | 89.3 | 94.3 | 94.2 |
| Quinshon Judkins | RB | 61.4 | 69.3 | 53.9 | 53.4 | 55 | 55 |
| Lamar Jackson | QB | 30.8 | 38.6 | 31.3 | 31.4 | 38.3 | 38.4 |
| Harold Fannin | TE | 84.5 | 92.3 | 73.7 | 73.5 | 71 | 71.2 |
| DJ Moore | WR | 82.9 | 90.3 | 53.6 | 53.6 | 56.8 | 56.8 |
| Cam Skattebo | RB | 57.7 | 64.9 | 40.8 | 40.2 | 42.7 | 42.7 |
| Jordan Addison | WR | 134.2 | 141 | 101.8 | 101.3 | 115 | 115 |
| Saquon Barkley | RB | 28.3 | 34.4 | 11.8 | 11.8 | 11.2 | 11.3 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 249pts, RB26 163pts, WR36 161pts, TE13 139pts, K13 102pts, DEF13 83pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2338 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_16 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_40 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brock Purdy | QB | 94.8 | 8.8 | QB10 | QB5 | A | 242 | 303 |
| Jared Goff | QB | 115.2 | 10.5 | QB14 | QB11 | B | 223 | 283 |
| Jayden Daniels | QB | 58.6 | 5.8 | QB6 | QB2 | B | 261 | 309 |
| Patrick Mahomes | QB | 103.5 | 9.5 | QB13 | QB7 | A | 241 | 287 |
| Trevor Lawrence | QB | 101.4 | 9.4 | QB12 | QB8 | B | 224 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 51.6 | 5.2 | RB19 | RB13 | B | 194 | 197 |
| Chuba Hubbard | RB | 81.4 | 7.7 | RB27 | RB21 | B | 194 | 148 |
| Jaylen Warren | RB | 74.8 | 7.1 | RB25 | RB18 | B | 187 | 171 |
| Quinshon Judkins | RB | 55 | 5.5 | RB21 | RB17 | B | 167 | 196 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 66 | 6.4 | WR27 | WR20 | B | 182 | 208 |
| Michael Wilson | WR | 98.7 | 9.1 | WR37 | WR28 | A | 178 | 166 |
| Mike Evans | WR | 70.5 | 6.8 | WR29 | WR13 | A | 192 | 222 |
| Parker Washington | WR | 72.6 | 7 | WR30 | WR17 | A | 185 | 212 |
| Tetairoa McMillan | WR | 38.4 | 4.1 | WR16 | WR10 | B | 209 | 223 |
| Zay Flowers | WR | 37.4 | 4 | WR15 | WR12 | B | 199 | 228 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 78.5 | 7.5 | TE9 | TE5 | B | 166 | 169 |
| Isaiah Likely | TE | 105.8 | 9.7 | TE12 | TE6 | A | 164 | 157 |
| Sam LaPorta | TE | 62.7 | 6.1 | TE5 | TE3 | B | 153 | 197 |
| Travis Kelce | TE | 94.2 | 8.8 | TE11 | TE8 | B | 141 | 171 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 149.6 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 98.8 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 101.4 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 138.7 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.2 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.3 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 161.8 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 58.6 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 94.8 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.5 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.1 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.5 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 42.6 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 16 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 52.8 | B · 9th easiest | D · 7th hardest | harder |
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
| Tetairoa McMillan | CAR | 5 | 38.4 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 5.4 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 26.6 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.7 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.3 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.7 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 48 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 158.4 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 21.8 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 73.4 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 151.7 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.7 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.7 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 40.9 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 78.5 | C · 16th easiest | F · 1st hardest | much harder |

