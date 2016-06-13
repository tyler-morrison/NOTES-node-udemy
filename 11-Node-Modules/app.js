var greet = require('./greet');
greet();

// The code above essentially becomes...
(function(exports, require, module, __filename, __dirname) {
  var greet = require('./greet');

  module.exports = greet;

});
