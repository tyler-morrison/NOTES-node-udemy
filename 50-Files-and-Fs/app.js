let fs = require('fs');

// Recall that __dirname is a parameter automatically given to us within fs.
// It gives us the path to the directory where the code that we are runnning exists.
// The encoding parameter is not required, since utf8 is default, but can be helpful in other scenarios.
let greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
// The ‘Sync’ part of the method name above is critical because it is Node’s way of letting us know that this is a synchronous method.
// The V8 engine will wait until the entire file has been read in its entirety before moving on to the console.log()

console.log(greet);

let greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
    console.log(data);
});

// Here is proof that greet2 is running asychronously
console.log('Done!');
