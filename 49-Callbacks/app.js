function greet(callback) {
    console.log('Hello!');
    let data = {
        name: 'John Doe'
    };

    callback(data);
}

greet(function(data) {
    console.log(`Callback was invoked! Data: ${data.name}`);
})

greet(function(data) {
    console.log('A different callback here!');
})
