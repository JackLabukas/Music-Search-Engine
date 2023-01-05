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
    });
}