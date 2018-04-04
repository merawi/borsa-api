//Load Dependencies
var 
userDal = require('../dal/userDal')
,crypto = require('crypto')
,debug = require('debug''borsa-api')
;

//Login
exports.login = function login(req, res, next) {
	debug('user login ....');

	var workflow = new events.EventEmitter();

	workflow.on('validateDataInput', function validateData(){
			req.checkBody('email', 'Email is invalid')
			.notEmpty().withMessage('Please enter email')
			.isEmail().withMessage('Please enter valid email');

			req.checkBody('password', '')
			.notEmpty().withMessage('Password is required');

			var errors = req.validationErrors();
			if(errors){
				res.status(400);
				res.json(errors);
				return;
				}

			workflow.emit('authenticateUserName');
	});

	workflow.on('authenticateUserName', function authenticateUserName(){
		userDal.get({email:req.body.email}, function done(err, data){
			if(err){
				return next(err);

			if(!user._id){
				res.status(404);
				res.json({
					message : 
				})
			}
			}
		})


	});
}