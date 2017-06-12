var homework = require('../schemas/homework.js');
var boom = require('boom');
var seccion = require('../schemas/seccion.js');

exports.createHomework = {
	handler : function(request, reply) {
		var newHomework = new homework({
			id : request.payload.id,
			seccion : request.payload.seccion,
			titulo : request.payload.titulo,
			fecha_de_envio : request.payload.fecha_de_envio,
			fecha_de_entrega : request.payload.fecha_de_entrega,
			descripcion : request.payload.descripcion,
			porcentaje_obtenido : request.payload.porcentaje_obtenido,
			parcial : request.payload.parcial,
			valor : request.payload.valor
		});
		newHomework.save(function(err){
			if(err){
				return reply(boom.wrap(err, 'Failed to insert Homework'));
			}else{
				return reply('Homework inserted succesfully to DB');
			}
		});
	}
}

exports.getAllHomeworks = {
	handler: function(request, reply){
		homework.find({}, function(err, tareas){
			if(!err && tareas){
				return reply(tareas);
			}else if(!err){
				return reply(boom.notFound());
			}else if(err){
				return reply(boom.wrap(err, 'Error obteniendo tareas'));
			}
		});
	}
}

exports.getHomeworksByParcial = {
	handler: function(request, reply){
		homework.find({parcial: request.params.parcial}, function(err, tareas){
			if(!err && tareas){
				return reply(tareas);
			}else if(!err){
				return reply(boom.notFound());
			}else if(err){
				return reply(boom.wrap(err, 'Error obteniendo tareas'));
			}
		});
	}
}

exports.getHomeworkById = {
	handler: function(request, reply){
		homework.find({id: request.params.id}, function(err, tareas){
			if(!err && tareas){
				return reply(tareas);
			}else if(!err){
				return reply(boom.notFound());
			}else if(err){
				return reply(boom.wrap(err, 'Error obteniendo tareas'));
			}
		});
	}
}

exports.getHomeworkByMongoId = {
	handler: function(request, reply){
		homework.find({_id: request.params.id}, function(err, tareas){
			if(!err && tareas){
				return reply(tareas);
			}else if(!err){
				return reply(boom.notFound());
			}else if(err){
				return reply(boom.wrap(err, 'Error obteniendo tareas'));
			}
		});
	}
}

exports.getHomeworksBySection = {
	handler: function(request, reply){
		homework.find({seccion: request.oarams.seccion}, function(err, tareas){
			if(!err && tareas){
				return reply(tareas);
			}else if(!err){
				return reply(boom.notFound());
			}else if(err){
				return reply(boom.wrap(err, 'Error obteniendo tareas'));
			}
		});
	}
}

exports.modifyHomework = {
	handler: function(request, reply){
		homework.update(
			{ _id : request.params.id }, 
			{ 
				$set: {
					id : request.payload.id,
					seccion : request.payload.seccion,
					titulo : request.payload.titulo,
					fecha_de_envio : request.payload.fecha_de_envio,
					fecha_de_entrega : request.payload.fecha_de_entrega,
					descripcion : request.payload.descripcion,
					porcentaje_obtenido : request.payload.porcentaje_obtenido,
					parcial : request.payload.parcial,
					valor : request.payload.valor
				} 
			},
			function(err){
				if(err){
					return reply(boom.notFound());
				}else{
					return reply({ success: true});
				}
			}
		);
	}
}

exports.deleteHomework = {
	hanlder: function(request, reply){
		homework.findOne( { _id: request.params.id }, function(err, tarea){
			if(!err && tarea){
				tarea.remove(function(err){
					if(!err){
						return reply('Tarea eliminada con exito!');
					}else if(err){
						return reply(boom.wrap(err, 'Error borrando la tarea');
					}
				});
			}else if(!err){
				return reply(boom.notFound());
			}else if(err){
				return reply(boom.wrap(err, 'Error obteniendo la tarea: No se puedo borrar'))
			}
		});
	}
}

