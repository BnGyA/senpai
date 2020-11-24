# VUE3

methods: {
    sortLowest(){
        this.key.sort((a, b)=> a.rating > b.rating ? 1 : - 1);
    },
    sortHighest(){
        this.key.sort((a, b)=> a.rating < b.rating ? 1 : - 1);
    }
}


Filtering table

computed: {
    filteredFilms(){
        // make it not case sensitive
        let filter = new RegExp(this.filterText, 'i');
        return this.ratingInfo.filter(el => el.title.match(filter));
    }
}