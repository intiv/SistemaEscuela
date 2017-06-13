var student = require('../schemas/alumno');

exports.createStudent = {//added
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

exports.getAllStudents = {//added
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

exports.getStudentById = {//added
	handler : function(request, reply){
		student.findOne({_id: request.params.id},function(err, Student){
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

exports.getStudentByAccount = {//added
	handler : function(request, reply){
		student.findOne({cuenta: request.params.cuenta},function(err, Student){
			if(!err && Student){
				return reply(Student);
			}else if(!err){
				return reply(boom.notFound());
			}else if(err){
				return reply(boom.wrap(err,'Error obteniendo el usuario de la bd'));
			}
		});
	}
}

exports.getStudentsByName = {//added
	handler : function(request, reply){
		student.find({nombre: request.params.nombre},function(err, students){
			if(!err && students){
				return reply(students);
			}else if(!err){
				return reply(boom.notFound());
			}else if(err){
				return reply(boom.wrap(err,'Error obteniendo el usuario de la bd'));
			}
		});
	}
}

exports.modifyStudent = {//added
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

exports.deleteStudent = {//added
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