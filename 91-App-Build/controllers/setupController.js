const Todos = require('../models/todoModel');

module.exports = (app) => {
    app.get('/api/setupTodos', (req, res) => {
        // Seed data
        let starterTodos = [{
            username: 'test',
            todo: 'Buy milk',
            isDone: false,
            hasAttachment: false
        }, {
            username: 'test',
            todo: 'Buy Oreos',
            isDone: false,
            hasAttachment: false
        }, {
            username: 'test',
            todo: 'Dunk Oreos',
            isDone: false,
            hasAttachment: false
        }, {
            username: 'test',
            todo: 'Be Happy',
            isDone: false,
            hasAttachment: false
        }];

        Todos.create(starterTodos, (err, result) => res.send(result));
    });
}
