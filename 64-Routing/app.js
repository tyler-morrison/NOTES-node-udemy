'use strict';

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    switch (req.url) {
        case '/':
            fs.createReadStream(__dirname + '/index.html').pipe(res);

            break;
        case '/api':
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });

            let obj = {
                firstname: 'John',
                lastname: 'Doe'
            };
            res.end(JSON.stringify(obj));

            break;
        default:
            res.writeHead(404);
            res.end();
    }

}).listen(1337, '127.0.0.1');
