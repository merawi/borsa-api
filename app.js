//Load Dependencies
var config = require('./config');
var express = require('express');
var debug = require('debug')('borsa-api');
var routes = express.Router();
var bodyParser = require('body-parser');
var config = require('./config');
var mongoose = require('mongoose');
var Router = express.Router();
var validator = require('express-validator');
//var models = require('./models');

//Initialize
var app  = express();
app.use(bodyParser.json());
app.use(validator());

//Db Connection
 mongoose.connect(config.db.uri);
 mongoose.connection.on('connected', function(){
    debug('Db connected successfully!');
 })
 mongoose.connection.on('error', function(){
    debug('Db Connection Error!');
 });

 //Router(app);

app.get('/', function(req,res,next){
    res.status(200).send('Welcome to the us!');
});

app.get('/user/register', function(req, res, next){
    var body = req.body();
    var user = models.userModel;
    user.save(body);
});

//Error handler middleware
app.use(function(err,req,res,next){
    res.status(500).send('Something went wrong. Please try again later!');
})

//Server
app.listen(config.PORT, function(err){
    if(err) console.log('Error starting server');
    console.log(`listening to port: ${config.PORT}`);
});