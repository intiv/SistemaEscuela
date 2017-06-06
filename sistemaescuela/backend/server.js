var hapi = require('hapi');
var joi = require('joi');
var mongoose = require('mongoose');
var inert = require('inert');
var auth = require('hapi-auth-cookie');

var server = new hapi.Server();
server.connection({
	port: ~~process.env.PORT || 8000,
	routes : {
		cors : {
			origin : ["*"]
		}
	}
});

mongoose.connect('mongodb://localhost:27017/sistemaescuela');

var db=mongoose.connection;
db.on('error', console.error.bind(console, 'Connection to MongoDB failed'));
db.once('open', function callback(){
	console.log('Connection with MongoDB succeeded');
});

server.register([inert, auth], function(err){
	
	if(err){
		throw err;
	}

	server.start(function(){
		console.log('Server start succesful, connected at: ' + server.info.uri);
	});

});