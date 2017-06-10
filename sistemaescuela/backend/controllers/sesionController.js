var seccion = require('../schemas/seccion');
var SHA3 = require('crypto-js/sha3');
var boom = require('boom');

exports.createSeccion = {
	handler : function(request, reply){
		
			var newSeccion = new seccion({
			cuenta: request.payload.cuenta;
			grado: request.payload.grado;
			apartado: request.payload.apartado;
			ano: request.payload.ano;
			maestro:request.payload.maestro;
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

exports.getAllsections = {
	handler : function(request, reply){
		seccion.find({}, function(err, seccions){
			if(!err && seccions){
				return reply(seccions);
			}else if(!err){
				return reply(boom.notFound());
			}else if(err){
				return reply(boom.wrap(err, 'Error obteniendo las secciones de la bd'));
			}
		});
	}
}





exports.modiseccion = {
	handler : function(request, reply){
		seccion.update(
			{'_id':request.params.id},
			{
				$set: {
				cuenta: request.payload.cuenta;
				grado: request.payload.grado;
				apartado: request.payload.apartado;
				ano: request.payload.ano;
				maestro:request.payload.maestro;	
				}
			},
			function(err){
				if(err){
					return reply(boom.wrap(err, 'seccion no ha  encontrado'));
				}else{
					return reply('Seccion no se ha modificado con exito!');
				}
			}
		);
	}
}



exports.deleteSeccion = {
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

