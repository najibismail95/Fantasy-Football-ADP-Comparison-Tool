import fs from 'fs';
import jaro from 'talisman/metrics/jaro-winkler.js';

const S = '/private/tmp/claude-501/-Users-najibismail-code/aacb31ff-615e-4dd2-b308-13a75d8707a0/scratchpad';

// ---------- FIX 1: position vocabulary is not shared across sources ----------
const POS = { DST: 'DEF', 'D/ST': 'DEF', DEF: 'DEF', FB: 'RB', HB: 'RB', RB: 'RB',
              PK: 'K', K: 'K', QB: 'QB', WR: 'WR', TE: 'TE' };
const pos = (p) => POS[String(p || '').toUpperCase()] ?? (p || null);

// ---------- FIX 3: overrides for genuine nicknames (hand-maintained) ----------
const ALIASES = {
  'hollywood brown': 'marquise brown',
  'kenneth gainwell': 'kenny gainwell',
  'cameron ward': 'cam ward',
  'bam knight': 'zonovan knight',
};

const SUFFIX = /\b(jr|sr|ii|iii|iv|v)\b/g;
function norm(name) {
  const n = String(name || '')
    .toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/\bd\/st\b|\bdst\b|\bdefense\b/g, '')
    .replace(/[.'’`]/g, '').replace(/[-_]/g, ' ')
    .replace(SUFFIX, '').replace(/\s+/g, ' ').trim();
  return ALIASES[n] ?? n;
}

// ---------- canonical spine ----------
const sleeper = JSON.parse(fs.readFileSync(`${S}/sl.json`, 'utf8'));
const FANTASY = new Set(['QB', 'RB', 'WR', 'TE', 'K', 'DEF']);
const canon = [];
for (const [pid, p] of Object.entries(sleeper)) {
  const P = pos(p.position);
  if (!FANTASY.has(P)) continue;
  const nm = norm(p.full_name || `${p.first_name ?? ''} ${p.last_name ?? ''}`);
  if (!nm) continue;
  canon.push({ pid, name: nm, pos: P, team: p.team || null,
    espn_id: p.espn_id ? String(p.espn_id) : null,
    rank: p.search_rank ?? 99999, active: !!p.active });
}
const byName = new Map(), byPos = new Map(), byEspnId = new Map(), defByTeam = new Map();
for (const c of canon) {
  (byName.get(c.name) ?? byName.set(c.name, []).get(c.name)).push(c);
  (byPos.get(c.pos) ?? byPos.set(c.pos, []).get(c.pos)).push(c);
  if (c.espn_id) byEspnId.set(c.espn_id, c);
  if (c.pos === 'DEF' && c.team) defByTeam.set(c.team, c);   // FIX 2
}
const best = (a) => a.slice().sort((x, y) => (x.rank - y.rank) || (y.active - x.active))[0];

// ---------- sources ----------
const ESPN_POS = { 1: 'QB', 2: 'RB', 3: 'WR', 4: 'TE', 5: 'K', 16: 'DEF' };
const espnRaw = JSON.parse(fs.readFileSync(`${S}/espn350.json`, 'utf8')).players;
const espn = espnRaw.map(x => ({ srcId: String(x.player.id), name: norm(x.player.fullName),
  pos: pos(ESPN_POS[x.player.defaultPositionId]), teamId: x.player.proTeamId }));

const beatRaw = fs.readFileSync(`${S}/beat.html`, 'utf8').replace(/\\"/g, '"');
const beat = [...beatRaw.matchAll(/\{"player":\{"id":(\d+),"fullName":"([^"]+)","position":"([^"]*)","teamId":"([^"]*)"\}/g)]
  .map(m => ({ srcId: m[1], name: norm(m[2]), pos: pos(m[3]), team: m[4] || null }));

const ecr = JSON.parse(/var\s+ecrData\s*=\s*(\{[\s\S]*?\});\s*\n/.exec(fs.readFileSync(`${S}/fp_rank.html`, 'utf8'))[1]);
const fpros = ecr.players.map(p => ({ srcId: String(p.player_id), name: norm(p.player_name),
  pos: pos(p.player_position_id), team: p.player_team_id || null }));

// derive ESPN proTeamId -> abbrev (self-validating; no hardcoded table)
const votes = new Map();
for (const e of espn) {
  const c = best((byName.get(e.name) ?? []).filter(x => x.pos === e.pos));
  if (!c?.team) continue;
  const t = votes.get(e.teamId) ?? votes.set(e.teamId, new Map()).get(e.teamId);
  t.set(c.team, (t.get(c.team) || 0) + 1);
}
const espnTeam = new Map([...votes].map(([id, t]) => [id, [...t].sort((a, b) => b[1] - a[1])[0][0]]));

// ---------- resolver ----------
const THRESHOLD = 0.92;
function resolve(row, useEspnId = false) {
  if (row.pos === 'DEF' && row.team && defByTeam.has(row.team))          // FIX 2
    return { c: defByTeam.get(row.team), tier: 'team' };
  if (useEspnId && byEspnId.has(row.srcId)) return { c: byEspnId.get(row.srcId), tier: 'id' };
  const exact = (byName.get(row.name) ?? []).filter(x => !row.pos || x.pos === row.pos);
  if (exact.length) return { c: best(exact), tier: 'exact' };
  let hit = null, hs = 0;
  for (const c of (row.pos ? byPos.get(row.pos) ?? [] : canon)) {
    const s = jaro(row.name, c.name);
    if (s < THRESHOLD) continue;
    const sc = s + (row.team && c.team === row.team ? 0.03 : 0) + (c.rank < 400 ? 0.01 : 0);
    if (sc > hs) { hs = sc; hit = c; }
  }
  return hit ? { c: hit, tier: 'fuzzy' } : { c: null, tier: 'MISS' };
}

for (const [label, rows, useId] of [
  ['ESPN', espn.map(e => ({ ...e, team: espnTeam.get(e.teamId) ?? null })), true],
  ['beatadp', beat, false],
  ['FantasyPros', fpros, false],
]) {
  const t = { team: 0, id: 0, exact: 0, fuzzy: 0, MISS: 0 }; const miss = [];
  for (const r of rows) { const x = resolve(r, useId); t[x.tier]++; if (!x.c) miss.push(r); }
  const ok = rows.length - t.MISS;
  console.log(`${label.padEnd(12)} n=${String(rows.length).padStart(3)}  team=${String(t.team).padStart(2)} ` +
    `id=${String(t.id).padStart(3)} exact=${String(t.exact).padStart(3)} fuzzy=${String(t.fuzzy).padStart(2)} ` +
    `MISS=${String(t.MISS).padStart(2)}  → ${(100 * ok / rows.length).toFixed(1)}%`);
  if (miss.length) console.log(`   unresolved: ${miss.map(m => `${m.name}[${m.pos}]`).join(', ')}`);
}
