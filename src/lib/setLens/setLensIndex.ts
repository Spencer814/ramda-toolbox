import { curryN, lensIndex, set, useWith } from 'ramda';

/**
 * @private
 * @function setLensIndexFn
 * @description Returns a curried function that will set a value at a given lens
 * @param {Function} fn - function used for lens
 * @returns {Function}
 */
const setLensIndexFn = (fn: (n: number) => Lens): SetLensIndexType =>
  curryN(3, useWith(set, [fn]));

/**
 * @function setLensIndex
 * @memberof Toolbox
 * @description Returns the result of "setting" the portion of the given data structure focused by the given lens to the given value
 * @param {number} n - The specified index
 * @param {*} val - The value that will be set
 * @param {*} arr - The data structure
 * @returns {*}
 * @example
 * ```
 * setLensIndex(0, 'foo')(['baz']); //=> ['foo']
 * ```
 * @see {@link https://ramdajs.com/docs/#lensIndex|Ramda lensIndex}
 * @see {@link https://ramdajs.com/docs/#set|Ramda set}
 */
const setLensIndex = setLensIndexFn(lensIndex);

export default setLensIndex;
