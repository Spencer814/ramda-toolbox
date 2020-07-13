import { curryN, identity, o, useWith } from 'ramda';

import {
  viewLens,
  viewLensIndex,
  viewLensPath,
  viewLensProp
} from './viewLens.js';

/**
 * @function viewWith
 * @memberof Toolbox
 * @description Applies function on the given lens view, with args reversed to match
 * Based on Ramda Extension viewWith
 *
 * @param {*} val - The specified index, path, or property
 * @param {Function} fn - function used for lens
 * @param {*} data - The data structure
 * @returns {*} result of view after being appled to the function
 *
 * @example
 *
 * viewWith(0, R.pathEq(['foo'], 'boo'), [{ foo: 'boo' }]); //=> true
 * viewWith(0, R.divide(R.__, 2), [4]); //=> 2
 * viewWith(['foo', 'bar'], R.prop(R.__, { baz: 'boo' }), { foo: { bar: 'baz' } }); //=> 'boo'
 * viewWith('foo', R.path(R.__, { bar: 'baz' }), { foo: ['bar'] }); //=> 'baz'
 *
 * @see {@link https://ramda-extension.firebaseapp.com/docs/#viewWith|Ramda Extension viewWith}
 */
const viewWithBuilder = curryN(4, (viewLensFn, val, fn, data) =>
  useWith(o, [identity, viewLensFn])(fn, val)(data)
);

const viewWith = viewWithBuilder(viewLens);
const viewWithIndex = viewWithBuilder(viewLensIndex);
const viewWithPath = viewWithBuilder(viewLensPath);
const viewWithProp = viewWithBuilder(viewLensProp);

export { viewWith, viewWithIndex, viewWithPath, viewWithProp };
