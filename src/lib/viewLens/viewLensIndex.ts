import { curryN, identity, lensIndex, view, useWith } from 'ramda';

/**
 * @private
 * @function viewLensIndexFn
 * @description Returns a curried function that will set a value at a given lens
 * @param {Function} fn - function used for lens
 * @returns {Function}
 */
const viewLensIndexFn = (fn: (n: number) => Lens): ViewLensIndexType =>
  curryN(2, useWith(view, [fn, identity]));

/**
 * @function viewLensIndex
 * @memberof Toolbox
 * @description Returns a "view" of the given data structure
 * @param {number} n - The specified index
 * @param {*} arr - The data structure
 * @returns {*} ...
 * @example
 * ```
 * viewLensIndex(1, ['foo', 'bar', 'baz']); //=> 'bar'
 * ```
 * @see {@link https://ramdajs.com/docs/#lensIndex|Ramda lensIndex}
 * @see {@link https://ramdajs.com/docs/#view|Ramda view}
 */
const viewLensIndex = viewLensIndexFn(lensIndex);

export default viewLensIndex;
