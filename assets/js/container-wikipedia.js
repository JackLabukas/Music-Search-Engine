function searchWikipedia(userSearch) {
    console.log(userSearch);

    // Querying the bandsintown api for the selected artist
    var queryURL = "https://rest.bandsintown.com/artists/" + userSearch + "?app_id=codingbootcamp";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);

        var bandDetails = $(`
        <div class="jumbotron" style="width: 55rem;">
            <div class="row">
                <div class="col-lg-4">
                    <img src="${response.thumb_url}" width="200" height="200">
                </div>
                <div class="col-lg-8">
                    <h1 class="display-4">${response.name}</h1>
                    <p class="lead">${response.tracker_count} fans tracking this artist</p>
                    <p class="lead">${response.upcoming_event_count} upcoming events</p>
                </div>
            </div>
        </div>
        `);
        // Append the HTML Jumbotron
        $("#jumbotron").append(bandDetails);
    });
}