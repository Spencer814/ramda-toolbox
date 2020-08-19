import { curry, equals, identity, useWith } from 'ramda';

import { viewWith, viewWithIndex, viewWithPath, viewWithProp } from './viewWith';

type Path = (string | number)[];
type Input = number | Path | string;
type List = any[];
interface Dictionary {
  [index: string]: any;
}

const viewEqFunc: (src: Input, val: any, data: Dictionary | List) => boolean = (src, val, data) =>
  useWith(viewWith, [identity, equals, identity])(src, val, data);

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
const viewEq = curry(viewEqFunc);

const viewEqIndexFunc: (n: number, val: any, arr: List) => boolean = (n, val, arr) =>
  useWith(viewWithIndex, [identity, equals, identity])(n, val, arr);

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
const viewEqIndex = curry(viewEqIndexFunc);

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
const viewEqPath = curry(viewEqPathFunc);

const viewEqPropFunc: (str: string, val: any, obj: Dictionary) => boolean = (str, val, obj) =>
  useWith(viewWithProp, [identity, equals, identity])(str, val, obj);

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
const viewEqProp = curry(viewEqPropFunc);

export { viewEq, viewEqIndex, viewEqPath, viewEqProp };
