const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

module.exports = function(app) {
    app.get('/api', (req, res) => {
        res.json({
            firstname: 'Tyler',
            lastname: 'Morrison'
        });
    });

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
};
