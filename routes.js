const express = require('express');
const routers = express.Router();
//User Controller 
const userController = require('./Controller/UserController')
routers.post('/signup', userController.signUpUser);
routers.post('/login', userController.loginUser);
//Payment 
const paymentController = require('./Controller/PaymentController')
routers.post('/payment', paymentController.payment)



module.exports = routers;
