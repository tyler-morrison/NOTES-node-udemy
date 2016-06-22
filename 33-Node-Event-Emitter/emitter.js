function Emitter() {
  this.events = {}
}

Emitter.prototype.on = function(type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
}

// For example, if you emit fileWasSaved...
Emitter.prototype.emit = function(type) {
  // First check if fileWasSaved is a property name on the object
  if (this.events[type]) {
    // If true, we know it is an array. Thus loop through and invoke...
    this.events[type].forEach(function(listener) {
      listener();
    });
  }
}

module.exports = Emitter;
