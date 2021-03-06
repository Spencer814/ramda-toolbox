import { cond, is, lensIndex, lensPath, lensProp, T } from 'ramda';
import type { Lens } from 'ramda';

/**
 * @function lensFn
 * @memberof Helper
 * @description Conditional that determines which lens function to use if not known.
 * @param {*} input - Either an array, number or string
 * @returns {Function} The proper lens function
 * @example
 * ```
 * lensFn(0); //=> lensIndex(0)
 * lensFn([1, 2]); //=> lensPath([1, 2])
 * lensFn('x'); //=> lensProp('x')
 * ```
 * @see {@link https://char0n.github.io/ramda-adjunct/2.20.0/RA.html#.lensFn|Ramda Adjunct lensFn}
 */
const lensFn = cond<any, Lens>([
  [is(Array), lensPath],
  [is(Number), lensIndex],
  [T, lensProp]
]);

export default lensFn;
