# Inheriting from the Event Emitter

Imagine that you have Object 1 with several properties and methods already attached. However, an Object 2 also exists with its own properties / methods. If you want to give Object 1 access to Object 2, you can do so using the Node ‘inherits’ function.

Inherits essentially creates a new prototype *in between* the two on the prototype chain.
