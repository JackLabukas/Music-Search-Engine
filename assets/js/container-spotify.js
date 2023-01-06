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
        clearDisplay();
        searchSpotify(event.data);
      });
    });

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

function clearDisplay() {
  $(".removeMe").remove();
}
