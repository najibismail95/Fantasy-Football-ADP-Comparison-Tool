# Fantasy ADP report — 2026-10-14

_Snapshot 2026-10-14 · 79 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 165 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.74 | 170.2 | 99 |
| SLEEPER | 2496 | 1.4 | 700.9 | 85.3 |
| YAHOO | 220 | 1.3 | 143.9 | 89.1 |


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
| Alec Pierce | WR | 139.5 | 95.8 | 98.3 | ESPN | 3.5 | CHEAPER on ESPN | 143 |
| Blake Corum | RB | 145.5 | 100.4 | 100 | ESPN | 3.8 | CHEAPER on ESPN | 115 |
| Brian Thomas | WR | 139.3 | 74.1 | 84.8 | ESPN | 5 | CHEAPER on ESPN | 136 |
| Bryce Young | QB | 118.4 | 226.3 | 108.1 | SLEEPER | 9.4 | CHEAPER on SLEEPER | 237 |
| Caleb Williams | QB | 114.5 | 71.6 | 65.3 | ESPN | 3.8 | CHEAPER on ESPN | 254 |
| Chris Godwin | WR | 142.9 | 92.2 | 93.6 | ESPN | 4.2 | CHEAPER on ESPN | 132 |
| Dalton Kincaid | TE | 136.2 | 87.3 | 93.7 | ESPN | 3.8 | CHEAPER on ESPN | 129 |
| David Montgomery | RB | 96.8 | 46 | 52.7 | ESPN | 4 | CHEAPER on ESPN | 165 |
| Jadarian Price | RB | 115.7 | 61.8 | 63 | ESPN | 4.4 | CHEAPER on ESPN | 142 |
| Jayden Reed | WR | 158.1 | 108.1 | 113 | ESPN | 4 | CHEAPER on ESPN | 198 |
| Jordan Mason | RB | 162.7 | 109.2 | 110.6 | ESPN | 4.4 | CHEAPER on ESPN | 134 |
| Justin Herbert | QB | 126.8 | 83.7 | 71 | ESPN | 4.1 | CHEAPER on ESPN | 223 |
| Juwan Johnson | TE | 135 | 175.8 | 118.9 | SLEEPER | 4.1 | CHEAPER on SLEEPER | 129 |
| Luther Burden | WR | 102.1 | 55.2 | 57.2 | ESPN | 3.8 | CHEAPER on ESPN | 176 |
| MarShawn Lloyd | RB | 134.7 | 137.5 | 85.5 | YAHOO | 4.2 | pricier on YAHOO | 112 |
| Quentin Johnston | WR | 155.3 | 112 | 105.2 | ESPN | 3.9 | CHEAPER on ESPN | 122 |
| Rico Dowdle | RB | 135.8 | 86.5 | 88.4 | ESPN | 4 | CHEAPER on ESPN | 121 |
| TreVeyon Henderson | RB | 110.9 | 60.9 | 70.5 | ESPN | 3.8 | CHEAPER on ESPN | 133 |
| Tucker Kraft | TE | 110.9 | 63.6 | 59.6 | ESPN | 4.1 | CHEAPER on ESPN | 154 |
| Tyler Shough | QB | 130.2 | 181 | 122.8 | SLEEPER | 4.5 | CHEAPER on SLEEPER | 237 |


## Who’s rising


