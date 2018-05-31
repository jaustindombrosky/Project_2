// Initialize Firebase
$(document).ready(function() {
    var config = {
      apiKey: "AIzaSyA-2V4uXvpyZZ3Tg-tYy5mrwIm_mOProYE",
      authDomain: "stackscholar-8bdfa.firebaseapp.com",
      databaseURL: "https://stackscholar-8bdfa.firebaseio.com",
      projectId: "stackscholar-8bdfa",
      storageBucket: "stackscholar-8bdfa.appspot.com",
      messagingSenderId: "577365529301"
};

firebase.initializeApp(config);

isLoggingInViaRegistration = false;

firebase.auth().onAuthStateChanged(function(user) {
  console.log(user.email);
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;

  
}});

$("#loginButton").on("click", function(event) {
  var userEmail = $("#userEmail").val();
  var userPassword = $("#userPassword").val();
  console.log(userEmail);
  console.log(userPassword);

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPassword)
    .then(function(user) {
      console.log('signinwithemailandpassword', user);
      window.location = "index3.html";
    })
    .catch(function(error) {
      if (error.code == "auth/user-not-found") {
        alert("User Not Found.");
      }
      console.log(error);
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      alert(errorMessage);
    });
});

$("#createButton").on("click", function(event) {
  var _this = this;
  event.preventDefault();
  

  var emailAddress = $("#newEmail")
    .val()
    .trim();
  var firstPassword = $("#newPassword")
    .val()
    .trim();
  var confirmFirstPassword = $("#confirmPassword")
    .val()
    .trim();


  var newUser = {
    email: emailAddress,
    password: firstPassword
  };
  console.log(newUser);

  if (firstPassword !== confirmFirstPassword) {
    alert("Passwords Do Not Match, Please Try Again");
  } else {

    isLoggingInViaRegistration = true;

    var pp = new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailAddress, firstPassword)
        .then(usz => {
          // [END createwithemail]
          // callSomeFunction(); Optional
          var user = firebase.auth().currentUser;
          console.log("Current User...");
          console.log(user);
          dName = $("#newName").val();
          console.log(dName);
          // alert('Profile Value: ' + dName);
          user
            .updateProfile({ displayName: dName })
            .then(() => resolve(user))
            .catch(err => reject(err));
        })
        .catch(error => reject(error));
    });

    pp.then(
      user => {
        console.log('moving user');
        console.log(user);
        window.location = "index.html";
      },
      error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert(errorMessage);
      }
    );
  }
});

$("#forgot").on("click", evt => {
  var newEmail = $("#inputEmail").val();
  firebase
    .auth()
    .sendPasswordResetEmail(newEmail)
    .then(() => {
      $("#inputEmail").val("");
      alert("Email sent.  Thank you.");
    })
    .catch(err => alert(err.message));
});
});
$("#signoutButton").on("click", function(event) {
alert('verifies that signoutButton click works.');
 firebase.auth().signOut().then(function() {
   alert('signout from firebase function');
  window.location = "index.html";
// Sign-out successful.
}).catch(function(error) {
// An error happened.

});

});