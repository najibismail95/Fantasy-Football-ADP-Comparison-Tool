# Fantasy ADP report — 2026-08-18

_Snapshot 2026-08-18 · 22 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 166 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.53 | 171 | 98.7 |
| SLEEPER | 1127 | 1.7 | 700 | 87.3 |
| YAHOO | 223 | 1.5 | 144.6 | 90.6 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1169 |
| ESPN | id | 470 |
| ESPN | team | 110 |
| SLEEPER | id | 1127 |
| YAHOO | exact | 202 |
| YAHOO | team | 21 |


## A. Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Chris Godwin | WR | 148.4 | 95.9 | 98.2 | ESPN | 4.3 | CHEAPER on ESPN | 166 |
| RJ Harvey | RB | 133.8 | 79.8 | 101 | ESPN | 3.6 | CHEAPER on ESPN | 147 |
| Travis Hunter | WR | 118.8 | 164.9 | 126.7 | SLEEPER | 3.5 | CHEAPER on SLEEPER | 107 |
| Kyler Murray | QB | 148.2 | 158.5 | 111.3 | YAHOO | 3.5 | pricier on YAHOO | 258 |
| Dalton Kincaid | TE | 135.9 | 90 | 99.8 | ESPN | 3.4 | CHEAPER on ESPN | 160 |
| Chuba Hubbard | RB | 117.4 | 76.6 | 78.6 | ESPN | 3.3 | CHEAPER on ESPN | 160 |
| Blake Corum | RB | 141.1 | 104 | 99.5 | ESPN | 3.3 | CHEAPER on ESPN | 147 |
| Makai Lemon | WR | 133.8 | 86.5 | 108.4 | ESPN | 3 | CHEAPER on ESPN | 162 |
| Tucker Kraft | TE | 98.3 | 65.3 | 61.1 | ESPN | 2.9 | CHEAPER on ESPN | 178 |
| Quentin Johnston | WR | 142.9 | 107.8 | 108 | ESPN | 2.9 | CHEAPER on ESPN | 165 |
| Kyle Monangai | RB | 131.6 | 95.1 | 100.5 | ESPN | 2.8 | CHEAPER on ESPN | 165 |
| Christian Watson | WR | 101.9 | 70.3 | 67.8 | ESPN | 2.7 | CHEAPER on ESPN | 196 |
| Jordan Mason | RB | 152.1 | 120 | 118.8 | ESPN | 2.7 | CHEAPER on ESPN | 152 |
| Justin Herbert | QB | 109.3 | 84.4 | 68.8 | ESPN | 2.7 | CHEAPER on ESPN | 290 |
| Mike Evans | WR | 95.4 | 59.6 | 65.9 | ESPN | 2.7 | CHEAPER on ESPN | 202 |
| Alvin Kamara | RB | 156.6 | 159.7 | 126.2 | YAHOO | 2.7 | pricier on YAHOO | 95 |
| T.J. Hockenson | TE | 133.8 | 163.4 | 129.9 | SLEEPER | 2.6 | CHEAPER on SLEEPER | 157 |
| Rashid Shaheed | WR | 159.6 | 157.6 | 128.5 | YAHOO | 2.5 | pricier on YAHOO | 141 |


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


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 290pts, RB25 186pts, WR37 184pts, TE13 160pts, K13 124pts, DEF13 88pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection — compare them yourself; `edge_pts` is how far the blend of the two beats (+) or misses (-) what a typical player at his ADP slot produces._


_974 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


### QB

| player | pos | adp | round | drafted_as | produces_like | espn_pts | sleeper_pts | edge_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bryce Young | QB | 175.7 | 15.6 | QB28 | QB25 | 238 | 236 | +38.4 |
| Sam Darnold | QB | 162.6 | 14.5 | QB25 | QB22 | 243 | 263 | +16.1 |
| Tyler Shough | QB | 155.5 | 13.9 | QB21 | QB19 | 266 | 271 | +13.9 |
| Jalen Hurts | QB | 56.7 | 5.6 | QB6 | QB4 | 320 | 311 | +10.0 |
| Malik Willis | QB | 157.7 | 14.1 | QB23 | QB21 | 239 | 270 | +9.2 |
| Brock Purdy | QB | 105 | 9.7 | QB14 | QB8 | 292 | 303 | +8.9 |
| Bo Nix | QB | 100.6 | 9.3 | QB13 | QB9 | 296 | 296 | +6.4 |
| Daniel Jones | QB | 159.5 | 14.2 | QB24 | QB23 | 267 | 224 | +3.0 |
| Jaxson Dart | QB | 82.3 | 7.8 | QB9 | QB7 | 301 | 297 | +2.6 |
| Patrick Mahomes | QB | 106.4 | 9.8 | QB15 | QB14 | 291 | 287 | +2.3 |
| Trevor Lawrence | QB | 95.2 | 8.8 | QB11 | QB10 | 288 | 303 | +0.4 |
| Jared Goff | QB | 133.3 | 12 | QB16 | QB16 | 269 | 283 | +0.0 |
| Lamar Jackson | QB | 37 | 4 | QB2 | QB2 | 323 | 326 | +0.0 |
| Baker Mayfield | QB | 142.8 | 12.8 | QB17 | QB17 | 265 | 275 | +0.0 |
| Josh Allen | QB | 22.2 | 2.8 | QB1 | QB1 | 370 | 362 | +0.0 |


### RB

