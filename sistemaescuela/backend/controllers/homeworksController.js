var homework = require('../schemas/homework.js');
var boom = require('boom');

exports.createHomework = {
	handler : function(request, reply) {
		var newHomework = new homework({
			id : request.payload.id;
			grade : request.payload.grade;
			title : request.payload.title;
			description : request.payload.description;
			teacher : request.payload.teacher;
			class : request.payload.class;
			score : request.payload.score;
		});
		newHomework.save(function(err){
			if(err){
				return reply(boom.wrap(err, 'Failed to insert Homework'));
			}else{
				return reply('Homework inserted succesfully to DB');
			}
		});
	}
}