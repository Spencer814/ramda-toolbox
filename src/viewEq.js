import { curryN, equals, identity, useWith } from 'ramda';

import {
  viewWith,
  viewWithIndex,
  viewWithPath,
  viewWithProp
} from './viewWith.js';

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
 * viewEq('foo', 'bar')({ foo: 'bar' }); //=> true
 * viewEq(1, 1, [0, 1, 2]); //=> true
 * viewEq(['a', 'b'], 'foo', { a: { b: 'foo' } }) //=> true
 *
 * @see {@link https://ramda-extension.firebaseapp.com/docs/#viewEq|Ramda Extension viewEq}
 */

/**
 *
 * @function viewEqBuilder
 * @description Applies viewWith function to viewEq
 * @param {Function} viewWithFn - viewWith function
 * @returns {viewEq} `true` if the focused data structure equals value, `false` otherwise
 */
const viewEqBuilder = (viewWithFn) =>
  curryN(3, useWith(viewWithFn, [identity, equals, identity]));

const viewEq = viewEqBuilder(viewWith);
const viewEqIndex = viewEqBuilder(viewWithIndex);
const viewEqPath = viewEqBuilder(viewWithPath);
const viewEqProp = viewEqBuilder(viewWithProp);

export { viewEq, viewEqIndex, viewEqPath, viewEqProp };
