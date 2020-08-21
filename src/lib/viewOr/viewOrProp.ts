import { apply, useWith, curryN, defaultTo, juxt, nthArg, identity, pipe } from 'ramda';

import { viewLensProp } from '../viewLens';

const tailArgs = juxt([nthArg(1), nthArg(2)]);
const arrangeArgs = juxt([nthArg(0), tailArgs]);
const applicator = (fn: Fn) => apply<Fn, any>(fn);

/**
 * @private
 * @function viewOrPropFn
 * @description Returns a curried function that will set a value at a given lens
 * @param {Function} fn - function used for lens
 * @returns {Function}
 */
const viewOrPropFn = (fn: ViewLensType): ViewOrPropType => curryN(3,
  pipe(
    arrangeArgs,
    apply(useWith(defaultTo, [identity, applicator(fn)]))
  ));

/**
 * @function viewOrProp
 * @memberof Toolbox
 * @description Returns a "view" of the given data structure or the defaultValue if null, undefined, or NaN.
 * Based on Ramda Adjunct viewOr
 * @param {*} def - The default value
 * @param {string} str - The specified property
 * @param {Object.<string,*>} obj - The data structure
 * @returns {*} "view" or defaultValue
 * @example
 * ```
 * viewOrProp('N/A', 'x', {}); //=> 'N/A'
 * viewOrProp('N/A', 'x', { x: 1 }); //=> 1
 * viewOrProp('some', 'y', { y: null }); //=> 'some'
 * viewOrProp('some', 'y', { y: false }); //=> false
 * ```
 */
const viewOrProp = viewOrPropFn(viewLensProp);

export default viewOrProp;
