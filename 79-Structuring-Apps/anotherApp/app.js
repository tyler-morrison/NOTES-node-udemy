'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const apiController = require('./controllers/apiController');
const htmlController = require('./controllers/htmlController');

let port = process.env.PORT || 3000;

app.use('/assets', express.static(`${__dirname}/public`));

app.set('view engine', 'ejs');

app.use('/', (req, res, next) => {
    console.log(`Request Url: ${req.url}`);
    next();
})

htmlController(app);

apiController(app);

app.listen(port);
