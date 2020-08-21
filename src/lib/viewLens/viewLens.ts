import { curryN, identity, view, useWith } from 'ramda';

import { lensFn } from '../helper';

/**
 * @private
 * @function viewLensFn
 * @description Returns a curried function that will set a value at a given lens
 * @param {Function} fn - function used for lens
 * @returns {Function}
 */
const viewLensFn = (fn: (...a: readonly any[]) => Lens): ViewLensType =>
  curryN(2, useWith(view, [fn, identity]));

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
const viewLens = viewLensFn(lensFn);

export default viewLens;
