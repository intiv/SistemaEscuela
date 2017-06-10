var mongoose = require('mongoose');

var HomeworkSchema = new mongoose.Schema({
	id : String,
	seccion: String,
	titulo: String,
	descripcion: String,
	fecha_de_envio: Date,
	fecha_de_entrega: Date,
	porcentaje_obtenido: Number,
	parcial: Number,
	valor:Number
});

module.exports = mongoose.model('homeworks', HomeworksSchema);