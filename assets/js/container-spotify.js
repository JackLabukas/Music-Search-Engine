function searchArtist(artist) {
  var queryURL =
    "https://spotify23.p.rapidapi.com/search/?q=" +
    artist +
    "&type=multi&offset=0&limit=10&numberOfTopResults=5";
  const settings = {
    async: true,
    crossDomain: true,
    url: queryURL,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c1ec80a3b6msh5a59fdbd8715fddp1e8eb2jsn5706ec8ba70f",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

$("#select-artist").on("click", function (event) {
  event.preventDefault();
  var inputArtist = $("#artist-input").val().trim();
  searchArtist(inputArtist);
});
