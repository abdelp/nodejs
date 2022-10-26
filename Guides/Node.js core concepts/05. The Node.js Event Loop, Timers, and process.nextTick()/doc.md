# The Node.js Event Loop, Timers, and process.nextTick()

## What is the Event Loop?

The event loop is what allows Node.js to perform non-blocking I/O operation by offloading operations to the system kernel whenever possible.

## Event Loop Explained

## Phases Overview

* **timers:** this phase executes callbacks scheduled by `setTimeout()` and `setInterval()`.
* **pending callbacks:** executes I/O callbacks deferred to the next loop itetartion.
* **idle, prepare:** only used internally.
* **poll:** retrieve new I/O events, execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and `setImmediate()`); node will block here when appropiate.
* **check:** `setImmediate()` callbacks are invoked here.
* **close callbacks:** some close callbacks, e.g. `socket.on('close', ...)`.

**What does Node.js between each run of the event loop?**

Node.js checks if it is waiting for any asynchronous I/O or timers and shuts down cleanly if there are not any.

## Phases in Detail

