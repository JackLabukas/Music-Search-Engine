function searchSpotify(artist) {

  var artistName;

  // console.log(number);
  const settings = {
    async: true,
    crossDomain: true,
    url:
      "https://spotify23.p.rapidapi.com/search/?q=" +
      artist +
      "&type=multi&offset=0&limit=10&numberOfTopResults=5",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": spotifyAPIKey,
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    // console.log(response.artists.items);
    // artist button
    response.artists.items.forEach(function (artist) {
      var artistBtn = $(`<button>`);
      artistBtn
        .text(artist.data.profile.name)
        .addClass("btn m-2 removeMe btn-info badge-pill");
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
        <div class="card mb-3" style="width: 55rem;">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="${response.artists.items[0].data.visuals.avatarImage.sources[0].url}" width="200" height="200">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h6>Name of Artists: </h6>
                        <h5 class="card-title">${response.artists.items[0].data.profile.name}</h5>
                        <h6>Top Spotify Playlist</h6>
                        <h5>${response.playlists.items[0].data.name}</h5>
                    </div>
                </div>
            </div>
        </div>
        `);

    // Append the HTML Bands Related Title HTML
    var bandsRelatedTitle = $(`<div class="alert alert-secondary" role="alert" style="width: 25rem;"><h6>Bands related to ` + artistName + `</h6></div>`);
    $("#bandsRelatedTitle").append(bandsRelatedTitle);

    // Append the HTML Bands Related HTML
    $("#artistCard").append(bandDetails);
    //
    // console.log(response);

    //top albums

    var albumSecTitle = $(`<div class="alert alert-secondary" role="alert" style="width: 25rem;"><h6>Top ` + artistName + ` albums</h6></div>`);
    $("#albumsTitle").append(albumSecTitle);

    var number = 0 - 1;
    response.albums.items.forEach(function (album) {
      number++;
      console.log(number);
      // console.log(`this one ${album.data.name}`);
      var albumBtn = $(`<div class="card hoverEffect m-2" style="width: 18rem;">
  <img src="${response.albums.items[number].data.coverArt.sources[0].url}" class="card-img-top" alt="...">
  <div class="card-body">
  
    <p class="card-text"><h6>${album.data.name}</h6></p>
  </div>
</div>`);
      // albumBtn
      //   .text(album.data.name)
      //   .addClass("removeMe m-2 bg-primary badge-pill");
      $("#trendingMain").append(albumBtn);
    });

    //top tracks

    var tracksSecTitle = $(`<div class="alert alert-secondary" role="alert" style="width: 25rem;"><h6>Top ` + artistName + ` tracks</h6></div>`);
    $("#tracksTitle").append(tracksSecTitle);

    var numberTwo = 0 - 1;
    response.tracks.items.forEach(function (track) {
      numberTwo++;
      // console.log(response.tracks.items);
      var trackBtn = $(`<div class="card hoverEffect m-2" style="width: 18rem;">
  <img src="${response.tracks.items[numberTwo].data.albumOfTrack.coverArt.sources[0].url}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>`);
      // trackBtn
      //   .text(track.data.name)
      //   .addClass("removeMe m-2 bg-success badge-pill");
      $("#trendingSide").append(trackBtn);
    });
  });
}
