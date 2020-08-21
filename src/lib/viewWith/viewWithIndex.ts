import { apply, call, curryN, identity, juxt, nthArg, pipe, useWith } from 'ramda';

import { viewLensIndex } from '../viewLens';

const tailArgs = juxt([nthArg(0), nthArg(2)]);
const arrangeArgs = juxt([nthArg(1), tailArgs]);
const applicator = (fn: Fn) => apply<Fn, any>(fn);

/**
 * @private
 * @function viewWithIndexFn
 * @description Returns a curried function that will set a value at a given lens
 * @param {Function} fn - function used for lens
 * @returns {Function}
 */
const viewWithIndexFn = (fn: ViewLensIndexType): ViewWithIndexType => curryN(3,
  pipe(
    arrangeArgs,
    apply(useWith(call, [identity, applicator(fn)]))
  ));

/**
 * @function viewWithIndex
 * @memberof Toolbox
 * @description Applies function on the given lens view, with args reversed to match
 * Based on Ramda Extension viewWith
 * @param {number} n - The specified index
 * @param {Function} fn - function used for lens
 * @param {*} arr - The data structure
 * @returns {*} result of view after being appled to the function
 * @example
 * ```
 * viewWithIndex(0, R.pathEq(['foo'], 'boo'), [{ foo: 'boo' }]); //=> true
 * viewWithIndex(0, R.divide(R.__, 2), [4]); //=> 2
 * ```
 */
const viewWithIndex = viewWithIndexFn(viewLensIndex);

export default viewWithIndex;
