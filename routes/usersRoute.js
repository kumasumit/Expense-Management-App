const express = require('express');
//import/require the usersController from controller folder
const usersController = require('../controllers/usersController');

//router object
const router = express.Router()




//routes

//1.router to login by a post request
//POST || Login User
router.post('/login', usersController.loginUser);

//2.router to register-sign-UP by a post request
//POST || Register User
router.post('/register', usersController.registerUser);



module.exports = router;
