var boom = require('boom');
var joi = require('joi');
var uuid = require('node-uuid');
var user = require('../controllers/usersController');
var seccion = require('../controllers/seccionController');
var tarea = require('../controllers/homeworksController');
var student = require('../controllers/studentsController');

exports.endpoints = [
	//test for files
	{	
		method: 'POST',
		path: '/upload',
		config: user.uploadFile
	},
	//end test for files
	{
		method: 'GET',
		path: '/usuarios',
		config: user.getAllUsers
		
	},
	{
		method: 'POST',
		path: '/login',
		config: user.login
	},
	{
		method: 'PUT',
		path: '/logout',
		config: user.logout
	},
	{
		method: 'POST',
		path: '/usuarios/crear',
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
		config: student.createStudent
	},

	{
		method: 'GET',
		path: '/alumnos',
		config: student.getAllStudents
	},

	{
		method: 'PUT',
		path: '/alumnos/modificar/{id}',
		config: student.modifyStudent
	},

	{
		method: 'DELETE',
		path: '/alumnos/borrar/{id}',
		config: student.deleteStudent
	},

	{
		method: 'GET',
		path: '/alumnos/buscar/id/{id}',
		config: student.getStudentById
	},

	{
		method: 'GET',
		path: '/alumnos/buscar/cuenta/{cuenta}',
		config: student.getStudentByAccount
	},

	{
		method: 'GET',
		path: '/alumnos/buscar/nombre/{nombre}',
		config: student.getStudentsByName
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
		method: 'GET',
		path: '/secciones/buscar/year/{ano}',
		config: seccion.getSectionsByYear
	},
	{
		method: 'GET',
		path: '/secciones/buscar/cuenta/{cuenta}',
		config: seccion.getSectionByCuenta
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
	{
		method: 'PUT',
		path: '/secciones/asignarMaestro/{maestro}',
		config: seccion.assignTeacher
	},
	{
		method: 'DELETE',
		path: '/secciones/borrar/{id}',
		config: seccion.deleteSection
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
		path: '/tareas/buscar/id/{id}',
		config: tarea.getHomeworkById
	},
	{
		method: 'GET',
		path: '/tareas/buscar/_id/{id}',
		config: tarea.getHomeworkByMongoId
	},
	{
		method: 'GET',
		path: '/tareas/buscar/parcial/{parcial}',
		config: tarea.getHomeworksByParcial
	},
	{
		method: 'DELETE',
		path: '/tareas/borrar/{id}',
		config: tarea.deleteHomework
	},
	{
		method: 'PUT',
		path: '/tareas/modificar/{id}',
		config: tarea.modifyHomework
	}
];