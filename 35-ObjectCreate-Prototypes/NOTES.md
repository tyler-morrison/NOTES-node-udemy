# Object.create & Prototypes

There are a number of ways to setup the prototype chain...
* Function constructors
* ES6 Classes and 'extends'

...There’s also one other useful pattern using Object.create().

```javascript
// First create a base object that will serve as a prototype
var person = {
  firstname: '',
  lastname: '',
  greet: function () {
    return this.firstname + ' ' + this.lastname;
  }
};

var john = Object.create(person);
// Then you can overwrite the defaults above by assigning values to the same property names...
john.firstname = 'John';
john.lastname = 'Doe';

var jane = Object.create(person);
john.firstname = 'Jane';
john.lastname = 'Doe';

// Both of the created objects above will have their unique name properties; however, they also have access down the prototype chain to the 'greet' method.
```
