import { lensIndex, lensPath, lensProp, view } from 'ramda';

import lensFn from '../lensFn';

describe('utility', () => {
  describe('toolbox', () => {
    describe('lensFn', () => {
      test('should return lensIndex when input is a number', () => {
        // expect.assertions(2);

        const arr = ['a', 'b', 'c'];

        const good = view(lensFn(0), arr);
        const bad = view(lensFn(1), arr);
        const expected = view(lensIndex(0), arr);

        expect(good).toStrictEqual(expected);
        expect(bad).not.toStrictEqual(expected);
      });

      test('should return lensPath when input is an array', () => {
        // expect.assertions(2);

        const obj = {
          x: [
            { y: 2, z: 3 },
            { y: 4, z: 5 }
          ]
        };

        const good = view(lensFn(['x', 0, 'y']), obj);
        const bad = view(lensFn(['x', 1, 'z']), obj);
        const expected = view(lensPath(['x', 0, 'y']), obj);

        expect(good).toStrictEqual(expected);
        expect(bad).not.toStrictEqual(expected);
      });

      test('should return lensProp when input is neither a number or an array', () => {
        // expect.assertions(2);

        const obj = { x: 1, y: 2 };

        const good = view(lensFn('x'), obj);
        const bad = view(lensFn('y'), obj);
        const expected = view(lensProp('x'), obj);

        expect(good).toStrictEqual(expected);
        expect(bad).not.toStrictEqual(expected);
      });
    });
  });
});
