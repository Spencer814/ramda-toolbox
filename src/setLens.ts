import type { Curry } from 'Function/Curry';
import { curry, identity, lensIndex, lensPath, lensProp, set, useWith } from 'ramda';

import { lensFn } from './internal';

type ArgFn = (input: any) => any;
type Path = (string | number)[];
type Input = number | Path | string;
type List = any[];
interface Dictionary {
  [index: string]: any;
}

type SetLensType = Curry<(src: Input, val: any, data: Dictionary | List) => Dictionary | List>;
type SetLensIndexType = Curry<(n: number, val: any, arr: List) => List>;
type SetLensPathType = Curry<(path: Path, val: any, obj: Dictionary) => Dictionary>;
type SetLensPropType = Curry<(str: string, val: any, obj: Dictionary) => Dictionary>;

/**
 * @private
 * @function setLensC
 * @description Returns a curried function that will set a value at a given lens
 * @param {Function} fn - function used for lens
 * @returns {Function}
 */
const setLensC = (fn: ArgFn) => curry(useWith(set, [fn, identity, identity]));

/**
 * @function setLens
 * @memberof Toolbox
 * @description Returns the result of "setting" the portion of the given data structure focused by the given lens to the given value
 * @param {string|number|string[]|number[]} src - The specified index, path, or property
 * @param {*} val - The value that will be set
 * @param {Object.<string,*>|*} data - The data structure
 * @returns {Object.<string,*>|*}
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
const setLens: SetLensType = setLensC(lensFn);

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
const setLensIndex: SetLensIndexType = setLensC(lensIndex);

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
const setLensPath: SetLensPathType = setLensC(lensPath);

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
const setLensProp: SetLensPropType = setLensC(lensProp);

export { setLens, setLensIndex, setLensPath, setLensProp };
