function searchWikipedia(userSearch)
{
console.log(userSearch);

// Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
var queryURL = "https://rest.bandsintown.com/artists/" + userSearch + "?app_id=codingbootcamp";
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {

  // Printing the entire object to console
  console.log(response);

  // Constructing HTML containing the artist information
  var artistName = $("<h1>").text(response.name);
  var artistURL = $("<a>").attr("href", response.url).append(artistName);
  var artistImage = $("<img>").attr("src", response.thumb_url);
  var trackerCount = $("<h2>").text(response.tracker_count + " fans tracking this artist");
  var upcomingEvents = $("<h2>").text(response.upcoming_event_count + " upcoming events");
  var goToArtist = $("<a>").attr("href", response.url).text("See Tour Dates");

  // Empty the contents of the artist-div, append the new artist content
  $("#jumbotron").empty();
  $("#jumbotron").append(artistURL, artistImage, trackerCount, upcomingEvents, goToArtist);
});



}