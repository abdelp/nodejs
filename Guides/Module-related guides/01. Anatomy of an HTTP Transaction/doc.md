# Anatomy of an HTTP Transaction

## Create the Server

**How are web server objects being created in a node web server application?**

This is done by using `createServer`. E.g.

```js
const http = require('http');

const server = http.createServer((request, response) => {
  // magic happens here!
});
```

**How is the function passed in to the `createServer` being called?**

The function that's passed in to `createServer` is called once for every HTTP request that's made against that server, so it's called the request handler.

**What is the `Server` object returned by `createServer`?**

The `Server` object returned by `createServer` is an `EventEmitter`, and what we have here is just a shorthand for creating a `server` object and then adding the listener later. E.g.:

```js
const server = http.createServer();

server.on('request', (request, response) => {
  // the same kind of magic happens here!
});
```

**What happens when an HTTP request hits the server?**

When an HTTP request hits the server, node calls the request handler function with a few handy objects for dealing with the transaction, `request` and `response`.



## Method, URL and Headers

