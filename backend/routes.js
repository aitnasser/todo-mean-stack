'use strict';


/**
 * Module dependencies
 */
var express = require('express');
var router = express.Router();
var todoController = require('./controller');


//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


// get all todos
router.get('/api/todos', todoController.getAll);

//Create todo
router.post('/api/todos', todoController.create);

// delete a todo
router.delete('/api/todos/:todo_id', todoController.delete);




module.exports = router;