import { nthArg, prop } from 'ramda';

import applySpecP from '../applySpecP';

describe('utility', () => {
  describe('toolbox', () => {
    describe('applySpecP', () => {
      const addP = async (a: number, b: number): Promise<number> => a + b;

      test('works with empty spec', async () => {
        expect.assertions(1);

        expect(await applySpecP({})()).toEqual({});
      });

      test('works with unary functions', async () => {
        expect.assertions(1);

        const inc = async (a: number) => 1 + a;
        const dec = async (a: number) => -1 + a;

        expect(await applySpecP({ v: inc, u: dec })(1))
          .toEqual({ v: 2, u: 0 });
      });

      test('works with binary functions', async () => {
        expect.assertions(1);

        expect(await applySpecP({ sum: addP })(1, 2)).toEqual({ sum: 3 });
      });

      test('works with nested specs', async () => {
        expect.assertions(1);

        const multiply = async (a: number, b: number) => a * b;

        const f = applySpecP({ mul: multiply, nested: { sum: addP } });

        expect(await f(1, 2)).toEqual({ mul: 2, nested: { sum: 3 } });
      });

      test('works with a spec defining a map key', async () => {
        expect.assertions(1);

        expect(await applySpecP({ map: async (o: any) => prop('a')(o) })({ a: 1 }))
          .toEqual({ map: 1 });
      });

      test('retains the highest arity', async () => {
        expect.assertions(2);

        const binaryFn: <A, B>(a: A, b: B) => Promise<string> =
        async (a, b) => `BinaryFn called with ${a}, ${b}`;

        const trinayFn: <A, B, C>(a:A, b:B, c:C) => Promise<string> =
        async (a, b, c) => `TryinaryFn called with ${a}, ${b}, ${c}`;

        const thirdArg = nthArg(2);
        const f = await applySpecP({
          f1: binaryFn,
          f2: trinayFn,
          notAFunc: [thirdArg, thirdArg, thirdArg, thirdArg]
        });

        expect(f.length).toBe(3);

        const result = await f(0, 1, 2, 3, 4, 5);

        expect(result).toEqual({
          f1: 'BinaryFn called with 0, 1',
          f2: 'TryinaryFn called with 0, 1, 2',
          notAFunc: {
            0: 2,
            1: 2,
            2: 2,
            3: 2
          }
        });
      });

      test('returns a curried function', async () => {
        expect.assertions(1);

        expect(await applySpecP({ sum: addP })(1)(2)).toEqual({ sum: 3 });
      });
    });
  });
});
