import { nAry, prop } from 'ramda';

import applySpecPSettled from '../applySpecPSettled.js';

describe('utility', () => {
  describe('toolbox', () => {
    describe('applySpecPSettled', () => {
      const addP = async (a, b) => a + b;

      test('works with empty spec', async () => {
        expect.assertions(1);

        expect(await applySpecPSettled({})()).toEqual({});
      });

      test('works with unary functions', async () => {
        expect.assertions(1);

        const inc = async (a) => 1 + a;
        const dec = async (a) => -1 + a;

        expect(await applySpecPSettled({ v: inc, u: dec })(1)).toEqual({
          v: 2,
          u: 0
        });
      });

      test('works with binary functions', async () => {
        expect.assertions(1);

        expect(await applySpecPSettled({ sum: addP })(1, 2)).toEqual({
          sum: 3
        });
      });

      test('works with nested specs', async () => {
        expect.assertions(1);

        const multiply = async (a, b) => a * b;

        const f = applySpecPSettled({ mul: multiply, nested: { sum: addP } });

        expect(await f(1, 2)).toEqual({ mul: 2, nested: { sum: 3 } });
      });

      test('works with a spec defining a map key', async () => {
        expect.assertions(1);

        expect(
          await applySpecPSettled({ map: async (o) => prop('a')(o) })({ a: 1 })
        ).toEqual({ map: 1 });
      });

      test('retains the highest arity', async () => {
        expect.assertions(1);

        const alwaysP = async (val) => val;
        const trueP = alwaysP(true);

        const f = await applySpecPSettled({
          f1: nAry(2, trueP),
          f2: nAry(5, trueP)
        });

        expect(f.length).toBe(5);
      });

      test('returns a curried function', async () => {
        expect.assertions(1);

        expect(await applySpecPSettled({ sum: addP })(1)(2)).toEqual({
          sum: 3
        });
      });
    });
  });
});
