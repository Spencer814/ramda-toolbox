import type { Curry } from 'Function/Curry';
import { curry, equals, identity, useWith } from 'ramda';

import { viewWith, viewWithIndex, viewWithPath, viewWithProp } from './viewWith';

type ArgFn = (input: any) => any;
type Path = (string | number)[];
type Input = number | Path | string;
type List = any[];
interface Dictionary {
  [index: string]: any;
}

type ViewEqType = Curry<(src: Input, val: any, data: Dictionary | List) => boolean>;
type ViewEqIndexType = Curry<(n: number, val: any, arr: List) => boolean>;
type ViewEqPathType = Curry<(path: Path, val: any, obj: Dictionary) => boolean>;
type ViewEqPropType = Curry<(str: string, val: any, obj: Dictionary) => boolean>;

/**
 * @private
 * @function viewEqC
 * @description Returns a curried function that will set a value at a given lens
 * @param {Function} fn - function used for lens
 * @returns {Function}
 */
const viewEqC = (fn: ArgFn) => curry(useWith(fn, [identity, equals, identity]));

/**
 * @function viewEq
 * @memberof Toolbox
 * @description Returns true if the given lens equals to given value
 * Based on Ramda Extension viewEq
 * @param {string|number|string[]|number[]} val - The value to compare the focused data structure with
 * @param {*} val - Van Laarhoven lens
 * @param {Object.<string,*>|*} data - The data structure
 * @returns {boolean} `true` if the focused data structure equals value, `false` otherwise
 * @example
 * ```
 * viewEq('foo', 'bar')({ foo: 'bar' }); //=> true
 * viewEq(1, 1, [0, 1, 2]); //=> true
 * viewEq(['a', 'b'], 'foo', { a: { b: 'foo' } }) //=> true
 * ```
 * @see {@link https://ramda-extension.firebaseapp.com/docs/#viewEq|Ramda Extension viewEq}
 */
const viewEq: ViewEqType = viewEqC(viewWith);

/**
 * @function viewEqIndex
 * @memberof Toolbox
 * @description Returns true if the given lens equals to given value
 * Based on Ramda Extension viewEq
 * @param {number} n - The value to compare the focused data structure with
 * @param {*} val - Van Laarhoven lens
 * @param {*} arr - The data structure
 * @returns {boolean} `true` if the focused data structure equals value, `false` otherwise
 * @example
 * ```
 * viewEqIndex(1, 1, [0, 1, 2]); //=> true
 * ```
 */
const viewEqIndex: ViewEqIndexType = viewEqC(viewWithIndex);

/**
 * @function viewEqPath
 * @memberof Toolbox
 * @description Returns true if the given lens equals to given value
 * Based on Ramda Extension viewEq
 * @param {Array.<string|number>} path - The value to compare the focused data structure with
 * @param {*} val - Van Laarhoven lens
 * @param {Object.<string,*>} obj - The data structure
 * @returns {boolean} `true` if the focused data structure equals value, `false` otherwise
 * @example
 * ```
 * viewEqPath(['a', 'b'], 'foo', { a: { b: 'foo' } }) //=> true
 * ```
 */
const viewEqPath: ViewEqPathType = viewEqC(viewWithPath);

/**
 * @function viewEqProp
 * @memberof Toolbox
 * @description Returns true if the given lens equals to given value
 * Based on Ramda Extension viewEq
 * @param {string} str - The value to compare the focused data structure with
 * @param {*} val - Van Laarhoven lens
 * @param {Object.<string,*>} obj - The data structure
 * @returns {boolean} `true` if the focused data structure equals value, `false` otherwise
 * @example
 * ```
 * viewEqProp('foo', 'bar')({ foo: 'bar' }); //=> true
 * ```
 */
const viewEqProp: ViewEqPropType = viewEqC(viewWithProp);

export { viewEq, viewEqIndex, viewEqPath, viewEqProp };
