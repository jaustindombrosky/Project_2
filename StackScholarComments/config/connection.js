// Set up MySQL connection.
var mysql = require("mysql");

var connection= mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "stacks_db"
    });


////////////////////////////////////////////// Make connection
function handleDisconnect(){
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        setTimeout(handleDisconnect, 2000);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

connection.on('error', function(err) {
    console.log('db error', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect()

// Export connection for our ORM to use.
module.exports = connection;