'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Todo = mongoose.model('Todo');



/**
 * Create an Todo
 */
exports.create = function(req, res) {

  // create a todo, information comes from AJAX request from Angular
  Todo.create({
    content: req.body.text,
    done: false
  }, function(err, todo) {
    if (err)
      res.send(err);

    // get and return all the todos after you create another
    Todo.find(function(err, todos) {
      if (err)
        res.send(err)
      res.json(todos);
    });
  });

}

/**
 * Create get ALL Todos
 */
exports.getAll = function(req, res) {

  // use mongoose to get all todos in the database
  Todo.find({}, function(err, todos) {
      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err) {
      res.send(err);
    } else {
      res.json(todos); // return all todos in JSON format
    }


  });
};

/**
 * Delete an Todo
 */
exports.delete = function(req, res) {
  Todo.remove({
    _id: req.params.todo_id
  }, function(err, todo) {
    if (err)
      res.send(err);

    // get and return all the todos after you create another
    Todo.find(function(err, todos) {
      if (err)
        res.send(err)
      res.json(todos);
    });
  });
}