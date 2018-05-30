// // $('#submit').on('click', function(event){
// //     const file = $('#upload')
// //     console.log(file)
// // })
// $('#submit').on('click', function (){
//     $('#upload-input').click();
//     $('.progress-bar').text('0%');
//     $('.progress-bar').width('0%');
// });
// $('#upload').on('change', function(event){

//     var fileData = event.target.files[0]
//     console.log(fileData)
// //   var files = $(this).get(0).files;
// //   if (files.length > 0){
// //     // create a FormData object which will be sent as the data payload in the
// //     // AJAX request
//     var formData = new FormData();
// //     // loop through all the selected files and add them to the formData object
// //     for (var i = 0; i < files.length; i++) {
// //       var file = files[i];
// //       // add the files to formData object for the data payload
//       formData.append('uploads[]', fileData);
// //     }
//     $.ajax({
//       url: '/upload',
//       type: 'POST',
//       data: formData,
//       processData: false,
//       contentType: false,
//       success: function(data){
//           console.log('upload successful!\n' + data);
//       },
//       xhr: function() {
//         // create an XMLHttpRequest
//         var xhr = new XMLHttpRequest();
//         // listen to the 'progress' event
//         xhr.upload.addEventListener('progress', function(evt) {
//           if (evt.lengthComputable) {
//             // calculate the percentage of upload completed
//             var percentComplete = evt.loaded / evt.total;
//             percentComplete = parseInt(percentComplete * 100);
//             // update the Bootstrap progress bar with the new percentage
//             $('.progress-bar').text(percentComplete + '%');
//             $('.progress-bar').width(percentComplete + '%');
//             // once the upload reaches 100%, set the progress bar text to done
//             if (percentComplete === 100) {
//               $('.progress-bar').html('Done');
//             }
//           }
//         }, false);
//         return xhr;
//       }
//     });

// //   }
// });

//////////////////////////////////////////////////////////////////////////////////////////////////

// const ref = firebase.storage().ref();
// const file = document.querySelector('#photo').files[0]
// const name = (+new Date()) + '-' + file.name;
// const metadata = {
//   contentType: file.type
// };
// const task = ref.child(name).put(file, metadata);
// task.then((snapshot) => {
//   const url = snapshot.downloadURL;
//   console.log(url);
//   document.querySelector('#someImageTagID').src = url;
// }).catch((error) => {
//   console.error(error);
// });

//////////////////////////////////////////////////////////////////////////////////////////////////
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
