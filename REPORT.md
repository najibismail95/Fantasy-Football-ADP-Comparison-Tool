# Fantasy ADP report — 2026-08-17

_Snapshot 2026-08-17 · 21 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 166 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 350 | 1.53 | 171 | 98.7 |
| SLEEPER | 1082 | 1 | 700 | 88.3 |
| YAHOO | 223 | 1.5 | 144.6 | 90.6 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1170 |
| ESPN | id | 470 |
| ESPN | team | 110 |
| SLEEPER | id | 1082 |
| YAHOO | exact | 202 |
| YAHOO | team | 21 |


## A. Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Chris Godwin | WR | 148.7 | 94.2 | 98.2 | ESPN | 4.4 | CHEAPER on ESPN | 166 |
| RJ Harvey | RB | 132.7 | 79.6 | 100.7 | ESPN | 3.5 | CHEAPER on ESPN | 148 |
| Travis Hunter | WR | 118.8 | 165 | 126.6 | SLEEPER | 3.5 | CHEAPER on SLEEPER | 107 |
| Kyler Murray | QB | 148.6 | 157.5 | 111.2 | YAHOO | 3.5 | pricier on YAHOO | 258 |
| Dalton Kincaid | TE | 136.3 | 90.8 | 99.8 | ESPN | 3.4 | CHEAPER on ESPN | 159 |
| Chuba Hubbard | RB | 116.8 | 76.8 | 77.8 | ESPN | 3.3 | CHEAPER on ESPN | 161 |
| Blake Corum | RB | 141.4 | 104.8 | 99.3 | ESPN | 3.3 | CHEAPER on ESPN | 147 |
| Quentin Johnston | WR | 144.1 | 107.8 | 107.9 | ESPN | 3 | CHEAPER on ESPN | 165 |
| Tucker Kraft | TE | 99.2 | 65.4 | 61.1 | ESPN | 3 | CHEAPER on ESPN | 178 |
| Makai Lemon | WR | 130.8 | 85 | 107.8 | ESPN | 2.9 | CHEAPER on ESPN | 162 |
| Kyle Monangai | RB | 132.7 | 96.7 | 99.9 | ESPN | 2.9 | CHEAPER on ESPN | 166 |
| Mike Evans | WR | 96.2 | 59.2 | 65.9 | ESPN | 2.8 | CHEAPER on ESPN | 202 |
| Christian Watson | WR | 102.4 | 69.9 | 67.9 | ESPN | 2.8 | CHEAPER on ESPN | 197 |
| Jordan Mason | RB | 154 | 121.9 | 119.2 | ESPN | 2.8 | CHEAPER on ESPN | 152 |
| Justin Herbert | QB | 109.4 | 83.9 | 68.6 | ESPN | 2.8 | CHEAPER on ESPN | 289 |
| Alvin Kamara | RB | 156.6 | 159.9 | 126.3 | YAHOO | 2.7 | pricier on YAHOO | 95 |
| T.J. Hockenson | TE | 133.8 | 163.6 | 129.9 | SLEEPER | 2.6 | CHEAPER on SLEEPER | 157 |


## B. Superflex: ESPN rank shift for QBs (FORMATS.md §1)

| player | ppr | sflex | moves_up |
| --- | --- | --- | --- |
| Josh Allen | 36 | 1 | 35 |
| Jayden Daniels | 56 | 3 | 53 |
| Lamar Jackson | 58 | 5 | 53 |
| Drake Maye | 60 | 13 | 47 |
| Jalen Hurts | 62 | 15 | 47 |
| Joe Burrow | 81 | 21 | 60 |


## Unresolved players (surfaced, never dropped)

_(no rows)_


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 289pts, RB25 186pts, WR37 184pts, TE13 159pts, K13 124pts, DEF13 88pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection — compare them yourself; `edge_pts` is how far the blend of the two beats (+) or misses (-) what a typical player at his ADP slot produces._


_929 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


### QB

