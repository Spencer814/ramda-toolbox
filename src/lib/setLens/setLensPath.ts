import { curryN, lensPath, set, useWith } from 'ramda';

/**
 * @private
 * @function setLensPathFn
 * @description Returns a curried function that will set a value at a given lens
 * @param {Function} fn - function used for lens
 * @returns {Function}
 */
const setLensPathFn = (fn: (path: Path) => Lens): SetLensPathType =>
  curryN(3, useWith(set, [fn]));

/**
 * @function setLensPath
 * @memberof Toolbox
 * @description Returns the result of "setting" the portion of the given data structure focused by the given lens to the given value
 * @param {Array.<string|number>} path - The specified path
 * @param {*} val - The value that will be set
 * @param {Object.<string,*>} obj - The data structure
 * @returns {Object.<string,*>}
 * @example
 * ```
 * setLensPath(['foo', 'bar'], 1)({ foo: { bar: 'baz' } }); //=> { foo: { bar: 1 } }
 * ```
 * @see {@link https://ramdajs.com/docs/#lensPath|Ramda lensPath}
 * @see {@link https://ramdajs.com/docs/#set|Ramda set}
 */
const setLensPath = setLensPathFn(lensPath);

export default setLensPath;
