import { curryN, defaultTo } from 'ramda';

import viewLens from './viewLens';

/**
 * @function viewOr
 * @memberof Toolbox
 * @description Returns a "view" of the given data structure or the defaultValue if null, undefined, or NaN.
 * Based on Ramda Adjunct viewOr
 *
 * @param {*} def - The default value
 * @param {*} val - The specified index, path, or property
 * @param {*} data - The data structure
 * @returns {*} "view" or defaultValue
 *
 * @example
 *
 * viewOr('N/A', 'x', {}); // => 'N/A'
 * viewOr('N/A', ['a', 'b'], {}); // => 'N/A'
 * viewOr('N/A', 'x', { x: 1 }); // => 1
 * viewOr('some', 'y', { y: null }); // => 'some'
 * viewOr('some', 3, ['foo', 'bar', 'baz']); // => 'some'
 * viewOr('some', 'y', { y: false }); // => false
 *
 * @see {@link https://char0n.github.io/ramda-adjunct/2.20.0/RA.html#.viewOr|Ramda Adjunct viewOr}
 */
export default curryN(3, (def, val, data) => defaultTo(def, viewLens(val)(data)));
