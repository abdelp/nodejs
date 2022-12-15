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

However, the path that you provide to the `express.static` function is relative to the directory from where you launch your node process. If you run the express app from another directoy, :

**How is recommended to provide the path of the directory where you want to serve the static file from?**

It's safer to use the absolute path of the directory that you want to serve. E.g.:

```js
const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'public')))
```
