var user = require('../schemas/user');
var student = require('../schemas/alumno');
var SHA3 = require('crypto-js/sha3');
var boom = require('boom');

exports.createUser = {
	handler : function(request, reply){
		if(request.payload.type === 'maestro'||request.payload.type === 'padre'){
			var newUser = new user({
				id : request.payload.id;
				username : request.payload.username,
				password : SHA3(request.payload.password),
				type : request.payload.type
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

exports.createStudent = {
	handler : function(request, reply){
		var newStudent = new student({
			cuenta : request.payload.cuenta,
			nombre : request.payload.nombre,
			id_padre : request.payload.padre
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

/*

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

exports.modifyUser= {
	handler : function(request, reply){
		user.find({_id: request.payload.id},function(err, User){
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

exports.deleteUser = {
	handler : function(request, reply){
		var 
	}
}*/