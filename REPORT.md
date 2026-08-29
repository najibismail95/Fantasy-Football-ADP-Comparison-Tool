# Fantasy ADP report — 2026-08-29

_Snapshot 2026-08-29 · 33 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 167 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_YAHOO ADP is censored above pick 125 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 350 | 1.4 | 171.8 | 96.7 |
| SLEEPER | 1756 | 1.9 | 700.8 | 85.3 |
| YAHOO | 226 | 1.4 | 144.6 | 88.5 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1165 |
| ESPN | id | 475 |
| ESPN | team | 110 |
| SLEEPER | id | 1756 |
| YAHOO | exact | 205 |
| YAHOO | team | 21 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Blake Corum | RB | 132.3 | 103.8 | 99.4 | ESPN | 2.6 | CHEAPER on ESPN | 147 |
| Chris Godwin | WR | 136.3 | 95.5 | 97.1 | ESPN | 3.3 | CHEAPER on ESPN | 165 |
| Chuba Hubbard | RB | 117.3 | 76.6 | 86.8 | ESPN | 3 | CHEAPER on ESPN | 160 |
| Dalton Kincaid | TE | 131.2 | 86.9 | 98.6 | ESPN | 3.2 | CHEAPER on ESPN | 160 |
| De'Zhaun Stribling | WR | 146.6 | 138.6 | 110.3 | YAHOO | 2.7 | pricier on YAHOO | 139 |
| Kyler Murray | QB | 143.9 | 159.3 | 112.1 | YAHOO | 3.3 | pricier on YAHOO | 267 |
| Makai Lemon | WR | 138 | 87.4 | 113.8 | SLEEPER | 3.2 | pricier on SLEEPER | 162 |


## Who’s rising


_Last 7 days, as of 2026-08-29. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| De'Zhaun Stribling | WR | 159.3 | 147.9 | 155.1 | 137.5 | 125.4 | 111.2 |
| Jonathon Brooks | RB | 123.9 | 113.3 | 116.8 | 106.4 | 100.5 | 95.5 |
| Rhamondre Stevenson | RB | 96 | 82.7 | 84.9 | 81.3 | 80.7 | 79.5 |
| Rashid Shaheed | WR | 158.2 | 155.4 | 158.4 | 147.4 | 128.3 | 128.4 |
| Xavier Worthy | WR | 134.2 | 123.5 | 139.4 | 140.9 | 128.7 | 129 |
| George Kittle | TE | 99.8 | 89.9 | 90.8 | 89.6 | 87.8 | 85.8 |
| Jordan Mason | RB | 147.7 | 138.7 | 118.7 | 116.6 | 117.6 | 114.9 |
| Tank Dell | WR | 164.8 | 156 | 175.9 | 176.4 | — | — |
| Jayden Reed | WR | 135 | 126.6 | 114.3 | 112.2 | 120 | 118.6 |
| Chris Godwin | WR | 147.1 | 139.1 | 95.8 | 95.5 | 98.1 | 97.3 |
| Stefon Diggs | WR | 130.4 | 123 | 115.8 | 110.7 | 111.1 | 106.2 |
| Tyjae Spears | RB | 164.6 | 157.2 | 168.5 | 165.7 | 133.1 | 133.2 |
| Kenny Gainwell | RB | 121.6 | 114.3 | 111.4 | 111.8 | 117.5 | 118.5 |
| J.K. Dobbins | RB | 121.8 | 114.9 | 92.3 | 94.6 | 97.6 | 96 |
| Jaylen Warren | RB | 102.6 | 95.8 | 73.4 | 71.9 | 76.8 | 76.7 |
| Tucker Kraft | TE | 95.8 | 89.1 | 65.5 | 62.8 | 61 | 60.8 |
| Rico Dowdle | RB | 108.4 | 101.7 | 88 | 85 | 87.2 | 86.9 |
| Christian Watson | WR | 100.5 | 94 | 70.2 | 70.1 | 67.7 | 67.7 |
| D'Andre Swift | RB | 68.6 | 62.1 | 55.6 | 54.8 | 48 | 47.1 |
| Blake Corum | RB | 140.1 | 133.6 | 103.4 | 103.7 | 99.6 | 99.5 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Kenyon Sadiq | TE | 142 | 149.8 | 145.8 | 153.2 | 130 | 130 |
| Tyler Shough | QB | 155.6 | 154.9 | 169 | 185.5 | 130 | 130.1 |
| Josh Downs | WR | 124 | 136.4 | 110.1 | 108.1 | 110.7 | 108.7 |
| Jakobi Meyers | WR | 114.8 | 114.6 | 104 | 115.6 | 128.6 | 129.4 |
| Hunter Henry | TE | 143 | 144.4 | 132 | 140.4 | 127.8 | 127.7 |
| Jaxson Dart | QB | 76.3 | 77.2 | 83.7 | 91.1 | 86.2 | 89.1 |
| Zach Charbonnet | RB | 155 | 155.3 | 141.4 | 147.9 | 129.1 | 129.8 |
| Wan'Dale Robinson | WR | 117.3 | 113.5 | 110.5 | 116.6 | 130.9 | 130.8 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 290pts, RB26 184pts, WR36 184pts, TE13 160pts, K13 124pts, DEF13 88pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_1636 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_27 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 99.5 | 9.2 | QB13 | QB9 | A | 296 | 296 |
| Brock Purdy | QB | 104.5 | 9.6 | QB14 | QB8 | A | 292 | 303 |
| Jalen Hurts | QB | 56.9 | 5.7 | QB6 | QB4 | A | 320 | 311 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| D'Andre Swift | RB | 54.2 | 5.4 | RB22 | RB21 | B | 212 | 208 |
| Rhamondre Stevenson | RB | 81.7 | 7.7 | RB28 | RB25 | B | 203 | 169 |
| Travis Etienne | RB | 43.2 | 4.5 | RB18 | RB17 | B | 246 | 208 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Garrett Wilson | WR | 45.9 | 4.7 | WR20 | WR14 | B | 249 | 225 |
| Parker Washington | WR | 80.5 | 7.6 | WR32 | WR28 | B | 187 | 212 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Harold Fannin | TE | 71.3 | 6.9 | TE8 | TE6 | B | 189 | 180 |
| Jake Ferguson | TE | 110.4 | 10.1 | TE14 | TE12 | B | 167 | 160 |
| Sam LaPorta | TE | 63.2 | 6.2 | TE6 | TE5 | A | 189 | 197 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 143.9 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 96.8 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 93.8 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 89.4 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 170.9 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 56.9 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 99.5 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 160.8 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 54.3 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 104.5 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 26.2 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 6.8 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.6 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 43.2 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 18.1 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 52.5 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 54.6 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 13.8 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 19 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 5.6 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 31.7 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 12.2 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.6 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 4.8 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 10.6 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 41.5 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.9 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 24.5 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 36.3 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.9 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 122.4 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 47.2 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 151.2 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 23.4 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 69.6 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Trey McBride | ARI | 14 | 22.6 | D · 10th hardest | C · 11th hardest | similar |
| Harold Fannin | CLE | 11 | 71.3 | A · 2nd easiest | C · 10th hardest | much harder |
| Sam LaPorta | DET | 6 | 63.2 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 40.2 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 87.4 | C · 16th easiest | F · 1st hardest | much harder |

