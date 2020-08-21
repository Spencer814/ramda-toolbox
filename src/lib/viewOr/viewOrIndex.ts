import { apply, useWith, curryN, defaultTo, juxt, nthArg, identity, pipe } from 'ramda';

import { viewLensIndex } from '../viewLens';

const tailArgs = juxt([nthArg(1), nthArg(2)]);
const arrangeArgs = juxt([nthArg(0), tailArgs]);
const applicator = (fn: Fn) => apply<Fn, any>(fn);

/**
 * @private
 * @function viewOrIndexFn
 * @description Returns a curried function that will set a value at a given lens
 * @param {Function} fn - function used for lens
 * @returns {Function}
 */
const viewOrIndexFn = (fn: ViewLensType): ViewOrIndexType => curryN(3,
  pipe(
    arrangeArgs,
    apply(useWith(defaultTo, [identity, applicator(fn)]))
  ));

/**
 * @function viewOrIndex
 * @memberof Toolbox
 * @description Returns a "view" of the given data structure or the defaultValue if null, undefined, or NaN.
 * Based on Ramda Adjunct viewOr
 * @param {*} def - The default value
 * @param {number} n - The specified index
 * @param {*} arr - The data structure
 * @returns {*} "view" or defaultValue
 * @example
 * ```
 * viewOrIndex('some', 3, ['foo', 'bar', 'baz']); //=> 'some'
 * ```
 */
const viewOrIndex = viewOrIndexFn(viewLensIndex);

export default viewOrIndex;
