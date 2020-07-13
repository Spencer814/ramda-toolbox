import { nAry, prop } from 'ramda';

import applySpecP from '../applySpecP.js';

describe('utility', () => {
  describe('toolbox', () => {
    describe('applySpecP', () => {
      const addP = async (a, b) => a + b;

      test('works with empty spec', async () => {
        expect.assertions(1);

        expect(await applySpecP({})()).toEqual({});
      });

      test('works with unary functions', async () => {
        expect.assertions(1);

        const inc = async (a) => 1 + a;
        const dec = async (a) => -1 + a;

        expect(await applySpecP({ v: inc, u: dec })(1)).toEqual({ v: 2, u: 0 });
      });

      test('works with binary functions', async () => {
        expect.assertions(1);

        expect(await applySpecP({ sum: addP })(1, 2)).toEqual({ sum: 3 });
      });

      test('works with nested specs', async () => {
        expect.assertions(1);

        const multiply = async (a, b) => a * b;

        const f = applySpecP({ mul: multiply, nested: { sum: addP } });

        expect(await f(1, 2)).toEqual({ mul: 2, nested: { sum: 3 } });
      });

      test('works with a spec defining a map key', async () => {
        expect.assertions(1);

        expect(
          await applySpecP({ map: async (o) => prop('a')(o) })({ a: 1 })
        ).toEqual({ map: 1 });
      });

      test('retains the highest arity', async () => {
        expect.assertions(1);

        const alwaysP = async (val) => val;
        const trueP = alwaysP(true);

        const f = await applySpecP({ f1: nAry(2, trueP), f2: nAry(5, trueP) });

        expect(f.length).toBe(5);
      });

      test('returns a curried function', async () => {
        expect.assertions(1);

        expect(await applySpecP({ sum: addP })(1)(2)).toEqual({ sum: 3 });
      });
    });
  });
});
