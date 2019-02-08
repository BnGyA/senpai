// Init GitHub
const github = new GitHub;

// init UI
const ui = new UI;
// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) =>{
    const userText = e.target.value;

    if(userText !== ''){
        // Make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                // show alert
                ui.showAlert(`User ${userText} not found`, 'alert alert-danger');
            } else {
                // show profile
                console.log(data.profile)
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else {
        // Clear profile
        ui.clearProfile();
    }
});