import { viewOr, viewOrIndex, viewOrPath, viewOrProp } from '../viewOr.js';

describe('utility', () => {
  describe('toolbox', () => {
    describe('viewOr', () => {
      test('tests index viewOr', () => {
        expect.assertions(3);

        expect(viewOr('foo', 1, ['bar', 'foobar'])).toBe('foobar');
        expect(viewOr('foo', 1, ['bar', undefined])).toBe('foo');
        expect(viewOr('foo', 1, [{}])).toBe('foo');
      });

      test('tests index currying', () => {
        expect.assertions(3);

        expect(viewOr('foo')(1)([{}])).toBe('foo');
        expect(viewOr('foo', 1)([{}])).toBe('foo');
        expect(viewOr('foo')(1, [{}])).toBe('foo');
      });

      test('tests path viewOr', () => {
        expect.assertions(3);

        expect(viewOr('foo', ['bar'], { bar: 'foobar' })).toBe('foobar');
        expect(viewOr('foo', ['bar'], { bar: undefined })).toBe('foo');
        expect(viewOr('foo', ['bar'], {})).toBe('foo');
      });

      test('tests path currying', () => {
        expect.assertions(3);

        expect(viewOr('foo')(['bar'])({})).toBe('foo');
        expect(viewOr('foo', ['bar'])({})).toBe('foo');
        expect(viewOr('foo')(['bar'], {})).toBe('foo');
      });

      test('tests prop viewOr', () => {
        expect.assertions(3);

        expect(viewOr('foo', 'bar', { bar: 'foobar' })).toBe('foobar');
        expect(viewOr('foo', 'bar', { bar: undefined })).toBe('foo');
        expect(viewOr('foo', 'bar', {})).toBe('foo');
      });

      test('tests prop currying', () => {
        expect.assertions(3);

        expect(viewOr('foo')('bar')({})).toBe('foo');
        expect(viewOr('foo', 'bar')({})).toBe('foo');
        expect(viewOr('foo')('bar', {})).toBe('foo');
      });
    });

    describe('viewOrIndex', () => {
      test('tests "view"', () => {
        expect.assertions(3);

        expect(viewOrIndex('foo', 1, ['bar', 'foobar'])).toBe('foobar');
        expect(viewOrIndex('foo', 1, ['bar', false])).toBe(false);
        expect(viewOrIndex('foo', 1, ['bar', 1])).toBe(1);
      });

      test('tests found "view" with default value fallback', () => {
        expect.assertions(3);

        expect(viewOrIndex('foo', 1, ['bar', undefined])).toBe('foo');
        expect(viewOrIndex('foo', 1, ['bar', null])).toBe('foo');
        expect(viewOrIndex('foo', 1, ['bar', NaN])).toBe('foo');
      });

      test('tests default value', () => {
        expect.assertions(3);

        expect(viewOrIndex('foo', 1, [{}])).toBe('foo');
        expect(viewOrIndex('foo', [11], [])).toBe('foo');
        expect(viewOrIndex('foo', [11], [{}])).toBe('foo');
      });

      test('tests currying', () => {
        expect.assertions(3);

        expect(viewOrIndex('foo')(1)([{}])).toBe('foo');
        expect(viewOrIndex('foo', 1)([{}])).toBe('foo');
        expect(viewOrIndex('foo')(1, [{}])).toBe('foo');
      });
    });

    describe('viewOrPath', () => {
      test('tests "view"', () => {
        expect.assertions(3);

        expect(viewOrPath('foo', ['bar'], { bar: 'foobar' })).toBe('foobar');
        expect(viewOrPath('foo', ['bar'], { bar: false })).toBe(false);
        expect(viewOrPath('foo', ['bar'], { bar: 1 })).toBe(1);
      });

      test('tests found "view" with default value fallback', () => {
        expect.assertions(3);

        expect(viewOrPath('foo', ['bar'], { bar: undefined })).toBe('foo');
        expect(viewOrPath('foo', ['bar'], { bar: null })).toBe('foo');
        expect(viewOrPath('foo', ['bar'], { bar: NaN })).toBe('foo');
      });

      test('tests default value', () => {
        expect.assertions(3);

        expect(viewOrPath('foo', ['bar'], {})).toBe('foo');
        expect(viewOrPath('foo', [11], [])).toBe('foo');
        expect(viewOrPath('foo', [11], {})).toBe('foo');
      });

      test('tests currying', () => {
        expect.assertions(3);

        expect(viewOrPath('foo')(['bar'])({})).toBe('foo');
        expect(viewOrPath('foo', ['bar'])({})).toBe('foo');
        expect(viewOrPath('foo')(['bar'], {})).toBe('foo');
      });
    });

    describe('viewOrProp', () => {
      test('tests "view"', () => {
        expect.assertions(3);

        expect(viewOrProp('foo', 'bar', { bar: 'foobar' })).toBe('foobar');
        expect(viewOrProp('foo', 'bar', { bar: false })).toBe(false);
        expect(viewOrProp('foo', 'bar', { bar: 1 })).toBe(1);
      });

      test('tests found "view" with default value fallback', () => {
        expect.assertions(3);

        expect(viewOrProp('foo', 'bar', { bar: undefined })).toBe('foo');
        expect(viewOrProp('foo', 'bar', { bar: null })).toBe('foo');
        expect(viewOrProp('foo', 'bar', { bar: NaN })).toBe('foo');
      });

      test('tests default value', () => {
        expect.assertions(3);

        expect(viewOrProp('foo', 'bar', {})).toBe('foo');
        expect(viewOrProp('foo', 11, [])).toBe('foo');
        expect(viewOrProp('foo', 11, {})).toBe('foo');
      });

      test('tests currying', () => {
        expect.assertions(3);

        expect(viewOrProp('foo')('bar')({})).toBe('foo');
        expect(viewOrProp('foo', 'bar')({})).toBe('foo');
        expect(viewOrProp('foo')('bar', {})).toBe('foo');
      });
    });
  });
});
