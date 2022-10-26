# JavaScript Asynchronous Programming and Callbacks

## Asynchronicity in Programming Languages

## JavaScript

## Callbacks

**What's a callback?**

A callback is a simple function that's passed as a value to another function.

It's common to wrap all your client code in a load event listener on the `window` object, which runs the callback function only when the page is ready:

```js
window.addEventListener('load', () => {

});
```

## Handling errors in callbacks

**How do you handle errors with callbacks?**

One very common strategy is to use what Node.js adopted: the first parameter in any callback function is the error object: **error-first callbacks**

```js
const fs = require('fs');

fs.readFile('/file.json', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});
```

## The problem with callbacks