var mongoose = require('mongoose');


var Seccion = new mongoose.Schema({
	cuenta: String,
	grado : String,
	apartado : String,
	clase: String
});

module.exports = mongoose.model('seccion', Seccion);