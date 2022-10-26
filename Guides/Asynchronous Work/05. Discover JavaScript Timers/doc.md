# Discover JavaScript Timers

## `setTiemout()`

## Zero delay

**What happens if you specify the timeout delay to `0`?**

If you specify the timeout delay to `0`, the callback function will be executed as soon as possible, but after the current function execution:

```js
setTimeout(() => {
  console.log('after');
}, 0);

console.log('before');
```

This code will print

```js
before
aftere
```

## `setInterval()`

```js
setInterval(() => {
  // runs every 2 seconds
}, 2000)
```

The function above runs every 2 seconds unless you tell it to stop, using `clearInterval`, passing it the interval id that `setInterval` returned:

```js
const id = setInterval(() => {

}, 200);

clearInterval(id);
```

**Where are available `setTimeout` and `setInterval` in Node.js?**

`setTimeout` and `setInterval` are available in Node.js, through the [Timers module](https://nodejs.org/api/timers.html).

Node.js also provides `setImmediate()`, which is equivalent to using `setTimeout(() => {}, 0)`, mostly used to work with the Node.js Event loop.