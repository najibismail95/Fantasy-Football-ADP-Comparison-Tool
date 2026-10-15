# Fantasy ADP report — 2026-10-15

_Snapshot 2026-10-15 · 80 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 165 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.72 | 170.2 | 99 |
| SLEEPER | 2496 | 1.4 | 700.9 | 85.3 |
| YAHOO | 220 | 1.3 | 143.9 | 90 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1175 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 2496 |
| YAHOO | exact | 199 |
| YAHOO | team | 21 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Alec Pierce | WR | 139.8 | 96.2 | 98.3 | ESPN | 3.5 | CHEAPER on ESPN | 143 |
| Blake Corum | RB | 145.3 | 100.3 | 100 | ESPN | 3.8 | CHEAPER on ESPN | 115 |
| Brian Thomas | WR | 139.7 | 74 | 84.8 | ESPN | 5 | CHEAPER on ESPN | 136 |
| Bryce Young | QB | 119.2 | 226.3 | 107.9 | SLEEPER | 9.4 | CHEAPER on SLEEPER | 237 |
| Caleb Williams | QB | 113.8 | 71.5 | 65.4 | ESPN | 3.8 | CHEAPER on ESPN | 254 |
| Chris Godwin | WR | 143.2 | 92.1 | 93.6 | ESPN | 4.2 | CHEAPER on ESPN | 132 |
| Dalton Kincaid | TE | 137.2 | 87.2 | 93.6 | ESPN | 3.9 | CHEAPER on ESPN | 129 |
| David Montgomery | RB | 99.2 | 46 | 52.8 | ESPN | 4.2 | CHEAPER on ESPN | 165 |
| Jadarian Price | RB | 116.4 | 61.8 | 63 | ESPN | 4.5 | CHEAPER on ESPN | 142 |
| Jayden Reed | WR | 158.2 | 108 | 113 | ESPN | 4 | CHEAPER on ESPN | 198 |
| Jordan Mason | RB | 162.5 | 109.1 | 110.6 | ESPN | 4.4 | CHEAPER on ESPN | 134 |
| Justin Herbert | QB | 127.4 | 83.6 | 71 | ESPN | 4.2 | CHEAPER on ESPN | 223 |
| Juwan Johnson | TE | 137 | 175.4 | 118.8 | SLEEPER | 4 | CHEAPER on SLEEPER | 129 |
| Luther Burden | WR | 103 | 56.7 | 57.2 | ESPN | 3.8 | CHEAPER on ESPN | 176 |
| MarShawn Lloyd | RB | 134 | 137.3 | 85.5 | YAHOO | 4.2 | pricier on YAHOO | 112 |
| Quentin Johnston | WR | 155.7 | 112.9 | 105.2 | ESPN | 3.9 | CHEAPER on ESPN | 122 |
| Rico Dowdle | RB | 136.3 | 86.4 | 88.4 | ESPN | 4.1 | CHEAPER on ESPN | 121 |
| TreVeyon Henderson | RB | 112.5 | 60.8 | 70.5 | ESPN | 3.9 | CHEAPER on ESPN | 133 |
| Tucker Kraft | TE | 110.7 | 64.3 | 59.6 | ESPN | 4.1 | CHEAPER on ESPN | 154 |
| Tyler Shough | QB | 134.2 | 181.5 | 122.7 | SLEEPER | 4.4 | CHEAPER on SLEEPER | 237 |


## Who’s rising


