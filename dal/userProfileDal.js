//Load Depenencies
var profileModel = require('../models.userProfile');
var debug = require('debug')('borsa : user_profile_data_accesss')

//Signup
 exports.create  = function createUserProfile(profileData, callback){
     var profileModel = new profileModel(profileData);
     profileModel.save(function(err,userProfile){
        debug('creating userProfile');
        if(err){
            return callback(err);
        }

        exports.get({_id:userProfile._id}, function(err,userProfile){
            if(err){
                return callback(err);
            }
            callback(null, userProfle);
        })

     });
 }

 exports.get = function findUserProfile(query, callback){
     debug('Finding userProfile...', query);
     profileModel.findOne(query, function(err, data){
         if(err) callback(err);
         callback(null, data);
     });
 }

 exports.delete = function deleteUserProfile(query, callback){
   profileModel.findOne(query, function(err, userProfile){
       if(err) callback(err);          
           if(err) callback(err);          
           if(!user) callback(null, {});          
           profileModel.remove(function(err){
               if(err) {
                   return callback(err);
               }
           })
           callback(null, user);
      })
 }
 exports.update = function updateUserProfile(query,  callback){
    profileModel.update(query, $set{
 }



