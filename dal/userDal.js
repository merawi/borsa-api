//Load Depenencies
var User = require('../models/userModel');
var debug = require('debug')('borsa:user_data_access')
//to activate debug logs, use: SET DEBUG=borsa* //on the command line before running the program

 //Signup

 exports.createUser
   = function createUser(userData, callback){
     var userModel = new User(userData);
     userModel.save(function(err,user){
        debug('creating user...');
        if(err){
            return console.log(err);//callback(err);
        }

        exports.find({_id:user._id}, function(err,user){
            if(err){
                return callback(err);
            }
            callback(null, user);
        })

     });
 }

 //find one user
 exports.find = function findUser(query, callback){
     debug('Finding user...', query);
     User.findOne(query, function(err, data){
         if(err || !data) callback();
         callback(null, data);
     });
 }

  //find multiple users
 exports.getAll = function findAllUsers(query, callback){
    debug('finding all users...');
    User.find(query, function(err,data){
        if(err) callback(err);
        callback(null, data);
      });
 }

  //delete user
 exports.delete = function deleteUser(query, callback){
   User.findOne(query, function(err, user){
       if(err) callback(err);
       if(!user) callback(null, {});
          
       User.remove(function(err){
               if(err) {
                   return callback(err);
               }
           })
           callback(null, user);
      });
 }

 exports.update = function(query, data, callback){
     User.update(query, data, function(error, user) {
    // Handle the error using the Express error middleware
    if(error) 
    return callback(error);
    callback({},user);
    });
    
 } 