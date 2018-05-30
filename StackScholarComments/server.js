var express = require("express");
var bodyParser = require("body-parser");

var port = process.env.PORT || 3000;

var app = express();

//////////////////////////////////////////////////////////////
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

/////////////////////////////////////////////// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

///////////////////////////// Import routes and server access.
var routes = require("./controllers/stacks_controller.js");

app.use("/", routes);

app.listen(port, function(){
    console.log('App listening on PORT ' + port);
  })