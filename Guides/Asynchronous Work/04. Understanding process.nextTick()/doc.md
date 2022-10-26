# Understanding process.nextTick()

**What is a tick?**

Every time the event loop takes a full trip, we call it a tick.

**What happens when we pass a function to `process.nextTick()`?**

When we pass a function to `process.nextTick()`, we instruct the engine to invoke this function at the end of the current operation, before the next event loop tick starts:

Calling `setTimeout()` will excute the function at the end of next tick, much later than when using `nextTick()` which prioritizes the call and executes it just before the beginning of the next tick.

**When you should use `nextTick()`?**

Use `nextTick()` when you want to make sure that in the next event loop iteration that code is already executed.