| player | pos | adp | round | drafted_as | produces_like | espn_pts | sleeper_pts | edge_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Tyjae Spears | RB | 151.6 | 13.5 | RB48 | RB42 | 154 | 115 | +39.2 |
| Isiah Pacheco | RB | 159.4 | 14.2 | RB53 | RB49 | 124 | 54 | +19.4 |
| Dylan Sampson | RB | 160.8 | 14.3 | RB54 | RB50 | 87 | 89 | +18.8 |
| Woody Marks | RB | 152.5 | 13.6 | RB49 | RB43 | 128 | 84 | +17.3 |
| Jonathon Brooks | RB | 123.8 | 11.2 | RB40 | RB34 | 171 | 155 | +16.4 |
| Keaton Mitchell | RB | 157.1 | 14 | RB51 | RB47 | 94 | 97 | +13.5 |
| Kenny Gainwell | RB | 117.1 | 10.7 | RB37 | RB33 | 178 | 152 | +13.0 |
| Rhamondre Stevenson | RB | 85.1 | 8 | RB29 | RB25 | 203 | 169 | +12.3 |
| MarShawn Lloyd | RB | 177.6 | 15.7 | RB57 | RB54 | 86 | 52 | +11.8 |
| Breece Hall | RB | 32.8 | 3.6 | RB16 | RB14 | 274 | 211 | +11.7 |
| D'Andre Swift | RB | 55.7 | 5.6 | RB23 | RB21 | 212 | 208 | +10.4 |
| Aaron Jones | RB | 122.3 | 11.1 | RB39 | RB36 | 177 | 137 | +10.3 |
| Derrick Henry | RB | 20.1 | 2.6 | RB12 | RB9 | 275 | 247 | +8.5 |
| Travis Etienne | RB | 44.5 | 4.6 | RB19 | RB17 | 244 | 208 | +8.5 |
| Javonte Williams | RB | 36.2 | 3.9 | RB17 | RB15 | 261 | 207 | +8.2 |


### WR

| player | pos | adp | round | drafted_as | produces_like | espn_pts | sleeper_pts | edge_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Jerry Jeudy | WR | 179 | 15.8 | WR68 | WR60 | 138 | 120 | +49.0 |
| De'Zhaun Stribling | WR | 164.2 | 14.6 | WR64 | WR59 | 130 | 128 | +24.0 |
| Jalen McMillan | WR | 163 | 14.5 | WR63 | WR58 | 133 | 127 | +23.3 |
| Jayden Reed | WR | 120 | 10.9 | WR48 | WR38 | 170 | 198 | +19.3 |
| Jalen Coker | WR | 145.7 | 13.1 | WR57 | WR52 | 147 | 166 | +18.9 |
| Matthew Golden | WR | 129.1 | 11.7 | WR50 | WR39 | 185 | 170 | +16.9 |
| Khalil Shakir | WR | 131.6 | 11.9 | WR52 | WR45 | 171 | 171 | +14.3 |
| Xavier Worthy | WR | 137.6 | 12.4 | WR55 | WR46 | 173 | 162 | +13.9 |
| Rashid Shaheed | WR | 157.6 | 14 | WR61 | WR56 | 144 | 138 | +13.9 |
| Garrett Wilson | WR | 45.8 | 4.7 | WR19 | WR13 | 250 | 225 | +12.8 |
| Jayden Higgins | WR | 140.2 | 12.6 | WR56 | WR55 | 142 | 165 | +12.2 |
| Rome Odunze | WR | 68.6 | 6.6 | WR28 | WR24 | 213 | 208 | +10.4 |
| Parker Washington | WR | 85 | 8 | WR34 | WR28 | 187 | 212 | +10.2 |
| Puka Nacua | WR | 4.4 | 1.3 | WR2 | WR1 | 356 | 313 | +10.1 |
| Denzel Boston | WR | 146.6 | 13.1 | WR58 | WR57 | 141 | 135 | +7.5 |


### TE

| player | pos | adp | round | drafted_as | produces_like | espn_pts | sleeper_pts | edge_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Greg Dulcich | TE | 183.4 | 16.2 | TE28 | TE26 | 119 | 111 | +33.8 |
| Pat Freiermuth | TE | 182.3 | 16.1 | TE27 | TE22 | 136 | 128 | +22.9 |
| Juwan Johnson | TE | 164.4 | 14.6 | TE24 | TE19 | 143 | 141 | +15.1 |
| Brenton Strange | TE | 139.6 | 12.5 | TE19 | TE17 | 142 | 161 | +9.6 |
| Mark Andrews | TE | 123.3 | 11.2 | TE16 | TE11 | 169 | 163 | +9.4 |
| Brock Bowers | TE | 22.8 | 2.8 | TE2 | TE1 | 241 | 254 | +8.8 |
| Dalton Schultz | TE | 161.4 | 14.4 | TE23 | TE20 | 133 | 139 | +8.2 |
| Harold Fannin | TE | 71.4 | 6.9 | TE8 | TE6 | 188 | 180 | +6.5 |
| T.J. Hockenson | TE | 133.8 | 12.1 | TE18 | TE14 | 158 | 155 | +4.9 |
| Jake Ferguson | TE | 112.5 | 10.3 | TE13 | TE12 | 167 | 160 | +3.6 |
| Terrance Ferguson | TE | 168.3 | 14.9 | TE26 | TE25 | 136 | 100 | +3.0 |
| Travis Kelce | TE | 94.1 | 8.8 | TE10 | TE9 | 178 | 171 | +1.4 |
| Kyle Pitts | TE | 68.1 | 6.6 | TE7 | TE7 | 185 | 172 | +0.0 |
| Chig Okonkwo | TE | 148 | 13.3 | TE21 | TE21 | 121 | 144 | +0.0 |
| Sam LaPorta | TE | 63 | 6.2 | TE5 | TE5 | 189 | 197 | +0.0 |

