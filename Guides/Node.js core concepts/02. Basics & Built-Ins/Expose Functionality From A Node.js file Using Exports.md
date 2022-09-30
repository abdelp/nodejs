# Expose Functionality From A Node.Js File Using Exports

**What are the two ways to export an object?**

The first way is to assign an object to `module.exports`, this will make your file export just that object:

```js
const car = {};

module.exports = car;
```

```js
const car = require('./car');
```

The second way is to add the exported object as a property of `exports`.

```js
const car = {};

exports.car = car;
```

or directy:

```js
exports.car = {};
```

And in the other file, you'll use it by referencing a property of your import:

```js
const items = require('./car');

const { car } = items;
```

or you can use a destructuring assignment:

```js
const { car } = requie('./car');
```