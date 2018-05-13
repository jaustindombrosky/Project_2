var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "",
  database: "stack_scholarDB"
});
connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});
function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Search field of study",
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "Find field of study":
        topicSearch();
        break;
      }
    });
}
function topicSearch() {
  inquirer
    .prompt({
      name: "fieldofstudy",
      type: "input",
      message: "What field of study would you like to search for?"
    })
    .then(function(answer) {
      var query = "SELECT topics_a FROM stack_scholarDB WHERE ?";
      connection.query(query, { fieldofstudy: answer.fieldofstudy}, function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log("Topic: " + res[i].topic);
        }
        runSearch();
      });
    });
};
then(function(answer) {
      console.log(answer.song);
      connection.query("SELECT topics_a FROM stack_scholarDB WHERE ?", { topic: answer.topic }, function(err, res) {
        console.log(
          "topic: " +
            res[0].position
        );
        runSearch();
      });
    });
}
