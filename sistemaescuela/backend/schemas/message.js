var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
	senderID : {type : Number, required : true}.
	recievers : [String],
	topic : {type : String, required : true},
	body : {type : String, required : true},
	sendDate : Date
});

module.exports = mongoose.model('messages', MessageSchema);