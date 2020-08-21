import { curryN, equals, identity, useWith } from 'ramda';

import { viewWithIndex } from '../viewWith';

/**
 * @private
 * @function viewEqIndexFn
 * @description Returns a curried function that will set a value at a given lens
 * @param {Function} fn - function used for lens
 * @returns {Function}
 */
const viewEqIndexFn = (fn: ViewWithType): ViewEqIndexType =>
  curryN(2, useWith(fn, [identity, equals]));

/**
 * @function viewEqIndex
 * @memberof Toolbox
 * @description Returns true if the given lens equals to given value
 * Based on Ramda Extension viewEq
 * @param {number} n - The value to compare the focused data structure with
 * @param {*} val - Van Laarhoven lens
 * @param {*} arr - The data structure
 * @returns {boolean} `true` if the focused data structure equals value, `false` otherwise
 * @example
 * ```
 * viewEqIndex(1, 1, [0, 1, 2]); //=> true
 * ```
 */
const viewEqIndex = viewEqIndexFn(viewWithIndex);

export default viewEqIndex;
