//Load Dependencies

var express = require('express');

var userRouter = require('./userRouter');


module.exports = function initRouter(app){

	app.use('/user', userRouter);
}






