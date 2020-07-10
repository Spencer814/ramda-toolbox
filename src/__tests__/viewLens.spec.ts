import viewLens from '../viewLens';

describe('utility', () => {
  describe('toolbox', () => {
    describe('viewLens', () => {
      test('tests prop view', () => {
        expect.assertions(3);

        expect(viewLens('bar', { bar: 'foobar' })).toBe('foobar');
        expect(viewLens('bar', { bar: false })).toBe(false);
        expect(viewLens('bar', { bar: 1 })).toBe(1);
      });

      test('tests path view', () => {
        expect.assertions(3);

        expect(viewLens(['foo', 'bar'], { foo: { bar: 'foobar' } })).toBe('foobar');
        expect(viewLens(['foo', 'bar'], { foo: { bar: false } })).toBe(false);
        expect(viewLens(['foo', 'bar'], { foo: { bar: 1 } })).toBe(1);
      });

      test('tests index view', () => {
        expect.assertions(3);

        expect(viewLens(0, ['foobar', false, 1])).toBe('foobar');
        expect(viewLens(1, ['foobar', false, 1])).toBe(false);
        expect(viewLens(2, ['foobar', false, 1])).toBe(1);
      });

      test('tests currying', () => {
        expect.assertions(3);

        expect(viewLens('bar')({ bar: 'foobar' })).toBe('foobar');
        expect(viewLens(['foo', 'bar'])({ foo: { bar: 'foobar' } })).toBe('foobar');
        expect(viewLens(0)(['foobar'])).toBe('foobar');
      });
    });
  });
});
