var mongoose = require('mongoose');
var validator = require('mongoose-unique-validator');

var UserSchema = new mongoose.Schema({
	id : Number,
	nombre : String,
	apellido: String,
	tipo: String,
	contrasena:String,
	fecha_de_nacimiento:String,
	telefono:String,
	direccion: String,
	correo:String
});

UserSchema.plugin(validator);
module.exports = mongoose.model('user', UserSchema);