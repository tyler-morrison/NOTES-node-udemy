'use strict';

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
  }
}

var john = new Person('John', 'Doe');

console.log(john.firstname);
john.greet();

var jane = new Person('Jane', 'Smith');
jane.greet();

console.log(john.__proto__ === jane.__proto__);
