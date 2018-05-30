var trainData = new Firebase("https://stackscholar-8bdfa.firebaseio.com/");
var express = require('express');
var app = express();
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');

app.use(express.static(path.join(__dirname, './public')));

// app.get('/', function(req, res){
//   res.sendFile(path.join(__dirname, 'views/index.html'));
// });

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
  // store all uploads in the /uploads directory
  // form.uploadDir = path.join(__dirname, '/uploads');

  // // every time a file has been uploaded successfully,
  // // rename it to it's orignal name
  // form.on('file', function(field, file) {
  //   fs.rename(file.path, path.join(form.uploadDir, file.name));
  // });

  // // log any errors that occur
  // form.on('error', function(err) {
  //   console.log('An error has occured: \n' + err);
  // });

  // // once all the files have been uploaded, send a response to the client
  // form.on('end', function() {
  //   res.end('success');
  // });

  // // parse the incoming request containing the form data
  // form.parse(req);

});

var server = app.listen(3036, function(){
  console.log('Server listening on port 3036');
});


////////////////////////////////////////////////////////////////////////////////////////////////

// //creates firebase link
// var trainData = new Firebase("https://week-7-homework.firebaseio.com/");

// //button for adding trains
// $('#submitButton').on('click', function(){
// 	//gets user input
// 	var trainName = $('#trainNameInput').val().trim();
// 	var destination = $('#destinationInput').val().trim();
// 	var firstTime = moment($('#timeInput').val().trim(), "HH:mm").format("");
// 	var frequency = $('#frequencyInput').val().trim();

// 	//creates local holder for train times
// 	var newTrains = {
// 		name: trainName,
// 		tdestination: destination,
// 		tFirst: firstTime,
// 		tfreq: frequency,
// 	}

// 	//uploads data to the database
// 	trainData.push(newTrains);

// 	//logs everything to the console
// 	// console.log(newTrains.name);
// 	// console.log(newTrains.tdestination);
// 	// console.log(newTrains.tFirst);
// 	// console.log(newTrains.tfreq);

// 	//alert
// 	alert("Train successfully added!");

// 	//clears all of the text boxes
// 	$('#trainNameInput').val("");
// 	$('#destinationInput').val("");
// 	$('#timeInput').val("");
// 	$('#frequencyInput').val("");

// 	return false;
// });

// //when a new item is added (child) do this function
// trainData.on("child_added", function(childSnapshot, prevChildKey){

// 	// console.log(childSnapshot.val());

// 	//store everything into a variable
// 	var trainName = childSnapshot.val().name;
// 	var destination = childSnapshot.val().tdestination;
// 	var firstTime = childSnapshot.val().tFirst;
// 	var frequency = childSnapshot.val().tfreq;

// 	//train info
// 	// console.log(trainName);
// 	// console.log(destination);
// 	// console.log(firstTime);
// 	// console.log(frequency);

// 	//convert first time (push back 1 year to make sure it comes before current time)
// 	var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
// 	// console.log(firstTimeConverted);

// 	//current time
// 	var currentTime = moment();
// 	// console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));

// 	//difference between the times
// 	var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
// 	// console.log("DIFFERENCE IN TIME: " + diffTime);

// 	//time apart (remainder)
// 	var tRemainder = diffTime % frequency;
// 	// console.log(tRemainder);

// 	//minute until train
// 	var tMinutesTillTrain = frequency - tRemainder;
// 	// console.log("MINUTES TIL TRAIN: " + tMinutesTillTrain);

// 	//next train
// 	var nextTrain = moment().add(tMinutesTillTrain, "minutes");
// 	var nextTrainConverted = moment(nextTrain).format("hh:mm a");
// 	// console.log("ARRIVAL TIME: " + moment(nextTrain).format("HH:mm"));

// 	//add each trains data into the table
// 	$("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + "Every " + frequency + " minutes" + "</td><td>" + nextTrainConverted + "</td><td>" + tMinutesTillTrain + "</td></tr>");

  
// });