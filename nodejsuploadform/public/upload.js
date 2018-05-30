var config = {
    apiKey: "AIzaSyA-2V4uXvpyZZ3Tg-tYy5mrwIm_mOProYE",
    authDomain: "stackscholar-8bdfa.firebaseapp.com",
    databaseURL: "https://stackscholar-8bdfa.firebaseio.com",
    projectId: "stackscholar-8bdfa",
    storageBucket: "stackscholar-8bdfa.appspot.com",
    messagingSenderId: "577365529301"
};
  firebase.initializeApp(config);
var fileSelect = $('#upload');
fileSelect.on("change", function(event){
    console.log(event.target.files[0]);
    var file = event.target.files[0];
    // console.log(docsRef)
    $("#submit").on("click", function(event){
        var docsRef = firebase.storage().ref("docs/" + file.name);
        docsRef.put(file)
            .then(function(snapshot){
                console.log(snapshot.metadata.generation)
            });
        console.log()


    })

    

})

// var filebutton = $()
// filebutton.on()
// var storageRef = firebase.storage().ref();
// var docsRef = storageRef.child("documents/");
