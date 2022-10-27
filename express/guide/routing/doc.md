# Routing

**How to handle multiple handlers for an specific route?**

It is important to provide *next* as an argument to the callback function and then call *next()* within the body of the function to hand off control to the next callback.

## Route methods

**Where is a routed method derived from?**

A route method is derived from one of the HTTP methods, and is attached to an instance of the *express* class.

**What's the special routing method for loading middleware?**

`app.all()` is special method for loading middleware functions at a path for **all** HTTP request methods.

## Route paths

**What can be a route path?**

Route paths can be:

* strings
* string patterns
* regular expressions

## Route parameters

**What are *Route parameters*?**

Route parameters are named URL segments that are used to capture the values specified at their position in the URL.

**Where are route parameters captured?**

Route parameters are captured in the *req.params* object, with the name of the route parameter specified in the path as their respective keys.

```
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
```

**How can you have more control over the exact string that can be matched by a route parameter?**

You can append a regular expression in parentheses (()):

```
Route path: /user/:userId(\d+)
Request URL: http://localhost:3000/user/42
req.params: {"userId": "42"}
```

```
Because the regular expression is usually part of a literal string, be sure to escape any \ characters with an additional backslash, for example \\d+.
```

```
In Express 4.x, the * character in regular expressions is not interpreted in the usual way. As a workaround, use {0,} instead of *. This will likely be fixed in Express 5.
```

## Route handlers

**What form can a route handler have?**

Route handlers can be in the form of:

* function
* an array of functions
* combinations of both

E.g.:

```js
app.get('/', cb0, [cb1, cb2], cb4);
```

## Response methods

**What can do the reponse object (res) methods?**

The methods on the response object can send a response to the client, and terminate the resquest-response cycle.

**What happens if no response method is called?**

If no response method is called, the client request will be left hanging.

## app.route()

## express.Router()

**What is `express.Router` class for?**

Use the `express.Router` class to create modular, mountable route handlers.

E.g.:

```js
const express = requires('express');
const router = express.Router();

// Middleware specific to this router

router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', (req, res) => {
  res.send('Birds home page');
});

module.exports = router