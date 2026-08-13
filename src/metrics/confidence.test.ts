import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { buildConsensusAdp, expertConfidence, projectionConfidence, type RawAdpRow } from './confidence.js';

describe('buildConsensusAdp', () => {
  test('a real 3-source consensus computes the median', () => {
    const rows: RawAdpRow[] = [
      { playerId: 'p1', source: 'ESPN', adp: 10 },
      { playerId: 'p1', source: 'SLEEPER', adp: 8 },
      { playerId: 'p1', source: 'FANTASYPROS', adp: 12 },
    ];
    const out = buildConsensusAdp(rows);
    assert.equal(out[0]!.adp, 10);
    assert.equal(out[0]!.nSources, 3);
  });

  test('a player with only one source is dropped, not graded on thin data', () => {
    // Regression: Pat Freiermuth had only FantasyPros ADP after ESPN's value
    // was censored, and a "consensus" of one source produced a false A grade.
    const rows: RawAdpRow[] = [{ playerId: 'lonely', source: 'FANTASYPROS', adp: 240 }];
    const out = buildConsensusAdp(rows);
    assert.equal(out.find((r) => r.playerId === 'lonely'), undefined);
  });

  test('a censored ESPN ceiling is excluded, and can drop a player to <2 sources', () => {
    // 60 ESPN values: 50 spread out, then 10 piled at the ceiling (censored).
    const spread = Array.from({ length: 50 }, (_, i) => ({ playerId: `p${i}`, source: 'ESPN', adp: i + 1 }));
    const piled = Array.from({ length: 10 }, (_, i) => ({ playerId: `late${i}`, source: 'ESPN', adp: 170 }));
    const oneRealSource = [{ playerId: 'late0', source: 'FANTASYPROS', adp: 300 }];
    const out = buildConsensusAdp([...spread, ...piled, ...oneRealSource]);
    // late0 had a censored ESPN value + one real FantasyPros value -> after
    // dropping the censored ESPN reading, only 1 real source remains.
    assert.equal(out.find((r) => r.playerId === 'late0'), undefined);
  });

  test('an uncensored source with fewer than 50 values is left alone', () => {
    // detectCensoring requires >=50 points to judge; small sources should not
    // have values dropped just because the sample is small.
    const rows: RawAdpRow[] = [
      { playerId: 'p1', source: 'SLEEPER', adp: 200 },
      { playerId: 'p1', source: 'FANTASYPROS', adp: 210 },
    ];
    const out = buildConsensusAdp(rows);
    assert.equal(out[0]!.nSources, 2);
  });
});

describe('expertConfidence', () => {
  test('disagreement far above the position/depth median flags LOW', () => {
    const players = [
      { playerId: 'agree1', pos: 'TE', adp: 10, rankStd: 5 },
      { playerId: 'agree2', pos: 'TE', adp: 10, rankStd: 6 },
      { playerId: 'agree3', pos: 'TE', adp: 10, rankStd: 5 },
      { playerId: 'outlier', pos: 'TE', adp: 10, rankStd: 40 }, // way above the ~5-6 median
    ];
    const conf = expertConfidence(players, 12);
    assert.equal(conf.get('outlier'), 'LOW');
    assert.equal(conf.get('agree1'), 'OK');
  });

  test('the same raw std is fine at depth where disagreement is normally high', () => {
    // Regression: a flat threshold would flag nearly every deep player, since
    // measured medians run ~6 in round 1-3 up to ~31 in round 12+.
    const deepPlayers = [
      { playerId: 'd1', pos: 'TE', adp: 200, rankStd: 28 },
      { playerId: 'd2', pos: 'TE', adp: 200, rankStd: 30 },
      { playerId: 'd3', pos: 'TE', adp: 200, rankStd: 29 },
    ];
    const conf = expertConfidence(deepPlayers, 12);
    assert.equal(conf.get('d1'), 'OK', 'std of 28 is normal for round 17+, should not be flagged');
  });

  test('missing ECR coverage is not itself treated as low confidence', () => {
    const conf = expertConfidence([{ playerId: 'x', pos: 'K', adp: 300, rankStd: null }], 12);
    assert.equal(conf.get('x'), 'OK');
  });
});

