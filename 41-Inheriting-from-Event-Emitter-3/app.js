'use strict';

let EventEmitter = require('events');

class Greetr {
    constructor() {
        this.events = new EventEmitter();
        this.greeting = 'Hello World!';
    }

    greet(data) {
        console.log(`${this.greeting}: ${data}`);
        this.events.emit('greet', data);
    }
}

let greeter1 = new Greetr();

greeter1.events.on('greet', function(data) {
    console.log('Somone greeted!: ' + data);
});

greeter1.greet('Tyler');
