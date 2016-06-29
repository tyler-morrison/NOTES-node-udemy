'use strict'

const express = require('express'),
    mongoose = require('mongoose');

const app = express(),
    port = process.env.PORT || 3000,
    config = require('./config'),
    setupController = require('./controllers/setupController'),
    apiController = require('./controllers/apiController');

app.use('/assets', express.static(`${__dirname}/public`));

app.set('view engine', 'ejs');

mongoose.connect(config.getDBConnectionString());
setupController(app);
apiController(app);

app.listen(port);
