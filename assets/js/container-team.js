function displayTeam() {

    var team =
        [
            {
                name: 'Jack Labukas',
                linkedin: 'https://www.linkedin.com/in/jack-labukas-5bb038b7/',
                github: 'https://github.com/JackLabukas',
                email: 'labukasgediminas@gmail.com',
                tasks: 'Implementing Spotify Functionality \n Implementing dual API functionality '
            },
            {
                name: 'Kassy Essiet',
                linkedin: 'https://www.linkedin.com/in/kassy-essiet-labukas-581a34122/',
                github: 'https://github.com/KE-L',
                tasks: 'Presenting\nAssisting with Spotify API\nGenerating Documentation ie ReadMe\nCoordinate Project management tool'
            },
            {
                name: 'Rui Belo',
                linkedin: 'https://linkedin.com/in/ruibelo',
                github: 'https://github.com/CZ-RBelo/',
                email: 'jr.belo@hotmail.com',
                tasks: 'Implementing Bootstrap methods\nCombining APIs and Local Storage\nIntroducing the HTML structure\nImplementing MS Bing Search API '
            }
        ]   

    for (var i = 0; i < team.length; i++) {

        // Build the html card
        var teamCard = $(`
        <div class="col-sm-4">
            <div class="card bg-light">
                <div class="card-body">
                    <div class="card-header">
                        <h5>${team[i].name}</h5>
                    </div>
                    <div class="social">
                        <a href="${team[i].linkedin}" target="_blank"><i class="icon ion-social-linkedin"></i></a>
                        <a href="${team[i].github}" target="_blank"><i class="icon ion-social-github"></i></a>
                        <a href="${team[i].email}" target="_blank"><i class="icon ion-email"></i></a>
                    </div>
                    <br/>
                    <p class="h6 badge badge-dark">Project Tasks</p>
                    <p class="text-sm-left font-italic"><small class="text-muted">${team[i].tasks}</small></p>
                </div>
            </div>
        </div>`);

        // Append the HTML Card
        $("#team").append(teamCard);
    }    
};