_Last 7 days, as of 2026-10-15. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Isaiah Likely | TE | 119.6 | 100.3 | 105.7 | 105.3 | 107.7 | 107.5 |
| Jayden Daniels | QB | 70.9 | 57.2 | 68.3 | 68.3 | 58.2 | 58.5 |
| Mike Evans | WR | 99.1 | 85.6 | 63.2 | 63 | 70.6 | 70.6 |
| Bryce Young | QB | 131.3 | 118.4 | — | — | 111.3 | 108.2 |
| Jared Goff | QB | 129 | 116.2 | 131.7 | 131.7 | 109.9 | 109.5 |
| Tetairoa McMillan | WR | 49.8 | 37.5 | 37.2 | 37.5 | 42.3 | 42.2 |
| Michael Wilson | WR | 106.1 | 94.7 | 87.7 | 88.2 | 100.8 | 100.5 |
| Bucky Irving | RB | 66.5 | 55.9 | 43.2 | 43.3 | 51.8 | 51.7 |
| Drake Maye | QB | 72.1 | 61.8 | 47.1 | 47.3 | 49.3 | 49.5 |
| Jaylen Warren | RB | 94.1 | 84.1 | 70.9 | 70.1 | 75.2 | 74.9 |
| Sam LaPorta | TE | 84.9 | 74.9 | 57.6 | 57.7 | 62.8 | 62.7 |
| Brian Robinson | RB | 162.5 | 154.9 | 171 | 173.6 | 115.6 | 115.3 |
| Dallas Goedert | TE | 137.2 | 130.1 | 119.3 | 119 | 103.3 | 103.4 |
| Jordan Love | QB | 159.7 | 152.7 | 159.7 | 158.5 | 119.9 | 119.8 |
| Aaron Jones | RB | 114.5 | 107.9 | 127.5 | 127.4 | 122.2 | 121.6 |
| Kyren Williams | RB | 36.8 | 30.4 | 26.1 | 26.8 | 27.6 | 27.4 |
| Chuba Hubbard | RB | 85.8 | 79.3 | 81.3 | 81.2 | 90.1 | 89.6 |
| Denzel Boston | WR | 146.4 | 140.2 | 170.3 | 169.4 | 121.4 | 118.5 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tyler Shough | QB | 109.6 | 130 | 182.4 | 181.2 | 124.3 | 122.8 |
| Dalton Kincaid | TE | 120.7 | 136.1 | 88.1 | 87.3 | 93.8 | 93.7 |
| Travis Kelce | TE | 84.5 | 94.4 | 89.5 | 89.1 | 94.3 | 94.2 |
| Stefon Diggs | WR | 115.8 | 125.6 | 104.3 | 104.2 | 107 | 106.9 |
| Lamar Jackson | QB | 29.8 | 38.4 | 31.3 | 31.5 | 38.3 | 38.4 |
| DJ Moore | WR | 81.2 | 89.7 | 53.7 | 53.6 | 56.8 | 56.8 |
| David Montgomery | RB | 88.7 | 97 | 46.1 | 46 | 52.6 | 52.7 |
| Cam Skattebo | RB | 56.2 | 64.4 | 40.2 | 40.2 | 42.7 | 42.7 |
| Jalen Hurts | QB | 74.5 | 82.7 | 58.3 | 58.3 | 53.9 | 54.2 |
| Saquon Barkley | RB | 27 | 34.1 | 11.8 | 11.8 | 11.2 | 11.3 |
| Dak Prescott | QB | 80 | 87.1 | 77.8 | 77.2 | 72.7 | 72.6 |
| Jordan Addison | WR | 133.4 | 140.4 | 101.6 | 101.4 | 115 | 115 |
| Rashee Rice | WR | 40.9 | 47.3 | 29.7 | 29.1 | 38.1 | 38.3 |
| Harold Fannin | TE | 84.3 | 90.5 | 73.7 | 73.6 | 71 | 71.2 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 253pts, RB26 164pts, WR36 163pts, TE13 141pts, K13 102pts, DEF13 83pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2337 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_16 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_40 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brock Purdy | QB | 94.9 | 8.8 | QB10 | QB5 | A | 242 | 303 |
| Jayden Daniels | QB | 58.5 | 5.8 | QB6 | QB2 | B | 261 | 309 |
| Patrick Mahomes | QB | 103.5 | 9.5 | QB13 | QB7 | B | 241 | 287 |
| Trevor Lawrence | QB | 100.3 | 9.3 | QB12 | QB8 | B | 224 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 51.6 | 5.2 | RB19 | RB13 | B | 193 | 197 |
| Chuba Hubbard | RB | 80.5 | 7.6 | RB27 | RB21 | B | 193 | 148 |
| Jaylen Warren | RB | 74.9 | 7.2 | RB25 | RB18 | B | 187 | 171 |
| Quinshon Judkins | RB | 55 | 5.5 | RB21 | RB17 | B | 168 | 196 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 66.1 | 6.4 | WR27 | WR20 | A | 186 | 208 |
| Michael Wilson | WR | 96.1 | 8.9 | WR36 | WR29 | B | 179 | 166 |
| Mike Evans | WR | 70.5 | 6.8 | WR29 | WR14 | A | 194 | 222 |
| Parker Washington | WR | 72.6 | 7 | WR30 | WR19 | A | 184 | 212 |
| Tetairoa McMillan | WR | 37.9 | 4.1 | WR16 | WR10 | B | 209 | 223 |
| Zay Flowers | WR | 36.8 | 4 | WR15 | WR11 | B | 203 | 228 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 78.6 | 7.5 | TE9 | TE5 | B | 166 | 169 |
| Isaiah Likely | TE | 105.9 | 9.7 | TE12 | TE6 | A | 165 | 157 |
| Sam LaPorta | TE | 62.7 | 6.1 | TE5 | TE3 | B | 153 | 197 |
| Travis Kelce | TE | 94.2 | 8.8 | TE11 | TE8 | B | 143 | 171 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 150.5 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 98.8 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 100.3 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 134.2 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.2 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.4 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 161.7 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 58.5 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 94.9 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.5 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.1 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.6 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 42.5 | B · 8th easiest | B · 5th easiest | easier |
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
| Tetairoa McMillan | CAR | 5 | 37.9 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.7 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 26.6 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.7 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 44.5 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.8 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 48 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 156.7 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 21.9 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 73.4 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 151.8 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.8 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.7 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 40.9 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 78.6 | C · 16th easiest | F · 1st hardest | much harder |

