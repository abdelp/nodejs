# Configuration Manangement

## Security HTTP Headers

* **Strict-Transport-Security** enforces secure (HTTP over SSL/TLS) connections to the server
* **X-Frame-Options** provides [clickjacking](https://owasp.org/www-community/attacks/Clickjacking) protection
* **X-XSS-Protection** enables the Cross-site scripting (XSS) filter built into most recent web browsers
* **X-Content-Type-Options** prevents browsers from MIME-sniffing a response away from teh declared content-type
* **Content-Security-Policy** prevents a wide range of attacks, including Cross-site scripting and other cross-site injections

Check for security headers [https://securityheaders.com/](https://securityheaders.com/)

## Sensitive Data on the Client Side

# Authentication

## Brute Force Protection

In Node.js you can use the [ratelimiter](https://www.npmjs.com/package/ratelimiter) package.

Test how your services behave in these scenarios you can use [hydra](https://github.com/vanhauser-thc/thc-hydra).

# Session Management

## Cookie Flags

Set the following cookie options to enhance security:

* **secure** - Ensures the browser only sends the cookie over HTTPS.
* **httpOnly** - Ensures the cookie is sent only over HTTP(S), not client JavaScript, helping to protect against cross-site scripting attacks.
* **domain** - indicates the domain of the cookie; use it to compare against the domain of the server in which the URL is being requested. If they match, then check the path attribute next.
* **path** - indicates the path of the cookie; use it to compare against the request path. If this and domain match, then send the cookie in the request.
* **expires** - use to set expiration date for persistent cookies.

## CSFR

[csurf](https://www.npmjs.com/package/csurf) module: an express middleware for CSFR protection.

# Data Validation

## XSS

[sqlmap](http://sqlmap.org/) is an open source penetration testing tool that automates the process of detecting and exploiting SQL injection flaws and taking over of database servers.

# Secure Transmission

## SSL Version, Algorithms, Key length

You have to test:

* ciphers, keys and renegotiation is properly configured
* certificate validity

Using the tool [nmap](https://nmap.org/) and [sslyze](https://github.com/nabla-c0d3/sslyze)

### Checking for Certificate information

```sh
nmap --script ssl-cert,ssl-enum-ciphers -p 443,465,993,995 www.example.com
```

### Testing SSL/TLS vulnerabilities with sslyze

```sh
./sslyze.py --regular example.com:443
```

## HSTS

```sh
strict-transport-security:max-age=631138519
```

Testing:

```sh
curl -s -D https://twitter.com/ | grep -i Strict
```

# Denial of Service

## Account Lockout

## Regular Expression

# Error Handling

## Error Codes, Stack Traces

# NPM

## The Node Security Project

```sh
npm i nsp -g
# either audit the shrinkwrap
nsp audit-shrinkwrap
# or the package.json
nsp audit-package
```

You can also use [requireSafe]()