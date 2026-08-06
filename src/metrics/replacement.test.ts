import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { replacementLevels, type ProjectedPlayer } from './replacement.js';
import { computeVorp, computeValueScore, gradeValueScores } from './vorp.js';
import { LeagueConfigSchema } from './league-config.js';

// A small synthetic 4-team league, easy to hand-verify: 4 QB, 8 RB, 8 WR, 4 TE.
const cfg = (overrides: Partial<{ teams: number; flex: number; superflex: number }> = {}) =>
  LeagueConfigSchema.parse({
    teams: overrides.teams ?? 4,
    scoring: 'PPR',
    starters: { qb: 1, rb: 2, wr: 2, te: 1, flex: overrides.flex ?? 0, superflex: overrides.superflex ?? 0, k: 0, dst: 0 },
  });

function pool(pos: ProjectedPlayer['pos'], count: number, topScore: number, step = 10): ProjectedPlayer[] {
  return Array.from({ length: count }, (_, i) => ({
    playerId: `${pos}${i + 1}`, pos, points: topScore - i * step,
  }));
}

describe('replacementLevels', () => {
  test('mandatory starters only: replacement = first player past the starter slots', () => {
    const players = [...pool('QB', 8, 300), ...pool('RB', 12, 200), ...pool('WR', 12, 180), ...pool('TE', 8, 120)];
    const repl = replacementLevels(players, cfg());
    // 4 teams x 1 QB = 4 starters, so replacement is the 5th QB (index 4).
    assert.equal(repl.QB!.startersUsed, 4);
    assert.equal(repl.QB!.points, 300 - 4 * 10);
    // 4 teams x 2 RB = 8 starters, replacement is the 9th RB.
    assert.equal(repl.RB!.startersUsed, 8);
    assert.equal(repl.RB!.points, 200 - 8 * 10);
  });

  test('FLEX goes to whichever position has the best next player, not fixed by position', () => {
    // RB has a much deeper bench than WR, so after mandatory starters the
    // single best remaining player across RB/WR/TE should win the flex slot.
    const players = [
      ...pool('QB', 4, 300),
      ...pool('RB', 12, 200),   // RB9 (index 8) projects 200-80=120
      ...pool('WR', 12, 180, 5), // WR5 (index 4) projects 180-20=160  <- best remaining
      ...pool('TE', 4, 120),
    ];
    const repl = replacementLevels(players, cfg({ flex: 1 }));
    // 4 flex slots. Each round, compare next-RB vs next-WR vs next-TE.
    // Greedy should keep picking WR (step=5, degrades slower) over RB (step=10)
    // for at least the first flex slot, since WR's next player is worth more.
    assert.ok(repl.WR!.startersUsed > 8, 'WR should absorb at least one flex slot');
  });

  test('SUPERFLEX pulls a QB in even though QB has no dedicated flex slot', () => {
    const players = [...pool('QB', 8, 400), ...pool('RB', 12, 200), ...pool('WR', 12, 180), ...pool('TE', 4, 120)];
    const withSF = replacementLevels(players, cfg({ superflex: 1 }));
    const withoutSF = replacementLevels(players, cfg());
    // QB projects far above everyone else here, so every superflex slot should
    // go to QB — replicates the real-data finding in FORMATS.md §1 (Burrow
    // 108->11 in superflex) at a scale that's hand-checkable.
    assert.ok(withSF.QB!.startersUsed > withoutSF.QB!.startersUsed);
  });

  test('running out of projected players at a position does not throw', () => {
    const players = [...pool('QB', 2, 300), ...pool('RB', 3, 200), ...pool('WR', 3, 180), ...pool('TE', 1, 120)];
    assert.doesNotThrow(() => replacementLevels(players, cfg({ flex: 2 })));
  });

  test('shallower leagues raise replacement level everywhere, less at thin positions', () => {
    // Regression check for the FORMATS.md §3 finding: replacement level should
    // rise at every position as teams shrink, but the RISE should be smaller
    // at QB (thin position, one real tier) than at RB (deep position).
    const players = [...pool('QB', 20, 300, 3), ...pool('RB', 40, 200, 3), ...pool('WR', 40, 180, 3), ...pool('TE', 20, 120, 3)];
    const shallow = replacementLevels(players, cfg({ teams: 8 }));
    const deep = replacementLevels(players, cfg({ teams: 12 }));
    const qbRise = shallow.QB!.points - deep.QB!.points;
    const rbRise = shallow.RB!.points - deep.RB!.points;
    assert.ok(qbRise <= rbRise, `QB replacement should rise less than RB's when the league shrinks (qb=${qbRise}, rb=${rbRise})`);
  });
});

