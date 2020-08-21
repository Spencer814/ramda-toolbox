import { curryN, identity, lensPath, view, useWith } from 'ramda';

/**
 * @private
 * @function viewLensPathFn
 * @description Returns a curried function that will set a value at a given lens
 * @param {Function} fn - function used for lens
 * @returns {Function}
 */
const viewLensPathFn = (fn: (path: Path) => Lens): ViewLensPathType =>
  curryN(2, useWith(view, [fn, identity]));

/**
 * @function viewLensPath
 * @memberof Toolbox
 * @description Returns a "view" of the given data structure
 * @param {Array.<string|number>} path - The specified path
 * @param {Object.<string,*>} obj - The data structure
 * @returns {*} ...
 * @example
 * ```
 * viewLensPath(['a', 'b'], { a: { b: 2 } }); //=> 2
 * ```
 * @see {@link https://ramdajs.com/docs/#lensPath|Ramda lensPath}
 * @see {@link https://ramdajs.com/docs/#view|Ramda view}
 */
const viewLensPath = viewLensPathFn(lensPath);

export default viewLensPath;
