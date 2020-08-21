import { apply, useWith, curryN, defaultTo, juxt, nthArg, identity, pipe } from 'ramda';

import { viewLens } from '../viewLens';

const tailArgs = juxt([nthArg(1), nthArg(2)]);
const arrangeArgs = juxt([nthArg(0), tailArgs]);
const applicator = (fn: Fn) => apply<Fn, any>(fn);

/**
 * @private
 * @function viewOrFn
 * @description Returns a curried function that will set a value at a given lens
 * @param {Function} fn - function used for lens
 * @returns {Function}
 */
const viewOrFn = (fn: ViewLensType): ViewOrType => curryN(3,
  pipe(
    arrangeArgs,
    apply(useWith(defaultTo, [identity, applicator(fn)]))
  ));

/**
 * @function viewOr
 * @memberof Toolbox
 * @description Returns a "view" of the given data structure or the defaultValue if null, undefined, or NaN.
 * Based on Ramda Adjunct viewOr
 * @param {*} def - The default value
 * @param {string|number|string[]|number[]} val - The specified index, path, or property
 * @param {Object.<string,*>|*} data - The data structure
 * @returns {*} "view" or defaultValue
 * @example
 * ```
 * viewOr('N/A', 'x', {}); //=> 'N/A'
 * viewOr('N/A', ['a', 'b'], {}); //=> 'N/A'
 * viewOr('N/A', 'x', { x: 1 }); //=> 1
 * viewOr('some', 'y', { y: null }); //=> 'some'
 * viewOr('some', 3, ['foo', 'bar', 'baz']); //=> 'some'
 * viewOr('some', 'y', { y: false }); //=> false
 * ```
 * @see {@link https://char0n.github.io/ramda-adjunct/2.20.0/RA.html#.viewOr|Ramda Adjunct viewOr}
 */
const viewOr = viewOrFn(viewLens);

export default viewOr;
