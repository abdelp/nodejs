**What event is called when a new request is received?**

Whenever a new request is received, the [request event](https://nodejs.org/api/http.html#event-request) is called.

**What objects does the request event provide?**

The request event provides two objects:

* a request ([http.IncomingMessage](https://nodejs.org/api/http.html#class-httpincomingmessage)).
* a response ([http.ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse)).

**What does the request object provide?**

A request object provides the requeste details.

**What is the response object used for?**

The response object is used to return data to the caller.