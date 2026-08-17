import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { parseYahoo } from './yahoo.js';
import { Crosswalk } from '../resolve/crosswalk.js';
import { normName } from '../resolve/normalize.js';
import type { CanonPlayer } from '../types.js';

/**
 * Offline, against a payload shaped exactly like the live one — the traps here
 * (string numerics, mixed-case teams, two different average_pick series) are
 * all silent failures, so they get pinned rather than trusted.
 */

const player = (displayName: string, pos: string, team: string | null, id: string): CanonPlayer => ({
  playerId: id,
  name: normName(displayName),
  displayName,
  pos,
  team,
  espnId: null,
  searchRank: Number(id),
  active: true,
});

const spine: CanonPlayer[] = [
  player('Jahmyr Gibbs', 'RB', 'DET', '1'),
  player('Ja\'Marr Chase', 'WR', 'CIN', '2'),
  player('Texans', 'DEF', 'HOU', '3'),
];
const xwalk = new Crosswalk(spine);

/** Wraps rows in the real pub-api-ro envelope. */
const page = (players: unknown[]) =>
  JSON.stringify({ fantasy_content: { game: { players: players.map((p) => ({ player: p })) } } });

const row = (
  id: string,
  full: string,
  pos: string,
  team: string | null,
  draft: Record<string, string> | null,
) => ({
  player_id: id,
  name: { full },
  display_position: pos,
  editorial_team_abbr: team,
  ...(draft ? { draft_analysis: draft } : {}),
});

/** Enough rows to clear MIN_EXPECTED_ROWS without hand-writing 150 of them. */
const filler = (n: number) =>
  Array.from({ length: n }, (_, i) =>
    row(`f${i}`, 'Jahmyr Gibbs', 'RB', 'Det', { average_pick: String(i + 1.5) }),
  );

describe('parseYahoo', () => {
  test('parses string numerics into real numbers', () => {
    // Every Yahoo numeric is a JSON string; a naive read leaves adp as "1.5".
    const out = parseYahoo([page([row('1', 'Jahmyr Gibbs', 'RB', 'Det',
      { average_pick: '1.5', average_cost: '73.5' }), ...filler(200)])], xwalk);
    const gibbs = out.adp.find((r) => r.sourceId === '1')!;
    assert.equal(typeof gibbs.adp, 'number');
    assert.equal(gibbs.adp, 1.5);
    assert.equal(gibbs.auctionValue, 73.5, 'average_cost is the auction value');
  });

  test('reads average_pick, NOT preseason_average_pick', () => {
    // Both exist in the payload. preseason is frozen; taking it would look
    // correct and silently stop tracking live drafts.
    const out = parseYahoo([page([row('1', 'Jahmyr Gibbs', 'RB', 'Det',
      { average_pick: '12.7', preseason_average_pick: '1.5' }), ...filler(200)])], xwalk);
    assert.equal(out.adp.find((r) => r.sourceId === '1')!.adp, 12.7);
  });

  test('uppercases mixed-case team abbreviations so defenses resolve', () => {
    // Yahoo sends "Hou"; the spine holds "HOU". Defenses resolve on TEAM
    // (crosswalk tier 1) because Yahoo sends the bare nickname "Texans" with
    // no city, so a name match alone would miss.
    const out = parseYahoo([page([row('3', 'Texans', 'DEF', 'Hou',
      { average_pick: '92.4' }), ...filler(200)])], xwalk);
    const def = out.adp.find((r) => r.sourceId === '3');
    assert.ok(def, 'the defense must resolve');
    assert.equal(def!.playerId, '3');
    assert.equal(def!.resolveTier, 'team');
  });

  test('undrafted players are skipped, not treated as an error', () => {
    const out = parseYahoo([page([
      row('1', 'Jahmyr Gibbs', 'RB', 'Det', { average_pick: '1.5' }),
      row('99', 'Nobody Drafted', 'WR', 'Sea', null),
      row('98', 'Also Nobody', 'WR', 'Sea', { average_pick: '-' }),
      ...filler(200),
    ])], xwalk);
    assert.equal(out.adp.find((r) => r.sourceId === '99'), undefined);
    assert.equal(out.adp.find((r) => r.sourceId === '98'), undefined);
    assert.equal(out.unresolved.length, 0, 'no pick is not the same as no match');
  });

  test('a player missing from the spine is surfaced as unresolved, never dropped', () => {
    const out = parseYahoo([page([
      row('1234', 'Totally Unknown Rookie', 'WR', 'Sea', { average_pick: '150.2' }),
      ...filler(200),
    ])], xwalk);
    assert.equal(out.unresolved.length, 1);
    assert.equal(out.unresolved[0]!.sourceName, 'Totally Unknown Rookie');
  });

  test('duplicate ids across pages are counted once', () => {
    // Depth can shift between page fetches, so pages may overlap.
    const p = page([row('1', 'Jahmyr Gibbs', 'RB', 'Det', { average_pick: '1.5' }), ...filler(200)]);
    const out = parseYahoo([p, p], xwalk);
    assert.equal(out.adp.filter((r) => r.sourceId === '1').length, 1);
  });

  test('a collapsed payload throws rather than writing a near-empty source', () => {
    // The failure this exists to catch: the field moves and every row parses
    // to nothing. Writing that would look like the market vanished.
    assert.throws(
      () => parseYahoo([page([row('1', 'Jahmyr Gibbs', 'RB', 'Det', { average_pick: '1.5' })])], xwalk),
      /only 1 ADP values/,
    );
  });

  test('a rank series in the ADP field is rejected', () => {
    const ranks = Array.from({ length: 200 }, (_, i) =>
      row(`r${i}`, 'Jahmyr Gibbs', 'RB', 'Det', { average_pick: String(i + 1) }));
    assert.throws(() => parseYahoo([page(ranks)], xwalk), /looks like RANK data/);
  });
});
