import { curryN, equals, identity, useWith } from 'ramda';

import { viewWithPath } from '../viewWith';

/**
 * @private
 * @function viewEqPathIndexFn
 * @description Returns a curried function that will set a value at a given lens
 * @param {Function} fn - function used for lens
 * @returns {Function}
 */
const viewEqPathIndexFn = (fn: ViewWithPathType): ViewEqPathType =>
  curryN(2, useWith(fn, [identity, equals]));

/**
 * @function viewEqPath
 * @memberof Toolbox
 * @description Returns true if the given lens equals to given value
 * Based on Ramda Extension viewEq
 * @param {Array.<string|number>} path - The value to compare the focused data structure with
 * @param {*} val - Van Laarhoven lens
 * @param {Object.<string,*>} obj - The data structure
 * @returns {boolean} `true` if the focused data structure equals value, `false` otherwise
 * @example
 * ```
 * viewEqPath(['a', 'b'], 'foo', { a: { b: 'foo' } }) //=> true
 * ```
 */
const viewEqPath = viewEqPathIndexFn(viewWithPath);

export default viewEqPath;
