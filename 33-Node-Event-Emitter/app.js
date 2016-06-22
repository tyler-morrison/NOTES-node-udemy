// var Emitter = require('./emitter');

// Now we’ll use the built-in Node emitter.
var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

// Let’s pretend we have an event called 'greet'. Where we respond to it whenever it occurs...

// Listener 1 - Remember that the first parameter will be a property name on the object...
emtr.on(eventConfig.GREET, function() {
  console.log('Somewhere, someone said hello.');
})

// Listener 2 — Since 'greet' property already exists, this function will be pushed inside the 'greet' array
emtr.on(eventConfig.GREET, function() {
  console.log('A greeting occurred!');
})

console.log('Hello');
// Then we have to manually let our application know that the event happened.
// The the emitter will simply find the corresponding property and invoke all functions within its array...
emtr.emit('greet');

// This can be confusing, because we’re taking one concept and calling it another.
// We’re taking an object with different properties, whose values are arrays and calling them ‘events’.