describe('projectionConfidence', () => {
  test('a Spears-shaped case: two models 34 points apart flags LOW', () => {
    // Regression: Tyjae Spears topped the value board after the rank-vs-points
    // fix (PLAN.md/vorp.ts history) with ESPN projecting him at 149pts and
    // Sleeper at 115 — a 34pt spread that made his "edge" mostly model
    // disagreement, not signal. Surrounding players agree within ~6-8pts.
    const players = [
      { playerId: 'agree1', pos: 'RB', adp: 148, spread: 6, sources: 2 },
      { playerId: 'agree2', pos: 'RB', adp: 150, spread: 8, sources: 2 },
      { playerId: 'agree3', pos: 'RB', adp: 152, spread: 5, sources: 2 },
      { playerId: 'spears', pos: 'RB', adp: 148, spread: 34.5, sources: 2 },
    ];
    const conf = projectionConfidence(players, 12);
    assert.equal(conf.get('spears'), 'LOW');
    assert.equal(conf.get('agree1'), 'OK');
  });

  test('a single-source player has nothing to disagree with — not flagged', () => {
    // spread is 0 by construction with one source (projections.ts), which
    // would otherwise look like suspiciously PERFECT agreement. Excluded
    // instead, the same way a null rankStd is excluded in expertConfidence.
    const players = [
      { playerId: 'solo', pos: 'RB', adp: 200, spread: 0, sources: 1 },
      { playerId: 'p2', pos: 'RB', adp: 200, spread: 10, sources: 2 },
      { playerId: 'p3', pos: 'RB', adp: 200, spread: 12, sources: 2 },
    ];
    const conf = projectionConfidence(players, 12);
    assert.equal(conf.get('solo'), 'OK');
  });

  test('the same raw spread is fine at a depth where disagreement is normally high', () => {
    // Deep-bench projections are noisier across models generally; a spread
    // that would be alarming in round 1 can be routine in round 17+.
    const deepPlayers = [
      { playerId: 'd1', pos: 'WR', adp: 220, spread: 40, sources: 2 },
      { playerId: 'd2', pos: 'WR', adp: 222, spread: 45, sources: 2 },
      { playerId: 'd3', pos: 'WR', adp: 224, spread: 42, sources: 2 },
    ];
    const conf = projectionConfidence(deepPlayers, 12);
    assert.equal(conf.get('d1'), 'OK', 'spread of 40 is normal at this depth, should not be flagged');
  });

  test('expert and projection confidence are independent — different flags for different reasons', () => {
    // A player can have rock-solid expert agreement (real, well-scouted) but
    // wildly disagreeing raw-point models, or vice versa. Neither check
    // should be a proxy for the other.
    const experts = [
      { playerId: 'p1', pos: 'RB', adp: 148, rankStd: 5 },
      { playerId: 'p2', pos: 'RB', adp: 150, rankStd: 6 },
      { playerId: 'spears', pos: 'RB', adp: 148, rankStd: 5 }, // experts AGREE on him
    ];
    const projections = [
      { playerId: 'p1', pos: 'RB', adp: 148, spread: 6, sources: 2 },
      { playerId: 'p2', pos: 'RB', adp: 150, spread: 7, sources: 2 },
      { playerId: 'spears', pos: 'RB', adp: 148, spread: 34.5, sources: 2 }, // models DISAGREE
    ];
    const expertConf = expertConfidence(experts, 12);
    const projConf = projectionConfidence(projections, 12);
    assert.equal(expertConf.get('spears'), 'OK', 'experts agree — should not be flagged by that check');
    assert.equal(projConf.get('spears'), 'LOW', 'models disagree — should be flagged by this check');
  });
});
