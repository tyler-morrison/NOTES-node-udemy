// You can *mutate* the exports parameter...
exports.greet = function() {
  console.log('Hello');
}

console.log(exports);
console.log(module.exports);
