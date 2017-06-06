var mongoose = require('mongoose');
var valid = require('mongoose-unique-validator');

var UserSchema = new mongoose.Schema({
	id : Number,
	username : {type : String, unique : true, required : true},
	password : String,
	type : {type: String, required: true},
	scope : [String]
});

UserSchema.plugin(validator);
module.exports = mongoose.model('user', UserSchema);