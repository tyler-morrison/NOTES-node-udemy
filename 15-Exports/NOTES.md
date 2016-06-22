# Exports vs Module Exports

While we are familiar with the ‘module.exports’ object, it’s also important to not forget the ‘exports’ parameter.

```javascript
(function (exports, require, module, __filename, __dirname){
    var greet = function() {
      console.log('Hello');
    };

    module.exports = greet;
});

fn(module.exports, require, module, filename, dirname)
```

‘exports’ essentially acts as a shorthand for ‘module.exports’ — two variables pointing to the same object within the memory.

## So Why Not Just Use ‘exports’?

There’s a bit of a quirk within the JS engine when it comes to object being passed by reference. Therefore ‘exports’ won’t work for all of the examples that we have done previously.

## What’s Happening...

* Initially, ‘module.exports’ points to an empty object.
* When the function expression is invoked, ‘module.exports’ is passed to ‘exports’; however, they still just point to the same empty object.
* The quirk occurs when you set ‘exports’ **equal** to a value.
* *In JS, when you set something equal to a value, it actually creates a NEW object*

Thus, two different objects and two different spots in memory, even though ‘module.exports’ is the property that will be returned. If you tried this, it would error out.

**At the end of the day, just use ‘module.exports’ to prevent any issues**
