'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let port = process.env.PORT || 3000;

let urlencodedParser = bodyParser.urlencoded({
    extended: false
});
let jsonParser = bodyParser.json();

// In order to download files from HTTP requests, we must use middleware.
app.use('/assets', express.static(`${__dirname}/public`));

// For any kind of NPM built template engine, Express can easily integrate it.
// By default, view engine will look within the ‘views’ file directy for any views.
app.set('view engine', 'ejs');

// `app.use()` simply requires a route, followed by a callback – fn(req, res, next){...}
// The ‘next’ parameter allows us to chain layers of middleware.
// If you ommit the route parameter, Express will apply the middleware to all routes.
app.use('/', (req, res, next) => {
    console.log(`Request Url: ${req.url}`);
    next();
})

// Example of basic routing with `res.render()`
app.get('/', (req, res) => {
    res.render('index', {
        ID: req.params.id
    });
});

// Example of routing with variable.
// The ‘:’ prefix tells Express that the following text could be any value as a request parameter...
app.get('/person/:id', (req, res) => {
    res.render('person', {
        ID: req.params.id,
        Qstr: req.query.qstr
    });
});

// If we want to GET / POST JSON data, we need to use a body-parser middleware like so...
app.post('/person', urlencodedParser, (req, res) => {
    res.send('Thank you!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.get('/api', (req, res) => {
    res.json({
        firstname: 'Tyler',
        lastname: 'Morrison'
    });
});

// RESTful API Examples
// Rather than using *just* the HTTP request for acti

app.get('/api/person/:id', (req, res) => {
    // get data from database
    res.json({
        firstname: 'Tyler',
        lastname: 'Morrison'
    });
});

app.post('/api/person', jsonParser, (req, res) => {
    // save to the database
});

app.delete('/api/person/:id', (req, res) => {
    // delete from the database
});


app.listen(port);
