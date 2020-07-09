import viewEq from '../viewEq';

describe('utility', () => {
  describe('toolbox', () => {
    describe('viewEq', () => {
      test('tests "view"', () => {
        expect.assertions(2);

        expect(viewEq('foo', 'bar', { foo: 'bar' })).toBe(true);
        expect(viewEq('bar', true, { bar: false })).toBe(false);
      });

      test('tests currying', () => {
        expect.assertions(3);

        expect(viewEq('foo')('bar')({ foo: 'bar' })).toBe(true);
        expect(viewEq('foo', 'bar')({ foo: 'bar' })).toBe(true);
        expect(viewEq('foo')('bar', { foo: 'bar' })).toBe(true);
      });
    });
  });
});
