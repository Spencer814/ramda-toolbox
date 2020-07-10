import { curryN, equals, identity, useWith } from 'ramda';

import viewWith from './viewWith';

/**
 *
 * @function viewEq
 * @memberof Toolbox
 * @description Returns true if the given lens equals to given value
 * Based on Ramda Extension viewEq
 *
 * @param {Function} lens - Van Laarhoven lens
 * @param {*} value - The value to compare the focused data structure with
 * @param {*} data - The data structure
 * @returns {boolean} `true` if the focused data structure equals value, `false` otherwise
 *
 * @example
 *
 * viewEq(0, 1, [0, 1, 2]); // => false
 * viewEq(1, 1, [0, 1, 2]); // => true
 * viewEq(['a', 'b'], 'foo', { a: { b: 'foo' } }) // => true
 *
 * @see {@link https://ramda-extension.firebaseapp.com/docs/#viewEq|Ramda Extension viewEq}
 */
export default curryN(3, useWith(viewWith, [identity, equals, identity]));
