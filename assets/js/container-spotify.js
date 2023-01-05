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
      "X-RapidAPI-Key": "c1ec80a3b6msh5a59fdbd8715fddp1e8eb2jsn5706ec8ba70f",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response.albums.items);
    response.albums.items.forEach(function (album) {
      //   $("div").text("hello");
      // $("#trendingMain")
      //   .append(`<div>${album.data.name}</div>`)
      //   .css("background-color", "black");
      //top 10 albums
      var albumButton = $("<button>");
      albumButton.text(album.data.name).addClass("btn albumBtn badge-pill");
      $("#trendingMain").append(albumButton);
    });
    //top 10 tracks
    response.tracks.items.forEach(function (track) {
      console.log(response.tracks.items);
      var trackButton = $("<button>");
      trackButton.text(track.data.name).addClass("btn trackBtn badge-pill");
      $("#trendingSide").append(trackButton);
    });
  });
}
