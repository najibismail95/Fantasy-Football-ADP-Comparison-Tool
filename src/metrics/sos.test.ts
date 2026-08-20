import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { defenseIndex, computeSos, byeWeeks, rankLabel, type ScheduleGame } from './sos.js';

describe('defenseIndex', () => {
  it('indexes each defense against its position average, 100 = average', () => {
    // Per game: 10 / 20 / 30 / 40 -> mean 25 -> 40 / 80 / 120 / 160.
    const idx = defenseIndex([
      { team: 'AAA', pos: 'RB', pointsAllowed: 170, games: 17 },
      { team: 'BBB', pos: 'RB', pointsAllowed: 340, games: 17 },
      { team: 'CCC', pos: 'RB', pointsAllowed: 510, games: 17 },
      { team: 'DDD', pos: 'RB', pointsAllowed: 680, games: 17 },
    ]).get('RB')!;

    assert.equal(idx.get('AAA'), 40);
    assert.equal(idx.get('BBB'), 80);
    assert.equal(idx.get('CCC'), 120);
    assert.equal(idx.get('DDD'), 160);
  });

  it('normalizes WITHIN position, so different scoring scales stay comparable', () => {
    // A defense 20% above average has to read as 120 whether the position
    // scores 30 points a game or 6. Without per-position normalization the TE
    // column would sit near 20 next to an RB column near 100 and every TE
    // schedule would look impossibly hard.
    const idx = defenseIndex([
      { team: 'AAA', pos: 'RB', pointsAllowed: 200, games: 10 }, // 20/gm
      { team: 'BBB', pos: 'RB', pointsAllowed: 300, games: 10 }, // 30/gm
      { team: 'AAA', pos: 'TE', pointsAllowed: 40, games: 10 }, //  4/gm
      { team: 'BBB', pos: 'TE', pointsAllowed: 60, games: 10 }, //  6/gm
    ]);

    assert.equal(idx.get('RB')!.get('AAA'), 80);
    assert.equal(idx.get('TE')!.get('AAA'), 80);
    assert.equal(idx.get('RB')!.get('BBB'), 120);
    assert.equal(idx.get('TE')!.get('BBB'), 120);
  });

  it('a position that scored nothing yields a flat 100, never Infinity', () => {
    const idx = defenseIndex([
      { team: 'AAA', pos: 'K', pointsAllowed: 0, games: 17 },
      { team: 'BBB', pos: 'K', pointsAllowed: 0, games: 17 },
    ]).get('K')!;

    assert.equal(idx.get('AAA'), 100);
    assert.ok(Number.isFinite(idx.get('BBB')!));
  });
});

