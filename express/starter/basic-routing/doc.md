# Basic routing

**What does Routing refer to?**

**Routing** refers to determining how an application responds to a client to a particular endpoint.

**What is a Route?**

A Route is a URI (or a path) and a specific HTTP request method (GET, POST, and so on).

**How many handlers can a route have?**

Each route can have one or more handler functions.

Route definition structure:

```js
app.METHOD(PATH, HANDLER)
```

Where:
* app is an instance of express.
* METHOD is an HTTP request method, in lowercase.
* PATH is a path on the server.
* HANDLER is the function executed when the route is matched.

## Example

```js
app.get('/', (req, res) => {
  res.send('Hello World!')
})
```