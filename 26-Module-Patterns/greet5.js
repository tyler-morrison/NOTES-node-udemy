// This pattern — the ‘Revealing Module Pattern’ — is *extremely* popular...

var greeting = 'Hello World!!!!';

function greet() {
  console.log(greeting);
}

// NOTE: The export object is only exposing the method and *not* the variable. Thus, it adds a layer of protection by keeping certain properties / methods contained within the scope of the module.
module.exports = {
  greet: greet
}
