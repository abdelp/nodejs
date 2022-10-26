# The Node.js Event emitter

**How do you initialize the `EventEmitter` class?**

```js
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
```

**Which methods does this object expose?**

This object exposes, among many others, the `on` and `emit` methods.

* `emit` is used to trigger an event
* `on` is used to add a callback function that's going to be executed when the event is triggered
