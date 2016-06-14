var greet = require('./greet');
greet();

// The code above essentially becomes...
(function(exports, require, module, __filename, __dirname) {
  var greet = require('./greet');

  module.exports = greet;

});

// Then that wrapped code is invoked...
fn(module.exports, require, module, filename, dirname);

return module.exports;
