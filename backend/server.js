const express = require('express');
const app = express();
const routes = express.Router();

const bodyParser = require('body-parser');
const database = require('./db');
const { port } = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(__dirname + '/../client'))
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", `http://localhost:${port}`) // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  if (req.method === "OPTIONS") {
    res.status(200).end();
  } else {
    next()
  }
});

app.get('/', (req, res) => {

  res.json({ mess: "welcome welcome" })

})

module.exports = app;

