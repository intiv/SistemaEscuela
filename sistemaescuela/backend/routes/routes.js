var boom = require('boom');
var joi = require('joi');
var uuid = require('node-uuid');
var user = require('../controllers/usersController');
var seccion = require('../controllers/seccionController');
var tarea = require('../controllers/homeworksController');

exports.endpoints = [
	{
		method: 'GET',
		path: '/usuarios',
		config: user.getAllUsers
		
	},

	{
		method: 'POST',
		path: '/ususarios/crear',
		config: user.createUser
	},

	{
		method: 'PUT',
		path: '/usuarios/modificar/{id}',
		config: user.modifyUser
	},

	{
		method: 'DELETE',
		path: '/usuarios/borrar/{id}',
		config: user.deleteUser
	},

	{
		method: 'GET',
		path: '/usuarios/maestros',
		config: user.getTeachers
	},

	{
		method: 'GET',
		path: '/usuarios/maestros/{id}',
		config: user.getTeacherById
	},

	{
		method: 'GET',
		path: '/usuarios/buscar/id/{id}',
		config: user.getUserById
	},
	//alumnos
	{
		method: 'POST',
		path: '/alumnos/crear',
		config: user.createStudent
	},

	{
		method: 'GET',
		path: '/alumnos',
		config: user.getAllStudents
	},

	{
		method: 'PUT',
		path: '/alumnos/modificar/{id}',
		config: user.modifyStudent
	},

	{
		method: 'DELETE',
		path: '/alumnos/borrar/{id}',
		config: user.deleteStudent
	},

	{
		method: 'GET',
		path: '/alumnos/buscar/id/{id}',
		config: user.getStudentById
	},

	{
		method: 'GET',
		path: '/alumnos/buscar/cuenta/{cuenta}',
		config: user.getStudentByAccount
	},

	{
		method: 'GET',
		path: '/alumnos/buscar/nombre/{nombre}',
		config: user.getStudentsByName
	},
	//secciones
	{
		method: 'GET',
		path: '/secciones',
		config: seccion.getAllSections
	},

	{
		method: 'GET',
		path: '/secciones/buscar/id/{id}',
		config: seccion.getSectionById
	},

	{
		method: 'GET',
		path: '/secciones/buscar/maestro/{maestro}',
		config: seccion.getSectionsByTeacher
	},

	{
		method: 'GET',
		path: '/secciones/buscar/grado/{grado}',
		config: seccion.getSectionsByGrade
	},

	{
		method: 'GET',
		path: '/secciones/buscar/apartado/{apartado}',
		config: seccion.getSectionsByApartado
	},

	{
		method: 'PUT',
		path: '/secciones/modificar/{id}',
		config: seccion.modifySection
	},

	{
		method: 'POST',
		path: '/secciones/crear',
		config: seccion.createSection
	},
	//tareas
	{
		method: 'POST',
		path: '/tareas/crear',
		config: tarea.createHomework
	},
	{
		method: 'GET',
		path: '/tareas',
		config: tarea.getAllHomeworks
	},
	{
		method: 'GET',
		path: '/tareas/buscar/grado/{grade}',
		config: tarea.getHomeworksByGrade
	},
	{
		method: 'GET',
		path: '/tareas/buscar/id/{id}',
		config: tarea.getHomeworkById
	},
	{
		method: 'GET',
		path: '/tareas/buscar/maestro/{teacher}',
		config: tarea.getHomeworksByTeacher
	},
	{
		method: 'GET',
		path: '/tareas/borrar/{id}',
		config: tarea.deleteHomeworks
	}
];