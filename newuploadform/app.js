var trainData = new Firebase("https://stackscholar-8bdfa.firebaseio.com/");
var express = require('express');
var app = express();
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');

app.use(express.static(path.join(__dirname, './public')));

app.post('/upload', function(req, res){
  console.log(req)
  // create an incoming form object
  var form = new formidable.IncomingForm();
  // console.log('FORM ---->',form)
  // specify that we want to allow the user to upload multiple files in a single request
  // form.multiples = true;

  form.parse(req, function(err, fields, files){
    console.log('REQUEST---->',files)
  })
  
});

var server = app.listen(3036, function(){
  console.log('Server listening on port 3036');
});


////////////////////////////////////////////////////////////////////////////////////////////////

