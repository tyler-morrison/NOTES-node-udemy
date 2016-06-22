// You can also completely replace the 'exports' object with your own object that you build...

function Greetr() {
  this.greeting = 'Hello World!!';
  this.greet = function() {
    console.log(this.greeting);
  }
}

module.exports = new Greetr();
