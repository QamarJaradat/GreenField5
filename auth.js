//Authntication and creating token
const jwt = require('jsonwebtoken')
function auth(req, res, next) {
    var t = Object.values(req.cookies)
    const token = t[0]
    if (!token) {
        return res.status(401).send('You have to login first')
    }

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        res.header('authToken', token)
        next()
    }
    catch (err) {
        res.status(400).send('invalid Token')

    }
}

module.exports = auth