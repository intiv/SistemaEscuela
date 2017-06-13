var user = require('../schemas/user');
var student = require('../schemas/alumno');
var SHA3 = require('crypto-js/sha3');
var boom = require('boom');

//added = agregado a routes
exports.createUser = {//added
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

exports.getAllUsers = {//added
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

exports.getUserById = {//added
	handler : function(request, reply){
		user.findOne({_id: request.params.id},function(err, User){
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

exports.getTeachers = {
	handler : function(request, reply){
		user.find({tipo: 'maestro'}, function(err, Maestros){
			if(!err && Maestros){
				return reply(Maestros);
			}else if(!err){
				return reply(boom.notFound());
			}else if(err){
				return reply(boom.wrap(err,'Error obteniendo maestros'));
			}
		});
	}
}

exports.getTeacherById = {
	handler : function(request, reply){
		user.findOne({_id: request.params.id, tipo: 'maestro'}, function(err, Maestro){
			if(!err && Maestro){
				return reply(Maestro);
			}else if(!err){
				return reply(boom.notFound('No existe un maestro con esa id'));
			}else if(err){
				return reply(boom.wrap(err,'Error obteniendo maestro'));
			}
		});
	}
}

exports.modifyUser = {//added
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

exports.deleteUser = {//added
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

