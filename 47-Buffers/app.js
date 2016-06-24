// Since buffer is so fundamental, we don’t even need to require this module...
// If you do not specify coding, ‘utf8’ will be the default.
let buf = new Buffer('Hello', 'utf8');

console.log(buf); // <Buffer 48 65 6c 6c 6f> - Outputs in hexadecimal format.
console.log(buf.toString()); // Hello
console.log(buf.toJSON()); // { type: 'Buffer', data: [ 72, 101, 108, 108, 111 ] }
console.log(buf[2]); // 108 - Can even use buffer like an array

buf.write('wo');
console.log(buf.toString()); // wollo - The ‘write’ method above will overwrite, based on buffer size.
