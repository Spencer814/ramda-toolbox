import { Promise } from 'bluebird';

/**
 * @function allP
 * @memberof Helper
 * @description Composable shortcut for Bluebird's `Promise.all`.
 * The `allP` method returns a single Promise that resolves when all of the promises
 * in the iterable argument have resolved or when the iterable argument contains no promises.
 * It rejects with the reason of the first promise that rejects.
 * @param {Iterable.<*>} iterable - An iterable object such as an Array or String
 * @returns {Promise} An already resolved Promise if the iterable passed is empty. An asynchronously resolved Promise if the iterable passed contains no promises. Note, Google Chrome 58 returns an already resolved promise in this case. A pending Promise in all other cases. This returned promise is then resolved/rejected asynchronously (as soon as the stack is empty) when all the promises in the given iterable have resolved, or if any of the promises reject. See the example about "Asynchronicity or synchronicity of allP" below.
 * @example
 * ```
 * allP([1, 2]); //=> Promise([1, 2])
 * allP([1, Promise.resolve(2)]); //=> Promise([1, 2])
 * allP([Promise.resolve(1), Promise.resolve(2)]); //=> Promise([1, 2])
 * allP([1, Promise.reject(2)]); //=> Promise(2)
 * ```
 * @see {@link https://char0n.github.io/ramda-adjunct/2.20.0/RA.html#.allP|Ramda Adjunct allP}
 * @see {@link http://bluebirdjs.com/docs/api/promise.all.html|Bluebird Promise.all}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all|MDN Promise.all()}
 */
const allP = Promise.all.bind(Promise);

/**
 * @function allSettledP
 * @memberof Helper
 * @description Composable shortcut for Bluebird's `Promise.allSettled`.
 * allSettledP returns a promise that is fulfilled with an array of promise state snapshots,
 * but only after all the original promises have settled, i.e. become either fulfilled or rejected.
 * We say that a promise is settled if it is not pending, i.e. if it is either fulfilled or rejected.
 * @param {Iterable.<*>} iterable - An iterable object such as an Array or String
 * @returns {Promise} An already resolved Promise if the iterable passed is empty. An asynchronously resolved Promise if the iterable passed contains no promises. Note, Google Chrome 58 returns an already resolved promise in this case. A pending Promise in all other cases. This returned promise is then resolved/rejected asynchronously (as soon as the stack is empty) when all the promises in the given iterable have resolved, or if any of the promises reject. See the example about "Asynchronicity or synchronicity of allP" below.
 * @example
 * ```
 * allSettledP([
 *   Promise.resolve(1),
 *   2,
 *   Promise.reject(3),
 * ]); //=> Promise([{ status: 'fulfilled', value: 1 }, { status: 'fulfilled', value: 2 }, { status: 'rejected', reason: 3 }])
 * ```
 * @see {@link https://char0n.github.io/ramda-adjunct/2.20.0/RA.html#.allSettledP|Ramda Adjunct allSettledP}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled|MDN Promise.allSettled()}
 */
const allSettledP = Promise.allSettled.bind(Promise);

/**
 * @function anyP
 * @memberof Helper
 * @description Composable shortcut for Bluebird's `Promise.any`.
 * Returns a promise that is fulfilled by the first given promise to be fulfilled,
 * or rejected with an array of rejection reasons if all of the given promises are rejected.
 * @param {Iterable.<*>} iterable - An iterable object such as an Array or String
 * @returns {Promise} A promise that is fulfilled by the first given promise to be fulfilled, or rejected with an array of rejection reasons if all of the given promises are rejected.
 * @example
 * ```
 * anyP([
 *   Promise.resolve(1),
 *   2,
 *   Promise.reject(3),
 * ]); //=> Promise(1)
 * ```
 * @see {@link https://char0n.github.io/ramda-adjunct/2.20.0/RA.html#.anyP|Ramda Adjunct anyP}
 * @see {@link http://bluebirdjs.com/docs/api/promise.any.html|Bluebird Promise.any}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any|MDN Promise.any()}
 */
