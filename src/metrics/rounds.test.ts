import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { roundOf, roundNumber, pickRangeForRounds } from './rounds.js';

describe('roundOf', () => {
  test('pick 1 is the very start of round 1', () => {
    // Regression: `adp / teams + 1` returned 1.08 here.
    assert.equal(roundOf(1, 12), 1);
  });

  test('the last pick of round 1 is still in round 1, not round 2', () => {
    // Regression: `adp / teams + 1` returned exactly 2.00 for pick 12,
    // pushing the entire round boundary off by one.
    assert.ok(roundOf(12, 12) < 2, 'pick 12 of a 12-team league must not read as round 2');
    assert.equal(roundNumber(12, 12), 1);
  });

  test('the first pick of round 2 reads as exactly 2', () => {
    assert.equal(roundOf(13, 12), 2);
  });

  test('scales with league size, not hardcoded to 12', () => {
    assert.equal(roundOf(11, 10), 2);   // pick 11 starts round 2 in a 10-team
    assert.equal(roundNumber(10, 10), 1);
    assert.equal(roundNumber(11, 10), 2);
  });
});

describe('pickRangeForRounds', () => {
  test('rounds 9-16 in a 12-team league covers picks 97-192', () => {
    // Regression: the buggy filter selected 96-180, dropping a full round
    // off the end AND pulling in one pick from round 8.
    assert.deepEqual(pickRangeForRounds(9, 16, 12), { firstPick: 97, lastPick: 192 });
  });

  test('round 1 starts at pick 1', () => {
    assert.deepEqual(pickRangeForRounds(1, 1, 12), { firstPick: 1, lastPick: 12 });
  });

  test('the range endpoints agree with the INTEGER round, not the fraction', () => {
    // roundOf is a continuous coordinate where integers mark the START of a
    // round, so the last pick of round 16 reads 16.92 — inside round 16 but
    // greater than 16. Range membership must therefore use roundNumber.
    // Filtering on `roundOf <= roundMax` cuts at pick 181 and silently drops
    // the remaining 11 picks of the round.
    const { firstPick, lastPick } = pickRangeForRounds(9, 16, 12);
    assert.equal(roundNumber(firstPick, 12), 9);
    assert.equal(roundNumber(lastPick, 12), 16);
    assert.equal(roundNumber(firstPick - 1, 12), 8, 'the pick before falls in the previous round');
    assert.equal(roundNumber(lastPick + 1, 12), 17, 'the pick after falls in the next round');
    assert.ok(roundOf(lastPick, 12) > 16, 'the fractional form exceeds 16 despite being inside round 16');
  });
});
