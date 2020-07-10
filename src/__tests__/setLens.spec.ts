import setLens from '../setLens';

describe('utility', () => {
  describe('toolbox', () => {
    describe('setLens', () => {
      test('tests prop set', () => {
        expect.assertions(1);

        expect(setLens('bar', 'foo', { bar: 'baz' })).toEqual({ bar: 'foo' });
      });

      test('tests path set', () => {
        expect.assertions(1);

        expect(setLens(['foo', 'bar'], 1, { foo: { bar: 'baz' } })).toEqual({ foo: { bar: 1 } });
      });

      test('tests index set', () => {
        expect.assertions(1);

        expect(setLens(0, 'foo', ['bar', false, 1])).toEqual(['foo', false, 1]);
      });

      test('tests currying', () => {
        expect.assertions(3);

        expect(setLens('bar')('foo')({ bar: 'baz' })).toEqual({ bar: 'foo' });
        expect(setLens(['foo', 'bar'], 1)({ foo: { bar: 'baz' } })).toEqual({ foo: { bar: 1 } });
        expect(setLens(0)('foo', ['baz'])).toEqual(['foo']);
      });
    });
  });
});
