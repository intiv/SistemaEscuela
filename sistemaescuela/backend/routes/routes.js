var boom = require('boom');
var joi = require('joi');
var uuid = require('node-uuid');
var user = require('../controllers/usersController');

exports.endpoints = [
	{
		method: 'GET',
		path: '/users',
		config: user.getAllUsers
		
	},
	{
		method: 'POST',
		path: '/users',
		config: user.createUser
	},
	{
		method: 'POST',
		path: '/students',
		config: user.createStudent
	},
	{
		method: 'GET',
		path: '/students',
		config: user.getAllStudents
	}

];