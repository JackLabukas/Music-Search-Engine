// .on("click") function associated with the Search Button
$("#search-button").on("click", function (event) {
  event.preventDefault();

  // User Search
  var userSearch = $("#search-input").val().trim();

  $("#search-input").val("");

  if (userSearch != "") {
    // Get data from the user search
    checkSearch(userSearch);
  } else {
    // Display an alert for invalid search
    document.getElementById("ms-alert").style.visibility = "visible";
  }
});
