const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

let people = [{
    name: 'John Doe'
}, {
    name: 'Jane Doe'
}, {
    name: 'Sam Bo'
}];

app.set('view engine', 'ejs');
app.use('/assets', express.static(`${__dirname}/public`));

app.get('/', (req, res) => res.render('index', {
    serverPeople: people
}));

app.listen(port);
