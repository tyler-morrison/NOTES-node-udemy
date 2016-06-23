var EventEmitter = require('events');
var util = require('util');

function Greetr() {
  this.greeting = 'Hello World!';
}

// Using util, we can essentially say that any objects created with the function constructor ‘Greetr’ should also have access to the methods and properties of EventEmitter...
util.inherits(Greetr, EventEmitter);

// After the fact, we can still add our own methods and properties...
Greetr.prototype.greet = function(data) {
  console.log(this.greeting + ': ' + data);
  // Because of inherits, Greeter will also have access to ‘emit’ method...
  this.emit('greet', data);
}

var greeter1 = new Greetr();

// Because Greetr inherited EventEmitter, greeter1 will also have access to ‘on’ method
greeter1.on('greet', function(data) {
  console.log('Somone greeted!: ' + data);
});

// You can even pass data down the prototype chain...
greeter1.greet('Tyler');
