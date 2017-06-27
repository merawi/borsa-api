//Load Dependencies
var mongoose  = require('mongoose');

var user = new mongoose.Schema({
	email : {type : String},//use Id
	phoneNo: {type:String},//Alternate user Id
	password : {type : String},
	confirmPassword : {type : String},
	//profile : {type : Schema.Types.ObjectId, ref : 'userProfile'},
	created : {type : Date, default : Date.now()},
	lastAccessed : {type : Date, default : Date.now()},
	lastModified: {type : Date, default : Date.now()}   
});

module.exports = { 
	user : mongoose.model('UserLogin' , user)     
}