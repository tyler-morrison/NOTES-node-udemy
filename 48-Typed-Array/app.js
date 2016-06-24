// This is a new feature of the V8 Javascript engine, NOT Node...
let buffer = new ArrayBuffer(8);

// Then you need to have a way to deal with the buffer. Int32 = Integer stored with 32 bits...
let view = new Int32Array(buffer);

view[0] = 5;
view[1] = 15;
console.log(view); // Int32Array [ 5, 15 ]

// Because the buffer can only hold 2 integers – 8 * 8bits = 64 bits / 32 bits = 2 integers in array – adding new integers will not work...
view[2] = 30;
console.log(view); // Int32Array [ 5, 15 ] – Buffer did not have enough storage.
