import { curryN, view } from 'ramda';

import lensFn from './internal/lensFn';

/**
 * @function viewLens
 * @memberof Toolbox
 * @description Returns a "view" of the given data structure
 *
 * @param {*} val - The specified index, path, or property
 * @param {*} data - The data structure
 * @returns {*}
 *
 * @example
 *
 * viewLens('x', { x: 100 }); // 100
 * viewLens(['a', 'b'], { a: { b: 2 } }); // 2
 * viewLens(1, ['foo', 'bar', 'baz']); // 'bar'
 *
 * @see {@link https://ramdajs.com/docs/#lensIndex|Ramda lensIndex}
 * @see {@link https://ramdajs.com/docs/#lensPath|Ramda lensPath}
 * @see {@link https://ramdajs.com/docs/#lensProp|Ramda lensProp}
 * @see {@link https://ramdajs.com/docs/#view|Ramda view}
 */
export default curryN(2, (val, data) => view(lensFn(val), data));
