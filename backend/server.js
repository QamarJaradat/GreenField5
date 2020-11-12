const express=require('express');
const app=express();
const routes=express.Router();

const bodyParser = require('body-parser');
const database = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(__dirname+'/../client'))

app.get('/', (req,res) => {
   
    res.json({mess :"welcome welcome"})
    
  })

module.exports=app;

