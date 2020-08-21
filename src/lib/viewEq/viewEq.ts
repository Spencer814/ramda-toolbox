import { curryN, equals, identity, useWith } from 'ramda';

import { viewWith } from '../viewWith';

/**
 * @private
 * @function viewEqFn
 * @description Returns a curried function that will set a value at a given lens
 * @param {Function} fn - function used for lens
 * @returns {Function}
 */
const viewEqFn = (fn: ViewWithType): ViewEqType =>
  curryN(2, useWith(fn, [identity, equals]));

/**
 * @function viewEq
 * @memberof Toolbox
 * @description Returns true if the given lens equals to given value
 * Based on Ramda Extension viewEq
 * @param {string|number|string[]|number[]} val - The value to compare the focused data structure with
 * @param {*} val - Van Laarhoven lens
 * @param {Object.<string,*>|*} data - The data structure
 * @returns {boolean} `true` if the focused data structure equals value, `false` otherwise
 * @example
 * ```
 * viewEq('foo', 'bar')({ foo: 'bar' }); //=> true
 * viewEq(1, 1, [0, 1, 2]); //=> true
 * viewEq(['a', 'b'], 'foo', { a: { b: 'foo' } }) //=> true
 * ```
 * @see {@link https://ramda-extension.firebaseapp.com/docs/#viewEq|Ramda Extension viewEq}
 */
const viewEq = viewEqFn(viewWith);

export default viewEq;
