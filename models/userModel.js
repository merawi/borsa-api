//Load Dependencies
var mongoose  = require('mongoose');

var userSchema = new mongoose.Schema({
	//_id : {type:String},
	email : {type : String}	//user Id
	,phoneNo: {type:String}			//Alternate user Id
	,password : {type : String}
	,status : {type : String}
	,role : {type : String, default : "customer"}
	,createdOn : {type : Date, default : Date.now()}
	,lastAccessedOn : {type : Date, default : Date.now()}
	,lastModifiedOn: {type : Date, default : Date.now()}   
});

module.exports = mongoose.model('User' , userSchema)     
