new Vue({
    el: '#app',
    data: {
        title: "Title",
        url: 'http://google.be',
        classes: ['one', 'two'],
        number: 1,
        coords: {
            x: 0,
            y: 0
        },
        showName: true,
        items: ['Item 1', 'Item 2', 'Item 3']
    },
    methods: {
        printMe(name){
            return `Hello ${name}, this is the ${this.title}`; 
        },
        decrease(amount){
            this.number -= amount;
        },

        logEvent(e){
            console.log(e);
        },
        logCoords(e){
            this.coords.x = e.offsetX
            this.coords.y = e.offsetY
        },
        updateName(e){
            this.title = e.target.value;
        },
        clog(){
            console.log("Hello world");
        },
        toggleName(){
            this.showName = !this.showName
        }
    }
})