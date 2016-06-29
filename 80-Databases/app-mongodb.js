'use strict'

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const apiController = require('./controllers/apiController');
const htmlController = require('./controllers/htmlController');

let port = process.env.PORT || 3000;

mongoose.connect('127.0.0.1');

let Schema = mongoose.Schema;

let personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

let Person = mongoose.model('Person', personSchema);

let john = Person({
    firstname: 'John',
    lastname: 'Doe',
    address: '123 Main Street'
});

// Save the user
john.save((err) => {
    if (err) throw err;

    console.log('person saved!');
});

let jane = Person({
    firstname: 'Jane',
    lastname: 'Doe',
    address: '123 Main Street'
});

// Save the user
jane.save((err) => {
    if (err) throw err;

    console.log('person saved!');
});

app.use('/assets', express.static(`${__dirname}/public`));

app.set('view engine', 'ejs');

app.use('/', (req, res, next) => {
    console.log(`Request Url: ${req.url}`);

    // Get all users
    Person.find({}, (err, users) => {
        if (err) throw err;

        // Log an object containing all users
        console.log(users);
    });
    next();
})

htmlController(app);

apiController(app);

app.listen(port);
