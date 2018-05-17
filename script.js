// // Get the modal
// var modal = document.getElementById('id01');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// var modal = document.getElementById('id02');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

///////////////////////////////////////////////////


var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routes/routehtml")(app);
require("./routes/routeapi")(app)

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

//////////////////////////////////////FILE DROP AJAX////////////////////////////
$(function(){

  var ul = $('#upload ul');

  $('#drop a').click(function(){
      // Simulate a click on the file input button
      // to show the file browser dialog
      $(this).parent().find('input').click();
  });

  // Initialize the jQuery File Upload plugin
  $('#upload').fileupload({

      // This element will accept file drag/drop uploading
      dropZone: $('#drop'),

      // This function is called when a file is added to the queue;
      // either via the browse button, or via drag/drop:
      add: function (e, data) {

          var tpl = $('<li class="working"><input type="text" value="0" data-width="48" data-height="48"'+
              ' data-fgColor="#0788a5" data-readOnly="1" data-bgColor="#3e4043" /><p></p><span></span></li>');

          // Append the file name and file size
          tpl.find('p').text(data.files[0].name)
                       .append('<i>' + formatFileSize(data.files[0].size) + '</i>');

          // Add the HTML to the UL element
          data.context = tpl.appendTo(ul);

          // Initialize the knob plugin
          tpl.find('input').knob();

          // Listen for clicks on the cancel icon
          tpl.find('span').click(function(){

              if(tpl.hasClass('working')){
                  jqXHR.abort();
              }

              tpl.fadeOut(function(){
                  tpl.remove();
              });

          });

          // Automatically upload the file once it is added to the queue
          var jqXHR = data.submit();
      },

      progress: function(e, data){

          // Calculate the completion percentage of the upload
          var progress = parseInt(data.loaded / data.total * 100, 10);

          // Update the hidden input field and trigger a change
          // so that the jQuery knob plugin knows to update the dial
          data.context.find('input').val(progress).change();

          if(progress == 100){
              data.context.removeClass('working');
          }
      },

      fail:function(e, data){
          // Something has gone wrong!
          data.context.addClass('error');
      }

  });

  // Prevent the default action when a file is dropped on the window
  $(document).on('drop dragover', function (e) {
      e.preventDefault();
  });

  // Helper function that formats the file sizes
  function formatFileSize(bytes) {
      if (typeof bytes !== 'number') {
          return '';
      }

      if (bytes >= 1000000000) {
          return (bytes / 1000000000).toFixed(2) + ' GB';
      }

      if (bytes >= 1000000) {
          return (bytes / 1000000).toFixed(2) + ' MB';
      }

      return (bytes / 1000).toFixed(2) + ' KB';
  }

});

/////////////////////////////////FILE DROP AJAX/////////////////////////////
