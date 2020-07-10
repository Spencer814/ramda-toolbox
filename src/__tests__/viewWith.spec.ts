import viewWith from '../viewWith';

describe('utility', () => {
  describe('toolbox', () => {
    describe('viewWith', () => {
      test('it should use prop with viewWith', () => {
        expect.assertions(2);

        expect(viewWith('foo', x => x == null)([{ foo: true }])).toEqual(true);
        expect(viewWith('foo', x => x === null, [{ foo: true }])).toEqual(false);
      });

      test('it should use an index with viewWith', () => {
        expect.assertions(2);

        expect(viewWith(0, x => x * 2)([4])).toEqual(8);
        expect(viewWith(0, x => x * 3, [4])).toEqual(12);
      });

      test('it should use path with viewWith', () => {
        expect.assertions(2);

        const testObj = { toast: 1, waffle: 'crepe', bacon: 'nacho' };

        expect(viewWith(['foo', 'bar'], x => testObj[x])({ foo: { bar: 'bacon' } })).toEqual('nacho');
        expect(viewWith(['foo'], x => testObj[x], { foo: 'waffle' })).toEqual('crepe');
      });
    });
  });
});
