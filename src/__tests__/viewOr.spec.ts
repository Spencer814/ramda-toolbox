import viewOr from '../viewOr';

describe('utility', () => {
  describe('toolbox', () => {
    describe('viewOr', () => {
      test('tests "view"', () => {
        expect.assertions(3);

        expect(viewOr('foo', 'bar', { bar: 'foobar' })).toBe('foobar');
        expect(viewOr('foo', 'bar', { bar: false })).toBe(false);
        expect(viewOr('foo', 'bar', { bar: 1 })).toBe(1);
      });

      test('tests found "view" with default value fallback', () => {
        expect.assertions(3);

        expect(viewOr('foo', 'bar', { bar: undefined })).toBe('foo');
        expect(viewOr('foo', 'bar', { bar: null })).toBe('foo');
        expect(viewOr('foo', 'bar', { bar: NaN })).toBe('foo');
      });

      test('tests default value', () => {
        expect.assertions(3);

        expect(viewOr('foo', 'bar', {})).toBe('foo');
        expect(viewOr('foo', 11, [])).toBe('foo');
        expect(viewOr('foo', 11, {})).toBe('foo');
      });

      test('tests currying', () => {
        expect.assertions(3);

        expect(viewOr('foo')('bar')({})).toBe('foo');
        expect(viewOr('foo', 'bar')({})).toBe('foo');
        expect(viewOr('foo')('bar', {})).toBe('foo');
      });
    });
  });
});
