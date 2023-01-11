function searchSpotify(artist) {
  var artistName;

  // console.log(number);
  const settings = {
    async: true,
    crossDomain: true,
    url:
      "https://spotify23.p.rapidapi.com/search/?q=" +
      artist +
      "&type=multi&offset=0&limit=8&numberOfTopResults=5",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": spotifyAPIKey,
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    var number = 0 - 1;
    var numberTwo = 0 - 1;
    // artist button
    response.artists.items.forEach(function (artist) {
      var artistBtn = $(`<button>`);
      artistBtn
        .text(artist.data.profile.name)
        .addClass("btn m-2 removeMe btn-success badge-pill");
      $("#bandsRelated").append(artistBtn);
      artistBtn.on("click", function (event) {
        console.log(event);
        event.data = this.innerHTML;
        // clearDisplay();
        clearHTML();
        searchSpotify(event.data);
        searchBing(event.data);
        saveSearch(event.data);
        displaySearchHistory();
      });
    });

    // Artist name to build the title
    artistName = response.artists.items[0].data.profile.name;

    var bandDetails = $(`
        <div class="card bg-dark mb-3 badge badge-pill" style="width: 55rem;">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img class=" badge-pill" src="${response.artists.items[0].data.visuals.avatarImage.sources[0].url}" width="200" height="200" >
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h6 class="text-light"> Name of the Artist</h6>
                        <h5 class="card-title text-light">${response.artists.items[0].data.profile.name}</h5>
                        <h6 class="text-light">Top Spotify Playlist</h6>
                        <h5 class="text-light">${response.playlists.items[0].data.name}</h5>
                    </div>
                </div>
            </div>
        </div>
        `);

    // Append the HTML Bands Related Title
    var bandsRelatedTitle = $(
      `<div class="text-light h1 bg-dark badge-pill">Artists related to ` +
        artistName +
        `</div>`
    );
    $("#bandsRelatedTitle").append(bandsRelatedTitle);

    // Append the HTML Bands Related HTML
    $("#artistCard").append(bandDetails);
    //
    // console.log(response);
    //top albums

    // Append the HTML Band Albums Title -->
    var albumsTitle = $(
      `<h1 class="display-1 text-light bg-dark badge-pill">Top albums ` +
        artistName +
        `</h1>`
    );
    $("#albumsTitle").append(albumsTitle);

    // TOP ALBUMS
    response.albums.items.forEach(function (album) {
      number++;

      var albumCard =
        $(`<div class="card hoverEffect m-2" style="width: 18rem;">
  <img src="${response.albums.items[number].data.coverArt.sources[0].url}" class="card-img-top" alt="...">
  <div class="card-body d-flex justify-content-center">
  
    <p class="card-text"><h6>${album.data.name}</h6></p>
  </div>
</div>`);
      $("#trendingMain").append(albumCard);
      albumCard.on("click", function (event) {
        console.log(event);
      });
    });

    //top tracks

    var tracksSecTitle = $(
      `<h1 class="display-1 text-light bg-dark badge-pill">Top ` +
        artistName +
        ` tracks</h1>`
    );
    $("#tracksTitle").append(tracksSecTitle);

    var numberTwo = 0 - 1;
    response.tracks.items.forEach(function (track) {
      numberTwo++;

      var trackCard =
        $(`<div class="card hoverEffect m-2" style="width: 18rem;">
  <img src="${response.tracks.items[numberTwo].data.albumOfTrack.coverArt.sources[0].url}" class="card-img-top" alt="...">
  <div class="card-body d-flex justify-content-center">
    <p class="card-text"><h6>${response.tracks.items[numberTwo].data.name}</h6></p>
  </div>
</div>`);
      $("#trendingSide").append(trackCard);
    });
  });
}
