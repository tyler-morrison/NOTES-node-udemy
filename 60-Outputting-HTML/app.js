'use strict';

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    let html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    let message = 'Hello world...';

    html = html.replace('{Message}', message);

    res.end(html);
}).listen(1337, '127.0.0.1');
