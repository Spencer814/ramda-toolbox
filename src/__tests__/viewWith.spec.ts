import { viewWith, viewWithIndex, viewWithPath, viewWithProp } from '../viewWith';

interface Dictionary {
  [index: string]: any;
}

describe('utility', () => {
  describe('toolbox', () => {
    const testObj: Dictionary = { toast: 1, waffle: 'crepe', bacon: 'nacho' };

    describe('viewWith', () => {
      test('it should use an index with viewWith', () => {
        expect.assertions(1);

        expect(viewWith(0, x => x * 3, [4])).toEqual(12);
      });

      test('it should use an index with viewWith curried', () => {
        expect.assertions(3);

        expect(viewWith(0)(x => x * 3)([4])).toEqual(12);
        expect(viewWith(0, x => x * 3)([4])).toEqual(12);
        expect(viewWith(0)(x => x * 3, [4])).toEqual(12);
      });

      test('it should use path with viewWith', () => {
        expect.assertions(1);

        expect(viewWith(['foo'], x => testObj[x], { foo: 'waffle' })).toEqual(
          'crepe'
        );
      });

      test('it should use path with viewWith curried', () => {
        expect.assertions(3);

        expect(viewWith(['foo'])(x => testObj[x])({ foo: 'waffle' })).toEqual(
          'crepe'
        );
        expect(viewWith(['foo'], x => testObj[x])({ foo: 'waffle' })).toEqual(
          'crepe'
        );
        expect(viewWith(['foo'])(x => testObj[x], { foo: 'waffle' })).toEqual(
          'crepe'
        );
      });

      test('it should use prop with viewWith', () => {
        expect.assertions(1);

        expect(viewWith('foo', x => x === null, [{ foo: true }])).toEqual(
          false
        );
      });

      test('it should use prop with viewWith curried', () => {
        expect.assertions(3);

        expect(viewWith('foo')(x => x === null)([{ foo: true }])).toEqual(
          false
        );
        expect(viewWith('foo', x => x === null)([{ foo: true }])).toEqual(
          false
        );
        expect(viewWith('foo')(x => x === null, [{ foo: true }])).toEqual(
          false
        );
      });
    });

    describe('viewWithIndex', () => {
      test('it should use an index with viewWithIndex', () => {
        expect.assertions(1);

        expect(viewWithIndex(0, x => x * 2, [4])).toEqual(8);
      });

      test('it should use an index with viewWithIndex curried', () => {
        expect.assertions(3);

        expect(viewWithIndex(0)(x => x * 2)([4])).toEqual(8);
        expect(viewWithIndex(0, x => x * 2)([4])).toEqual(8);
        expect(viewWithIndex(0)(x => x * 2, [4])).toEqual(8);
      });
    });

    describe('viewWithPath', () => {
      test('it should use path with viewWithPath', () => {
        expect.assertions(1);

        expect(
          viewWithPath(['foo', 'bar'], x => testObj[x], {
            foo: { bar: 'bacon' }
          })
        ).toEqual('nacho');
      });

      test('it should use path with viewWithPath curried', () => {
        expect.assertions(3);

        expect(
          viewWithPath(['foo', 'bar'])(x => testObj[x])({
            foo: { bar: 'bacon' }
          })
        ).toEqual('nacho');
        expect(
          viewWithPath(
            ['foo', 'bar'],
            x => testObj[x]
          )({ foo: { bar: 'bacon' } })
        ).toEqual('nacho');
        expect(
          viewWithPath(['foo', 'bar'])(x => testObj[x], {
            foo: { bar: 'bacon' }
          })
        ).toEqual('nacho');
      });
    });

    describe('viewWithProp', () => {
      test('it should use prop with viewWithProp', () => {
        expect.assertions(1);

        expect(viewWithProp('foo', x => x == null, [{ foo: true }])).toEqual(
          true
        );
      });

      test('it should use prop with viewWithProp curried', () => {
        expect.assertions(3);

        expect(viewWithProp('foo')(x => x == null)([{ foo: true }])).toEqual(
          true
        );
        expect(viewWithProp('foo', x => x == null)([{ foo: true }])).toEqual(
          true
        );
        expect(viewWithProp('foo')(x => x == null, [{ foo: true }])).toEqual(
          true
        );
      });
    });
  });
});
