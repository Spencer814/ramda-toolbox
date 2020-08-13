import { curry, identity, o, useWith } from 'ramda';

import { viewLens, viewLensIndex, viewLensPath, viewLensProp } from './viewLens';

type ArgFn = (input: any) => any;
type Path = (string | number)[];
type Input = number | Path | string;
type List = any[];
interface Dictionary {
  [index: string]: any;
}

const viewWithFunc: (val: Input, fn: ArgFn, data: Dictionary | List) => any = (val, fn, data) =>
  useWith(o, [identity, viewLens])(fn, val)(data);

/**
 * @function viewWith
 * @memberof Toolbox
 * @description Applies function on the given lens view, with args reversed to match
 * Based on Ramda Extension viewWith
 *
 * @param {string|number|string[]|number[]} val - The specified index, path, or property
 * @param {Function} fn - function used for lens
 * @param {Object.<string,*>|*} data - The data structure
 * @returns {*} result of view after being appled to the function
 *
 * @example
 * ```
 * viewWith(0, R.pathEq(['foo'], 'boo'), [{ foo: 'boo' }]); //=> true
 * viewWith(0, R.divide(R.__, 2), [4]); //=> 2
 * viewWith(['foo', 'bar'], R.prop(R.__, { baz: 'boo' }), { foo: { bar: 'baz' } }); //=> 'boo'
 * viewWith('foo', R.path(R.__, { bar: 'baz' }), { foo: ['bar'] }); //=> 'baz'
 * ```
 * @see {@link https://ramda-extension.firebaseapp.com/docs/#viewWith|Ramda Extension viewWith}
 */
const viewWith = curry(viewWithFunc);

const viewWithIndexFunc: (n: number, fn: ArgFn, arr: List) => any = (n, fn, arr) =>
  useWith(o, [identity, viewLensIndex])(fn, n)(arr);

/**
 * @function viewWithIndex
 * @memberof Toolbox
 * @description Applies function on the given lens view, with args reversed to match
 * Based on Ramda Extension viewWith
 *
 * @param {number} n - The specified index
 * @param {Function} fn - function used for lens
 * @param {*} arr - The data structure
 * @returns {*} result of view after being appled to the function
 *
 * @example
 * ```
 * viewWithIndex(0, R.pathEq(['foo'], 'boo'), [{ foo: 'boo' }]); //=> true
 * viewWithIndex(0, R.divide(R.__, 2), [4]); //=> 2
 * ```
 */
const viewWithIndex = curry(viewWithIndexFunc);

const viewWithPathFunc: (path: Path, fn: ArgFn, obj: Dictionary) => any = (path, fn, obj) =>
  useWith(o, [identity, viewLensPath])(fn, path)(obj);

/**
 * @function viewWithPath
 * @memberof Toolbox
 * @description Applies function on the given lens view, with args reversed to match
 * Based on Ramda Extension viewWith
 *
 * @param {Array.<string|number>} path - The specified path
 * @param {Function} fn - function used for lens
 * @param {Object.<string,*>} obj - The data structure
 * @returns {*} result of view after being appled to the function
 *
 * @example
 * ```
 * viewWithPath(['foo', 'bar'], R.prop(R.__, { baz: 'boo' }), { foo: { bar: 'baz' } }); //=> 'boo'
 * ```
 */
const viewWithPath = curry(viewWithPathFunc);

const viewWithPropFunc: (str: string, fn: ArgFn, obj: Dictionary) => any = (str, fn, obj) =>
  useWith(o, [identity, viewLensProp])(fn, str)(obj);

/**
 * @function viewWithProp
 * @memberof Toolbox
 * @description Applies function on the given lens view, with args reversed to match
 * Based on Ramda Extension viewWith
 *
 * @param {string} str - The specified property
 * @param {Function} fn - function used for lens
 * @param {Object.<string,*>} obj - The data structure
 * @returns {*} result of view after being appled to the function
 *
 * @example
 * ```
 * viewWithProp('foo', R.path(R.__, { bar: 'baz' }), { foo: ['bar'] }); //=> 'baz'
 * ```
 */
const viewWithProp = curry(viewWithPropFunc);

export { viewWith, viewWithIndex, viewWithPath, viewWithProp };