| player | pos | adp | round | drafted_as | produces_like | espn_pts | sleeper_pts | edge_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bryce Young | QB | 166.3 | 14.8 | QB27 | QB25 | 238 | 236 | +37.0 |
| C.J. Stroud | QB | 166 | 14.7 | QB26 | QB24 | 246 | 238 | +18.7 |
| Tyler Shough | QB | 155.4 | 13.9 | QB21 | QB19 | 266 | 271 | +14.3 |
| Sam Darnold | QB | 162.6 | 14.5 | QB24 | QB22 | 243 | 263 | +10.7 |
| Jalen Hurts | QB | 56.7 | 5.6 | QB6 | QB4 | 321 | 311 | +10.4 |
| Brock Purdy | QB | 105 | 9.7 | QB14 | QB8 | 293 | 303 | +9.7 |
| Bo Nix | QB | 100.6 | 9.3 | QB13 | QB9 | 295 | 296 | +6.4 |
| Jaxson Dart | QB | 82.5 | 7.8 | QB9 | QB7 | 301 | 297 | +3.5 |
| Patrick Mahomes | QB | 106.4 | 9.8 | QB15 | QB14 | 290 | 287 | +1.5 |
| Malik Willis | QB | 157.8 | 14.1 | QB22 | QB21 | 238 | 270 | +1.3 |
| Trevor Lawrence | QB | 95.2 | 8.9 | QB11 | QB10 | 287 | 303 | +0.0 |
| Aaron Rodgers | QB | 173.4 | 15.4 | QB28 | QB28 | 218 | 177 | +0.0 |
| Jared Goff | QB | 132.2 | 11.9 | QB16 | QB16 | 269 | 283 | +0.0 |
| Lamar Jackson | QB | 36.9 | 4 | QB2 | QB2 | 323 | 326 | +0.0 |
| Baker Mayfield | QB | 142.4 | 12.8 | QB17 | QB17 | 266 | 275 | +0.0 |


### RB

| player | pos | adp | round | drafted_as | produces_like | espn_pts | sleeper_pts | edge_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Tyjae Spears | RB | 151.8 | 13.6 | RB48 | RB42 | 154 | 115 | +39.3 |
| Dylan Sampson | RB | 161.9 | 14.4 | RB54 | RB50 | 87 | 89 | +22.3 |
| Isiah Pacheco | RB | 158.7 | 14.1 | RB53 | RB49 | 124 | 54 | +19.5 |
| Woody Marks | RB | 152.5 | 13.6 | RB49 | RB43 | 128 | 84 | +17.0 |
| Jonathon Brooks | RB | 123.3 | 11.2 | RB40 | RB34 | 171 | 155 | +16.6 |
| Keaton Mitchell | RB | 156.8 | 14 | RB51 | RB47 | 94 | 97 | +13.3 |
| Kenny Gainwell | RB | 116.9 | 10.7 | RB37 | RB33 | 178 | 152 | +13.1 |
| Breece Hall | RB | 33.8 | 3.7 | RB16 | RB14 | 274 | 215 | +13.0 |
| D'Andre Swift | RB | 55.1 | 5.5 | RB23 | RB21 | 212 | 208 | +12.8 |
| Rhamondre Stevenson | RB | 86.1 | 8.1 | RB29 | RB25 | 203 | 169 | +12.5 |
| MarShawn Lloyd | RB | 179.3 | 15.9 | RB57 | RB53 | 86 | 52 | +11.9 |
| Aaron Jones | RB | 122.1 | 11.1 | RB39 | RB36 | 177 | 137 | +9.7 |
| Javonte Williams | RB | 36.2 | 3.9 | RB17 | RB15 | 260 | 207 | +8.6 |
| Alvin Kamara | RB | 156.6 | 14 | RB50 | RB48 | 127 | 63 | +7.3 |
| Jeremiyah Love | RB | 26.9 | 3.2 | RB13 | RB11 | 279 | 239 | +6.7 |


### WR