describe('computeVorp + computeValueScore', () => {
  test('VORP is points above replacement, and can go negative', () => {
    const repl = { QB: { startersUsed: 4, points: 250 } };
    const [elite, belowReplacement] = computeVorp(
      [{ playerId: 'a', pos: 'QB', points: 350 }, { playerId: 'b', pos: 'QB', points: 200 }],
      repl,
    );
    assert.equal(elite!.vorp, 100);
    assert.equal(belowReplacement!.vorp, -50);
  });

  test('value score is positive when a player outproduces his draft slot', () => {
    // Best VORP (rank 1) but drafted 3rd at the position (adpRank 3) -> value 2.
    const results = computeValueScore([
      { playerId: 'sleeper', pos: 'RB', vorp: 100, adp: 40 }, // best production, 3rd off the board
      { playerId: 'stud1', pos: 'RB', vorp: 90, adp: 5 },
      { playerId: 'stud2', pos: 'RB', vorp: 80, adp: 15 },
    ]);
    const sleeper = results.find((r) => r.playerId === 'sleeper')!;
    assert.equal(sleeper.vorpRank, 1);
    assert.equal(sleeper.adpRank, 3);
    assert.equal(sleeper.valueScore, 2);
  });

  test('ranks are computed WITHIN position, never across positions', () => {
    // Regression: an earlier version of this comparison (report.ts, ECR-vs-ADP)
    // ranked across all positions and mostly measured "what position is this"
    // rather than value — see PLAN.md/CROSSWALK.md history. A QB and a TE here
    // must not affect each other's rank.
    const results = computeValueScore([
      { playerId: 'qb1', pos: 'QB', vorp: 500, adp: 1 },
      { playerId: 'te1', pos: 'TE', vorp: 10, adp: 200 },
    ]);
    assert.equal(results.find((r) => r.playerId === 'te1')!.vorpRank, 1, 'TE1 is #1 among TEs regardless of QB1 existing');
  });
});

describe('gradeValueScores', () => {
  // A wide, roughly normal-ish spread of value scores at one position: exactly
  // the shape gradeValueScores is meant to curve.
  const spread = (pos: string, scores: number[]) =>
    scores.map((valueScore, i) => ({
      playerId: `${pos}${i}`, pos, vorp: 0, adp: 0, vorpRank: i + 1, adpRank: i + 1, valueScore,
    }));

  test('the biggest value in a spread grades A, the biggest reach grades F', () => {
    const results = spread('RB', [20, 15, 10, 8, 6, 4, 2, 0, -2, -4, -6, -8, -10, -15, -20]);
    const graded = gradeValueScores(results);
    const best = graded.find((r) => r.valueScore === 20)!;
    const worst = graded.find((r) => r.valueScore === -20)!;
    assert.equal(best.grade, 'A');
    assert.equal(worst.grade, 'F');
  });

  test('a player at the mean grades C', () => {
    const results = spread('RB', [10, 5, 0, -5, -10]); // mean = 0
    const graded = gradeValueScores(results);
    assert.equal(graded.find((r) => r.valueScore === 0)!.grade, 'C');
  });

  test('grades are curved WITHIN position — same raw score, different pool, can grade differently', () => {
    // QB pool: this player is the clear best (way above the rest) -> A.
    const qb = spread('QB', [8, 1, 0, -1, -2, -3]);
    // RB pool: same raw score of 8, but the pool is full of similarly big
    // scores, so 8 is unremarkable -> should NOT be an A.
    const rb = spread('RB', [8, 7, 8, 6, 9, 7, 8, 6, 7, 8, 9, 6]);
    const graded = gradeValueScores([...qb, ...rb]);
    const qbGrade = graded.find((r) => r.pos === 'QB' && r.valueScore === 8)!.grade;
    const rbGrade = graded.find((r) => r.pos === 'RB' && r.valueScore === 8)!.grade;
    assert.equal(qbGrade, 'A');
    assert.notEqual(rbGrade, 'A', 'the same raw score of 8 is unremarkable in a tightly-clustered RB pool');
  });

  test('a tiny position pool (e.g. K, DST) does not blow up or produce a fake A/F', () => {
    const results = spread('K', [3, -1]);
    const graded = gradeValueScores(results);
    assert.ok(graded.every((r) => r.grade === 'C'), 'fewer than 4 players is too small to curve meaningfully');
  });

  test('every player in an identical-score pool grades C, no division by zero', () => {
    const results = spread('DEF', [5, 5, 5, 5, 5]);
    assert.doesNotThrow(() => gradeValueScores(results));
    const graded = gradeValueScores(results);
    assert.ok(graded.every((r) => r.grade === 'C' && Number.isFinite(r.z)));
  });
});
