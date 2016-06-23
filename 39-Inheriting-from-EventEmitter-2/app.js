var EventEmitter = require('events');
var util = require('util');

// The problem with this function constructor is that it’s an incomplete form of inheritance...
function Greetr() {
  // ...to fix this use the line below. Recall that EventEmitter is also a function constructor.
  // By using call ‘this’ overrides the new keyword. It acts almost like a super constructor.
  // It ensures that the new object created will have ALL of the properties and methods related to its inherited constructor.
  EventEmitter.call(this);
  this.greeting = 'Hello World!';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
  console.log(this.greeting + ': ' + data);
  this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
  console.log('Somone greeted!: ' + data);
});

greeter1.greet('Tyler');
