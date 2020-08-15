import { curry, lensIndex, lensPath, lensProp, set } from 'ramda';
import type { Key } from 'Any/Key'
import type { Curry } from 'Function/Curry';
import * as Array from 'Misc/JSON/Array'
import * as Object from 'Misc/JSON/Object'
import type { String } from 'String/String'

import lensFn from './internal/lensFn';

type Path = (String | number)[];
type Input = number | Path | String;
type List = Array<any>;

interface Dictionary {
  [index: string]: Key | Path | Object;
}

type SetLens = Curry<(src: Input, val: any, data: Dictionary | List) => Dictionary | List>;
type SetLensIndex = Curry<(n: number, val: any, arr: List) => List>;
type SetLensPath = Curry<(path: Path, val: any, obj: Dictionary) => Dictionary>;
type SetLensProp = Curry<(str: String, val: any, obj: Dictionary) => Dictionary>;

/**
 * @function setLens
 * @memberof Toolbox
 * @description Returns the result of "setting" the portion of the given data structure focused by the given lens to the given value
 *
 * @param {string|number|string[]|number[]} src - The specified index, path, or property
 * @param {*} val - The value that will be set
 * @param {Object.<string,*>|*} data - The data structure
 * @returns {Object.<string,*>|*}
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
const setLens: SetLens = curry((src: Input, val: any, data: Dictionary | List) =>
  set(lensFn(src), val, data));

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
const setLensIndex: SetLensIndex = curry((n: number, val: any, arr: List) =>
  set(lensIndex(n), val, arr));

/**
 * @function setLensPath
 * @memberof Toolbox
 * @description Returns the result of "setting" the portion of the given data structure focused by the given lens to the given value
 *
 * @param {Array.<string|number>} path - The specified path
 * @param {*} val - The value that will be set
 * @param {Object.<string,*>} obj - The data structure
 * @returns {Object.<string,*>}
 *
 * @example
 * ```
 * setLensPath(['foo', 'bar'], 1)({ foo: { bar: 'baz' } }); //=> { foo: { bar: 1 } }
 * ```
 * @see {@link https://ramdajs.com/docs/#lensPath|Ramda lensPath}
 * @see {@link https://ramdajs.com/docs/#set|Ramda set}
 */
const setLensPath: SetLensPath = curry((path: Path, val: any, obj: Dictionary) =>
  set(lensPath(path), val, obj));

/**
 * @function setLensProp
 * @memberof Toolbox
 * @description Returns the result of "setting" the portion of the given data structure focused by the given lens to the given value
 *
 * @param {string} str - The specified property
 * @param {*} val - The value that will be set
 * @param {Object.<string,*>} obj - The data structure
 * @returns {Object.<string,*>}
 *
 * @example
 * ```
 * setLensProp('bar', 'foo')({ bar: 'baz' }); //=> { bar: 'foo' }
 * ```
 * @see {@link https://ramdajs.com/docs/#lensProp|Ramda lensProp}
 * @see {@link https://ramdajs.com/docs/#set|Ramda set}
 */
const setLensProp: SetLensProp = curry((str: String, val: any, obj: Dictionary) =>
  set(lensProp(str), val, obj));

export { setLens, setLensIndex, setLensPath, setLensProp };
