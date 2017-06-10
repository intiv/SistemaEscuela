var user = require('../schemas/user');
var student = require('../schemas/alumno');
var SHA3 = require('crypto-js/sha3');
var boom = require('boom');

exports.createUser = {
	handler : function(request, reply){
		if(request.payload.tipo === 'maestro'||request.payload.tipo === 'padre'||request.payload.tipo ==='alumno'){
			var newUser = new user({
				id : request.payload.id,
				nombre : request.payload.nombre,
				apellido : request.payload.apellido,
				usuario : request.payload.usuario,
				tipo : request.payload.tipo,
				contrasena : request.payload.contrasena,//SHA3(request.payload.contrasena)
				fecha_de_nacimiento : request.payload.fecha,
				telefono : request.payload.telefono,
				direccion : request.payload.direccion,
				correo : request.payload.correo
			});
			newUser.save(function(err){
				if(err){
					return reply(boom.notAcceptable('Username must be unique: ' + err));
				}else{
					return reply('User inserted succesfully');
				}
			});
		}else{
			return reply(boom.badRequest('Tipo de cuenta invalido'));
		}
	}
}

exports.getAllUsers = {
	handler : function(request, reply){
		user.find({}, function(err, users){
			if(!err && users){
				return reply(users);
			}else if(!err){
				return reply(boom.notFound());
			}else if(err){
				return reply(boom.wrap(err, 'Error obteniendo usuarios de la bd'));
			}
		});
	}
}

exports.createStudent = {
	handler : function(request, reply){
		var newStudent = new student({
			cuenta : request.payload.cuenta,
			nombre : request.payload.nombre,
			id_padre : request.payload.id_padre
		});
		newStudent.save(function(err){
			if(err){
				return reply(boom.wrap(err, 'Error agregando el alumno a la base de datos'));
			}else{
				return reply('Alumno creado con exito!');
			}
		});
	}
}



exports.getAllStudents = {
	handler : function(request, reply){
		student.find({}, function(err, students){
			if(!err && students){
				return reply(students);
			}else if(!err){
				return reply(boom.notFound());
			}else if(err){
				return reply(boom.wrap(err, 'Error obteniendo usuarios de la bd'));
			}
		});
	}
}

/*

exports.getUserById = {
	handler : function(request, reply){
		user.find({_id: request.params.id},function(err, User){
			if(!err && User){
				return reply(User);
			}else if(!err){
				return reply(boom.notFound());
			}else if(err){
				return reply(boom.wrap(err,'Error obteniendo el usuario de la bd (id)'));
			}
		});
	}
}


exports.getStudentById = {
	handler : function(request, reply){
		student.find({_id: request.params.id},function(err, Student){
			if(!err && Student){
				return reply(Student);
			}else if(!err){
				return reply(boom.notFound());
			}else if(err){
				return reply(boom.wrap(err,'Error obteniendo el estudiante de la bd (id)'));
			}
		});
	}
}

exports.getStudentByAccount = {
	handler : function(request, reply){
		user.find({cuenta: request.params.cuenta},function(err, User){
			if(!err && User){
				return reply(User);
			}else if(!err){
				return reply(boom.notFound());
			}else if(err){
				return reply(boom.wrap(err,'Error obteniendo el usuario de la bd'));
			}
		});
	}
}

exports.getUserByName = {
	handler : function(request, reply){
		user.find({nombre: request.params.nombre},function(err, User){
			if(!err && User){
				return reply(User);
			}else if(!err){
				return reply(boom.notFound());
			}else if(err){
				return reply(boom.wrap(err,'Error obteniendo el usuario de la bd'));
			}
		});
	}
}
*/
exports.modifyUser = {
	handler : function(request, reply){
		user.update(
			{'_id':request.params.id},
			{
				$set: {
					id : request.payload.id,
					nombre : request.payload.nombre,
					apellido : request.payload.apellido,
					usuario : request.payload.usuario,
					tipo : request.payload.tipo,
					contrasena : request.payload.contrasena,
					fecha_de_nacimiento : request.payload.fecha,
					telefono : request.payload.telefono,
					direccion : request.payload.direccion,
					correo : request.payload.correo
				}
			},
			function(err){
				if(err){
					return reply(boom.wrap(err, 'Usuario no encontrado'));
				}else{
					return reply('Usuario modificado con exito!');
				}
			}
		);
	}
}

exports.modifyStudent = {
	handler: function(request, reply){
		student.update(
			{'_id':request.params.id},
			{
				$set: {
					cuenta: request.payload.cuenta,
					nombre: request.payload.nombre,
					id_padre: request.payload.id_padre
				}
			},
			function(err){
				if(err){
					return reply(boom.wrap(err, 'Alumno no encontrado'));
				}else{
					return reply('Alumno modificado con exito!');
				}
			}
		);
	}
}

exports.deleteUser = {
	handler : function(request, reply){
		user.findOne(
			{'_id' : request.params.id},
			function(err, User){
				if(!err && User){
					User.remove(function(err){
						if(err){
							return reply(boom.wrap(err,'Error borrando el usuario'));
						}else{
							return reply('Usuario borrado con exito!');
						}
					})
				}else if(!err){
					return reply(boom.notFound());
				}else if(err){
					return reply(boom.badRequest('No se pudo eliminar el usuario. Revise que el ID sea correcto'));
				}
			}
		);
	}
}

exports.deleteStudent = {
	handler: function(request, reply){
		student.findOne(
			{'_id' : request.params.id},
			function(err, Student){
				if(!err && Student){
					Student.remove(function(err){
						if(err){
							return reply(boom.wrap(err, 'Ocurrio un error al intentar borrar el alumno'));
						}else{
							return reply('Alumno borrado con exito!');
						}
					});
				}else if(!err){
					return reply(boom.notFound());
				}else if(err){
					return reply(boom.badRequest('No se puedo borrar el alumno'));
				}
			}
		);
	}
}