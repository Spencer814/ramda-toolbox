import type { Curry } from 'Function/Curry';
import { curry, identity, lensIndex, lensPath, lensProp, view, useWith } from 'ramda';

import { lensFn } from './internal';

type ArgFn = (input: any) => any;
type Path = (string | number)[];
type Input = number | Path | string;
type List = any[];
interface Dictionary {
  [index: string]: any;
}

type ViewLensType = Curry<(val: Input, data: Dictionary | List) => any>;
type ViewLensIndexType = Curry<(n: number, arr: List) => any>;
type ViewLensPathType = Curry<(path: Path, obj: Dictionary) => any>;
type ViewLensPropType = Curry<(str: string, obj: Dictionary) => any>;

/**
 * @private
 * @function viewLensC
 * @description Returns a curried function that will set a value at a given lens
 * @param {Function} fn - function used for lens
 * @returns {Function}
 */
const viewLensC = (fn: ArgFn) => curry(useWith(view, [fn, identity]));

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
const viewLens: ViewLensType = viewLensC(lensFn);

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
const viewLensIndex: ViewLensIndexType = viewLensC(lensIndex);

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
const viewLensPath: ViewLensPathType = viewLensC(lensPath);

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
const viewLensProp: ViewLensPropType = viewLensC(lensProp);

export { viewLens, viewLensIndex, viewLensPath, viewLensProp };
