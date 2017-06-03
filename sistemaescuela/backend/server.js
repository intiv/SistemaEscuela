var hapi = require('hapi');
var joi = require('joi');
var mongo = require('mongojs');

var server = new hapi.Server();
server.connection({
	host: 'localhost',
	port: 3000
});

server.app.db = mongo('sistemaescuela',['usuarios','tareas','avisos']);

server.register([], function(err){
	if(err){
		throw err;
	}

	server.start(function(err){
		if(!err){
			console.log('Server start succesful, connected at: ' + server.info.uri);
		}
	});
});