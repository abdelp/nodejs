# How to read environment variables from Node.js

**What does the `env` property host?**

The `env` property hosts all the environment variables that were set at the moment the process was started.

E.g.:

```sh
USER_ID=239482 USER_KEY=foobar node app.js
```

```
Note: `process` does not require a "require", it's automatically available.
```

```js
process.env.USER_ID;
process.env.USER_KEY;
```

You can also create an `.env` file in the root directory of your project, and then use the [dotenv](https://www.npmjs.com/package/dotenv) package to load them during runtime.

```js
# .env
USER_ID="12345"
USER_KEY="foobar"
NODE_ENV="development"
```

In your js file

```js
require('dotenv').config();

process.env.USER_ID; // "12345"
process.env.USER_KEY; // "foobar"
process.env.NODE_ENV; // "development"
```

**How can you run a js file if you don't want to import a package in your code?**

```js
node -r dotenv/config index.js
```
