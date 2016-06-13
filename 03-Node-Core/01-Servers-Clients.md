# Servers and Clients

At its most basic, a server is a computer that performs services. On the other hand, a client simply asks for services.

The typical protocol for a Browser / Web Server relationship is HTTP.

## What Does Javascript Need to Manage a Server

* Better ways to organize code into reusable pieces.
* Ways to deal with files.
* Ways to deal with databases.
* The ability to communicate over the internet.
* The ability to accept requests and send responds in standard format.
* A way to deal with work that takes a long time.

## The C++ Core
Within the `deps` folder of the Node source code, we see many C++ libraries that make up the added features we use.

## The Javascript Core
Within the `lib` folder of the Node source code, there are files that use pure Javascript to extend functionality. Often times, you will see a line like...

```javascript
var binding = process.binding('zlib');
```

...as a way to call the C++ dependency object. Essentially wrapping the C++ functionality in JS.
