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
      console.log(user);
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
  
        if (!isLoggingInViaRegistration) {
          // alert("isLoggingInViaRegistration");
          window.location = "index.html";
        }
  
        // ...
      } else {
        // User is signed out.
        // ...
      }
    });
  
    $("#register").click(function() {
      $("#welcomeToAdventure").addClass("hide");
      $("#registerNewPlayer").removeClass("hide");
    });
  
    $("#loginButton").on("click", function(event) {
  
      var newEmail = $("#inputEmail").val();
      var newPassword = $("#inputPassword").val();
      var repeatPassword = $("#repeatPassword").val();
      var newUsername= $("#inputUsername").val();
      console.log(newEmail);
      console.log(newPassword);
      console.log(repeatPassword);
      console.log(newUsername);
  
      firebase
        .auth()
        .signInWithEmailAndPassword(newEmail, newPassword)
        .then(data => {
          console.log(data);
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
  
    $("#submitButton").on("click", function(event) {
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
        username: 
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
  
    //when the user clicks the login with facebook button, the popup appears to sign in with facebook.
    $("#facebook").click(function() {
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    });
  
    $("#twitter").click(function() {
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
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