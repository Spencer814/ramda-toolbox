import { __, apply, compose, converge, curry, curryN, either, equals, keys, max, o, pipe, pluck, reduce, type, unless, values } from 'ramda';

import promiseAllRecursive from './promiseAllRecursive';
import viewLens from './viewLens';

const typeEquals = (ctor: string) => o(equals(ctor), type);
const getArity = compose(reduce(max, 0), pluck('length'), values);

const isFunction = either(typeEquals('Function'), typeEquals('AsyncFunction'));

interface Nested {
  [key: string]: Function | Promise<Function>;
}

interface Acc {
  [key: string]: Function | Promise<Function> | Nested;
}

const mapValues = curry(
  (fn, obj) => {
    const iterator = (acc: Acc, key: string) => {
      const val = fn(viewLens(key, obj));
      return { [key]: val, ...acc };
    };

    return o(reduce(iterator, {}), keys)(obj);
  }
);

interface Spec {
  [key: string]: Function | Promise<Function>;
}

/**
 * @function applySpecP
 * @memberof Toolbox
 * @description Given a spec object recursively mapping properties to functions that may
 * return promises, creates a function producing an object of the same structure, by
 * mapping each property to the result of calling its associated function with the
 * supplied arguments and then returns a promise that resolves when all promises in a
 * recursive object-structure are resolved.
 *
 * @param {object} spec
 * @returns {Promise<Function>}
 *
 * @example
 *
 * const getMetrics = applySpecP({
 *   sum: async (a, b) => a + b,
 *   nested: { mul: async (a, b) => a * b }
 * });
 * getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
 *
 * @see {@link https://ramdajs.com/docs/#applySpec|Ramda applySpec}
 * @see {@link https://github.com/usefulthink/promise-all-recursive|promise-all-recursive}
 */
const applySpecProm = (spec: Spec) => (...args: any[]) => pipe(
  mapValues(unless(isFunction, applySpecProm)),
  mapValues(apply(__, args)),
  promiseAllRecursive
)(spec);

export default curry(converge(curryN, [getArity, applySpecProm]));
