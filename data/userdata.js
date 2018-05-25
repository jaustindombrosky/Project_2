// Import Admin SDK
var admin = require("firebase-admin");

// Get a database reference to our blog
var userdb = admin.database();
var ref =  db.ref("server/saving-data/fireblog");

var usersRef = ref.child("users");
usersRef.set({
  alanisawesome: {
    date_of_birth: "June 23, 1912",
    full_name: "Alan Turing"
  },
  gracehop: {
    date_of_birth: "December 9, 1906",
    full_name: "Grace Hopper"
  }
});