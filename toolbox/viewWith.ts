import { curryN, identity, o, useWith } from 'ramda';

import viewLens from './viewLens';

/**
 * @function viewWith
 * @memberof Toolbox
 * @description Applies function on the given lens view, with args reversed to match
 *
 * @param {*} val - The specified index, path, or property
 * @param {Function} fn - function used for lens
 * @param {*} data - The data structure
 * @returns {*} result of view after being appled to the function
 *
 * @example
 *
 * viewWith(0, R.pathEq(['foo'], 'boo'), [{ foo: 'boo' }]); //=> true
 * viewWith(0, R.divide(R.__, 2), [4]) //=> 2
 *
 * @see {@link https://ramda-extension.firebaseapp.com/docs/#viewWith|Ramda Extension viewWith}
 */
export default curryN(3, (val, fn, data) => useWith(o, [identity, viewLens])(fn, val)(data));
