import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { buildConsensusAdp, type RawAdpRow } from './confidence.js';

describe('buildConsensusAdp', () => {
  test('a real 3-source consensus computes the median', () => {
    const rows: RawAdpRow[] = [
      { playerId: 'p1', source: 'ESPN', adp: 10 },
      { playerId: 'p1', source: 'SLEEPER', adp: 8 },
      { playerId: 'p1', source: 'YAHOO', adp: 12 },
    ];
    const out = buildConsensusAdp(rows);
    assert.equal(out[0]!.adp, 10);
    assert.equal(out[0]!.nSources, 3);
  });

  test('a player with only one source is dropped, not graded on thin data', () => {
    // Regression: Pat Freiermuth had one surviving ADP source after ESPN's
    // value was censored, and a "consensus" of one produced a false A grade.
    const rows: RawAdpRow[] = [{ playerId: 'lonely', source: 'YAHOO', adp: 240 }];
    const out = buildConsensusAdp(rows);
    assert.equal(out.find((r) => r.playerId === 'lonely'), undefined);
  });

  test('a censored ESPN ceiling is excluded, and can drop a player to <2 sources', () => {
    // 60 ESPN values: 50 spread out, then 10 piled at the ceiling (censored).
    const spread = Array.from({ length: 50 }, (_, i) => ({ playerId: `p${i}`, source: 'ESPN', adp: i + 1 }));
    const piled = Array.from({ length: 10 }, (_, i) => ({ playerId: `late${i}`, source: 'ESPN', adp: 170 }));
    const oneRealSource = [{ playerId: 'late0', source: 'YAHOO', adp: 300 }];
    const out = buildConsensusAdp([...spread, ...piled, ...oneRealSource]);
    // late0 had a censored ESPN value + one real Yahoo value -> after dropping
    // the censored ESPN reading, only 1 real source remains.
    assert.equal(out.find((r) => r.playerId === 'late0'), undefined);
  });

  test('an uncensored source with fewer than 50 values is left alone', () => {
    // detectCensoring requires >=50 points to judge; small sources should not
    // have values dropped just because the sample is small.
    const rows: RawAdpRow[] = [
      { playerId: 'p1', source: 'SLEEPER', adp: 200 },
      { playerId: 'p1', source: 'YAHOO', adp: 210 },
    ];
    const out = buildConsensusAdp(rows);
    assert.equal(out[0]!.nSources, 2);
  });
});
