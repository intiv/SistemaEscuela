var boom = require('boom');
var joi = require('joi');
var uuid = require('node-uuid');

exports.register = function(server, options, next){
	var db = server.app.db;

	server.route({
		method : 'GET',
		path : '/',
		handler : function(request, reply){
			reply('Hola');
		}
	});

	return next();
}

exports.register.attributes = {
	name: 'routes-users';
}