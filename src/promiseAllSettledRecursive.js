/* eslint-disable no-use-before-define */
import {
  andThen,
  assoc,
  both,
  complement,
  cond,
  equals,
  identity,
  ifElse,
  isEmpty,
  map,
  o,
  reduce,
  T,
  toPairs,
  type,
  useWith
} from 'ramda';
import { allSettledP, resolveP } from 'ramda-adjunct';

const isNotEmpty = complement(isEmpty);
const typeEquals = useWith(equals, [identity, type]);

const iterator = (acc, [key, val]) => {
  const resolveAcc = (assocAcc) =>
    ifElse(typeEquals('Promise'), andThen(assocAcc), assocAcc)(acc);

  const buildObject = o(resolveAcc, assoc(key));

  return o(andThen(buildObject), promiseAllSettledRecursive)(val);
};

/**
 * @function promiseAllSettledRecursive
 * @memberof Toolbox
 * @description Returns a promise for all promises in a recursive object-structure
 * @param {*} value - Input that will be evaluated
 * @returns {Promise} Promise
 * @see {@link https://github.com/usefulthink/promise-all-recursive|promise-all-recursive}
 */
function promiseAllSettledRecursive(value) {
  const resolveArray = o(allSettledP, map(promiseAllSettledRecursive));
  const resolveObject = o(reduce(iterator, {}), toPairs);

  return cond([
    [typeEquals('Promise'), identity],
    [typeEquals('Array'), resolveArray],
    [both(typeEquals('Object'), isNotEmpty), resolveObject],
    [T, resolveP]
  ])(value);
}

export default promiseAllSettledRecursive;
/* eslint-enable no-use-before-define */
