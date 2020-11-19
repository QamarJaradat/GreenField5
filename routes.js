const express = require('express');
const routers = express.Router();
const auth = require('./auth')

const tripController = require('./Controller/TripsController')
//User Controller 
const userController = require('./Controller/UserController')
routers.post('/signup', userController.signUpUser);
routers.post('/login', userController.loginUser);
routers.post('/logout', userController.userlogout)
routers.get('/checkuser', auth, (req, res) => {
    res.send(userController.checkuser(req, res))
})
routers.post('/getuserinfo', userController.getuserinfo)

//Payment 
const paymentController = require('./Controller/PaymentController')
routers.post('/payment', paymentController.payment)
//Trips 
routers.get('/gettrips', tripController.tripsList)
routers.post('/addtrip', tripController.updateTrip)
routers.get('/filldata', tripController.fillTrips)
routers.post('/getmytrips', tripController.getmytrips)



routers.get('/check', auth, (req, res) => {
    res.send(paymentController.check(req, res))
    // res.status(200).send(req.user)
})





// routers.get('/check', auth, paymentController.check)




module.exports = routers;
