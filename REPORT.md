# Fantasy ADP report — 2026-08-28

_Snapshot 2026-08-28 · 32 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 167 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_YAHOO ADP is censored above pick 125 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 350 | 1.4 | 171.7 | 98.7 |
| SLEEPER | 1692 | 1.1 | 700.8 | 86.3 |
| YAHOO | 225 | 1.4 | 144.5 | 88.4 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1165 |
| ESPN | id | 475 |
| ESPN | team | 110 |
| SLEEPER | id | 1692 |
| YAHOO | exact | 204 |
| YAHOO | team | 21 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Blake Corum | RB | 133.7 | 103.8 | 99.5 | ESPN | 2.7 | CHEAPER on ESPN | 147 |
| Chris Godwin | WR | 139.3 | 95.5 | 97.3 | ESPN | 3.6 | CHEAPER on ESPN | 165 |
| Chuba Hubbard | RB | 119.5 | 77 | 86.1 | ESPN | 3.2 | CHEAPER on ESPN | 160 |
| Dalton Kincaid | TE | 131.2 | 87.4 | 98.8 | ESPN | 3.2 | CHEAPER on ESPN | 160 |
| De'Zhaun Stribling | WR | 147.9 | 137 | 111.2 | YAHOO | 2.6 | pricier on YAHOO | 139 |
| Kyler Murray | QB | 145.1 | 159 | 112.1 | YAHOO | 3.3 | pricier on YAHOO | 267 |


## Who’s rising


_Last 7 days, as of 2026-08-28. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| De'Zhaun Stribling | WR | 161.1 | 149.2 | 155.2 | 143.4 | 126.2 | 112.2 |
| Jonathon Brooks | RB | 125 | 114.8 | 118 | 107 | 101.1 | 96 |
| Rhamondre Stevenson | RB | 98.5 | 83.2 | 85 | 81.3 | 80.8 | 79.7 |
| Xavier Worthy | WR | 135.8 | 122.6 | 139.3 | 140 | 128.7 | 128.9 |
| Jayden Reed | WR | 136.6 | 125.4 | 114.1 | 113.1 | 120 | 118.8 |
| Rashid Shaheed | WR | 158.7 | 154.8 | 158.2 | 147.7 | 128.4 | 128.4 |
| Jordan Mason | RB | 149.2 | 139.1 | 119.7 | 117.5 | 118 | 115.2 |
| Tucker Kraft | TE | 96.8 | 89.1 | 65.6 | 63.3 | 61.1 | 60.8 |
| George Kittle | TE | 99.7 | 92.3 | 91.1 | 90.2 | 87.9 | 86 |
| J.K. Dobbins | RB | 122.5 | 115.5 | 92.6 | 94.7 | 97.7 | 96.2 |
| Jordan Addison | WR | 121.3 | 114.6 | 105 | 104.1 | 118 | 116.9 |
| Christian Watson | WR | 101.1 | 94.7 | 70.2 | 70.4 | 67.8 | 67.7 |
| Woody Marks | RB | 152.6 | 148.5 | 166.4 | 160.1 | 132.4 | 131.1 |
| Rico Dowdle | RB | 108.9 | 102.8 | 88.5 | 85.1 | 87.2 | 86.9 |
| Chris Godwin | WR | 147.6 | 141.4 | 95.8 | 95.6 | 98.1 | 97.5 |
| Jaylen Warren | RB | 103.1 | 97 | 73.5 | 71.9 | 76.8 | 76.7 |
| Deebo Samuel | WR | 136.9 | 130.8 | 137.3 | 137.5 | 127.8 | 127.5 |
| Kenny Gainwell | RB | 122.1 | 116.1 | 111.4 | 111.7 | 117.4 | 118.4 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Jordyn Tyson | WR | 118.3 | 166.4 | 77.8 | 88.2 | 92.3 | 95.3 |
| Kenyon Sadiq | TE | 141.1 | 148 | 145.1 | 152.2 | 130 | 130 |
| Tyler Shough | QB | 155.6 | 155.3 | 168.6 | 184.3 | 130 | 130.1 |
| Josh Downs | WR | 122.5 | 136 | 110.3 | 107.4 | 111.4 | 108.7 |
| Jakobi Meyers | WR | 115.5 | 113.5 | 104.1 | 113 | 128.5 | 129.3 |
| Jaxson Dart | QB | 76.3 | 76.5 | 82.9 | 91.3 | 85.8 | 88.8 |
| Hunter Henry | TE | 143 | 143.3 | 132.2 | 139.2 | 127.9 | 127.7 |
| Wan'Dale Robinson | WR | 117.7 | 113.5 | 109.9 | 116.4 | 130.9 | 130.9 |
| Quentin Johnston | WR | 141.4 | 137.3 | 108.1 | 114.2 | 108.3 | 110.2 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 290pts, RB26 184pts, WR36 184pts, TE13 160pts, K13 124pts, DEF13 88pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_1573 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_26 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 99.6 | 9.2 | QB13 | QB9 | B | 296 | 296 |
| Brock Purdy | QB | 103.3 | 9.5 | QB14 | QB8 | B | 292 | 303 |
| Jalen Hurts | QB | 57 | 5.7 | QB6 | QB4 | B | 320 | 311 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| D'Andre Swift | RB | 55 | 5.5 | RB23 | RB21 | A | 212 | 208 |
| Rhamondre Stevenson | RB | 81.6 | 7.7 | RB28 | RB25 | B | 203 | 169 |
| Travis Etienne | RB | 43.2 | 4.5 | RB18 | RB17 | B | 246 | 208 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Garrett Wilson | WR | 45.9 | 4.7 | WR20 | WR14 | B | 249 | 225 |
| Parker Washington | WR | 80.9 | 7.7 | WR33 | WR28 | B | 187 | 212 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Harold Fannin | TE | 71.4 | 6.9 | TE8 | TE6 | A | 189 | 180 |
| Jake Ferguson | TE | 110.7 | 10.1 | TE14 | TE12 | A | 167 | 160 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 145.1 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 95.8 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 92.9 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 89.1 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 170.4 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 57 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 99.6 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 162.2 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 54.2 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 103.3 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 26.7 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.3 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.6 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 43.2 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 18.4 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 52.4 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 53.8 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 13.7 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 19.7 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 5.6 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 31.8 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 12.1 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.4 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 4.8 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 10.6 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 41.4 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 5.8 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 24.5 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 35.2 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.9 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 121.4 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 47.5 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 149.6 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 23.3 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 69.8 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Trey McBride | ARI | 14 | 22.4 | D · 10th hardest | C · 11th hardest | similar |
| Harold Fannin | CLE | 11 | 71.4 | A · 2nd easiest | C · 10th hardest | much harder |
| Sam LaPorta | DET | 6 | 63.2 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 40.8 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 89.4 | C · 16th easiest | F · 1st hardest | much harder |

