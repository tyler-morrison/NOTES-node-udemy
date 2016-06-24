const fs = require('fs');
const zlib = require('zlib');

let readable = fs.createReadStream(__dirname + '/greet.txt');

let writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

let compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

let gzip = zlib.createGzip(); // This creates a transform (read / write) stream and compresses it...

readable.pipe(writable);

// NOTE: You can chain pipes methods as well...
readable.pipe(gzip).pipe(compressed);
