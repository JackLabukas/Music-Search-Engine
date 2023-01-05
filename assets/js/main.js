// Spotify & Wikipedia API Keys

const wikipediaAPIKey = "";
const spotifyAPIKey = "c1ec80a3b6msh5a59fdbd8715fddp1e8eb2jsn5706ec8ba70f";


function clearHTML()
{
  // Function to empty out the jumbotron element (wikipedia facts)
  $("#jumbotron").empty();

  // Function to empty out the trendingMain element (sportify albums)
  $("#trendingMain").empty();

  // Function to empty out the trendingSide element (sportify tracks)
  $("#trendingSide").empty();

  // Function to empty out the team element
  $("#team").empty();

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

        

        // Save into the local storage the user search
        saveSearch(userSearch);
  
        // Display into the search history the new user search
        displaySearchHistory();
  
        // Display Wikipedia data into HTML
        // searchWikipedia(userSearch);
  
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

  clearHTML()


  // Build the html card
  var teamCard = $(`  
<div class="row justify-content-center" style="width: 80rem;">
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title mark">Amal Hussein</h5>
        <div class="footer-basic">
        <div class="social">
          <a href="#" target="_blank"><i class="icon ion-social-linkedin"></i></a>
          <a href="#" target="_blank"><i class="icon ion-social-github"></i></a>
          <a href="mailto:amula9986.ah@gmail.com" target="_blank"><i class="icon ion-email"></i></a>
        </div>
      </div>
        <hr class="hr weather-hr" />
        <span >Project Tasks </span>
        <br/>
        <span class="badge badge-primary">Implementing Wikipedia Functionality </span>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
<div class="card">
  <div class="card-body">
    <h5 class="card-title mark">Jack Labukas</h5>
    <div class="footer-basic">
    <div class="social">
      <a href="#" target="_blank"><i class="icon ion-social-linkedin"></i></a>
      <a href="#" target="_blank"><i class="icon ion-social-github"></i></a>
      <a href="mailto:labukasgediminas@gmail.com" target="_blank"><i class="icon ion-email"></i></a>
    </div>
  </div>
    <hr class="hr weather-hr" />
    <span >Project Tasks </span>
    <br/>
    <span class="badge badge-primary">Implementing Spotify Functionality </span>
  </div>
</div> 
</div>
<div class="col-sm-3">
<div class="card">
  <div class="card-body">
    <h5 class="card-title mark">Kassi</h5>
    <div class="footer-basic">
      <div class="social">
        <a href="#" target="_blank"><i class="icon ion-social-linkedin"></i></a>
        <a href="#" target="_blank"><i class="icon ion-social-github"></i></a>
        <a href="mailto:kassy.g.e@hotmail.com" target="_blank"><i class="icon ion-email"></i></a>
      </div>
    </div>
    <hr class="hr weather-hr" />
    <span >Project Tasks </span>
    <br/>
    <span class="badge badge-primary">Presenting </span>
    <span class="badge badge-warning">Assisting with Spotify API </span>
    <span class="badge badge-success">Generating ReadMe file </span>
    <span class="badge badge-info">Team organisation </span>
  </div>
</div>
</div>
<div class="col-sm-3">
<div class="card">
  <div class="card-body">
    <h5 class="card-title mark">Rui Belo</h5>
    <div class="footer-basic">
      <div class="social">
        <a href="https://linkedin.com/in/ruibelo" target="_blank"><i class="icon ion-social-linkedin"></i></a>
        <a href="https://github.com/CZ-RBelo/" target="_blank"><i class="icon ion-social-github"></i></a>
        <a href="mailto:jr.belo@hotmail.com" target="_blank"><i class="icon ion-email"></i></a>
      </div>
    </div>
    <hr class="hr weather-hr" />
    <span >Project Tasks </span>
    <br/>
    <span class="badge badge-primary">Bootstrap </span>
    <span class="badge badge-warning">UI Design </span>
    <span class="badge badge-success">Implementing Code/ Refactoring </span>
    <span class="badge badge-info">Combining APIs & Local Storage </span>
  </div>
</div>
</div>
</div> 
  `);

  // Append the HTML Card
  $("#team").append(teamCard);
});