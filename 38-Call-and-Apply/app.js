var obj = {
  name: 'John Doe',
  greet: function() {
    console.log('Hello ' + this.name);
  }
}

obj.greet();
// Call is the same as invoking; however, it allows for additional parameters to overwrite the defaults above...
obj.greet.call({
  name: 'Jane Doe'
});

// The only difference between call and apply is that call requires *comma-separated* parameters vs. apply requires an array of parameters...
obj.greet.apply({
  name: 'Jane Doe'
});
