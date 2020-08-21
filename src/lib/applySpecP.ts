import type { Curry } from 'Function/Curry';
import { always, apply, converge, curryN, either, equals, flip, identity, ifElse, mapObjIndexed, max, pipe, prop, reduce, type, unless, useWith, values } from 'ramda';

import { promiseAllRecursive } from './helper';

const applyToList = flip(apply);

const typeEquals: (ctor: string) => (_: any) => boolean =
  ctor => pipe(type, equals(ctor));

const isFunction: (input: any) => boolean =
  either(typeEquals('Function'), typeEquals('AsyncFunction'));

const funcLengthOr0: (_: any) => number =
  ifElse(
    isFunction,
    prop('length'),
    always(0)
  );

const getLongestArity: (accum: number, val: any) => number =
  useWith(max, [identity, funcLengthOr0]);

const getArity: (_: any) => number =
  pipe(
    values,
    reduce(getLongestArity, 0)
  );

const buildSpec:(spec: any) => (...args: any[]) => Promise<any> =
  spec => async (...args) => pipe(
    mapObjIndexed(unless(isFunction, buildSpec)),
    mapObjIndexed(applyToList(args)),
    promiseAllRecursive
  )(spec);

/**
 * @function applySpecP
 * @memberof Toolbox
 * @description Given a spec object recursively mapping properties to functions that may
 * return promises, creates a function producing an object of the same structure, by
 * mapping each property to the result of calling its associated function with the
 * supplied arguments and then returns a promise that resolves when all promises in a
 * recursive object-structure are resolved.
 * @param {object} spec
 * @returns {Promise<Function>}
 * @example
 * ```
 * const getMetrics = applySpecP({
 *   sum: async (a, b) => a + b,
 *   nested: { mul: async (a, b) => a * b }
 * });
 * getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
 * ```
 * @see {@link https://ramdajs.com/docs/#applySpec|Ramda applySpec}
 */
const applySpecP: <T>(spec: T) => Curry<(...args: any[]) => Promise<T>> = converge(
  curryN, [getArity, buildSpec]
);

export default applySpecP;
