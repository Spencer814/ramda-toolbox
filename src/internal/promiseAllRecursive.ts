/* eslint-disable @typescript-eslint/no-use-before-define */
import { assoc, both, complement, cond, equals, identity, isEmpty, map, o, reduce, T, toPairs, type, useWith } from 'ramda';

import { allP, resolveP } from './promises';

const isNotEmpty:(_: any) => boolean = complement(isEmpty);

const typeEquals: (checkType: string) => (val: any) => boolean = useWith(equals, [identity, type]);

const iterator: (acc: any, [key, val]: [string, any]) => any = async (acc, [key, val]) =>
  assoc(key, await promiseAllRecursive(val), await acc);

const resolveArray:(_: any) => any = o(allP, map(promiseAllRecursive));
const resolveObject:(_: any) => any = o(reduce(iterator, {}), toPairs);

/**
 * @function promiseAllRecursive
 * @memberof Internal
 * @description Fires off any promises in the data structure, and will return the same structure with all
 * promises settled. All Promises are fired simultaneously, and none are awaited until all are
 * fired.
 *
 * @param {*} value
 * @returns {Promise}
 *
 * @see {@link https://github.com/usefulthink/promise-all-recursive|promise-all-recursive}
 */
function promiseAllRecursive<T>(value:T | Promise<T>): T {
  return cond([
    [typeEquals('Array'), resolveArray],
    [both(typeEquals('Object'), isNotEmpty), resolveObject],
    [T, resolveP]
  ])(value);
}

export default promiseAllRecursive;
