import { curryN, set } from 'ramda';

import lensFn from './internal/lensFn';

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
 * setLens('x', { x: 100 }); // 100
 * setLens(['a', 'b'], { a: { b: 2 } }); // 2
 * setLens(1, ['foo', 'bar', 'baz']); // 'bar'
 *
 * @see {@link https://ramdajs.com/docs/#lensIndex|Ramda lensIndex}
 * @see {@link https://ramdajs.com/docs/#lensPath|Ramda lensPath}
 * @see {@link https://ramdajs.com/docs/#lensProp|Ramda lensProp}
 * @see {@link https://ramdajs.com/docs/#view|Ramda set}
 */
export default curryN(3, (src: string | number | (string | number)[], val: string | number, data: string | number | (string | number | boolean)[] | object): object | (string | number | boolean)[] => set(lensFn(src), val, data));