describe('computeSos', () => {
  const index = new Map([['RB', new Map([['EASY', 130], ['HARD', 70], ['MID', 100]])]]);

  it('is the mean index of the opponents actually played in the range', () => {
    const schedule: ScheduleGame[] = [
      { team: 'ME', opponent: 'EASY', week: 1 },
      { team: 'ME', opponent: 'HARD', week: 2 },
    ];
    const [me] = computeSos(schedule, index, [{ name: 'regular', lo: 1, hi: 2 }]);

    assert.equal(me!.index, 100); // (130 + 70) / 2
    assert.equal(me!.games, 2);
  });

  it('a bye divides by games played, not by the width of the week range', () => {
    // The whole trap: this team has no week-2 game. Averaging over the 2-week
    // range instead of the 1 game played would report 65 — rating them as
    // having a brutal schedule purely because they had a bye.
    const schedule: ScheduleGame[] = [{ team: 'ME', opponent: 'HARD', week: 1 }];
    const [me] = computeSos(schedule, index, [{ name: 'regular', lo: 1, hi: 2 }]);

    assert.equal(me!.index, 70);
    assert.equal(me!.games, 1);
  });

  it('rank 1 is the EASIEST schedule, ranked within its own position and split', () => {
    const schedule: ScheduleGame[] = [
      { team: 'LUCKY', opponent: 'EASY', week: 1 },
      { team: 'MEH', opponent: 'MID', week: 1 },
      { team: 'CURSED', opponent: 'HARD', week: 1 },
    ];
    const out = computeSos(schedule, index, [{ name: 'regular', lo: 1, hi: 1 }]);
    const rank = (t: string) => out.find((r) => r.team === t)!.rank;

    assert.equal(rank('LUCKY'), 1);
    assert.equal(rank('MEH'), 2);
    assert.equal(rank('CURSED'), 3);
  });

  it('ranks each split independently — an easy season can hide a hard playoff run', () => {
    // This is the entire point of the feature: SEASON plays two easy defenses
    // then draws the hardest one in the playoff window, so its two ranks
    // disagree. A single full-season number would average that away.
    const schedule: ScheduleGame[] = [
      { team: 'SEASON', opponent: 'EASY', week: 1 },
      { team: 'SEASON', opponent: 'EASY', week: 2 },
      { team: 'SEASON', opponent: 'HARD', week: 3 },
      { team: 'OTHER', opponent: 'HARD', week: 1 },
      { team: 'OTHER', opponent: 'HARD', week: 2 },
      { team: 'OTHER', opponent: 'EASY', week: 3 },
    ];
    const out = computeSos(schedule, index, [
      { name: 'regular', lo: 1, hi: 2 },
      { name: 'playoffs', lo: 3, hi: 3 },
    ]);
    const at = (t: string, s: string) => out.find((r) => r.team === t && r.split === s)!;

    assert.equal(at('SEASON', 'regular').rank, 1);
    assert.equal(at('SEASON', 'playoffs').rank, 2);
    assert.equal(at('OTHER', 'regular').rank, 2);
    assert.equal(at('OTHER', 'playoffs').rank, 1);
  });

  it('grades on a curve, and the grade never disagrees with the rank', () => {
    // 20 teams, each playing one distinct defense on a flat 90..109 spread.
    const idx = new Map<string, number>();
    const schedule: ScheduleGame[] = [];
    for (let i = 0; i < 20; i++) {
      idx.set(`D${i}`, 90 + i);
      schedule.push({ team: `T${i}`, opponent: `D${i}`, week: 1 });
    }
    const out = computeSos(schedule, new Map([['RB', idx]]), [{ name: 'regular', lo: 1, hi: 1 }]);
    const byTeam = new Map(out.map((r) => [r.team, r]));

    // T19 draws the most generous defense in the set, so it is both rank 1 and an A.
    assert.equal(byTeam.get('T19')!.rank, 1);
    assert.equal(byTeam.get('T19')!.grade, 'A');
    assert.equal(byTeam.get('T0')!.grade, 'F');

    // The real property: a worse rank can never carry a better letter. Rank and
    // grade are two views of one ordering, and a table showing both would look
    // broken the moment they disagreed.
    const order = ['A', 'B', 'C', 'D', 'F'];
    const sorted = [...out].sort((a, b) => a.rank - b.rank);
    for (let i = 1; i < sorted.length; i++) {
      assert.ok(
        order.indexOf(sorted[i]!.grade) >= order.indexOf(sorted[i - 1]!.grade),
        `rank ${sorted[i]!.rank} graded ${sorted[i]!.grade}, better than rank ${sorted[i - 1]!.rank}`,
      );
    }
  });

  it('throws on an opponent with no rating rather than silently averaging fewer games', () => {
    // nflverse calls the Rams LA, this project calls them LAR. Skipping the
    // game would still emit a rating, just quietly computed over one fewer
    // opponent, with nothing in the output to show it happened.
    const schedule: ScheduleGame[] = [
      { team: 'ME', opponent: 'EASY', week: 1 },
      { team: 'ME', opponent: 'LA', week: 2 },
    ];
    assert.throws(
      () => computeSos(schedule, index, [{ name: 'regular', lo: 1, hi: 2 }]),
      /no RB defensive rating for LA/,
    );
  });
});

describe('rankLabel', () => {
  it('counts from the easy end for the top half', () => {
    assert.equal(rankLabel(1, 32), '1st easiest');
    assert.equal(rankLabel(2, 32), '2nd easiest');
    assert.equal(rankLabel(3, 32), '3rd easiest');
    assert.equal(rankLabel(4, 32), '4th easiest');
  });

  it('flips to counting from the hard end past the midpoint', () => {
    // The whole point: rank 31 of 32 is "2nd hardest", never "31st easiest".
    assert.equal(rankLabel(32, 32), '1st hardest');
    assert.equal(rankLabel(31, 32), '2nd hardest');
    assert.equal(rankLabel(29, 32), '4th hardest');
  });

  it('does not produce 11st/12nd/13rd', () => {
    assert.equal(rankLabel(11, 32), '11th easiest');
    assert.equal(rankLabel(12, 32), '12th easiest');
    assert.equal(rankLabel(13, 32), '13th easiest');
  });

  it('splits the middle without ever crossing over', () => {
    assert.equal(rankLabel(16, 32), '16th easiest');
    assert.equal(rankLabel(17, 32), '16th hardest');
  });
});

describe('byeWeeks', () => {
  it('finds the week a team is missing from an otherwise full schedule', () => {
    const schedule: ScheduleGame[] = [
      { team: 'ME', opponent: 'X', week: 1 },
      { team: 'ME', opponent: 'X', week: 2 },
      { team: 'ME', opponent: 'X', week: 4 },
      { team: 'FULL', opponent: 'X', week: 1 },
      { team: 'FULL', opponent: 'X', week: 2 },
      { team: 'FULL', opponent: 'X', week: 3 },
      { team: 'FULL', opponent: 'X', week: 4 },
    ];
    const byes = byeWeeks(schedule);

    assert.equal(byes.get('ME'), 3);
    assert.equal(byes.has('FULL'), false); // plays every week — no bye to report
  });
});
