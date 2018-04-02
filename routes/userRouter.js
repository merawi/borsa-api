//Load Dependencies

var express = require('express');
var userController = require('../controllers/userController');


var router = express.Router();

router.post('/', userController.welcome);
	

//POST /signup
router.post('/signup', userController.createUser);

//get /user/find
router.get('/find/:userId', userController.getUser);

//POST /users/login

router.post('/login', userController.login);


module.exports = router;



