function Greetr() {
  this.greeting = 'Hello World!!!';
  this.greet = function() {
    console.log(this.greeting);
  }
}

// If we want to prevent the 'exports' object from always being passed by reference, we need to simply export the function constructor...
module.exports = Greetr;
