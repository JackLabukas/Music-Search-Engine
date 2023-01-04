// Spotify & Wikipedia API Keys

const wikipediaAPIKey = "";
const spotifyAPIKey = "c1ec80a3b6msh5a59fdbd8715fddp1e8eb2jsn5706ec8ba70f";

"https://spotify23.p.rapidapi.com/search/?q=" + artist + "&type=multi&offset=0&limit=10&numberOfTopResults=5";


var pastUserSearch = $('#history');

// function to hide the invalid user search alert
function alertClose() {
  document.getElementById('ms-alert').style.visibility = 'hidden';
};

// clear the local storage and the searches history 
function clearHistory() {

  // if is visible then hide the invalid user search alert
  alertClose()
  // clear the local storage
  localStorage.clear();
  var historyEl = document.getElementById('history');
  // clear the searches history 
  historyEl.innerHTML = '';
  return;
}

// Display search history function
displaySearchHistory()

// Function to check if the user search return any value  
function checkSearch(userSearch) {
 /* 
  var spotifyURL = "" + spotifyAPIKey;
  $.ajax({
    url: spotifyURL,
    method: "GET"
  })
    .then(function (response) {

      // Check the response length
      if (response.length === 0) {
        // Display an alert for invalid user search
        document.getElementById('ms-alert').style.visibility = 'visible';
      } else {
*/
        // Save into the local storage the user search
        saveSearch(userSearch);

        // Display into the search history the new user search
        displaySearchHistory();

        // Display Wikipedia data into HTML
       // searchWikipedia(userSearch);

        // Display Spotify data into HTML
      //  searchSpotify(userSearch);
/*      };
    });*/
};

// .on("click") function associated with the Search Button
$("#search-button").on("click", function (event) {
  event.preventDefault();

  // User Search
  var userSearch = $("#search-input")
    .val()
    .trim();

  $("#search-input").val('');

  if (userSearch != "") {
    // Get data from the user search
    checkSearch(userSearch);
  } else {
    // Display an alert for invalid search
    document.getElementById('ms-alert').style.visibility = 'visible';
  };

});

// Save into the local storage the user search
function saveSearch(userSearch) {
  var storedSearches = JSON.parse(localStorage.getItem("UserSearchMusic")) || [];

  // check if the local storage includes the user search and the number of saved searches
  if (!storedSearches.includes(userSearch) && storedSearches.length < 10) {
    storedSearches.push(userSearch);
    localStorage.setItem("UserSearchMusic", JSON.stringify(storedSearches));
  };
};

// Display search history function
function displaySearchHistory() {
  var searchedHistory = JSON.parse(localStorage.getItem("UserSearchMusic")) || [];
  var historyEl = document.getElementById('history');
  historyEl.innerHTML = '';
  for (i = 0; i < searchedHistory.length; i++) {
    var newBTN = document.createElement("button");
    newBTN.classList.add("btn", "btn-success", "my-2", "past-search");
    newBTN.setAttribute("style", "width: 100%");
    newBTN.setAttribute("id", "saved-search-bt");
    newBTN.textContent = `${searchedHistory[i]}`;
    historyEl.appendChild(newBTN);
  }
};

// .on("click") function associated with the Save Searches Button
function savedSearch(event) {
  var element = event.target;
  userSearch = element.textContent;

  // Get data from the user Search
  checkSearch(userSearch);

};
pastUserSearch.on("click", savedSearch);