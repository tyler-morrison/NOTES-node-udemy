# How a Node Module Really Works

Without oversimplifying things, the very general way that a Node module works is...

1. Node uses the `require` method to get a file, assuming the file is '.js' by default.
2. Node loads the contents of the specified file and wraps it inside of an IFFE.
3. Node runs all code within the module.
4. Node returns anything attached to the `module.exports` property, which can be run outside of the module.

## Things to Remember

* **require** is a function, that you pass a ‘path’ to.
* **modules.exports** is what the require function *returns*.
* This works because your code is actually *wrapped in a function* that is given these things as function parameters.
