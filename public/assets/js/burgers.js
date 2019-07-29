// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change").on("click", function(event) {
    var id = $(this).data("id");
    //var newState = $(this).data("newstate");
    //console.log("newSate "+newState)
    var newState2 = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState2
    }).then(
      function() {
        console.log("changed sleep to", newState2);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#submitButton").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    console.log($('#burger').val());
    event.preventDefault();
   
    var newBurger = {
      name: $("#burger").val().trim(),
      devoured: false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
