# Serving static files in Express

**What should you use to serve static files in Express?**

To serve static files such as images, CSS files, and JavaScript files, use the `express.static` built-in middleware function.

```js
express.static(root, [options])
```

**How you can create a virtual path prefix (where that path does not actauully exist in the file system)?**

To create a virtual path prefix (where that path does not actually exist in the file system) for files that are served by the `express.static` function, specify a mounth path for the static directory, as shown below:

```js
app.use('/static', express.static('public'))
```

Now, you can load the files that are in the *public* directory from the `/static` path prefix.

```js
https://locahost:3000/static/images/kitten.jpg
```