# Production Best Practices: Security

## Overview

### Use TLS

### Use Helmet

#### Reduce Fingerprinting

```js
app.disable('x-powered-by');
```

### Use cookies securely

#### Don't use the default session cookie name

#### Set cookie security options

Set the following cookie options to enhance security:

* **secure** - Ensures the browser only sends the cookie over HTTPS.
* **httpOnly** - Ensures the cookie is sent only over HTTP(S), not client JavaScript, helping to protect against cross-site scripting attacks.
* **domain** - indicates the domain of the cookie; use it to compare against the domain of the server in which the URL is being requested. If they match, then check the path attribute next.
* **path** - indicates the path of the cookie; use it to compare against the request path. If this and domain match, then send the cookie in the request.
* **expires** - use to set expiration date for persistent cookies.

### Prevent brute-force attacks against authorization

### Ensure your dependencies are secure

### Avoid other known vulnerabilities

Keep an eye out for [Node Security Project](https://github.com/advisories) or [Snyk](https://security.snyk.io/) advisories that may affect Express or other modules that your app uses.

Familiarize yourself with known [web vulnerabilities](https://owasp.org/www-project-top-ten/)

### Aditional considerations

Here some further recommendations from the excellent [Node.js Security Checklist](https://blog.risingstack.com/node-js-security-checklist/)