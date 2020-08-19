import { curry, defaultTo } from 'ramda';

import { viewLens, viewLensIndex, viewLensPath, viewLensProp } from './viewLens';

type Path = (string | number)[];
type Input = number | Path | string;
type List = any[];
interface Dictionary {
  [index: string]: any;
}

const viewOrFunc: (def: any, val: Input, data: Dictionary | List) => any = (def, val, data) =>
  defaultTo(def, viewLens(val)(data));

/**
 * @function viewOr
 * @memberof Toolbox
 * @description Returns a "view" of the given data structure or the defaultValue if null, undefined, or NaN.
 * Based on Ramda Adjunct viewOr
 * @param {*} def - The default value
 * @param {string|number|string[]|number[]} val - The specified index, path, or property
 * @param {Object.<string,*>|*} data - The data structure
 * @returns {*} "view" or defaultValue
 * @example
 * ```
 * viewOr('N/A', 'x', {}); //=> 'N/A'
 * viewOr('N/A', ['a', 'b'], {}); //=> 'N/A'
 * viewOr('N/A', 'x', { x: 1 }); //=> 1
 * viewOr('some', 'y', { y: null }); //=> 'some'
 * viewOr('some', 3, ['foo', 'bar', 'baz']); //=> 'some'
 * viewOr('some', 'y', { y: false }); //=> false
 * ```
 * @see {@link https://char0n.github.io/ramda-adjunct/2.20.0/RA.html#.viewOr|Ramda Adjunct viewOr}
 */
const viewOr = curry(viewOrFunc);

const viewOrIndexFunc: (def: any, n: number, arr: List) => any = (def, n, arr) =>
  defaultTo(def, viewLensIndex(n)(arr));

/**
 * @function viewOrIndex
 * @memberof Toolbox
 * @description Returns a "view" of the given data structure or the defaultValue if null, undefined, or NaN.
 * Based on Ramda Adjunct viewOr
 * @param {*} def - The default value
 * @param {number} n - The specified index
 * @param {*} arr - The data structure
 * @returns {*} "view" or defaultValue
 * @example
 * ```
 * viewOrIndex('some', 3, ['foo', 'bar', 'baz']); //=> 'some'
 * ```
 */
const viewOrIndex = curry(viewOrIndexFunc);

const viewOrPathFunc: (def: any, path: Path, obj: Dictionary) => any = (def, path, obj) =>
  defaultTo(def, viewLensPath(path)(obj));

/**
 * @function viewOrPath
 * @memberof Toolbox
 * @description Returns a "view" of the given data structure or the defaultValue if null, undefined, or NaN.
 * Based on Ramda Adjunct viewOr
 * @param {*} def - The default value
 * @param {Array.<string|number>} path - The specified path
 * @param {Object.<string,*>} obj - The data structure
 * @returns {*} "view" or defaultValue
 * @example
 * ```
 * viewOrPath('N/A', ['a', 'b'], {}); //=> 'N/A'
 * ```
 */
const viewOrPath = curry(viewOrPathFunc);

const viewOrPropFunc: (def: any, str: string, obj: Dictionary) => any = (def, str, obj) =>
  defaultTo(def, viewLensProp(str)(obj));

/**
 * @function viewOrProp
 * @memberof Toolbox
 * @description Returns a "view" of the given data structure or the defaultValue if null, undefined, or NaN.
 * Based on Ramda Adjunct viewOr
 * @param {*} def - The default value
 * @param {string} str - The specified property
 * @param {Object.<string,*>} obj - The data structure
 * @returns {*} "view" or defaultValue
 * @example
 * ```
 * viewOrProp('N/A', 'x', {}); //=> 'N/A'
 * viewOrProp('N/A', 'x', { x: 1 }); //=> 1
 * viewOrProp('some', 'y', { y: null }); //=> 'some'
 * viewOrProp('some', 'y', { y: false }); //=> false
 * ```
 */
const viewOrProp = curry(viewOrPropFunc);

export { viewOr, viewOrIndex, viewOrPath, viewOrProp };
