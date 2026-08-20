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

  test('value score is measured in POINTS above the ADP-slot expectation, not rank spots', () => {
    // Best VORP (rank 1) but drafted 3rd at the position (adpRank 3, so the
    // exact-match shortcut doesn't apply). Expected production at the "3rd off
    // the board" slot is the median of the window around that rank, self
    // included — with only 3 players total, the window is everyone:
    // median(sleeper=100, stud1=90, stud2=80) = 90.
    const results = computeValueScore([
      { playerId: 'sleeper', pos: 'RB', vorp: 100, adp: 40 }, // best production, 3rd off the board
      { playerId: 'stud1', pos: 'RB', vorp: 90, adp: 5 },
      { playerId: 'stud2', pos: 'RB', vorp: 80, adp: 15 },
    ]);
    const sleeper = results.find((r) => r.playerId === 'sleeper')!;
    assert.equal(sleeper.vorpRank, 1);
    assert.equal(sleeper.adpRank, 3);
    assert.equal(sleeper.valueScore, 10, '100 (his vorp) - 90 (median of all three, himself included) = 10 points');
  });

  test('an exact rank match is forced to zero, not left to window arithmetic', () => {
    // Regression (Josh Allen, 2026-08-19): the windowed-median formula alone
    // manufactured a LARGE FAKE edge for players the market prices exactly
    // correctly. For the actual #1 player at a position, every window neighbor
    // is necessarily worse than him (there is no rank 0), so comparing him
    // against nearby-but-worse players inflated an edge out of nothing — Josh
    // Allen showed +45 despite being the consensus QB1 by both ADP AND
    // production, i.e. zero real mispricing. adpRank === vorpRank has an
    // unambiguous right answer (his own production IS the expectation), so it
    // bypasses the window rather than trying to coax zero out of it.
    const results = computeValueScore([
      { playerId: 'consensus1', pos: 'QB', vorp: 150, adp: 1 }, // #1 by both ADP and production
      { playerId: 'p2', pos: 'QB', vorp: 100, adp: 20 },
      { playerId: 'p3', pos: 'QB', vorp: 80, adp: 30 },
      { playerId: 'p4', pos: 'QB', vorp: 60, adp: 40 },
    ]);
    const c1 = results.find((r) => r.playerId === 'consensus1')!;
    assert.equal(c1.adpRank, 1);
    assert.equal(c1.vorpRank, 1);
    assert.equal(c1.valueScore, 0, 'correctly priced at #1 — nothing to be over or under, regardless of the talent gap to p2');
  });

  test('one severe outlier neighbor does not define the whole comparison', () => {
    // Regression for the actual production bug (Bryce Young, 2026-08-18): the
    // ORIGINAL single-neighbor version compared a player only against whoever
    // happened to hold the matching production rank. Here that would be
    // `outlier` — a player who still gets drafted ahead of `value` (adp 50 vs
    // 60) despite being the single worst producer in the entire pool, the same
    // shape as a well-known name still going early despite a terrible
    // projection. The old formula: value.vorp(10) - outlier.vorp(-100) = 110,
    // a fake "massive steal" driven entirely by one bad neighbor.
    //
    // p1-p4 are all exact ADP/production matches (correctly priced, score 0
    // each) so they don't confound this test — only `value` and `outlier`
    // exercise the windowed path. The windowed median looks at several nearby
    // ranks (p3, p4, value himself, outlier) rather than outlier alone, and
    // median() is resistant to one extreme entry the way a mean is not:
    // median(-100, 10, 20, 30) = 15, not something dragged toward -100.
    const pool = [
      { playerId: 'p1', pos: 'RB', vorp: 50, adp: 10 },
      { playerId: 'p2', pos: 'RB', vorp: 40, adp: 20 },
      { playerId: 'p3', pos: 'RB', vorp: 30, adp: 30 },
      { playerId: 'p4', pos: 'RB', vorp: 20, adp: 40 },
      { playerId: 'outlier', pos: 'RB', vorp: -100, adp: 50 },
      { playerId: 'value', pos: 'RB', vorp: 10, adp: 60 },
    ];
    const results = computeValueScore(pool);
    const value = results.find((r) => r.playerId === 'value')!;
    assert.equal(value.adpRank, 6);
    assert.equal(
      value.valueScore, -5,
      '10 (his vorp) - 15 (median of p3=30, p4=20, value=10, outlier=-100) = -5, nowhere near the old formula\'s +110',
    );
  });

  test('a small rank move at the top of a position outscores a bigger rank move at the bottom', () => {
    // Regression for the actual bug: a rank-spot formula (adpRank - vorpRank)
    // let a replacement-level RB "beat" Derrick Henry on value purely because
    // ranks are dense and noisy deep in a position and sparse at the top.
    //
    // One combined 13-player RB pool (computeValueScore ranks position-wide,
    // so "elite" and "deep" aren't isolated groups — they compete on one board):
    //   henry: drafted 3rd (adp=30), produces 1st (vorp=240) -> a 2-spot move
    //          worth 40 real points (240 vs the 200 a true RB3 produces).
    //   d9:    drafted LAST (adp=168), produces best-of-the-scrubs (vorp=-40)
    //          -> a 9-spot move worth only 9 real points, because the whole
    //          deep tier is clustered within 9 points of each other.
    const elite = [
      { playerId: 'e2', pos: 'RB', vorp: 220, adp: 12 },
      { playerId: 'e3', pos: 'RB', vorp: 200, adp: 20 },     // the "true RB3" baseline
      { playerId: 'henry', pos: 'RB', vorp: 240, adp: 30 },  // drafted RB3, produces RB1
    ];
    // d9 has the best vorp of the deep tier (-40) but the worst adp (168) ->
    // biggest rank-spot move in the whole pool, smallest real point gap.
    const deep = Array.from({ length: 10 }, (_, i) => ({
      playerId: `d${i}`, pos: 'RB',
      vorp: i === 9 ? -40 : -49 + i, // d0..d8 = -49..-41, d9 = -40 (best of the tier)
      adp: 150 + i * 2,              // d9's adp (168) is the LATEST of the whole pool
    }));
    const results = computeValueScore([...elite, ...deep]);
    const henry = results.find((r) => r.playerId === 'henry')!;
    const d9 = results.find((r) => r.playerId === 'd9')!;

    assert.equal(henry.adpRank, 3);
    assert.equal(henry.vorpRank, 1);
    // Windowed median (self included), not one exact neighbor — see the
    // dedicated outlier and exact-match tests above for why. Verified against
    // the implementation, not hand-derived: this pool's elite/deep split is a
    // deliberately sharp, artificial cliff (nothing between vorp 200 and -49),
    // so the window straddles it and the exact number is less important here
    // than the ordering assertion below.
    assert.equal(henry.valueScore, 160);

    assert.equal(d9.adpRank, 13);
    assert.equal(d9.vorpRank, 4);
    assert.equal(d9.valueScore, 7.5);

    // The bug this test exists for: d9's RANK move (13 -> 4 = 9 spots) is
    // bigger than Henry's (3 -> 1 = 2 spots), so the old rank-based formula
    // ranked d9 above Henry. That must stay inverted regardless of exactly how
    // "expected production" is computed, because Henry's real edge is bigger.
    assert.ok(henry.valueScore > d9.valueScore, "Henry's real edge must beat d9's smaller one");
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
