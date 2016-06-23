var util = require('util');

function Person() {
  this.firstname = 'John';
  this.lastname = 'Doe';
}

Person.prototype.greet = function() {
  console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman() {
  // Before attaching the badgenumber parameter we will step into the Person function constructor and connect the 'this' keyword
  Person.call(this);
  this.badgenumber = '1234';
}

util.inherits(Policeman, Person);

// This will work as expected, jane will have access to both properties and the greet method.
var jane = new Person();
jane.firstname = 'Jane';

jane.greet();

console.log('----------------------------');

// Without call, the new object is missing the firstname and lastname parameters because 'this' was never run. Fix will be placed in Line 14...
var officer = new Policeman();
console.log(officer.badgenumber);
officer.greet();
