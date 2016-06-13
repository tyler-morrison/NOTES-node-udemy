// Function constructor
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

// Recall that methods should always be attached to the prototype...
Person.prototype.greet = function() {
  console.log('Hello, ' + this.firstname + ' ' + this.lastname);
}

var john = new Person('John', 'Doe');

console.log(john.firstname);
john.greet();

var jane = new Person('Jane', 'Smith');
jane.greet();

// Proof that the JS Engine is referring to the same prototype.
console.log(john.__proto__ === jane.__proto__);
