import { curryN, lensProp, set, useWith } from 'ramda';

/**
 * @private
 * @function setLensPropFn
 * @description Returns a curried function that will set a value at a given lens
 * @param {Function} fn - function used for lens
 * @returns {Function}
 */
const setLensPropFn = (fn: (str: string) => Lens): SetLensPropType =>
  curryN(3, useWith(set, [fn]));

/**
 * @function setLensProp
 * @memberof Toolbox
 * @description Returns the result of "setting" the portion of the given data structure focused by the given lens to the given value
 * @param {string} str - The specified property
 * @param {*} val - The value that will be set
 * @param {Object.<string,*>} obj - The data structure
 * @returns {Object.<string,*>}
 * @example
 * ```
 * setLensProp('bar', 'foo')({ bar: 'baz' }); //=> { bar: 'foo' }
 * ```
 * @see {@link https://ramdajs.com/docs/#lensProp|Ramda lensProp}
 * @see {@link https://ramdajs.com/docs/#set|Ramda set}
 */
const setLensProp = setLensPropFn(lensProp);

export default setLensProp;
