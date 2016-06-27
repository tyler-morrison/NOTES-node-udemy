'use strict'

const express = require('express');
const app = express();
const mysql = require('mysql');

const apiController = require('./controllers/apiController');
const htmlController = require('./controllers/htmlController');

let port = process.env.PORT || 3000;

app.use('/assets', express.static(`${__dirname}/public`));

app.set('view engine', 'ejs');

app.use('/', (req, res, next) => {
    console.log(`Request Url: ${req.url}`);

    let con = mysql.createConnection({
        host: "localhost",
        user: "test",
        password: "test",
        database: "addressbook"
    });

    con.query('SELECT People.ID, Firstname, Lastname, Address FROM People INNER JOIN PersonAddresses ON People.ID = PersonAddresses.PersonID INNER JOIN Addresses ON PersonAddresses.AddressID = Addresses.ID', function(err, rows) {
        if (err) throw err;
        console.log(rows);
    });

    next();
})

htmlController(app);

apiController(app);

app.listen(port);
