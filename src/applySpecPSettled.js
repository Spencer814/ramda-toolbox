import {
  __,
  apply,
  compose,
  converge,
  curry,
  curryN,
  either,
  keys,
  max,
  o,
  pipe,
  pluck,
  reduce,
  unless,
  values
} from 'ramda';
import { isAsyncFunction, isFunction } from 'ramda-adjunct';

import promiseAllSettledRecursive from './promiseAllSettledRecursive.js';
import { viewLens } from './viewLens.js';

const getArity = compose(reduce(max, 0), pluck('length'), values);

const isFunctionType = either(isFunction, isAsyncFunction);

const mapValues = curry((fn, obj) => {
  const iterator = (acc, key) => {
    const val = fn(viewLens(key, obj));
    return { [key]: val, ...acc };
  };

  return o(reduce(iterator, {}), keys)(obj);
});

/**
 * @function applySpecPSettled
 * @memberof Toolbox
 * @description Given a spec object recursively mapping properties to functions that may
 * return promises, creates a function producing an object of the same structure, by
 * mapping each property to the result of calling its associated function with the
 * supplied arguments.
 *
 * @param {object} spec - Input object with values consisting of functions
 * waiting to be evaluated.
 *
 * @returns {Promise<Function>} Returns a promise for all promises in a
 * recursive object-structure.
 *
 * @example
 *
 * const getMetrics = applySpecPSettled({
 *   sum: async (a, b) => a + b,
 *   nested: { mul: async (a, b) => a * b }
 * });
 * getMetrics(2, 4); //=> { sum: 6, nested: { mul: 8 } }
 *
 * @see {@link https://ramdajs.com/docs/#applySpec|Ramda applySpec}
 */
const applySpecPSettled = (spec) => (...args) =>
  pipe(
    mapValues(unless(isFunctionType, applySpecPSettled)),
    mapValues(apply(__, args)),
    promiseAllSettledRecursive
  )(spec);

export default curry(converge(curryN, [getArity, applySpecPSettled]));
