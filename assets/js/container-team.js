function displayTeam() {

    var team =
        [
            {
                name: 'Amal Hussein',
                linkedin: '#',
                github: '#',
                email: 'amula9986.ah@gmail.com',
                tasks: 'Implementing Wikipedia Functionality'
            },
            {
                name: 'Jack Labukas',
                linkedin: '#',
                github: '#',
                email: 'labukasgediminas@gmail.com',
                tasks: 'Implementing Spotify Functionality'
            },
            {
                name: 'Kassi',
                linkedin: '#',
                github: '#',
                email: 'kassy.g.e@hotmail.com',
                tasks: 'Presenting • Assisting with YouTube API • Generating ReadMe file • Poject management • Team organisation'
            },
            {
                name: 'Rui Belo',
                linkedin: 'https://linkedin.com/in/ruibelo',
                github: 'https://github.com/CZ-RBelo/',
                email: 'jr.belo@hotmail.com',
                tasks: 'Bootstrap • UI Design • Implementing Code/ Refactoring • Combining APIs & Local Storage'
            }
        ]   

    for (var i = 0; i < team.length; i++) {

        // Build the html card
        var teamCard = $(`
        <div class="col-sm-3">
            <div class="card bg-light">
                <div class="card-body">
                    <div class="card-header"><h5>${team[i].name}</h5></div>
                    <div class="projectTasks">
                        <div class="social">
                            <a href="${team[i].linkedin}" target="_blank"><i class="icon ion-social-linkedin"></i></a>
                            <a href="${team[i].github}" target="_blank"><i class="icon ion-social-github"></i></a>
                            <a href="${team[i].email}" target="_blank"><i class="icon ion-email"></i></a>
                        </div>
                    </div>
                    <hr/>
                    <p class="h6 badge badge-dark">Project Tasks</p>                    
                    <p class="text-sm-left font-italic"><small class="text-muted">${team[i].tasks}</small></p>
                </div>
            </div>
        </div>`);

        // Append the HTML Card
        $("#team").append(teamCard);
    }    
};