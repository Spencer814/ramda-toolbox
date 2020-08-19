import { curry, lensIndex, lensPath, lensProp, view } from 'ramda';

import lensFn from './internal/lensFn';

type Path = (string | number)[];
type Input = number | Path | string;
type List = any[];
interface Dictionary {
  [index: string]: any;
}

const viewLensFunc: (val: Input, data: Dictionary | List) => any = (val, data) =>
  view(lensFn(val), data);

/**
 * @function viewLens
 * @memberof Toolbox
 * @description Returns a "view" of the given data structure
 * @param {string|number|string[]|number[]} val - The specified index, path, or property
 * @param {Object.<string,*>|*} data - The data structure
 * @returns {*} ...
 * @example
 * ```
 * viewLens('x', { x: 100 }); //=> 100
 * viewLens(['a', 'b'], { a: { b: 2 } }); //=> 2
 * viewLens(1, ['foo', 'bar', 'baz']); //=> 'bar'
 * ```
 * @see {@link https://ramdajs.com/docs/#lensIndex|Ramda lensIndex}
 * @see {@link https://ramdajs.com/docs/#lensPath|Ramda lensPath}
 * @see {@link https://ramdajs.com/docs/#lensProp|Ramda lensProp}
 * @see {@link https://ramdajs.com/docs/#view|Ramda view}
 */
const viewLens = curry(viewLensFunc);

const viewLensIndexFunc: (n: number, arr: List) => any = (n, arr) =>
  view(lensIndex(n), arr);

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
const viewLensIndex = curry(viewLensIndexFunc);

const viewLensPathFunc: (path: Path, obj: Dictionary) => any = (path, obj) =>
  view(lensPath(path), obj);

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
const viewLensPath = curry(viewLensPathFunc);

const viewLensPropFunc: (str: string, obj: Dictionary) => any = (str, obj) =>
  view(lensProp(str), obj);

/**
 * @function viewLensProp
 * @memberof Toolbox
 * @description Returns a "view" of the given data structure
 * @param {string} str - The specified property
 * @param {Object.<string,*>} obj - The data structure
 * @returns {*} ...
 * @example
 * ```
 * viewLensProp('x', { x: 100 }); //=> 100
 * ```
 * @see {@link https://ramdajs.com/docs/#lensProp|Ramda lensProp}
 * @see {@link https://ramdajs.com/docs/#view|Ramda view}
 */
const viewLensProp = curry(viewLensPropFunc);

export { viewLens, viewLensIndex, viewLensPath, viewLensProp };
