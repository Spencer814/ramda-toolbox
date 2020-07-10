import { andThen, assoc, both, complement, cond, equals, identity, ifElse, isEmpty, map, o, reduce, T, toPairs, type, useWith } from 'ramda';
import { allSettledP, resolveP } from 'ramda-adjunct';

const isNotEmpty = complement(isEmpty);

const typeEquals = useWith(equals, [identity, type]);

const iterator = (acc, [key, val]) => {
  const resolveAcc = assocAcc => ifElse(
    typeEquals('Promise'),
    andThen(assocAcc),
    assocAcc
  )(acc);

  const buildObject = o(resolveAcc, assoc(key));

  return o(andThen(buildObject), promiseAllRecursive)(val);
};

/**
 * @function promiseAllRecursive
 * @memberof Toolbox
 * @description Returns a promise that resolves when all promises in a recursive object-structure are resolved
 * Based on promise-all-recursive
 *
 * @param {*} value
 * @returns {Promise}
 *
 * @example
 *
 * const getMetrics = applySpecP({
 *   sum: async (a, b) => a + b,
 *   nested: { mul: async (a, b) => a * b }
 * });
 * getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
 *
 * @see {@link https://github.com/usefulthink/promise-all-recursive|promise-all-recursive}
 */
export default function promiseAllRecursive(value) {
  const resolveArray = o(allSettledP, map(promiseAllRecursive));
  const resolveObject = o(reduce(iterator, {}), toPairs);

  return cond([
    [typeEquals('Promise'), identity],
    [typeEquals('Array'), resolveArray],
    [both(typeEquals('Object'), isNotEmpty), resolveObject],
    [T, resolveP]
  ])(value);
}
