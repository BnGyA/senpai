class GitHub{
    constructor(){
        this.client_id = '4ff5bfa33eb537d98d9a';
        this.client_secret = 'f72c30d4f70830319414781a4a414e200bcb8b6e';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profilData = await profileResponse.json();

        const repos = await reposResponse.json();
        return {
            profile: profilData,
            repos
        }
    }
}