_Last 7 days, as of 2026-10-14. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Bryce Young | QB | 135.5 | 117.5 | — | — | 111.9 | 108.5 |
| Isaiah Likely | TE | 121.2 | 104.3 | 105.2 | 105 | 107.7 | 107.6 |
| Tetairoa McMillan | WR | 52.7 | 37.1 | 37.3 | 37.5 | 42.3 | 42.2 |
| Michael Wilson | WR | 108.8 | 93.6 | 87.8 | 88.2 | 100.9 | 100.5 |
| Jared Goff | QB | 130.3 | 117.5 | 131.8 | 131.8 | 109.9 | 109.5 |
| Jayden Daniels | QB | 71 | 59.3 | 68.3 | 68.1 | 58.2 | 58.5 |
| Sam LaPorta | TE | 86.6 | 75 | 57.7 | 57.8 | 62.8 | 62.7 |
| Mike Evans | WR | 100.1 | 89.1 | 62.8 | 63.1 | 70.6 | 70.6 |
| Brian Robinson | RB | 163.5 | 154.1 | 171.2 | 173.4 | 115.7 | 115.3 |
| Chuba Hubbard | RB | 87.8 | 79.2 | 81 | 81.6 | 90.2 | 89.7 |
| Jaylen Warren | RB | 95.2 | 87 | 70.6 | 70.1 | 75.2 | 75 |
| Drake Maye | QB | 72.2 | 64.4 | 47.2 | 47 | 49.3 | 49.5 |
| Bucky Irving | RB | 65.8 | 58 | 43.2 | 43 | 51.8 | 51.7 |
| Aaron Jones | RB | 116 | 108.2 | 127.6 | 127.2 | 122.3 | 121.7 |
| Kyren Williams | RB | 38.2 | 30.7 | 26.2 | 26.8 | 27.6 | 27.5 |
| Denzel Boston | WR | 148.1 | 140.9 | 170.2 | 169.6 | 121.8 | 118.9 |
| T.J. Hockenson | TE | 161.5 | 154.4 | 163.8 | 163.7 | 126.9 | 126.5 |
| Dallas Goedert | TE | 137.2 | 131.1 | 119.1 | 119 | 103.3 | 103.4 |
| Tucker Kraft | TE | 117.2 | 111.1 | 64.2 | 64.1 | 59.5 | 59.6 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tyler Shough | QB | 108.2 | 125.6 | 182.1 | 181.2 | 124.5 | 123 |
| Dalton Kincaid | TE | 117.7 | 135.1 | 88.2 | 87.4 | 93.9 | 93.7 |
| Travis Kelce | TE | 82.7 | 94.3 | 89.6 | 89.1 | 94.3 | 94.2 |
| DJ Moore | WR | 79.2 | 89.2 | 53.7 | 53.7 | 56.8 | 56.8 |
| Stefon Diggs | WR | 115 | 124.6 | 104 | 104.3 | 107.1 | 106.9 |
| Lamar Jackson | QB | 28.7 | 38 | 31.4 | 31.5 | 38.3 | 38.4 |
| Jalen Hurts | QB | 73 | 81.6 | 58.4 | 58.3 | 53.9 | 54.2 |
| Cam Skattebo | RB | 55 | 63.5 | 40.3 | 40.2 | 42.7 | 42.7 |
| Saquon Barkley | RB | 25.4 | 33.8 | 11.8 | 11.8 | 11.1 | 11.3 |
| Kenyon Sadiq | TE | 156.7 | 164.9 | 169.3 | 172.3 | 128.6 | 127.5 |
| Rashee Rice | WR | 39.3 | 47.3 | 29.8 | 29.1 | 38.1 | 38.3 |
| DeVonta Smith | WR | 47.5 | 54.9 | 33.3 | 33.8 | 29.4 | 29.5 |
| David Montgomery | RB | 88 | 95 | 46.1 | 46 | 52.6 | 52.7 |
| Jordan Addison | WR | 132.7 | 139.7 | 101.3 | 101.5 | 115 | 115 |
| Sam Darnold | QB | 155.2 | 161.7 | 162.2 | 162.2 | 121.3 | 121.2 |
| Jeremiyah Love | RB | 31.1 | 37.4 | 28.1 | 28.2 | 30.4 | 30.5 |
| Jadarian Price | RB | 109.3 | 115.3 | 61.9 | 61.9 | 62.9 | 63 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 253pts, RB26 164pts, WR36 163pts, TE13 141pts, K13 102pts, DEF13 83pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2337 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_16 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_38 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brock Purdy | QB | 95 | 8.8 | QB10 | QB5 | A | 242 | 303 |
| Jayden Daniels | QB | 58.5 | 5.8 | QB6 | QB2 | B | 261 | 309 |
| Patrick Mahomes | QB | 103.6 | 9.5 | QB13 | QB7 | B | 241 | 287 |
| Trevor Lawrence | QB | 99.5 | 9.2 | QB12 | QB8 | B | 224 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 51.7 | 5.2 | RB19 | RB14 | B | 193 | 197 |
| Chuba Hubbard | RB | 81.6 | 7.7 | RB27 | RB21 | B | 193 | 148 |
| Jaylen Warren | RB | 74.9 | 7.2 | RB25 | RB18 | B | 187 | 171 |
| Quinshon Judkins | RB | 55 | 5.5 | RB21 | RB17 | B | 168 | 196 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 66.1 | 6.4 | WR27 | WR20 | A | 186 | 208 |
| Michael Wilson | WR | 94.5 | 8.8 | WR36 | WR29 | B | 179 | 166 |
| Mike Evans | WR | 70.6 | 6.8 | WR29 | WR14 | A | 194 | 222 |
| Parker Washington | WR | 72.7 | 7 | WR30 | WR19 | A | 184 | 212 |
| Tetairoa McMillan | WR | 37.5 | 4 | WR16 | WR10 | B | 209 | 223 |
| Zay Flowers | WR | 37 | 4 | WR15 | WR11 | B | 203 | 228 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 78.6 | 7.5 | TE9 | TE5 | B | 166 | 169 |
| Isaiah Likely | TE | 105 | 9.7 | TE12 | TE6 | A | 165 | 157 |
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
| Kyler Murray | MIN | 6 | 150.6 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 98.8 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 99.5 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97.1 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 130.2 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.3 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.5 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 162.3 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 58.5 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 95 | C · 13th easiest | F · 2nd hardest | much harder |


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
| David Montgomery | HOU | 8 | 52.7 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 51.7 | C · 12th easiest | D · 6th hardest | harder |
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
| Tetairoa McMillan | CAR | 5 | 37.5 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.7 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 26.5 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.7 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.3 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.9 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 47.9 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 155.5 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 22.2 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 73.3 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 151.3 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.9 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.7 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 40.8 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 78.6 | C · 16th easiest | F · 1st hardest | much harder |

