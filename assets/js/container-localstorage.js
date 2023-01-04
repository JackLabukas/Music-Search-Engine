var pastUserSearch = $("#history");

// Display search history function
displaySearchHistory();

// Save into the local storage the user search
function saveSearch(userSearch) {
  var storedSearches =
    JSON.parse(localStorage.getItem("UserSearchMusic")) || [];

  // check if the local storage includes the user search and the number of saved searches
  if (!storedSearches.includes(userSearch) && storedSearches.length < 10) {
    storedSearches.push(userSearch);
    localStorage.setItem("UserSearchMusic", JSON.stringify(storedSearches));
  }
}

// Display search history function
function displaySearchHistory() {
  var searchedHistory =
    JSON.parse(localStorage.getItem("UserSearchMusic")) || [];
  var historyEl = document.getElementById("history");
  historyEl.innerHTML = "";
  for (i = 0; i < searchedHistory.length; i++) {
    var newBTN = document.createElement("button");
    newBTN.classList.add("btn", "btn-success", "my-2", "past-search");
    newBTN.setAttribute("style", "padding: 20px");
    newBTN.setAttribute("id", "saved-search-bt");
    newBTN.textContent = `${searchedHistory[i]}`;
    historyEl.appendChild(newBTN);
  }
}

// .on("click") function associated with the Save Searches Button
function savedSearch(event) {
  var element = event.target;
  userSearch = element.textContent;

  // Get data from the user Search
  checkSearch(userSearch);
}
pastUserSearch.on("click", savedSearch);
