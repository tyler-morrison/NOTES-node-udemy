const fs = require('fs');

let readable = fs.createReadStream(__dirname + '/greet.txt', {
    encoding: 'utf8',
    highWaterMark: 1 * 1024 // 1kb per chunk
});

let writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

// If the file being streamed is larger than the buffer, the following event will pass only the data in the buffer...
readable.on('data', (chunk) => {
    console.log(chunk);
    writable.write(chunk);
});
