var express = require('express');
var router = express.Router();
var userController = require('./controller/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/register', userController.createNewAccount);

router.post('/login', userController.login);

router.get('/get-users', userController.getAllUsers)

router.post('/getData', userController.getData)

router.post('/postData', userController.postData)


module.exports = router;