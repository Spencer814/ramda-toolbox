import type { Curry } from 'Function/Curry';
import { apply, converge, curry, defaultTo, juxt, nthArg, o } from 'ramda';

import { viewLens, viewLensIndex, viewLensPath, viewLensProp } from './viewLens';

type ArgFn = (input: any) => any;
type Path = (string | number)[];
type Input = number | Path | string;
type List = any[];
interface Dictionary {
  [index: string]: any;
}

type ViewOrType = Curry<(def: any, val: Input, data: Dictionary | List) => any>;
type ViewOrIndexType = Curry<(def: any, n: number, arr: List) => any>;
type ViewOrPathType = Curry<(def: any, path: Path, obj: Dictionary) => any>;
type ViewOrPropType = Curry<(def: any, str: string, obj: Dictionary) => any>;

const tailArgs = juxt([nthArg(1), nthArg(2)]);

/**
 * @private
 * @function viewOrC
 * @description Returns a curried function that will set a value at a given lens
 * @param {Function} fn - function used for lens
 * @returns {Function}
 */
const viewOrC = (fn: ArgFn) => curry(converge(defaultTo, [nthArg(0), o(apply(fn), tailArgs)]));

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
const viewOr: ViewOrType = viewOrC(viewLens);

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
const viewOrIndex: ViewOrIndexType = viewOrC(viewLensIndex);

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
const viewOrPath: ViewOrPathType = viewOrC(viewLensPath);

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
const viewOrProp: ViewOrPropType = viewOrC(viewLensProp);

export { viewOr, viewOrIndex, viewOrPath, viewOrProp };
