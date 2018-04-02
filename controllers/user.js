//Load Dependencies
var utilities = require('../bin/utilities');
var userDal = require('../dal/user');
var debug       = require('debug')('borsa:user_controller');
var validator = require('express-validator');
//var userProfileDal = require('../dal/user');

/**
 * Lisence: MIT, Tony Mutai, Gebeya INC.
 * Steps..
 * 1. Validate the data
 * 2. Create User
 * 3. Create Profile 
 * 4. Create User Type
 * 5. Activate user account
 * 6. Respond
 */

exports.signup = function(req,res,next){
        //debug('create user');
        var body = req.body;
            userDal.create(body, function callback(err,user){
<<<<<<< HEAD

    //Data validation logic here.

=======
    //Data validation logic here.
>>>>>>> dev
                if(err) debug(err);//return next(err);
                res.status(200).json(user);
        });
    }
        
//Implement here to create accessory objects for user

exports.find = function(req, res,next){
    
    userDal.find({_id : req.params["userId"]}, function(err,user){
    if(err) res.status(400).json({error:"user Error",message:"user not found"})    
        else res.status(200).json(user);
    });
}

exports.getAll = function(req,res,next){
    userDal.getAll({}, function(err,userlist){
        if(err) {
            debug(error.message);
            return next(err);
        }
        res.status(200).json(userlist);
    });
}

exports.update = function(req,res,next){
    console.log('welcome to the update');
    var id  = req.body._id;
    delete req.body._id;
    data = req.body;

    userDal.update({_id:id}, data, function(err, user){
      if(err=={}){
        debug('error occured during update: ', err);

        next(err);
        //next(err);
      }
      else if(!user){
        debug('usr not found');
        res.status(400).send(err);
        //next(err);
      }
      else
        {
          debug('update successful');
          userDal.find({_id:id},function(err,foundUser){
            if(err) next(err);
            res.status(200).send(foundUser);
          })        
      }
    });
}