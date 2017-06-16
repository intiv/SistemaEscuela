var user = require('../schemas/user');
var student = require('../schemas/alumno');
var joi = require('joi');
var SHA3 = require('crypto-js/sha3');
var boom = require('boom');

//added = agregado a routes
exports.createUser = {//added
	auth: false,
	handler : function(request, reply){
		if(request.payload.tipo === 'maestro'||request.payload.tipo === 'padre'||request.payload.tipo ==='alumno'||request.payload.tipo==='admin'){
			var newUser = new user({
				id : request.payload.id,
				nombre : request.payload.nombre,
				apellido : request.payload.apellido,
				usuario : request.payload.usuario,
				tipo : request.payload.tipo,
				contrasena : SHA3(request.payload.contrasena),//SHA3(request.payload.contrasena)
				fecha_de_nacimiento : request.payload.fecha,
				telefono : request.payload.telefono,
				direccion : request.payload.direccion,
				correo : request.payload.correo,
				scope: request.payload.scope
			});
			newUser.save(function(err){
				if(err){
					return reply({message: boom.notAcceptable('Username must be unique: ' + err), success: false});
				}else{
					return reply({message: 'User inserted succesfully', success: true});
				}
			});
		}else{
			return reply({message: boom.badRequest('Tipo de cuenta invalido'), success: false});
		}
	}
}

exports.login = {
  auth: false,
  validate: {
    payload: {
      usuario: joi.string().min(3).max(20).required(),
      contrasena: joi.string().min(3).max(20).required()
    }
  },
  handler: function(request, reply) {
    var contrasena = String(SHA3(request.payload.contrasena));
    console.log(contrasena);
    user.find({usuario: request.payload.usuario, contrasena: contrasena}, function(err, User){

      	if(!err && User){
        if(User.length > 0){
          console.log(User[0]);
          request.cookieAuth.set(User[0]);
          return reply({usuario: User[0].usuario, scope: User[0].scope, success: true, message: 'Login hecho exitosamente'});
        }else{
          return reply({success: false, message: boom.notFound(),tipo: 'length'});
        }
      }else if(!err){
        return reply({success: false, message: 'No se encontro el usuario', tipo:'null'});
      }else if(err){
      	return reply({success: false, message: boom.wrap(err, 'Error obteniendo el usuario'), tipo:'err'});
      }
    });
  }
};

exports.logout = {
  auth : {
    strategy: 'session',
    mode: 'required'
  },
  handler: function(request, reply) {
    request.cookieAuth.clear();
    return reply('Logout Successful!');
  }
};

exports.getAllUsers = {//added
	handler : function(request, reply){
		user.find({}, function(err, users){
			if(!err && users){
				return reply({users: users, success: true});
			}else if(!err){
				return reply({message: boom.notFound(), success: true});
			}else if(err){
				return reply({message: boom.wrap(err, 'Error obteniendo usuarios de la bd'), success: true});
			}
		});
	}
}

exports.getUserById = {//added
	handler : function(request, reply){
		user.findOne({_id: request.params.id},function(err, User){
			if(!err && User){
				return reply({user: User, success: true});
			}else if(!err){
				return reply({message: boom.notFound(), success: false});
			}else if(err){
				return reply({message: boom.wrap(err,'Error obteniendo el usuario de la bd (id)'), success: false});
			}
		});
	}
}

exports.getTeachers = {
	handler : function(request, reply){
		user.find({tipo: 'maestro'}, function(err, Maestros){
			if(!err && Maestros){
				return reply({teachers : Maestros, success: true});
			}else if(!err){
				return reply({message: boom.notFound(), success: false});
			}else if(err){
				return reply({message: boom.wrap(err,'Error obteniendo maestros'), success: false});
			}
		});
	}
}

exports.getTeacherById = {
	handler : function(request, reply){
		user.findOne({_id: request.params.id, tipo: 'maestro'}, function(err, Maestro){
			if(!err && Maestro){
				return reply({teacher: Maestro, success: true});
			}else if(!err){
				return reply({message: boom.notFound('No existe un maestro con esa id'), success: false});
			}else if(err){
				return reply({message: boom.wrap(err,'Error obteniendo maestro'), success: false});
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
					correo : request.payload.correo,
					scope: request.payload.scope
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

