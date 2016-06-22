var greet = require('./greet1');
greet();

var greet2 = require('./greet2').greet;

// Because we attached the 'greet' method directly to the 'exports' object, we could say `greet2.greet()`; however, sometimes it’s clearer to specify the method when declaring the variable above...
greet2();

var greet3 = require('./greet3');
greet3.greet(); // 'Hello World!'

greet3.greeting = 'Changed Hello World!';

// IMPORTANT: 'require' will always look for a cached module and return it instead of the default created within.
// Thus, it will be a reference to the 'exports' object that was called on Line 9 and simply references the same object.
var greet3b = require('./greet3');
greet3b.greet(); // 'Changed Hello World!'

// Thus, the default property was not reset in Line 16.
// To prevent this, we can export only the function constructor...

// Remember to use capital case to indicate function constructor.
var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

var greet5 = require('./greet5').greet;
greet5()
