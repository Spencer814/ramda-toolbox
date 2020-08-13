# ramda-toolbox

Convenience functions built using ramda

---

## Purpose

Helpful functions based on ramda-adjunct and ramda-extension

## Functions

---

### **allP**

`[Promise a] -> Promise [a]`

Composable shortcut for `Promise.all`

The `allP` method returns a single Promise that resolves when all of the promises in the iterable argument have resolved or when the iterable argument contains no promises. It rejects with the reason of the first promise that rejects.

```javascript
allP([1, 2]); //=> Promise([1, 2])
allP([1, Promise.resolve(2)]); //=> Promise([1, 2])
allP([Promise.resolve(1), Promise.resolve(2)]); //=> Promise([1, 2])
allP([1, Promise.reject(2)]); //=> Promise(2)
```

---

### **allSettledP**

`[Promise a] -> Promise [Settlement a]`

`Settlement = { status: String, value: * }`

Returns a promise that is fulfilled with an array of promise state snapshots, but only after all the original promises have settled, i.e. become either fulfilled or rejected. We say that a promise is settled if it is not pending, i.e. if it is either fulfilled or rejected.

```javascript
allP([1, 2]); //=> Promise([1, 2])
allP([1, Promise.resolve(2)]); //=> Promise([1, 2])
allP([Promise.resolve(1), Promise.resolve(2)]); //=> Promise([1, 2])
allP([1, Promise.reject(2)]); //=> Promise(2)
```

---

### **applySpecP**

`arrayBindToHead(fxToBind[function])`

arrayBindToHead takes an input function and returns a function that takes an array. The inner function applies the input function to the [0] index of the array and places the result at the end of the array.

```javascript
/**
 * @function applySpecP
 * @memberof Toolbox
 * @description Given a spec object recursively mapping properties to functions that may
 * return promises, creates a function producing an object of the same structure, by
 * mapping each property to the result of calling its associated function with the
 * supplied arguments and then returns a promise that resolves when all promises in a
 * recursive object-structure are resolved.
 *
 * @param {object} spec - ...
 * @returns {Promise<Function>} ...
 *
 * @category Function
 * @typedef Settlement = { status: String, value: * }
 * @sig [Promise a] -> Promise [Settlement a]
 * @example
 *
 * const getMetrics = applySpecP({
 *   sum: async (a, b) => a + b,
 *   nested: { mul: async (a, b) => a * b }
 * });
 * getMetrics(2, 4); //=> { sum: 6, nested: { mul: 8 } }
 *
 * @see {@link https://ramdajs.com/docs/#applySpec|Ramda applySpec}
 */
```

```javascript
const withBoundFx = arrayBindToHead(([ one ]) => one + 1);

const result = await withBoundFx([[1] 3, 4, 5]);

console.log(result); // [[1], 3, 4, 5, 2]
```

---

### **lensFn**

`arrayUnit(arg[*])`

arrayUnit takes a value and wraps that value in a 2d array

```javascript
const unitified = arrayUnit('superman');

console.log(unitified); // [['superman']]
```

---

### **promiseAllRecursive**

`asyncArrayBindToHead(fxToBind[function])`

Async version of arrayBindToHead.

```javascript
const withBoundFx = asyncArrayBindToHead(([ one ]) => outsideServiceThatMultiplies(2, one));

const result = await withBoundFx([[1] 3, 4, 5]);

console.log(result); // [[1, 2], 3, 4, 5]
```

---

### **setLens**

`asyncBindToTail(fxToBind[function])`

Async version of bindToTail.

```javascript
const bTt = bindToTail((x) => x);

const result = await asyncBtT([5, 6, 7, 8]);

console.log(result2); // [5, 6, 7, 8, 5]
```

---

### **viewEq**

`asyncJuxt(arrOfTransformFunctions[Array<function>])`

Async version of [Lodash's over](https://lodash.com/docs/4.17.10#over) (aliased to 'juxt' in lodash/fp). Takes array of functions, and returns a function that takes an arg, and applies it to each of the functions in the array.
That ensuing fuction returns an array of the results.

```javascript
const add1 = (n) => n + 1;
const double = (x) =>
  new Promise((resolve) => setTimeout(() => resolve(x * 2), 100));
const square = (n) => n * n;
const make0 = () => 0;

const result = await asyncJuxt([add1, double, square, make0])(5);

console.log(result); // [6, 10, 25, 0]
```

---

### **viewLens**

`asyncLineUp(transformerArr[Array<function>])`

Async version of lineUp

```javascript
const transformers = [async (a) => a * 5, async (a) => (a) => `${a}, adios`];

const result = await asyncLineUp(transformers)([5, 'hello word', 8]);

console.log(result); // [10, 'hello word, adios', 8]
```

---

### **viewOr**

`asyncLineUpRight(transformerArr[Array<function>])`

Async version of lineUpRight

```javascript
const transformers = [async (a) => a * 5, async (a) => (a) => `${a}, adios`];

const result = await asyncLineUp(transformers)([5, 8, 'hello word']);

console.log(result); // [5, 40, 'hello word, adios']
```

---

### **viewWith**

`asyncLineUpDeep(fx2d[Array<Array<function>>])`

Async version of lineUpDeep

```javascript
const lineUpFx = asyncLineUpDeep([
  [async (a) => a + 1, async (b) => b + 2],
  [async (a) => a * 2, async (b) => b * 3]
]);

const result = await lineUpFx([1, 2, 3]);

console.log(result); // [4, 12, 3]
```

---
