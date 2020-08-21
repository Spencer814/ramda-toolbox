import { apply, call, curryN, identity, juxt, nthArg, pipe, useWith } from 'ramda';

import { viewLens } from '../viewLens';

const tailArgs = juxt([nthArg(0), nthArg(2)]);
const arrangeArgs = juxt([nthArg(1), tailArgs]);
const applicator = (fn: Fn) => apply<Fn, any>(fn);

/**
 * @private
 * @function viewWithFn
 * @description Returns a curried function that will set a value at a given lens
 * @param {Function} fn - function used for lens
 * @returns {Function}
 */
const viewWithFn = (fn: ViewLensType): ViewWithType => curryN(3,
  pipe(
    arrangeArgs,
    apply(useWith(call, [identity, applicator(fn)]))
  ));

/**
 * @function viewWith
 * @memberof Toolbox
 * @description Applies function on the given lens view, with args reversed to match
 * Based on Ramda Extension viewWith
 * @param {string|number|string[]|number[]} val - The specified index, path, or property
 * @param {Function} fn - function used for lens
 * @param {Object.<string,*>|*} data - The data structure
 * @returns {*} result of view after being appled to the function
 * @example
 * ```
 * viewWith(0, R.pathEq(['foo'], 'boo'), [{ foo: 'boo' }]); //=> true
 * viewWith(0, R.divide(R.__, 2), [4]); //=> 2
 * viewWith(['foo', 'bar'], R.prop(R.__, { baz: 'boo' }), { foo: { bar: 'baz' } }); //=> 'boo'
 * viewWith('foo', R.path(R.__, { bar: 'baz' }), { foo: ['bar'] }); //=> 'baz'
 * ```
 * @see {@link https://ramda-extension.firebaseapp.com/docs/#viewWith|Ramda Extension viewWith}
 */
const viewWith = viewWithFn(viewLens);

export default viewWith;
