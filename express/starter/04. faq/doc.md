# FAQ

**How do I handle 404 responses?**

All you need to do is add a middleware function at the very bottom of the stack (below all other functions) to handle a 404 response:

```js
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})
```

**How you should add routes to not be superseded by a middleware function?**

You should add routes dynamically at runtime on an instance of `express.Router`.

**How do I setup an error handler?**

You define error-handling middleware in the same way as other middleware, except with four arguments instead of three; especifically with the signature (err, req, res, next):

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```