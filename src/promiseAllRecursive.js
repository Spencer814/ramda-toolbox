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
import { allP, resolveP } from 'ramda-adjunct';

const isNotEmpty = complement(isEmpty);
const typeEquals = useWith(equals, [identity, type]);

const iterator = (acc, [key, val]) => {
  const resolveAcc = (assocAcc) =>
    ifElse(typeEquals('Promise'), andThen(assocAcc), assocAcc)(acc);

  const buildObject = o(resolveAcc, assoc(key));

  return o(andThen(buildObject), promiseAllRecursive)(val);
};

/**
 * @function promiseAllRecursive
 * @memberof Toolbox
 * @description Returns a promise that resolves when all promises in a recursive object-structure are resolved
 * @param {*} value - Input that will be evaluated
 * @returns {Promise} Promise
 * @see {@link https://github.com/usefulthink/promise-all-recursive|promise-all-recursive}
 */
function promiseAllRecursive(value) {
  const resolveArray = o(allP, map(promiseAllRecursive));
  const resolveObject = o(reduce(iterator, {}), toPairs);

  return cond([
    [typeEquals('Promise'), identity],
    [typeEquals('Array'), resolveArray],
    [both(typeEquals('Object'), isNotEmpty), resolveObject],
    [T, resolveP]
  ])(value);
}

export default promiseAllRecursive;
/* eslint-enable no-use-before-define */
