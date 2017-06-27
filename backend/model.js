'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * TodoSchema Schema
 */
var TodoSchema = new Schema({
	content: {
		type: String,
		required: [true, 'todo content cannot be blank'],
		trim: true
	},
	done: {
		type: Boolean,
		default: false

	}
});

mongoose.model('Todo', TodoSchema);