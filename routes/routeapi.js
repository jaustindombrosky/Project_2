// // ===============================================================================
// // LOAD DATA
// // We are linking our routes to a series of "data" sources.
// // These data sources hold arrays of information on table-data, waitinglist, etc.
// // ===============================================================================

var inputData = require("../data/datainput");
var outputData = require("../data/datapull");


// // ===============================================================================
// // ROUTING
// // ===============================================================================

module.exports = function(app) {
    // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/datainput", function(req, res) {
    res.json(inputData);
  });



  app.get("/api/datapull", function(req, res) {
    res.json(outputData);
  });
}


  // app.post("/api/inputData", function(req, res) {
  //   // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
  //   // It will do this by sending out the value "true" have a table
  //   // req.body is available since we're using the body-parser middleware
  //   if (inputData.length < 5) {
  //     inputData.push(req.body);
  //     res.json(true);
  //   }
//     else {
//       outputData.push(req.body);
//       res.json(false);
//     }
//   });

//   // ---------------------------------------------------------------------------
//   // I added this below code so you could clear out the table while working with the functionality.
//   // Don"t worry about it!

//   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     inputData = [];
//     outputData = [];

//     console.log(inputData);
//   });
// };

