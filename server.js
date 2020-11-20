const express = require('express');
const app = express();
const routers = require('./routes');
// const cors = require('cors')
var cookieParser = require('cookie-parser')
const auth = require('./auth')
// const path = require('path');
// const fs = require('fs');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
// app.use(cors())

app.use(express.static(__dirname + '/frontend/build'))


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('/frontend/build'))
}

app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, './frontend/public/index.html'), function (err) {
  //   if (err) {
  //     res.status(500).send(err)
  //   }
  // })
  res.json({ mess: "welcome welcome" })
})
app.use('/', routers)
app.get('/payment', auth, (req, res) => { console.log("kill me please"); res.end("hiiiiiiiiiiii") })
module.exports = app;

