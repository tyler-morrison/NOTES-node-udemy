'use strict';

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    // In the example from the last lesson, using a synchronous read method could cause future performance issues.
    // let html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    //
    // Instead we can simplify with a readable file stream piped directly to the writable 'res' stream
    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);

}).listen(1337, '127.0.0.1');
