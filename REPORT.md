# Fantasy ADP report — 2026-08-30

_Snapshot 2026-08-30 · 34 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 167 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_YAHOO ADP is censored above pick 125 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 350 | 1.38 | 171.8 | 99 |
| SLEEPER | 1834 | 1.5 | 700.8 | 85.3 |
| YAHOO | 226 | 1.4 | 144.5 | 86.3 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1165 |
| ESPN | id | 475 |
| ESPN | team | 110 |
| SLEEPER | id | 1834 |
| YAHOO | exact | 205 |
| YAHOO | team | 21 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Chris Godwin | WR | 131.8 | 95.7 | 96.9 | ESPN | 3 | CHEAPER on ESPN | 165 |
| Chuba Hubbard | RB | 113.7 | 78.6 | 87.6 | ESPN | 2.6 | CHEAPER on ESPN | 160 |
| Dalton Kincaid | TE | 131.1 | 87 | 98.4 | ESPN | 3.2 | CHEAPER on ESPN | 160 |
| De'Zhaun Stribling | WR | 144.6 | 138.8 | 109.8 | YAHOO | 2.7 | pricier on YAHOO | 139 |
| Kyler Murray | QB | 142 | 158.1 | 112.3 | YAHOO | 3.1 | pricier on YAHOO | 267 |
| Makai Lemon | WR | 135.8 | 89.4 | 114.4 | SLEEPER | 3 | pricier on SLEEPER | 162 |
| Mike Washington | RB | 162.8 | 155.6 | 122.5 | YAHOO | 3.1 | pricier on YAHOO | 81 |
| RJ Harvey | RB | 130.9 | 79.3 | 105.9 | SLEEPER | 3.3 | pricier on SLEEPER | 147 |


## Who’s rising


_Last 7 days, as of 2026-08-30. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| De'Zhaun Stribling | WR | 157.3 | 146.3 | 155.2 | 138.1 | 123.3 | 110.4 |
| Jonathon Brooks | RB | 122.5 | 111.6 | 115.8 | 106.1 | 99.7 | 94.9 |
| George Kittle | TE | 99.8 | 86.6 | 90.8 | 88.6 | 87.6 | 85.4 |
| Stefon Diggs | WR | 129.8 | 118.8 | 115.7 | 110.3 | 110.3 | 105.7 |
| Sam Darnold | QB | 162.4 | 162.3 | 176.5 | 165.5 | 123 | 122.8 |
| Rhamondre Stevenson | RB | 93.2 | 82.3 | 84.2 | 81.7 | 80.6 | 79.3 |
| Chris Godwin | WR | 146.4 | 135.7 | 95.6 | 95.6 | 98 | 97.1 |
| Tyjae Spears | RB | 163.7 | 154.3 | 167.3 | 164.4 | 133.1 | 133.1 |
| Kenny Gainwell | RB | 120.9 | 111.8 | 111.6 | 111.7 | 117.6 | 118.6 |
| Justin Herbert | QB | 108.4 | 100.1 | 83 | 82.3 | 69.3 | 70.1 |
| Jaylen Warren | RB | 102 | 94.5 | 73.6 | 71.9 | 76.8 | 76.7 |
| Blake Corum | RB | 139.5 | 132 | 103.6 | 103.4 | 99.6 | 99.4 |
| D'Andre Swift | RB | 67.9 | 60.4 | 55.1 | 53.7 | 47.8 | 46.9 |
| Rashid Shaheed | WR | 157.5 | 156.5 | 154.5 | 147 | 128.3 | 128.4 |
| Jordan Mason | RB | 146 | 138.7 | 117.6 | 115.6 | 117.2 | 114.5 |
| Rico Dowdle | RB | 107.6 | 100.4 | 88 | 85 | 87.2 | 86.9 |
| Bhayshul Tuten | RB | 76 | 69 | 61.9 | 62.4 | 62.2 | 62.5 |
| Xavier Worthy | WR | 132 | 125.4 | 139.5 | 140.9 | 128.8 | 129.1 |
| Christian Watson | WR | 99.8 | 93.2 | 70 | 69.8 | 67.7 | 67.7 |
| J.K. Dobbins | RB | 120.9 | 114.3 | 92.3 | 94.6 | 97.4 | 95.8 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Kenyon Sadiq | TE | 143.1 | 152.6 | 147.1 | 157.3 | 130 | 130 |
| Tyler Shough | QB | 155.5 | 154.4 | 169.5 | 187.3 | 130 | 130.2 |
| Jakobi Meyers | WR | 114.2 | 116.5 | 104.8 | 117.7 | 128.7 | 129.5 |
| Josh Downs | WR | 126.2 | 136.4 | 109.7 | 109.2 | 110.2 | 108.5 |
| Hunter Henry | TE | 142.9 | 146.3 | 132.9 | 141.3 | 127.8 | 127.7 |
| Brian Robinson | RB | 165.8 | 165.6 | 151.3 | 159 | 122.6 | 120.9 |
| Zach Charbonnet | RB | 155.6 | 154.5 | 141.9 | 148.5 | 129.2 | 129.9 |
| Jaxson Dart | QB | 76.4 | 78.4 | 84.7 | 91.1 | 86.6 | 89.5 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 290pts, RB26 184pts, WR36 184pts, TE13 160pts, K13 124pts, DEF13 88pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_1716 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_26 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 99.3 | 9.2 | QB13 | QB9 | A | 296 | 296 |
| Brock Purdy | QB | 106.4 | 9.8 | QB14 | QB8 | A | 292 | 303 |
| Jalen Hurts | QB | 56.9 | 5.7 | QB6 | QB4 | A | 320 | 311 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Quinshon Judkins | RB | 53.1 | 5.3 | RB22 | RB20 | A | 227 | 196 |
| Rhamondre Stevenson | RB | 81.8 | 7.7 | RB28 | RB25 | B | 203 | 169 |
| Travis Etienne | RB | 43.2 | 4.5 | RB19 | RB17 | A | 246 | 208 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Garrett Wilson | WR | 45.9 | 4.7 | WR20 | WR14 | B | 249 | 225 |
| Parker Washington | WR | 79.9 | 7.6 | WR32 | WR28 | B | 187 | 212 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Harold Fannin | TE | 71.3 | 6.9 | TE8 | TE6 | A | 189 | 180 |
| Jake Ferguson | TE | 109.8 | 10.1 | TE14 | TE12 | A | 167 | 160 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 142 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 96 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 95.3 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 89.9 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 171.2 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 56.9 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 99.3 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 160 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 54.3 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 106.4 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 26.3 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 6.9 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.8 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 43.2 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 17.6 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 52.8 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 55.3 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 13.7 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 19.4 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 5.7 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 31.5 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 12.4 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.9 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 4.9 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 10.7 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 41.7 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.5 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 23.7 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 36.3 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.9 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 124 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 47.6 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 152.9 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 23.4 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 68.2 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Trey McBride | ARI | 14 | 22.9 | D · 10th hardest | C · 11th hardest | similar |
| Harold Fannin | CLE | 11 | 71.3 | A · 2nd easiest | C · 10th hardest | much harder |
| Sam LaPorta | DET | 6 | 63.2 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 39.5 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 85 | C · 16th easiest | F · 1st hardest | much harder |

