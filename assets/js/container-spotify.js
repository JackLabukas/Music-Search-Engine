function searchSpotify(artist) {
  const settings = {
    async: true,
    crossDomain: true,
    url:
      "https://spotify23.p.rapidapi.com/search/?q=" +
      artist +
      "&type=multi&offset=0&limit=10&numberOfTopResults=5",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "15d799340fmsh4511f77c045618dp1abc52jsn422d40512112",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    // console.log(response.artists.items);
    // artist button
    response.artists.items.forEach(function (artist) {
      var artistBtn = $("<button>");
      artistBtn
        .text(artist.data.profile.name)
        .addClass("btn removeMe btn-info badge-pill");
      $("#jumbotron").append(artistBtn);
      artistBtn.on("click", function (event) {
        console.log(event);
        event.data = this.innerHTML;
        // clearDisplay();
        clearHTML();
        searchSpotify(event.data);
        searchWikipedia(event.data);
        saveSearch(event.data);
        displaySearchHistory();
      });
    });
    var bandDetails = $(`
        <div class="card mb-3" style="width: 55rem;">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="${response.thumb_url}" width="200" height="200">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${response.name}</h5>
                        <p class="card-text">${response.tracker_count} fans tracking this artist</p>
                        <p class="card-text">${response.upcoming_event_count} upcoming events</p>
                    </div>
                </div>
            </div>
        </div>
        `);
    // Append the HTML Jumbotron
    $("#artistCard").append(bandDetails);
    //
    // console.log(response);
    //top albums
    response.albums.items.forEach(function (album) {
      // console.log(`this one ${album.data.name}`);
      var albumBtn = $("<button>");
      albumBtn
        .text(album.data.name)
        .addClass("btn removeMe btn-success badge-pill");
      $("#trendingMain").append(albumBtn);
    });
    //top tracks
    response.tracks.items.forEach(function (track) {
      // console.log(response.tracks.items);
      var trackBtn = $("<button>");
      trackBtn
        .text(track.data.name)
        .addClass("btn removeMe btn-warning badge-pill");
      $("#trendingSide").append(trackBtn);
    });
  });
}
