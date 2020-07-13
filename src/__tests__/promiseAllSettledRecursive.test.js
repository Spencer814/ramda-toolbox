import promiseAllSettledRecursive from '../promiseAllSettledRecursive.js';

describe('promiseAllSettledRecursive()', () => {
  test('wraps primitives in promises', () =>
    Promise.all([
      expect(promiseAllSettledRecursive(42)).resolves.toBe(42),
      expect(promiseAllSettledRecursive('hello')).resolves.toBe('hello')
    ]));

  test('handles plain arrays', async () => {
    const actual = promiseAllSettledRecursive([1, 2, 3]);

    await expect(actual).resolves.toEqual([
      { status: 'fulfilled', value: 1 },
      { status: 'fulfilled', value: 2 },
      { status: 'fulfilled', value: 3 }
    ]);
  });

  test('handles plain objects', async () => {
    const actual = promiseAllSettledRecursive({ a: 1, b: 2 });

    await expect(actual).resolves.toEqual({ a: 1, b: 2 });
  });

  test('handles nested empty objects', async () => {
    const actual = promiseAllSettledRecursive({ a: 1, b: {} });

    await expect(actual).resolves.toEqual({ a: 1, b: {} });
  });

  test('handles promises', async () => {
    const actual = promiseAllSettledRecursive(Promise.resolve('resolved'));

    await expect(actual).resolves.toBe('resolved');
  });

  test('handles arrays of promises', async () => {
    const arr = [Promise.resolve(1), Promise.resolve(2)];
    const actual = promiseAllSettledRecursive(arr);

    await expect(actual).resolves.toEqual([
      { status: 'fulfilled', value: 1 },
      { status: 'fulfilled', value: 2 }
    ]);
  });

  test('handles mixed arrays', async () => {
    const arr = [Promise.resolve(1), 2, Promise.resolve(3)];
    const actual = promiseAllSettledRecursive(arr);

    await expect(actual).resolves.toEqual([
      { status: 'fulfilled', value: 1 },
      { status: 'fulfilled', value: 2 },
      { status: 'fulfilled', value: 3 }
    ]);
  });

  test('handles flat objects with promises', async () => {
    const obj = { a: Promise.resolve(1), b: Promise.resolve(2), c: 3 };
    const actual = promiseAllSettledRecursive(obj);
    const expected = { a: 1, b: 2, c: 3 };

    await expect(actual).resolves.toEqual(expected);
  });

  test('handles nested objects with promises', async () => {
    const nested = { a: Promise.resolve(1) };
    const obj = { nested, b: Promise.resolve(2), c: 3 };
    const actual = promiseAllSettledRecursive(obj);
    const expected = { nested: { a: 1 }, b: 2, c: 3 };

    await expect(actual).resolves.toEqual(expected);
  });

  test('handles nested arrays with promises', async () => {
    const nested = [Promise.resolve(1), 2];
    const obj = { nested, b: Promise.resolve(2), c: 3 };
    const actual = promiseAllSettledRecursive(obj);
    const expected = {
      nested: [
        { status: 'fulfilled', value: 1 },
        { status: 'fulfilled', value: 2 }
      ],
      b: 2,
      c: 3
    };

    await expect(actual).resolves.toEqual(expected);
  });

  test('handles deep nested promises', async () => {
    const nested = [{ b: [Promise.resolve(42)] }];
    const obj = { a: 1, nested };
    const actual = promiseAllSettledRecursive(obj);
    const expected = {
      a: 1,
      nested: [
        {
          status: 'fulfilled',
          value: {
            b: [{ status: 'fulfilled', value: 42 }]
          }
        }
      ]
    };

    await expect(actual).resolves.toEqual(expected);
  });
});
