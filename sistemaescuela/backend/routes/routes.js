var boom = require('boom');
var joi = require('joi');
var uuid = require('node-uuid');

exports.endpoints = [
	{
		method: 'GET',
		path: '/',
		config: {
			handler: function(request, reply){
				reply('hola como estas');
			}
		}
	},
	{
		method: 'POST',
		path: '/login',
		config: {
			handler: function(request, reply){
				reply('usuario creado con exito!');
			}
		}
	}
];