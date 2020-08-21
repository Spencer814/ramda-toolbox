import { curryN, equals, identity, useWith } from 'ramda';

import { viewWithProp } from '../viewWith';

/**
 * @private
 * @function viewEqPropFn
 * @description Returns a curried function that will set a value at a given lens
 * @param {Function} fn - function used for lens
 * @returns {Function}
 */
const viewEqPropFn = (fn: ViewWithPropType): ViewEqPropType =>
  curryN(2, useWith(fn, [identity, equals]));

/**
 * @function viewEqProp
 * @memberof Toolbox
 * @description Returns true if the given lens equals to given value
 * Based on Ramda Extension viewEq
 * @param {string} str - The value to compare the focused data structure with
 * @param {*} val - Van Laarhoven lens
 * @param {Object.<string,*>} obj - The data structure
 * @returns {boolean} `true` if the focused data structure equals value, `false` otherwise
 * @example
 * ```
 * viewEqProp('foo', 'bar')({ foo: 'bar' }); //=> true
 * ```
 */
const viewEqProp = viewEqPropFn(viewWithProp);

export default viewEqProp;
