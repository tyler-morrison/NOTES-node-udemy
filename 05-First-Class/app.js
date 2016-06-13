// Function statement
function greet() {
  console.log('Hi');
}
greet();

// REMEMBER: Functions are first-class
function logGreeting(fn) {
  fn();
}
logGreeting(greet);

// Function expression

var greetMe = function() {
  console.log('Hi Tyler');
};

greetMe();

// Function expressions are *still* first-class
logGreeting(greetMe);

// You can also use a function expression on the fly...
logGreeting(function() {
  console.log('Hello from Anonymous');
});
