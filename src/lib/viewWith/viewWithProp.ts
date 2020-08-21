import { apply, call, curryN, identity, juxt, nthArg, pipe, useWith } from 'ramda';

import { viewLensProp } from '../viewLens';

const tailArgs = juxt([nthArg(0), nthArg(2)]);
const arrangeArgs = juxt([nthArg(1), tailArgs]);
const applicator = (fn: Fn) => apply<Fn, any>(fn);

/**
 * @private
 * @function viewWithPropFn
 * @description Returns a curried function that will set a value at a given lens
 * @param {Function} fn - function used for lens
 * @returns {Function}
 */
const viewWithPropFn = (fn: ViewLensPropType): ViewWithPropType => curryN(3,
  pipe(
    arrangeArgs,
    apply(useWith(call, [identity, applicator(fn)]))
  ));

/**
 * @function viewWithProp
 * @memberof Toolbox
 * @description Applies function on the given lens view, with args reversed to match
 * Based on Ramda Extension viewWith
 * @param {string} str - The specified property
 * @param {Function} fn - function used for lens
 * @param {Object.<string,*>} obj - The data structure
 * @returns {*} result of view after being appled to the function
 * @example
 * ```
 * viewWithProp('foo', R.path(R.__, { bar: 'baz' }), { foo: ['bar'] }); //=> 'baz'
 * ```
 */
const viewWithProp = viewWithPropFn(viewLensProp);

export default viewWithProp;
