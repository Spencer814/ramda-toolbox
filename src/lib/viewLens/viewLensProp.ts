import { curryN, identity, lensProp, view, useWith } from 'ramda';

/**
 * @private
 * @function viewLensPropFn
 * @description Returns a curried function that will set a value at a given lens
 * @param {Function} fn - function used for lens
 * @returns {Function}
 */
const viewLensPropFn = (fn: (str: string) => Lens): ViewLensPropType =>
  curryN(2, useWith(view, [fn, identity]));

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
const viewLensProp = viewLensPropFn(lensProp);

export default viewLensProp;
