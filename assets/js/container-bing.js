function searchBing(userSearch) {

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://bing-image-search1.p.rapidapi.com/images/search?q=" + userSearch + "&count=10",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": bingAPIKey,
		"X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
	//console.log(response.value[0].contentUrl);
    //document.body.style.backgroundImage = "url('https://cdn.images.dailystar.co.uk/dynamic/117/photos/911000/Paul-Hollywood-Bake-Off-last-episode-Channel-4-753911.jpg')";
        //$("#htmlbody").append(teamCard);

});

//         var bandDetails = $(`
//         <div class="card mb-3" style="width: 55rem;">
//             <div class="row no-gutters">
//                 <div class="col-md-4">
//                     <img src="${response.thumb_url}" width="200" height="200">
//                 </div>
//                 <div class="col-md-8">
//                     <div class="card-body">
//                         <h5 class="card-title">${response.name}</h5>
//                         <p class="card-text">${response.tracker_count} fans tracking this artist</p>
//                         <p class="card-text">${response.upcoming_event_count} upcoming events</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         `);
//         // Append the HTML Jumbotron
//         $("#artistCard").append(bandDetails);
//     });
};