import { bind, curry } from 'ramda';

/**
 * @function allP
 * @memberof Utility
 * @description Composable shortcut for `Promise.all`.
 *
 * The `allP` method returns a single Promise that resolves when all of the promises
 * in the iterable argument have resolved or when the iterable argument contains no promises.
 * It rejects with the reason of the first promise that rejects.
 *
 * @param {Iterable.<*>} iterable - An iterable object such as an Array or String
 * @returns {Promise} An already resolved Promise if the iterable passed is empty. An asynchronously resolved Promise if the iterable passed contains no promises. Note, Google Chrome 58 returns an already resolved promise in this case. A pending Promise in all other cases. This returned promise is then resolved/rejected asynchronously (as soon as the stack is empty) when all the promises in the given iterable have resolved, or if any of the promises reject. See the example about "Asynchronicity or synchronicity of allP" below.
 *
 * @example
 *
 * allP([1, 2]); //=> Promise([1, 2])
 * allP([1, Promise.resolve(2)]); //=> Promise([1, 2])
 * allP([Promise.resolve(1), Promise.resolve(2)]); //=> Promise([1, 2])
 * allP([1, Promise.reject(2)]); //=> Promise(2)
 *
 * @see {@link https://char0n.github.io/ramda-adjunct/2.20.0/RA.html#.allP|Ramda Adjunct allP}
 */
export default curry(bind(Promise.all, Promise));
