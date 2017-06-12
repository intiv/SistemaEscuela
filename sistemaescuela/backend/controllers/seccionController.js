var seccion = require('../schemas/seccion');
var SHA3 = require('crypto-js/sha3');
var boom = require('boom');

exports.createSection = {
	handler : function(request, reply){
		var newSeccion = new seccion({
			cuenta: request.payload.cuenta,
			grado: request.payload.grado,
			apartado: request.payload.apartado,
			ano: request.payload.ano,
			maestro:request.payload.maestro
		});
		newSeccion.save(function(err){
		if(err){
			return reply('Error saving seccion to DB');
		}else{
			return reply('Seccion succesfully');
		}
		});
	}
	
}

exports.getAllSections = {
	handler : function(request, reply){
		seccion.find({}, function(err, secciones){
			if(!err && secciones){
				return reply(secciones);
			}else if(!err){
				return reply(boom.notFound());
			}else if(err){
				return reply(boom.wrap(err, 'Error obteniendo las secciones de la bd'));
			}
		});
	}
}

exports.getSectionById = {
	handler: function(request, reply){
		seccion.findOne({_id: request.params.id}, function(err, seccion){
			if(!err && seccion){
				return reply(seccion);
			}else if(!err){
				return reply(boom.notFound());
			}else if(err){
				return reply(boom.wrap(err, 'Error obteniendo la seccion de la bd'));
			}
		});
	}
}

exports.getSectionsByTeacher = {
	handler: function(request, reply){
		seccion.find({maestro : request.params.maestro}, function(err, secciones){
			if(!err && secciones){
				return reply(secciones);
			}else if(!err){
				return reply(boom.notFound());
			}else if(err){
				return reply(boom.wrap(err, 'Error obteniendo las secciones de ese maestro'));
			}
		});
	}
}

exports.getSectionsByGrade = {
	handler: function(request, reply){
		seccion.find({grado : request.params.grado}, function(err, secciones){
			if(!err && secciones){
				return reply(secciones);
			}else if(!err){
				return reply(boom.notFound());
			}else if(err){
				return reply(boom.wrap(err, 'Error obteniendo las secciones de ese grado'));
			}
		});
	}
}

exports.getSectionsByYear = {
	handler: function(request, reply){
		seccion.find({ano : request.params.ano}, function(err, secciones){
			if(!err && secciones){
				return reply(secciones);
			}else if(!err){
				return reply(boom.notFound());
			}else if(err){
				return reply(boom.wrap(err, 'Error obteniendo las secciones de ese año'));
			}
		});
	}	
}

exports.getSectionsByCuenta = {
	handler: function(request, reply){
		seccion.find({cuenta : request.params.cuenta}, function(err, secciones){
			if(!err && secciones){
				return reply(secciones);
			}else if(!err){
				return reply(boom.notFound());
			}else if(err){
				return reply(boom.wrap(err, 'Error obteniendo las secciones de ese cuenta'));
			}
		});
	}
}

exports.getSectionsByApartado = {
	handler: function(request, reply){
		seccion.find({apartado : request.params.apartado}, function(err, secciones){
			if(!err && secciones){
				return reply(secciones);
			}else if(!err){
				return reply(boom.notFound());
			}else if(err){
				return reply(boom.wrap(err, 'Error obteniendo las secciones de ese apartado'));
			}
		});
	}
}


exports.modifySection = {
	handler : function(request, reply){
		seccion.update(
			{'_id':request.params.id},
			{
				$set: {
				cuenta: request.payload.cuenta,
				grado: request.payload.grado,
				apartado: request.payload.apartado,
				ano: request.payload.ano,
				maestro:request.payload.maestro	
				}
			},
			function(err){
				if(err){
					return reply(boom.wrap(err, 'seccion no se ha encontrado'));
				}else{
					return reply('Seccion se ha modificado con exito!');
				}
			}
		);
	}
}



exports.deleteSection = {
	handler : function(request, reply){
		seccion.findOne(
			{'_id' : request.params.id},
			function(err, Seccion){
				if(!err && Seccion){
					Seccion.remove(function(err){
						if(err){
							return reply(boom.wrap(err,'Error borrando la seccion'));
						}else{
							return reply(' borrado con exito!');
						}
					})
				}else if(!err){
					return reply(boom.notFound());
				}else if(err){
					return reply(boom.badRequest('No se pudo eliminar la seccion. Revise que el ID sea correcto'));
				}
			}
		);
	}
}

