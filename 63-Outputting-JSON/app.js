'use strict';

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    let obj = {
        firstname: 'John',
        lastname: 'Doe'
    };
    res.end(JSON.stringify(obj));

}).listen(1337, '127.0.0.1');
