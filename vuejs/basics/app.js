new Vue({
    el: '#app',
    data: {
        title: "Title",
        url: 'http://google.be',
        classes: ['one', 'two'],
        number: 1,
        
    },
    methods: {
        printMe(name){
            return `Hello ${name}, this is the ${this.title}`; 
        },
        decrease(amount){
            this.number -= amount;
        }
    }
})