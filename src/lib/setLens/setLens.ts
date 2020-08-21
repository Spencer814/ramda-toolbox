import { curryN, set, useWith } from 'ramda';

import { lensFn } from '../helper';

/**
 * @private
 * @function setLensFn
 * @description Returns a curried function that will set a value at a given lens
 * @param {Function} fn - function used for lens
 * @returns {Function}
 */
const setLensFn = (fn: (...a: readonly any[]) => Lens): SetLensType =>
  curryN(3, useWith(set, [fn]));

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
const setLens = setLensFn(lensFn);

export default setLens;
