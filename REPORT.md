# Fantasy ADP report — 2026-10-02

_Snapshot 2026-10-02 · 67 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 165 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 348 | 1.73 | 170.2 | 98.7 |
| SLEEPER | 2485 | 1.9 | 700.9 | 86 |
| YAHOO | 219 | 1.2 | 143.9 | 88.6 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1170 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 2485 |
| YAHOO | exact | 198 |
| YAHOO | team | 21 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Alec Pierce | WR | 136.9 | 95.6 | 98.3 | ESPN | 3.3 | CHEAPER on ESPN | 145 |
| Blake Corum | RB | 143.9 | 100.3 | 99.9 | ESPN | 3.6 | CHEAPER on ESPN | 128 |
| Brian Thomas | WR | 137.5 | 74.3 | 84.5 | ESPN | 4.8 | CHEAPER on ESPN | 155 |
| Caleb Williams | QB | 116.6 | 71.8 | 64.9 | ESPN | 4 | CHEAPER on ESPN | 255 |
| Chris Godwin | WR | 142.9 | 92.5 | 93.4 | ESPN | 4.2 | CHEAPER on ESPN | 137 |
| J.K. Dobbins | RB | 134.9 | 91.3 | 94.5 | ESPN | 3.5 | CHEAPER on ESPN | 158 |
| Jacory Croskey-Merritt | RB | 149.2 | 115 | 104.6 | ESPN | 3.3 | CHEAPER on ESPN | 123 |
| Jadarian Price | RB | 103.1 | 60.6 | 62.8 | ESPN | 3.5 | CHEAPER on ESPN | 158 |
| Jayden Reed | WR | 155 | 107.4 | 113 | ESPN | 3.7 | CHEAPER on ESPN | 146 |
| Jordan Mason | RB | 162.8 | 109.8 | 110.6 | ESPN | 4.4 | CHEAPER on ESPN | 141 |
| Justin Herbert | QB | 120.3 | 83.1 | 70.6 | ESPN | 3.6 | CHEAPER on ESPN | 247 |
| Juwan Johnson | TE | 141.8 | 175.9 | 119.4 | SLEEPER | 3.8 | CHEAPER on SLEEPER | 141 |
| KC Concepcion | WR | 161 | 119.9 | 122.1 | ESPN | 3.3 | CHEAPER on ESPN | 146 |
| Luther Burden | WR | 101.4 | 56 | 57.1 | ESPN | 3.7 | CHEAPER on ESPN | 191 |
| MarShawn Lloyd | RB | 133.5 | 137.2 | 85.2 | YAHOO | 4.2 | pricier on YAHOO | 89 |
| Quentin Johnston | WR | 152.1 | 111.5 | 105.2 | ESPN | 3.6 | CHEAPER on ESPN | 145 |
| Rico Dowdle | RB | 134.9 | 86.8 | 88 | ESPN | 4 | CHEAPER on ESPN | 138 |
| TreVeyon Henderson | RB | 105.4 | 61.7 | 70.4 | ESPN | 3.3 | CHEAPER on ESPN | 154 |
| Tucker Kraft | TE | 117.1 | 63.6 | 59.5 | ESPN | 4.6 | CHEAPER on ESPN | 151 |
| Tyler Shough | QB | 114.1 | 178.9 | 125.7 | SLEEPER | 4.9 | CHEAPER on SLEEPER | 264 |


## Who’s rising


