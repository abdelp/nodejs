# Error Handling In Node.Js

***How are errors handled in Node.js?***

Errors are handled through exceptions in Node.js.

## Creating exceptions

***How are exceptions created?***

An exception is created using the `throw` keyword:

```js
throw value;
```

***What happens when the throw exception is executed?***

As soon as JavaScript executes this line, the normal program flow is halted and the control is held back to the nearest exception handler.

## Error Objects

***What is an error object?***

An error object is an object that is either an instance of the Error object, or extends the Error class.

```js
throw new Error('Ran out of coffee');
```

or

```js
class NotEnoughCoffeeError extends Error {
  // ...
}

throw new NotEnoughCoffeeError();
```

## Handling exceptions

# Catching uncaught exceptions

***How you cna catch uncaught exceptions?***

You need to listen for the `uncaughtException` event on the process object:

```js
process.on('uncaughtException', err => {
  console.error('There was an uncaught error', err);
  process.exit(1); // mandatory (as per the Node.js docs)
});
```

Obs.: You don't need to import the `process` core module for this, as it's automatically injected.

