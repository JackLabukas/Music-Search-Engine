// Spotify & Wikipedia API Keys

const wikipediaAPIKey = "";
const spotifyAPIKey = "15d799340fmsh4511f77c045618dp1abc52jsn422d40512112";

// Clear all HTML elements
function clearHTML() {
  // Function to empty out the jumbotron element (wikipedia facts)
  $("#jumbotron").empty();

  // Function to empty out the trendingMain element (sportify albums)
  $("#trendingMain").empty();

  // Function to empty out the trendingSide element (sportify tracks)
  $("#trendingSide").empty();

  // Function to empty out the team element
  $("#team").empty();

  // Hde the invalid user search alert
  document.getElementById("ms-alert").style.visibility = "hidden";
}

// function to hide the invalid user search alert
function alertClose() {
  document.getElementById("ms-alert").style.visibility = "hidden";
}

// clear the local storage and the searches history
function clearHistory() {
  // if is visible then hide the invalid user search alert
  alertClose();

  // clear the local storage
  localStorage.clear();
  var historyEl = document.getElementById("history");

  // clear the searches history
  historyEl.innerHTML = "";
  return;
}

// Function to check if the user search return any value
function checkSearch(userSearch) {
  const settings = {
    async: true,
    crossDomain: true,
    url:
      "https://spotify23.p.rapidapi.com/search/?q=" +
      userSearch +
      "&type=multi&offset=0&limit=10&numberOfTopResults=5",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": spotifyAPIKey,
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    // Check the response length
    if (response.artists.totalCount === 0) {
      // Display an alert for invalid user search
      document.getElementById("ms-alert").style.visibility = "visible";
    } else {
      // Clear all HTML elements
      clearHTML();

      // Save into the local storage the user search
      saveSearch(userSearch);

      // Display into the search history the new user search
      displaySearchHistory();

      // Display Wikipedia data into HTML
      searchWikipedia(userSearch);

      // Display Spotify data into HTML
      searchSpotify(userSearch);
    }
  });
}

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

// .on("click") function associated with the Meet the Team button
$("#btTeam").on("click", function (event) {
  event.preventDefault();

  // Clear all HTML elements
  clearHTML();

  // Display Team data into HTML
  displayTeam();
});
