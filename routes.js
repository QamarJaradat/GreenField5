const express = require('express');
const routers = express.Router();
const User = require('./db').users
routers.get('/', function (req, res, next) {
    res.send('imad');
});

routers.get('/signup', function (req, res) {
    var userName = req.body.userName
    var userPass = req.body.userPass
    User.findOne({ userName: userName, userPass: userPass }, (err, user) => {
        if (err) {
            console.log(err)
            return res.status(500).send()
        }
        if (!user) {
            console.log('user not found')
            return res.status(404).send()
        }
        return res.status(200).send()
    })
});

routers.post('/signin', function (req, res) {

    var newuser = new User()
    newuser.userName = req.body.userName
    newuser.userMail = req.body.userMail
    newuser.userPass = req.body.userPass
    newuser.userNum = req.body.userNum
    newuser.trips = []
    newuser.newsLetter = req.body.newsLetter
    newuser.save((err, saveduse) => {
        if (err) {
            console.log(err)
            return res.status(500).send()
        }
        return res.status(200).send()
    })
});

module.exports = routers;
