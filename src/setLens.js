import { curryN, lensIndex, lensPath, lensProp, set } from 'ramda';

import lensFn from './internal/lensFn.js';

/**
 * @function setLens
 * @memberof Toolbox
 * @description Returns the result of "setting" the portion of the given data structure focused by the given lens to the given value
 *
 * @param {*} val - The specified index, path, or property
 * @param {*} data - The data structure
 * @returns {*}
 *
 * @example
 *
 * setLens('bar', 'foo')({ bar: 'baz' }); //=> { bar: 'foo' }
 * setLens(['foo', 'bar'], 1)({ foo: { bar: 'baz' } }); //=> { foo: { bar: 1 } }
 * setLens(0, 'foo')(['baz']); //=> ['foo']
 *
 * @see {@link https://ramdajs.com/docs/#lensIndex|Ramda lensIndex}
 * @see {@link https://ramdajs.com/docs/#lensPath|Ramda lensPath}
 * @see {@link https://ramdajs.com/docs/#lensProp|Ramda lensProp}
 * @see {@link https://ramdajs.com/docs/#view|Ramda set}
 */
const setLensBuilder = curryN(4, (lnFn, src, val, data) =>
  set(lnFn(src), val, data)
);

const setLens = setLensBuilder(lensFn);
const setLensIndex = setLensBuilder(lensIndex);
const setLensPath = setLensBuilder(lensPath);
const setLensProp = setLensBuilder(lensProp);

export { setLens, setLensIndex, setLensPath, setLensProp };
