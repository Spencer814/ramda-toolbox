import { setLens, setLensIndex, setLensPath, setLensProp } from '../setLens.js';

describe('utility', () => {
  describe('toolbox', () => {
    describe('setLens', () => {
      test('tests index set', () => {
        expect.assertions(1);

        expect(setLens(0, 'foo', ['bar', false, 1])).toEqual(['foo', false, 1]);
      });

      test('tests index currying', () => {
        expect.assertions(3);

        expect(setLens(0)('foo')(['baz'])).toEqual(['foo']);
        expect(setLens(0)('foo', ['baz'])).toEqual(['foo']);
        expect(setLens(0, 'foo')(['baz'])).toEqual(['foo']);
      });

      test('tests path set', () => {
        expect.assertions(1);

        expect(setLens(['foo', 'bar'], 1, { foo: { bar: 'baz' } })).toEqual({
          foo: { bar: 1 }
        });
      });

      test('tests path currying', () => {
        expect.assertions(3);

        expect(setLens(['foo', 'bar'])(1)({ foo: { bar: 'baz' } })).toEqual({
          foo: { bar: 1 }
        });
        expect(setLens(['foo', 'bar'])(1, { foo: { bar: 'baz' } })).toEqual({
          foo: { bar: 1 }
        });
        expect(setLens(['foo', 'bar'], 1)({ foo: { bar: 'baz' } })).toEqual({
          foo: { bar: 1 }
        });
      });

      test('tests prop set', () => {
        expect.assertions(1);

        expect(setLens('bar', 'foo', { bar: 'baz' })).toEqual({ bar: 'foo' });
      });

      test('tests prop currying', () => {
        expect.assertions(3);

        expect(setLens('bar')('foo')({ bar: 'baz' })).toEqual({ bar: 'foo' });
        expect(setLens('bar')('foo', { bar: 'baz' })).toEqual({ bar: 'foo' });
        expect(setLens('bar', 'foo')({ bar: 'baz' })).toEqual({ bar: 'foo' });
      });
    });

    describe('setLensIndex', () => {
      test('tests index set', () => {
        expect.assertions(1);

        expect(setLensIndex(0, 'foo', ['bar', false, 1])).toEqual([
          'foo',
          false,
          1
        ]);
      });

      test('tests currying', () => {
        expect.assertions(3);

        expect(setLensIndex(0)('foo')(['baz'])).toEqual(['foo']);
        expect(setLensIndex(0)('foo', ['baz'])).toEqual(['foo']);
        expect(setLensIndex(0, 'foo')(['baz'])).toEqual(['foo']);
      });
    });

    describe('setLensPath', () => {
      test('tests path set', () => {
        expect.assertions(1);

        expect(
          setLensPath(['foo', 'bar'], 1, { foo: { bar: 'baz' } })
        ).toEqual({ foo: { bar: 1 } });
      });

      test('tests currying', () => {
        expect.assertions(3);

        expect(
          setLensPath(['foo', 'bar'])(1)({ foo: { bar: 'baz' } })
        ).toEqual({ foo: { bar: 1 } });
        expect(
          setLensPath(['foo', 'bar'])(1, { foo: { bar: 'baz' } })
        ).toEqual({ foo: { bar: 1 } });
        expect(
          setLensPath(['foo', 'bar'], 1)({ foo: { bar: 'baz' } })
        ).toEqual({ foo: { bar: 1 } });
      });
    });

    describe('setLensProp', () => {
      test('tests prop set', () => {
        expect.assertions(1);

        expect(setLensProp('bar', 'foo', { bar: 'baz' })).toEqual({
          bar: 'foo'
        });
      });

      test('tests currying', () => {
        expect.assertions(3);

        expect(setLensProp('bar')('foo')({ bar: 'baz' })).toEqual({
          bar: 'foo'
        });
        expect(setLensProp('bar')('foo', { bar: 'baz' })).toEqual({
          bar: 'foo'
        });
        expect(setLensProp('bar', 'foo')({ bar: 'baz' })).toEqual({
          bar: 'foo'
        });
      });
    });
  });
});
