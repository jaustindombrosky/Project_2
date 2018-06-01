
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');
var PORT = 3000
app.use(express.static(path.join(__dirname, './public')));

// allows us to read the json data coming in from the request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post("/document", function(req,res){
  console.log(req.body)
  res.send("ok")
})



app.listen(PORT, function(err){
  console.log('Server running')
})