var mongoose = require('mongoose');

var HomeworkSchema = new mongoose.Schema({
	id : Number,
	grade : {type : Number, required : true},
	title : {type : String, required : true},
	description : String,
	teacher : Number,
	class : {type : Number, required : true},
	score : Number
});

module.exports = mongoose.model('homeworks', HomeworksSchema);