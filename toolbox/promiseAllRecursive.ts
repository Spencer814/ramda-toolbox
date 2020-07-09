import { andThen, assoc, bind, both, complement, cond, equals, identity, ifElse, isEmpty, map, o, reduce, T, toPairs, type, useWith } from 'ramda';

import allP from './internal/allP';

const isNotEmpty = complement(isEmpty);

const resolveP = bind(Promise.resolve, Promise);
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
 * @param {*} value
 * @returns {Promise}
 * @see {@link https://github.com/usefulthink/promise-all-recursive|promise-all-recursive}
 */
export default function promiseAllRecursive(value) {
  const resolveArray = o(allP, map(promiseAllRecursive));
  const resolveObject = o(reduce(iterator, {}), toPairs);

  return cond([
    [typeEquals('Promise'), identity],
    [typeEquals('Array'), resolveArray],
    [both(typeEquals('Object'), isNotEmpty), resolveObject],
    [T, resolveP]
  ])(value);
}
