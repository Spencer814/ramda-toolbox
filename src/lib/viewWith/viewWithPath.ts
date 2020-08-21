import { apply, call, curryN, identity, juxt, nthArg, pipe, useWith } from 'ramda';

import { viewLensPath } from '../viewLens';

const tailArgs = juxt([nthArg(0), nthArg(2)]);
const arrangeArgs = juxt([nthArg(1), tailArgs]);
const applicator = (fn: Fn) => apply<Fn, any>(fn);

/**
 * @private
 * @function viewWithPathFn
 * @description Returns a curried function that will set a value at a given lens
 * @param {Function} fn - function used for lens
 * @returns {Function}
 */
const viewWithPathFn = (fn: ViewLensPathType): ViewWithPathType => curryN(3,
  pipe(
    arrangeArgs,
    apply(useWith(call, [identity, applicator(fn)]))
  ));

/**
 * @function viewWithPath
 * @memberof Toolbox
 * @description Applies function on the given lens view, with args reversed to match
 * Based on Ramda Extension viewWith
 * @param {Array.<string|number>} path - The specified path
 * @param {Function} fn - function used for lens
 * @param {Object.<string,*>} obj - The data structure
 * @returns {*} result of view after being appled to the function
 * @example
 * ```
 * viewWithPath(['foo', 'bar'], R.prop(R.__, { baz: 'boo' }), { foo: { bar: 'baz' } }); //=> 'boo'
 * ```
 */
const viewWithPath = viewWithPathFn(viewLensPath);

export default viewWithPath;
