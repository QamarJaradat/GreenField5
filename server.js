const express = require('express');
const app = express();
const routers = require('./routes');

const bodyParser = require('body-parser');
const flash=require('connect-flash');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/frontend/build'))


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('/frontend/build'))
}

app.get('/', (req, res) => {

  res.json({ mess: "welcome welcome" })

})
app.use('/', routers)
module.exports = app;

