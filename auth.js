const jwt = require('jsonwebtoken')
function auth(req, res, next) {
    const token = req.header('authToken')
    if (!token) {
        return res.status(401).send('You have to login first')
    }

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        next()
    }
    catch (err) {
        res.status(400).send('invalid Token')

    }
}

module.exports = auth