const express = require('express');
const app = express();
const routers = require('./routes');

const bodyParser = require('body-parser');
const database = require('./db');
const { port } = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/../frontend/build'))

app.get('/', (req, res) => {

  res.json({ mess: "welcome welcome" })

})
app.use('/signin', routers)
module.exports = app;

