//Load Dependencies
var userDal = require('../dal/userDal');
var mongoose = require('mongoose');
var debug       = require('debug')('borsa:user_controller');
var validator = require('express-validator');
var events = require('events');

exports.createUser = function createUser(req, res, next){
  debug('create user ...')
  
  //validate user data
  //create user
  //create profile
  //response

  var workflow = new events.EventEmitter();
  var body = req.body;
  
  //validating
  workflow.on('validateUser', function validate(){
    debug('validating user data...')
    
    //user input validations
    req.checkBody('email', 'invalid Email')
      .notEmpty().withMessage('Email cannot be empty')
      .isEmail().withMessage('Please enter a valid email address');

    var validationErrors = req.validationErrors();

    if(validationErrors){
      res.json(validationErrors);
    }

    else workflow.emit('createUser');

  });

  workflow.on('createUser', function createUser(){

    var user = {
    email : body.email,
    phoneNo : body.phoneNo,
    password : body.password,
    status : body.status
  };

  userDal.createUser(user,
    function callback(err){
      if(err) {
        debug('error occured creating user');
        next(err);
      }      
      else{
      debug('success creating user')
      res.status(200);
      //console.log(user);
      res.json(user);
     }

    })
  });

 workflow.emit('validateUser');

}


/**
GET User
*/
exports.getUser = function getUser(req,res,next){
  
  userDal.find({_id:req.params.userId}, function(err,user){
    if(err){
      debug('error finding object')
      return next(err);
    }
    else{
      debug('success finding user')
      res.status(200);
      res.json(user);
    }
  });

};


/*
Update User
*/
exports.updateUser = function updateUser(req,res,next){
  userDal.Update

}

/*
User login
*/
exports.login = function userLogin(req,res,next){
  res.send('To be implemented!')
}

exports.getUsers = function getUsers(req,res,next){

}

exports.noop = function noop (req,res,next){
  res.json({
    message: 'To be implemented!'
  });
}



exports.welcome = function welcome(req,res,next){
  res.status(200);
  res.send('welcome to user');
}


