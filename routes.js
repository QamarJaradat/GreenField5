const express = require('express');
const routers = express.Router();
//User Controller 
const userController = require('./Controller/UserController')
routers.post('/signup', userController.signUpUser);
routers.post('/login', userController.loginUser);
routers.post('/logout', userController.userlogout)

//Payment 
const paymentController = require('./Controller/PaymentController')
routers.post('/payment', paymentController.payment)



const auth = require('./auth')
routers.get('/check', auth, (req, res) => {
    res.status(200).send(req.user)
})



module.exports = routers;
