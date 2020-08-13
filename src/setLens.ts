// @ts-check
import { curry, lensIndex, lensPath, lensProp, set } from 'ramda';

import lensFn from './internal/lensFn';

type Path = (string | number)[];
type Input = number | Path | string;
type List = any[];
interface Dictionary {
  [index: string]: any;
}

const setLensFunc: (src: Input, val: any, data: Dictionary | List) => any = (src, val, data) =>
  set(lensFn(src), val, data);

/**
 * @function setLens
 * @memberof Toolbox
 * @description Returns the result of "setting" the portion of the given data structure focused by the given lens to the given value
 *
 * @param {string|number|string[]|number[]} src - The specified index, path, or property
 * @param {*} val - The value that will be set
 * @param {Object.<string,*>|*} data - The data structure
 * @returns {*}
 *
 * @example
 * ```
 * setLens('bar', 'foo')({ bar: 'baz' }); //=> { bar: 'foo' }
 * setLens(['foo', 'bar'], 1)({ foo: { bar: 'baz' } }); //=> { foo: { bar: 1 } }
 * setLens(0, 'foo')(['baz']); //=> ['foo']
 * ```
 * @see {@link https://ramdajs.com/docs/#lensIndex|Ramda lensIndex}
 * @see {@link https://ramdajs.com/docs/#lensPath|Ramda lensPath}
 * @see {@link https://ramdajs.com/docs/#lensProp|Ramda lensProp}
 * @see {@link https://ramdajs.com/docs/#set|Ramda set}
 */
const setLens = curry(setLensFunc);

const setLensIndexFunc: (n: number, val: any, arr: List) => any = (n, val, arr) =>
  set(lensIndex(n), val, arr);

/**
 * @function setLensIndex
 * @memberof Toolbox
 * @description Returns the result of "setting" the portion of the given data structure focused by the given lens to the given value
 *
 * @param {number} n - The specified index
 * @param {*} val - The value that will be set
 * @param {*} arr - The data structure
 * @returns {*}
 *
 * @example
 * ```
 * setLensIndex(0, 'foo')(['baz']); //=> ['foo']
 * ```
 * @see {@link https://ramdajs.com/docs/#lensIndex|Ramda lensIndex}
 * @see {@link https://ramdajs.com/docs/#set|Ramda set}
 */
const setLensIndex = curry(setLensIndexFunc);

const setLensPathFunc: (path: Path, val: any, obj: Dictionary) => any = (path, val, obj) =>
  set(lensPath(path), val, obj);

/**
 * @function setLensPath
 * @memberof Toolbox
 * @description Returns the result of "setting" the portion of the given data structure focused by the given lens to the given value
 *
 * @param {Array.<string|number>} path - The specified path
 * @param {*} val - The value that will be set
 * @param {Object.<string,*>} obj - The data structure
 * @returns {*}
 *
 * @example
 * ```
 * setLensPath(['foo', 'bar'], 1)({ foo: { bar: 'baz' } }); //=> { foo: { bar: 1 } }
 * ```
 * @see {@link https://ramdajs.com/docs/#lensPath|Ramda lensPath}
 * @see {@link https://ramdajs.com/docs/#set|Ramda set}
 */
const setLensPath = curry(setLensPathFunc);

const setLensPropFunc: (str: string, val: any, obj: Dictionary) => any = (str, val, obj) =>
  set(lensProp(str), val, obj); // eslint-disable-line ramda/set-simplification

/**
 * @function setLensProp
 * @memberof Toolbox
 * @description Returns the result of "setting" the portion of the given data structure focused by the given lens to the given value
 *
 * @param {string} str - The specified property
 * @param {*} val - The value that will be set
 * @param {Object.<string,*>} obj - The data structure
 * @returns {*}
 *
 * @example
 * ```
 * setLensProp('bar', 'foo')({ bar: 'baz' }); //=> { bar: 'foo' }
 * ```
 * @see {@link https://ramdajs.com/docs/#lensProp|Ramda lensProp}
 * @see {@link https://ramdajs.com/docs/#set|Ramda set}
 */
const setLensProp = curry(setLensPropFunc);

export { setLens, setLensIndex, setLensPath, setLensProp };
