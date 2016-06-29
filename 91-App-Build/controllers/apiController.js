const bodyParser = require('body-parser');

const Todos = require('../models/todoModel');

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    // Get all todos for a specific person...
    app.get('/api/todos/:uname', (req, res) => {
        Todos.find({
            username: req.params.uname
        }, (err, todos) => {
            if (err) throw err;

            res.send(todos);
        });
    });

    // Individual todo...
    app.get('/api/todo/:id', (req, res) => {
        Todos.findById({
            _id: req.params.id
        }, (err, todos) => {
            if (err) throw err;

            res.send(todos);
        });
    });

    // Add a todo...
    app.post('/api/todo', (req, res) => {
        // First check to see if the posted todo already exists...
        if (req.body.id) {
            // Update that todo...
            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, (err, todo) => {
                if (err) throw err;
                res.send('Success');
            });
        } else {
            // Create new todo model...
            let newTodo = Todos({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });

            // Then save the new object to MongoDB
            newTodo.save((err) => {
                if (err) throw err;
                res.send('Success');
            });
        }
    });

    // Allow todos to be deleted...
    // Can be the exact same URL because the HTTP method will change via Express REST
    app.delete('/api/todo', (req, res) => {
        Todos.findByIdAndRemove(req.body.id, (err) => {
            if (err) throw err;
            res.send('Success');
        });
    });
}
