// Function to change the background image of the HTML body element depending on the user's search
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
    document.body.style.backgroundImage = "url(" + response.value[0].contentUrl + ")";
});
};