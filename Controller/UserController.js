const UserModel = require('../DataModel').users
const bcrypt = require('bcryptjs')
//JWT
const jwt = require('jsonwebtoken');

exports.signUpUser = async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(req.body.userPass, salt)
    // User Data when Signing up
    userMail = req.body.userMail
    userpas = req.body.userPass
    if (!userpas) {
        return res.status(421).send('error')

    }


    if (!userMail) {
        return res.status(411).send('error')

    }

    UserModel.findOne({ userMail: req.body.userMail }, (err, user) => {
        if (err) {
            console.log(err)
            return res.status(400).send('error')
        }
        if (!user) {
            var newuser = new UserModel()
            newuser.userName = req.body.userName
            newuser.userMail = req.body.userMail
            newuser.userPass = hashedPass
            newuser.userNum = req.body.userNum
            newuser.trips = []
            newuser.newsLetter = req.body.newsLetter
            newuser.save((err, saveduse) => {
                if (err) {
                    console.log(err)
                    return res.status(400).send('error')
                }
                return res.status(200).send('created')

            })
        }
        else
            return res.status(406).send('user existed')
    })
}

exports.loginUser = (req, res) => {
    var userMail = req.body.userMail
    var userPass = req.body.userPass
    if (!userMail) {
        return res.status(410).send('error')

    }
    UserModel.findOne({ userMail: userMail }, async (err, user) => {

        if (err) {
            console.log(err)
            return res.status(500).send('error')
        }

        if (!user) {
            console.log('user not found')
            return res.status(404).send('not found user')
        }
        else {
            const vaildPass = await bcrypt.compare(req.body.userPass, user.userPass)
            if (!vaildPass) {
                res.status(400).send('invalid Password')
            }
            else {
                var token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '5m' })
                res.cookie('authToken', token)
                return res.status(200).send(token)
            }
        }

    })
}

exports.userlogout = (req, res) => {
    res.cookie('authToken', '')
    res.status(200).send(req.user)


}
