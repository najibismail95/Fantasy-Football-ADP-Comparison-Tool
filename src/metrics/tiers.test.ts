import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { computeTiers, compositeScore } from './tiers.js';

describe('computeTiers', () => {
  test('reproduces the exact QB grouping validated in STACK-TYPESCRIPT.md, but Tier 1 = best', () => {
    // Same 11 players, same k=4. That doc numbered ascending (its "Tier 4" was
    // Allen/Jackson/Daniels); this flips it so Tier 1 is the best tier, which
    // is how the fantasy community actually reads "Tier 1 RB".
    const players = [
      { playerId: 'Allen', points: 402 }, { playerId: 'Jackson', points: 395 },
      { playerId: 'Daniels', points: 372 }, { playerId: 'Burrow', points: 360 },
      { playerId: 'Mahomes', points: 330 }, { playerId: 'Nix', points: 292 },
      { playerId: 'Goff', points: 288 }, { playerId: 'Herbert', points: 285 },
      { playerId: 'Stroud', points: 262 }, { playerId: 'Darnold', points: 258 },
      { playerId: 'Rodgers', points: 241 },
    ];
    const tiered = computeTiers(players, 4);
    const tierOf = (id: string) => tiered.find((t) => t.playerId === id)!.tier;

    assert.deepEqual([tierOf('Allen'), tierOf('Jackson'), tierOf('Daniels')], [1, 1, 1]);
    assert.deepEqual([tierOf('Burrow'), tierOf('Mahomes')], [2, 2]);
    assert.deepEqual([tierOf('Nix'), tierOf('Goff'), tierOf('Herbert')], [3, 3, 3]);
    assert.deepEqual([tierOf('Stroud'), tierOf('Darnold'), tierOf('Rodgers')], [4, 4, 4]);
  });

  test('tier 1 always has the highest points, regardless of input order', () => {
    const shuffled = [
      { playerId: 'c', points: 50 }, { playerId: 'a', points: 200 }, { playerId: 'b', points: 120 },
    ];
    const tiered = computeTiers(shuffled, 3);
    const best = tiered.find((t) => t.tier === 1)!;
    assert.equal(best.playerId, 'a');
  });

  test('cliffBelow is the gap to the next WORSE tier, null for the last tier', () => {
    // Two clean, widely separated clusters: {100,105} and {10,15}.
    const players = [
      { playerId: 'hi1', points: 105 }, { playerId: 'hi2', points: 100 },
      { playerId: 'lo1', points: 15 }, { playerId: 'lo2', points: 10 },
    ];
    const tiered = computeTiers(players, 2);
    const tier1 = tiered.find((t) => t.tier === 1)!;
    const tier2 = tiered.find((t) => t.tier === 2)!;
    assert.equal(tier1.cliffBelow, 100 - 15); // bottom of tier 1 minus top of tier 2
    assert.equal(tier2.cliffBelow, null, 'the worst tier has nothing below it');
  });

  test('requesting more tiers than players does not throw', () => {
    const players = [{ playerId: 'a', points: 10 }, { playerId: 'b', points: 5 }];
    assert.doesNotThrow(() => computeTiers(players, 10));
    const tiered = computeTiers(players, 10);
    assert.equal(tiered.length, 2);
  });

  test('an empty pool returns an empty array', () => {
    assert.deepEqual(computeTiers([], 5), []);
  });

  test('duplicate point totals do not break the tier count or assignment', () => {
    const players = Array.from({ length: 6 }, (_, i) => ({ playerId: `p${i}`, points: 100 }));
    const tiered = computeTiers(players, 3);
    assert.equal(tiered.length, 6);
    assert.ok(tiered.every((t) => t.tier === tiered[0]!.tier), 'identical points should land in one tier');
  });
});

describe('compositeScore', () => {
  const p = (id: string, points: number, adp: number) => ({ playerId: id, points, adp });

  test('adpWeight=1 ignores ADP entirely', () => {
    const out = compositeScore([p('a', 300, 100), p('b', 200, 1), p('c', 100, 50)], 1);
    const ranked = [...out].sort((x, y) => y.score - x.score).map((r) => r.playerId);
    assert.deepEqual(ranked, ['a', 'b', 'c'], 'pure projection ordering');
  });

  test('adpWeight=0 ignores projections entirely', () => {
    const out = compositeScore([p('a', 300, 100), p('b', 200, 1), p('c', 100, 50)], 0);
    const ranked = [...out].sort((x, y) => y.score - x.score).map((r) => r.playerId);
    assert.deepEqual(ranked, ['b', 'c', 'a'], 'pure ADP ordering (lower adp = better)');
  });

  test('a lower ADP always helps, never hurts', () => {
    // Regression guard for the sign flip: ADP is a draft POSITION, so it must
    // be negated before averaging or the blend would reward being undrafted.
    const out = compositeScore([p('early', 200, 1), p('late', 200, 200)], 0.5);
    const early = out.find((r) => r.playerId === 'early')!;
    const late = out.find((r) => r.playerId === 'late')!;
    assert.ok(early.score > late.score, 'equal projections, earlier ADP must score higher');
  });

  test('players missing a signal are dropped rather than scored on partial data', () => {
    const out = compositeScore([p('ok', 200, 10), { playerId: 'noadp', points: 200, adp: NaN }], 0.5);
    assert.equal(out.length, 1);
    assert.equal(out[0]!.playerId, 'ok');
  });

  test('a zero-variance signal does not produce NaN', () => {
    const out = compositeScore([p('a', 100, 5), p('b', 100, 5)], 0.5);
    assert.ok(out.every((r) => Number.isFinite(r.score)));
  });

  test('weight is clamped to [0,1]', () => {
    assert.doesNotThrow(() => compositeScore([p('a', 100, 5), p('b', 200, 9)], 5));
    assert.doesNotThrow(() => compositeScore([p('a', 100, 5), p('b', 200, 9)], -3));
  });
});
