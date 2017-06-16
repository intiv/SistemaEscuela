var hapi = require('hapi');
var routes = require('./routes/routes');
var mongoose = require('mongoose');
var inert = require('inert');
var auth = require('hapi-auth-cookie');

var server = new hapi.Server();
server.connection({
	port: ~~process.env.PORT || 8000,
	routes : {
		cors : {
			credentials: true,
			origin : ["*"]
		}
	}
});

mongoose.connect('mongodb://admin:admin@ds129422.mlab.com:29422/saintjohns');

var db=mongoose.connection;
db.on('error', console.error.bind(console, 'Connection to MongoDB failed'));
db.once('open', function callback(){
	console.log('Connection with MongoDB succeeded');
});

server.register([inert, auth], function(err){
	
	server.auth.strategy('session', 'cookie',{
		password: 'cookie-auth-password-for-encryption',
		cookie: 'saint-johns-cookie',
		ttl: 3 * 60 * 60 * 1000,
		isSecure: false
	});
	server.route(routes.endpoints);
	server.start(function(){
		console.log('Server start succesful, connected at: ' + server.info.uri);
	});

});