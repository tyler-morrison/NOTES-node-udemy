// The following function will not return the proper value in ‘module.exports’...
exports = function() {
  console.log('Hello');
}

console.log(exports);
console.log(module.exports);
