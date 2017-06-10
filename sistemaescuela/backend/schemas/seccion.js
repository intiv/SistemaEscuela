var mongoose = require('mongoose');


var Seccion = new mongoose.Schema({
	cuenta: String,
	grado : String,
	apartado : String,
	ano: String,
	maestro: String

});

module.exports = mongoose.model('seccion', Seccion);