| player | pos | adp | round | drafted_as | produces_like | espn_pts | sleeper_pts | edge_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Jerry Jeudy | WR | 178.5 | 15.8 | WR68 | WR61 | 138 | 120 | +48.8 |
| De'Zhaun Stribling | WR | 165.9 | 14.7 | WR64 | WR60 | 130 | 128 | +22.6 |
| Jalen McMillan | WR | 162.7 | 14.5 | WR63 | WR59 | 133 | 127 | +20.1 |
| Jayden Reed | WR | 119.9 | 10.9 | WR48 | WR37 | 171 | 198 | +18.4 |
| Matthew Golden | WR | 129.2 | 11.7 | WR50 | WR39 | 185 | 170 | +16.1 |
| Jalen Coker | WR | 145.4 | 13 | WR57 | WR53 | 147 | 166 | +15.3 |
| Garrett Wilson | WR | 45.1 | 4.7 | WR19 | WR13 | 250 | 225 | +12.9 |
| Xavier Worthy | WR | 138 | 12.4 | WR55 | WR47 | 173 | 162 | +12.1 |
| Rashid Shaheed | WR | 156.2 | 13.9 | WR60 | WR57 | 144 | 138 | +11.9 |
| Rome Odunze | WR | 68.7 | 6.6 | WR28 | WR24 | 213 | 208 | +10.7 |
| Puka Nacua | WR | 4.6 | 1.3 | WR2 | WR1 | 356 | 313 | +10.6 |
| Parker Washington | WR | 85.5 | 8 | WR34 | WR28 | 187 | 212 | +10.2 |
| Khalil Shakir | WR | 131.7 | 11.9 | WR51 | WR46 | 171 | 171 | +10.1 |
| Rashee Rice | WR | 27.2 | 3.2 | WR11 | WR9 | 270 | 229 | +7.4 |
| Alec Pierce | WR | 97.7 | 9.1 | WR37 | WR31 | 203 | 178 | +6.5 |


### TE

| player | pos | adp | round | drafted_as | produces_like | espn_pts | sleeper_pts | edge_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Greg Dulcich | TE | 184.9 | 16.3 | TE28 | TE26 | 119 | 111 | +33.8 |
| Pat Freiermuth | TE | 182.2 | 16.1 | TE27 | TE22 | 136 | 128 | +22.8 |
| Brenton Strange | TE | 139.8 | 12.6 | TE20 | TE18 | 142 | 161 | +15.4 |
| Juwan Johnson | TE | 164.5 | 14.6 | TE24 | TE19 | 143 | 137 | +12.6 |
| Mark Andrews | TE | 123.2 | 11.2 | TE16 | TE11 | 169 | 163 | +9.3 |
| Brock Bowers | TE | 22.6 | 2.8 | TE2 | TE1 | 241 | 254 | +8.5 |
| Dalton Schultz | TE | 160.8 | 14.3 | TE23 | TE20 | 133 | 139 | +8.1 |
| Harold Fannin | TE | 71.4 | 6.9 | TE8 | TE6 | 187 | 180 | +6.1 |
| T.J. Hockenson | TE | 133.8 | 12.1 | TE18 | TE14 | 158 | 155 | +5.0 |
| Jake Ferguson | TE | 112.3 | 10.3 | TE13 | TE12 | 167 | 160 | +3.9 |
| Terrance Ferguson | TE | 168.9 | 15 | TE26 | TE25 | 136 | 100 | +3.1 |
| Travis Kelce | TE | 94.2 | 8.8 | TE10 | TE9 | 177 | 171 | +1.1 |
| Hunter Henry | TE | 130.8 | 11.8 | TE17 | TE17 | 150 | 154 | +0.0 |
| Kyle Pitts | TE | 68.7 | 6.6 | TE7 | TE7 | 185 | 172 | +0.0 |
| Chig Okonkwo | TE | 147.7 | 13.2 | TE21 | TE21 | 121 | 144 | +0.0 |

