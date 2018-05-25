// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");

        var newState = {
            finalize: true
        };

        // Send the PUT request.
        $.ajax("/api/stacks/" + id, {
            type: "PUT",
            data: newState
        }).then(function() {
            // Reload the page to get the updated list
            location.reload();
        });
    });  

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var name = $("[name=stack-name]").val().trim();

        if(name !== "") {
            var newStack = {
                name: name
            };

            // Send the POST request.
            $.ajax("/api/stacks", {
                type: "POST",
                data: newStack
            }).then(function() {
                // console.log("created new stack");
                // Reload the page to get the updated list
                location.reload();
            });
        }
        else {
            $("[name=stack-name]").val("");
        }
    });

    $(".delete-sleep").on("click", function(event) {
        var id = $(this).data("id");

        $.ajax("/api/stacks/" + id, {
            type: "DELETE"
        }).then(function() {
            // Reload the page to get the updated list
            location.reload();
        });
    });  
});
