import {
  viewLens,
  viewLensIndex,
  viewLensPath,
  viewLensProp
} from '../viewLens';

describe('utility', () => {
  describe('toolbox', () => {
    describe('viewLens', () => {
      test('tests index view', () => {
        expect.assertions(3);

        expect(viewLens(0, ['foobar', false, 1])).toBe('foobar');
        expect(viewLens(1, ['foobar', false, 1])).toBe(false);
        expect(viewLens(2, ['foobar', false, 1])).toBe(1);
      });

      test('tests index currying', () => {
        expect.assertions(3);

        expect(viewLens(0)(['foobar', false, 1])).toBe('foobar');
        expect(viewLens(1)(['foobar', false, 1])).toBe(false);
        expect(viewLens(2)(['foobar', false, 1])).toBe(1);
      });

      test('tests path view', () => {
        expect.assertions(3);

        expect(viewLens(['foo', 'bar'], { foo: { bar: 'foobar' } })).toBe(
          'foobar'
        );
        expect(viewLens(['foo', 'bar'], { foo: { bar: false } })).toBe(false);
        expect(viewLens(['foo', 'bar'], { foo: { bar: 1 } })).toBe(1);
      });

      test('tests path currying', () => {
        expect.assertions(3);

        expect(viewLens(['foo', 'bar'])({ foo: { bar: 'foobar' } })).toBe(
          'foobar'
        );
        expect(viewLens(['foo', 'bar'])({ foo: { bar: false } })).toBe(false);
        expect(viewLens(['foo', 'bar'])({ foo: { bar: 1 } })).toBe(1);
      });

      test('tests prop view', () => {
        expect.assertions(3);

        expect(viewLens('bar', { bar: 'foobar' })).toBe('foobar');
        expect(viewLens('bar', { bar: false })).toBe(false);
        expect(viewLens('bar', { bar: 1 })).toBe(1);
      });

      test('tests prop currying', () => {
        expect.assertions(3);

        expect(viewLens('bar')({ bar: 'foobar' })).toBe('foobar');
        expect(viewLens('bar')({ bar: false })).toBe(false);
        expect(viewLens('bar')({ bar: 1 })).toBe(1);
      });
    });

    describe('viewLensIndex', () => {
      test('tests index view', () => {
        expect.assertions(3);

        expect(viewLensIndex(0, ['foobar', false, 1])).toBe('foobar');
        expect(viewLensIndex(1, ['foobar', false, 1])).toBe(false);
        expect(viewLensIndex(2, ['foobar', false, 1])).toBe(1);
      });

      test('tests currying', () => {
        expect.assertions(3);

        expect(viewLensIndex(0)(['foobar', false, 1])).toBe('foobar');
        expect(viewLensIndex(1)(['foobar', false, 1])).toBe(false);
        expect(viewLensIndex(2)(['foobar', false, 1])).toBe(1);
      });
    });

    describe('viewLensPath', () => {
      test('tests path view', () => {
        expect.assertions(3);

        expect(viewLensPath(['foo', 'bar'], { foo: { bar: 'foobar' } })).toBe(
          'foobar'
        );
        expect(viewLensPath(['foo', 'bar'], { foo: { bar: false } })).toBe(
          false
        );
        expect(viewLensPath(['foo', 'bar'], { foo: { bar: 1 } })).toBe(1);
      });

      test('tests currying', () => {
        expect.assertions(3);

        expect(viewLensPath(['foo', 'bar'])({ foo: { bar: 'foobar' } })).toBe(
          'foobar'
        );
        expect(viewLensPath(['foo', 'bar'])({ foo: { bar: false } })).toBe(
          false
        );
        expect(viewLensPath(['foo', 'bar'])({ foo: { bar: 1 } })).toBe(1);
      });
    });

    describe('viewLensProp', () => {
      test('tests prop view', () => {
        expect.assertions(3);

        expect(viewLensProp('bar', { bar: 'foobar' })).toBe('foobar');
        expect(viewLensProp('bar', { bar: false })).toBe(false);
        expect(viewLensProp('bar', { bar: 1 })).toBe(1);
      });

      test('tests currying', () => {
        expect.assertions(3);

        expect(viewLensProp('bar')({ bar: 'foobar' })).toBe('foobar');
        expect(viewLensProp('bar')({ bar: false })).toBe(false);
        expect(viewLensProp('bar')({ bar: 1 })).toBe(1);
      });
    });
  });
});
