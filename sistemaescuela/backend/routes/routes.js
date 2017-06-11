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
		method: 'PUT',
		path: '/users/{id}',
		config: user.modifyUser
	},
	{
		method: 'DELETE',
		path: '/users/{id}',
		config: user.deleteUser
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
	},
	{
		method: 'PUT',
		path: '/students/{id}',
		config: user.modifyStudent
	},
	{
		method: 'DELETE',
		path: '/students/{id}',
		config: user.deleteStudent
	},
	{
		method: 'GET',
		path: '/students/search/id/{id}',
		config: user.getStudentById
	},
	{
		method: 'GET',
		path: '/users/search/id/{id}',
		config: user.getUserById
	},
	{
		method: 'GET',
		path: '/students/search/account/{cuenta}',
		config: user.getStudentByAccount
	},
	{
		method: 'GET',
		path: '/students/search/name/{nombre}',
		config: user.getStudentsByName
	},
	{
		method: 'GET',
		path: '/users/teachers',
		config: user.getTeachers
	},
	{
		method: 'GET',
		path: '/users/teachers/{id}',
		config: user.getTeacherById
	}
];