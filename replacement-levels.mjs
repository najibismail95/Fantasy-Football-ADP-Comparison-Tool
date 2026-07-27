import fs from 'fs';
const S = '/private/tmp/claude-501/-Users-najibismail-code/aacb31ff-615e-4dd2-b308-13a75d8707a0/scratchpad';
const POS = { 1: 'QB', 2: 'RB', 3: 'WR', 4: 'TE', 5: 'K', 16: 'DEF' };

// ---- projections: statSourceId=1 (projected), statSplitTypeId=0 (full season), 2026
const players = [];
for (const p of JSON.parse(fs.readFileSync(`${S}/espn350.json`, 'utf8')).players) {
  const pl = p.player;
  const st = (pl.stats || []).find(s => s.statSourceId === 1 && s.statSplitTypeId === 0 && s.seasonId === 2026);
  if (!st?.appliedTotal) continue;
  const pos = POS[pl.defaultPositionId];
  if (!pos) continue;
  players.push({ name: pl.fullName, pos, pts: st.appliedTotal });
}
players.sort((a, b) => b.pts - a.pts);
const byPos = {};
for (const p of players) (byPos[p.pos] ??= []).push(p);
console.log(`projections loaded: ${players.length} players ` +
  Object.entries(byPos).map(([k, v]) => `${k}:${v.length}`).join(' '));

// ---- greedy starter fill -> replacement level per position
function replacementLevels(cfg) {
  const { teams, qb, rb, wr, te, flex, superflex } = cfg;
  const used = { QB: 0, RB: 0, WR: 0, TE: 0 };
  // mandatory slots
  used.QB = teams * qb; used.RB = teams * rb; used.WR = teams * wr; used.TE = teams * te;
  // flex: greedily take the best remaining RB/WR/TE
  const flexEligible = ['RB', 'WR', 'TE'];
  for (let i = 0; i < teams * flex; i++) {
    let bestPos = null, bestPts = -1;
    for (const pos of flexEligible) {
      const next = byPos[pos]?.[used[pos]];
      if (next && next.pts > bestPts) { bestPts = next.pts; bestPos = pos; }
    }
    if (bestPos) used[bestPos]++;
  }
  // superflex: best remaining QB/RB/WR/TE
  for (let i = 0; i < teams * (superflex ?? 0); i++) {
    let bestPos = null, bestPts = -1;
    for (const pos of ['QB', ...flexEligible]) {
      const next = byPos[pos]?.[used[pos]];
      if (next && next.pts > bestPts) { bestPts = next.pts; bestPos = pos; }
    }
    if (bestPos) used[bestPos]++;
  }
  const repl = {};
  for (const pos of ['QB', 'RB', 'WR', 'TE']) {
    const arr = byPos[pos] || [];
    repl[pos] = { idx: used[pos], pts: arr[used[pos]]?.pts ?? arr.at(-1)?.pts ?? 0 };
  }
  return repl;
}

const vorp1 = (pos, repl) => (byPos[pos][0].pts - repl[pos].pts);   // elite VORP at a position

const CONFIGS = [
  ['10-team  1QB 1flex', { teams: 10, qb: 1, rb: 2, wr: 2, te: 1, flex: 1 }],
  ['12-team  1QB 1flex', { teams: 12, qb: 1, rb: 2, wr: 2, te: 1, flex: 1 }],
  ['12-team  1QB 2flex', { teams: 12, qb: 1, rb: 2, wr: 2, te: 1, flex: 2 }],
  ['12-team  SUPERFLEX', { teams: 12, qb: 1, rb: 2, wr: 2, te: 1, flex: 1, superflex: 1 }],
];

console.log('\nReplacement level (positional index of last starter) and elite VORP:\n');
console.log('config                 ' + ['QB', 'RB', 'WR', 'TE'].map(p => p.padStart(14)).join(''));
const table = {};
for (const [label, cfg] of CONFIGS) {
  const r = replacementLevels(cfg);
  table[label] = r;
  console.log('  ' + label.padEnd(21) +
    ['QB', 'RB', 'WR', 'TE'].map(p => `${p}${String(r[p].idx).padStart(2)} ${vorp1(p, r).toFixed(0).padStart(4)}pt`.padStart(14)).join(''));
}

// ---- the actual hypothesis test: onesie advantage RELATIVE to RB/WR
console.log('\nElite-onesie edge = (QB1+TE1 VORP) / (RB1+WR1 VORP)  — higher means onesies matter more:\n');
for (const [label] of CONFIGS) {
  const r = table[label];
  const onesie = vorp1('QB', r) + vorp1('TE', r);
  const flexy = vorp1('RB', r) + vorp1('WR', r);
  const ratio = onesie / flexy;
  const bar = '#'.repeat(Math.round(ratio * 40));
  console.log(`  ${label.padEnd(21)} ${ratio.toFixed(3)}  ${bar}`);
}
