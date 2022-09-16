# Enable Inspector

**How to make Node.js process listen for a debugging client?**

When started with the `--inspector` switch, a Node.js process listens for a debugging client. // add link for list of possible debugger clients

**Where will the process listen by default for the debugger client?**

By default, it will listen at host and port 127.0.0.1:9229. Each process is also assigned a unique UUID.

**What must inspector clients know and specify to connect?**

Inspectors clients must know and specify **host address**, **port**, and **UUID** to connect.

**How will Node.js start listening for debbuging messages?**

Node.js will also start listening for debugging messages if it receives a `SIGUSR1` signal. (`SIGUSR1` is not available on Windows.)

# Security Implications

**Why is important to understand the security implications of exposing the debugger port on public and private networks?**

Since the debugger has full access to the Node.js execution environment, a malicious actor able to connect to this port may be able to execute arbitrary code on behalf of the Node.js process.

## Exposing the debug port publicly is unsafe

**What will happen if the debugger is bound to a public IP address, or to 0.0.0.0?**

If the debugger is bound to a public IP address, or to `0.0.0.0`, any clients that can reach your IP address will be able to connect to the debugger without any restriction and will be able to run arbitrary code.

## Local applications have full access to the inspector

**What applications can connect to the inspector when bound to port 127.0.0.1 (the default)?**

If you bind the inspector port to `127.0.0.1`, any applications running locally on your machine will have unrestricted access.

**Why can any local applications connect to the inspector?**

This is by design to allow local debuggers to be able to attach conveniently.

## Browsers, WebSockets and same-origin policy

**What type of requests and under what security model can Websites open in a web-broswer make?**

Websites open in a web-browser can make **WebSocket** and **HTTP** requests under the browswer security model.

**What is necessary to obtain a unique debugger session id?**

An initial HTTP connection is necessary to obtain a unique debugger session id.

**What does the same-origin-policy prevents?**

The same-origin-policy prevents websites from being able to make this HTTP connection.

**What does Node.js for additional security against [DNS rebiding attacks](https://en.wikipedia.org/wiki/DNS_rebinding)?**

# Inspector Clients

**Who to use the minimal CLI debugger?**

A minimal CLI debugger is available with `node inspect myscript.js`.

# Command-line options

--inspect

* Enable inspector agent
* Listen on default address and port (127.0.0.1:9229)

--inspect=[host:port]

* Enable inspector agent
* Bind to address or hostname ***host*** (default: 127.0.0.1)
* Listen on port ***port***

--inspect-brk

* Enable inspector agent
* Listen on default address and port (127.0.0.1:9229)
* Break before user code starts

--inspector-brk=[host:port]

* Enable inspector agent
* Bind to address or hostname ***host*** (default: 127.0.0.1)
* Listen on port ***port*** (default: 9229)
* Break before user code starts

# Enabling remote debugging scenarios

**How is recommended to allow remote debugging connections?**

If you need to allow remote debugging connections it's recommended the use of ssh tunnels.