const anyP = Promise.any.bind(Promise);

/**
 * @function propsP
 * @memberof Helper
 * @description Composable shortcut for Bluebird's `Promise.props`.
 * Like ``Promise.all`` but for object properties instead of array items. Returns a promise that is fulfilled when all the properties of the object are fulfilled.
 * The promise's fulfillment value is an object with fulfillment values at respective keys to the original object.
 * If any promise in the object rejects, the returned promise is rejected with the rejection reason.
 * If `object` is a trusted `Promise`, then it will be treated as a promise for object rather than for its properties.
 * All other objects are treated for their properties as is returned by `Object.keys` - the object's own enumerable properties.
 * @param {Iterable.<*>} iterable - An iterable object such as an Array or String
 * @returns {Promise} An already resolved Promise if the iterable passed is empty. An asynchronously resolved Promise if the iterable passed contains no promises. Note, Google Chrome 58 returns an already resolved promise in this case. A pending Promise in all other cases. This returned promise is then resolved/rejected asynchronously (as soon as the stack is empty) when all the promises in the given iterable have resolved, or if any of the promises reject. See the example about "Asynchronicity or synchronicity of allP" below.
 * @example
 * ```
 * propsP({
 *   p1: Promise.resolve('p1'),
 *   p2: 'p2'
 * }); //=> Promise({ p1: 'p1', p2: 'p2' })
 * ```
 * @see {@link http://bluebirdjs.com/docs/api/promise.props.html|Bluebird Promise.props}
 */
const propsP = Promise.props.bind(Promise);

/**
 * @function rejectP
 * @memberof Helper
 * @description Composable shortcut for Bluebird's `Promise.reject`.
 * Reject the underlying promise with `reason` as the rejection reason.
 * @param {Iterable.<*>} iterable - An iterable object such as an Array or String
 * @returns {Promise} Returns a Promise object that is rejected with the given reason.
 * @example
 * ```
 * rejectP(); //=> Promise(undefined)
 * rejectP('a'); //=> Promise('a')
 * rejectP([1, 2, 3]); //=> Promise([1, 2, 3])
 * ```
 * @see {@link https://char0n.github.io/ramda-adjunct/2.20.0/RA.html#.rejectP|Ramda Adjunct rejectP}
 * @see {@link http://bluebirdjs.com/docs/api/promise.reject.html|Bluebird Promise.reject}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject|MDN Promise.reject()}
 */
const rejectP = Promise.resolve.bind(Promise);

/**
 * @function resolveP
 * @memberof Helper
 * @description Composable shortcut for Bluebird's `Promise.resolve`.
 * Returns a Promise object that is resolved with the given value.
 * If the value is a thenable (i.e. has a "then" method), the returned promise will
 * "follow" that thenable, adopting its eventual state.
 * @param {Iterable.<*>} iterable - An iterable object such as an Array or String
 * @returns {Promise} An already resolved Promise if the iterable passed is empty. An asynchronously resolved Promise if the iterable passed contains no promises. Note, Google Chrome 58 returns an already resolved promise in this case. A pending Promise in all other cases. This returned promise is then resolved/rejected asynchronously (as soon as the stack is empty) when all the promises in the given iterable have resolved, or if any of the promises reject. See the example about "Asynchronicity or synchronicity of allP" below.
 * @example
 * ```
 * resolveP(); //=> Promise(undefined)
 * resolveP('a'); //=> Promise('a')
 * resolveP([1, 2, 3]); //=> Promise([1, 2, 3])
 * ```
 * @see {@link https://char0n.github.io/ramda-adjunct/2.20.0/RA.html#.resolveP|Ramda Adjunct resolveP}
 * @see {@link http://bluebirdjs.com/docs/api/promise.resolve.html|Bluebird Promise.resolve}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve|MDN Promise.resolve()}
 */
const resolveP = Promise.resolve.bind(Promise);

export { allP, allSettledP, anyP, propsP, rejectP, resolveP };
