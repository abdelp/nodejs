# Run Node.js scripts from the command line

## Restart the application automatically

**What is it needed to be done in node to make changes get recognize?**

The `node` command has to be re-executed in bash whenever there is a change in the application.

**How the node application can be restarted automatically?**

To restart the application automatically, use the `nodemon` module.

Install the node module globally to system path:

```js
npm i -g nodemon
```

You can also install nodemon as a development dependency:

```js
npm i -D nodemon
```

Run the application using the `nodemon` command followed by the application's file name:

```js
nodemon app.js
```
