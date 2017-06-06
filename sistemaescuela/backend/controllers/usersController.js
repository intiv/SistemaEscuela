var user = require('../schemas/user');
var SHA3 = require('crypto-js/sha3');
var boom = require('boom');

exports.createUser = {
	handler : function(request, reply){
		var newUser = new user({
			id : request.payload.id;
			username : request.payload.username,
			password : SHA3(request.payload.password),
			type : request.payload.type,
			scope : request.payload.scope
		});
		newUser.save(function(err){
			if(err){
				return reply(boom.notAcceptable('Username must be unique: ' + err));
			}else{
				return reply('User inserted succesfully');
			}
		});
	}
}