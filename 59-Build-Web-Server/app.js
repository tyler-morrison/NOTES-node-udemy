'use strict';

const http = require('http');

// The createServer method requires a callback function that is fired via event emitter on 'request'...
// createServer itself makes an object to which we can then attach a listen method.
http.createServer((req, res) => {
    // Recall that HTTP responses require a head statement first...
    // We rap the response name / value pairs in quotes because some of the values will not be valid JS and it prevents errors.
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    // End method just means that this is the last thing being sent.
    res.end('Hello world\n');
}).listen(1337, '127.0.0.1');
