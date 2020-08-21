import { apply, useWith, curryN, defaultTo, juxt, nthArg, identity, pipe } from 'ramda';

import { viewLensPath } from '../viewLens';

const tailArgs = juxt([nthArg(1), nthArg(2)]);
const arrangeArgs = juxt([nthArg(0), tailArgs]);
const applicator = (fn: Fn) => apply<Fn, any>(fn);

/**
 * @private
 * @function viewOrPathFn
 * @description Returns a curried function that will set a value at a given lens
 * @param {Function} fn - function used for lens
 * @returns {Function}
 */
const viewOrPathFn = (fn: ViewLensType): ViewOrPathType => curryN(3,
  pipe(
    arrangeArgs,
    apply(useWith(defaultTo, [identity, applicator(fn)]))
  ));

/**
 * @function viewOrPath
 * @memberof Toolbox
 * @description Returns a "view" of the given data structure or the defaultValue if null, undefined, or NaN.
 * Based on Ramda Adjunct viewOr
 * @param {*} def - The default value
 * @param {Array.<string|number>} path - The specified path
 * @param {Object.<string,*>} obj - The data structure
 * @returns {*} "view" or defaultValue
 * @example
 * ```
 * viewOrPath('N/A', ['a', 'b'], {}); //=> 'N/A'
 * ```
 */
const viewOrPath = viewOrPathFn(viewLensPath);

export default viewOrPath;
