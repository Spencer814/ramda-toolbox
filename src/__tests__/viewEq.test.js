import { viewEq, viewEqIndex, viewEqPath, viewEqProp } from '../viewEq.js';

describe('utility', () => {
  describe('toolbox', () => {
    describe('viewEq', () => {
      test('tests index viewEq', () => {
        expect.assertions(1);

        expect(viewEq(0, 'foo', ['foo', 'bar'])).toBe(true);
      });

      test('tests index currying', () => {
        expect.assertions(3);

        expect(viewEq(0)('foo')(['foo', 'bar'])).toBe(true);
        expect(viewEq(0, 'foo')(['foo', 'bar'])).toBe(true);
        expect(viewEq(0)('foo', ['foo', 'bar'])).toBe(true);
      });

      test('tests path viewEq', () => {
        expect.assertions(1);

        expect(viewEq(['foo', 'bar'], 'baz', { foo: { bar: 'baz' } })).toBe(
          true
        );
      });

      test('tests path currying', () => {
        expect.assertions(3);

        expect(viewEq(['foo', 'bar'])('baz')({ foo: { bar: 'baz' } })).toBe(
          true
        );
        expect(viewEq(['foo', 'bar'], 'baz')({ foo: { bar: 'baz' } })).toBe(
          true
        );
        expect(viewEq(['foo', 'bar'])('baz', { foo: { bar: 'baz' } })).toBe(
          true
        );
      });

      test('tests prop viewEq', () => {
        expect.assertions(1);

        expect(viewEq('foo', 'bar', { foo: 'bar' })).toBe(true);
      });

      test('tests prop currying', () => {
        expect.assertions(3);

        expect(viewEq('foo')('bar')({ foo: 'bar' })).toBe(true);
        expect(viewEq('foo', 'bar')({ foo: 'bar' })).toBe(true);
        expect(viewEq('foo')('bar', { foo: 'bar' })).toBe(true);
      });
    });

    describe('viewEqIndex', () => {
      test('tests index viewEq', () => {
        expect.assertions(1);

        expect(viewEqIndex(1, 'foo', ['bar', false, 1])).toBe(false);
      });

      test('tests currying', () => {
        expect.assertions(3);

        expect(viewEqIndex(1)('foo')(['bar', false, 1])).toBe(false);
        expect(viewEqIndex(1, 'foo')(['bar', false, 1])).toBe(false);
        expect(viewEqIndex(1)('foo', ['bar', false, 1])).toBe(false);
      });
    });

    describe('viewEqPath', () => {
      test('tests path viewEq', () => {
        expect.assertions(1);

        expect(viewEqPath(['bar'], true, { bar: false })).toBe(false);
      });

      test('tests currying', () => {
        expect.assertions(3);

        expect(viewEqPath(['bar'])(true)({ bar: false })).toBe(false);
        expect(viewEqPath(['bar'], true)({ bar: false })).toBe(false);
        expect(viewEqPath(['bar'])(true, { bar: false })).toBe(false);
      });
    });

    describe('viewEqProp', () => {
      test('tests prop viewEq', () => {
        expect.assertions(1);

        expect(viewEqProp('bar', true, { bar: false })).toBe(false);
      });

      test('tests currying', () => {
        expect.assertions(3);

        expect(viewEqProp('bar')(true)({ bar: false })).toBe(false);
        expect(viewEqProp('bar', true)({ bar: false })).toBe(false);
        expect(viewEqProp('bar')(true, { bar: false })).toBe(false);
      });
    });
  });
});
