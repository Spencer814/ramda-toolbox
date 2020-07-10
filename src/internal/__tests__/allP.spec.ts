import { __, bind } from 'ramda';

const allP = require('../allP');

const resolveP = bind(Promise.resolve, Promise);
const rejectP = bind(Promise.reject, Promise);

describe('utility', () => {
  describe('toolbox', () => {
    describe('allP', () => {
      test('should return reference to itself if no arguments are given', () => {
        expect.assertions(1);

        expect(allP()).toStrictEqual(allP);
      });

      test('should resolve list of thenable values', async () => {
        expect.assertions(1);

        const p1 = resolveP(1);
        const p2 = resolveP(2);
        const actual = await allP([p1, p2]);

        expect(actual).toEqual([1, 2]);
      });

      test('should resolve list of mixed thenable and non-thenable values', async () => {
        expect.assertions(1);

        const p1 = resolveP(1);
        const p2 = 2;
        const actual = await allP([p1, p2]);

        expect(actual).toEqual([1, 2]);
      });

      test('should resolve list of rejected thenable values', async () => {
        expect.assertions(1);

        const p1 = resolveP(1);
        const p2 = rejectP(2);

        await allP([p1, p2]).catch(e => expect(e).toStrictEqual(2));
      });

      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all#Promise.all_fail-fast_behaviour
      test('should have fail-fast behavior', async () => {
        expect.assertions(1);

        const p1 = resolveP(() => { setTimeout(resolveP, 10, 'one'); });
        const p2 = resolveP(() => { setTimeout(resolveP, 20, 'two'); });
        const p3 = resolveP(() => { setTimeout(resolveP, 30, 'three'); });
        const p4 = resolveP(() => { setTimeout(resolveP, 40, 'four'); });
        const p5 = rejectP(new Error());

        await allP([p1, p2, p3, p4, p5]).catch(e => expect(e).toBeInstanceOf(Error));
      });

      test('should reject with the first rejection if multiple are present', async () => {
        expect.assertions(1);

        const p1 = resolveP(1);
        const p2 = rejectP(1);
        const p3 = rejectP(2);

        await allP([p1, p2, p3]).catch(e => expect(e).toStrictEqual(1));
      });

      test('should support placeholder to specify "gaps"', async () => {
        expect.assertions(1);

        const example = allP(__);

        expect(await example([1, 2, 3])).toEqual([1, 2, 3]);
      });
    });
  });
});
