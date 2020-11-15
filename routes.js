const express = require('express');
const routers=express.Router();
routers.get('/', function(req, res, next) {
    res.send('imad');
});
module.exports = routers;