_Last 7 days, as of 2026-10-02. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tyler Shough | QB | 139.3 | 116.3 | 179.6 | 178.7 | 128.2 | 126 |
| Brock Purdy | QB | 95.2 | 73.3 | 122.4 | 122.4 | 96.7 | 96 |
| Christian Watson | WR | 96.6 | 81.1 | 66.1 | 66.1 | 67 | 66.6 |
| Parker Washington | WR | 96.2 | 81.3 | 71.8 | 72 | 73.7 | 73.3 |
| Matthew Golden | WR | 129.7 | 116 | 125.7 | 126.3 | 123.5 | 122.9 |
| Travis Kelce | TE | 91.6 | 78.3 | 89.3 | 89.7 | 94.9 | 94.5 |
| Chuba Hubbard | RB | 108.9 | 95.6 | 81 | 81.6 | 90.9 | 90.5 |
| Davante Adams | WR | 54.7 | 41.8 | 50.5 | 50.4 | 59.5 | 59.3 |
| Juwan Johnson | TE | 157.6 | 144.9 | 175.1 | 175.4 | 119.7 | 119.5 |
| George Kittle | TE | 73.3 | 62.2 | 79.7 | 79.6 | 79.3 | 79 |
| Patrick Mahomes | QB | 83.9 | 72.9 | 110.3 | 110.2 | 105.1 | 104.5 |
| Sam Darnold | QB | 165.4 | 156.5 | 162 | 161.1 | — | — |
| Denzel Boston | WR | 159.6 | 151 | 170.5 | 171.4 | 127.7 | 123.7 |
| Bryce Young | QB | 148.8 | 140.5 | — | — | 116.8 | 113.4 |
| Josh Downs | WR | 141.7 | 134 | 113.7 | 113.7 | 103.3 | 103 |
| Michael Wilson | WR | 127.6 | 120.9 | 87.4 | 87 | 101.2 | 101 |
| Jaylen Warren | RB | 113.9 | 107.2 | 70.1 | 70 | 75.4 | 75.4 |
| Kenyon Sadiq | TE | 165.1 | 158.8 | 167.9 | 167.4 | 129.8 | 129.2 |
| Zay Flowers | WR | 48.4 | 42.3 | 41.7 | 41.9 | 35.2 | 35.1 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Jaxson Dart | QB | 87.4 | 116.5 | 97.2 | 97.2 | 95.3 | 95.4 |
| Caleb Williams | QB | 92 | 116.3 | 71.3 | 71.9 | 64.5 | 64.9 |
| Dallas Goedert | TE | 122.9 | 137.3 | 119.3 | 119.2 | 103.2 | 103.3 |
| Isaiah Likely | TE | 102.8 | 115.6 | 105.1 | 105.3 | 108 | 107.7 |
| Jayden Daniels | QB | 60.4 | 70.3 | 68.2 | 68.3 | 57.9 | 58.1 |
| Drake Maye | QB | 56.9 | 66 | 47.4 | 47.2 | 48.6 | 49 |
| De'Von Achane | RB | 18.6 | 26.6 | 13.5 | 13.9 | 15.9 | 16.1 |
| Rhamondre Stevenson | RB | 102.9 | 110.9 | 78.1 | 78.3 | 74.1 | 74 |
| Mike Evans | WR | 94.4 | 102.4 | 62.7 | 63.1 | 70.7 | 70.7 |
| Travis Etienne | RB | 58 | 65.6 | 41.9 | 42 | 41.3 | 41.6 |
| David Montgomery | RB | 77.1 | 84.8 | 46.4 | 46.3 | 52.6 | 52.6 |
| Malik Nabers | WR | 40 | 47.2 | 27.2 | 27.1 | 29.7 | 29.9 |
| Sam LaPorta | TE | 78.4 | 84.6 | 57.6 | 57.3 | 62.8 | 62.8 |
| Colston Loveland | TE | 51.4 | 57.5 | 39.4 | 39.4 | 39.6 | 40.1 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 264pts, RB28 158pts, WR34 165pts, TE13 141pts, K13 112pts, DEF13 85pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2329 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_11 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_44 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brock Purdy | QB | 95.9 | 8.9 | QB10 | QB3 | A | 273 | 303 |
| Patrick Mahomes | QB | 104.4 | 9.6 | QB13 | QB9 | B | 260 | 287 |
| Trevor Lawrence | QB | 102.1 | 9.4 | QB12 | QB6 | A | 265 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 51.8 | 5.2 | RB19 | RB13 | B | 225 | 197 |
| Chuba Hubbard | RB | 90.5 | 8.5 | RB30 | RB22 | A | 208 | 148 |
| Jaylen Warren | RB | 75.3 | 7.2 | RB25 | RB21 | B | 200 | 171 |
| Tony Pollard | RB | 87.3 | 8.2 | RB27 | RB24 | B | 174 | 160 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 66.6 | 6.5 | WR27 | WR18 | A | 209 | 208 |
| Garrett Wilson | WR | 45.3 | 4.7 | WR20 | WR12 | B | 216 | 225 |
| Michael Wilson | WR | 101 | 9.3 | WR37 | WR30 | B | 185 | 166 |
| Mike Evans | WR | 70.7 | 6.8 | WR29 | WR20 | A | 179 | 222 |
| Parker Washington | WR | 73.2 | 7 | WR30 | WR14 | A | 216 | 212 |
| Zay Flowers | WR | 41.4 | 4.4 | WR16 | WR11 | B | 214 | 228 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dalton Kincaid | TE | 94 | 8.8 | TE11 | TE9 | B | 153 | 164 |
| George Kittle | TE | 79 | 7.5 | TE9 | TE4 | A | 198 | 169 |
| Isaiah Likely | TE | 107.7 | 9.9 | TE12 | TE10 | B | 157 | 157 |
| Travis Kelce | TE | 89.6 | 8.4 | TE10 | TE7 | B | 165 | 171 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 147.9 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 99 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 102.1 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97.2 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 125.7 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.6 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.5 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 155.1 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 68.9 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 95.9 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.4 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.6 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.5 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 42.1 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 16.1 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 52.6 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 51.8 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.5 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 16.9 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.3 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 29.9 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 13.5 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.9 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5.2 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11.9 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 42.3 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.7 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 25.9 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.8 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.3 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.8 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 47.3 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 163.6 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 23.1 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 72.9 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 159.7 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 154.6 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.8 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 40.2 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 79 | C · 16th easiest | F · 1st hardest | much harder |

