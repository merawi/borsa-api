//Load Dependencies

var debug = require('debug')('token-dal');
var moment = require('moment');
var Token = require('../models/tokenModel');

//create a new token

exports.create = function create(tokenData,callback){
	debug('creating a new token...');

	var tokenModel = new Token(tokenData);
	tokenModel.save(function saveToken(err, data){
		if(err){
			return callback(err);
		}

		exports.find({_id:data._id}, function(err, token){
			if(err) { 
				return callback(err);
			}
			callback(null, token);
		})
	})
}

//find token
exports.find = function find(query, callback){
	debug('finding token...', query);

	Token.findOne(query)
	.populate('user');
	.exec(function(err, token){
		if(err) {
			return callback(err);
		}

		callback(null, token || {});
	});
}

//delete token
exports.delete = function delete(query, callback){
	debug ('deleting token...', query);

	Token.findOne(query)
	.exec(function deleteToken(err, token){
		if(err){
			return callback(err);
		}
		if(!token){
			return callback (null, {});
		}
		token.remove(function(err){
			if(err){
				return callback(err);
			}

			callback(null, token);
		});
	});
};

//update token
exports.update = function update(query, updates, callback){
	debug('updating token...', query);

	Token.findOneAndUpdate(query, updates)
	.exec(function updateToken(err,token){
		if(err) {
			return callback(err);
		}

		if(!token){
			return callback (null, {});
		}

		callback(null, token || {});
	});
};
