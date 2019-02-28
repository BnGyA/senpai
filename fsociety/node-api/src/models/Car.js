const mongoose = require('mongoose');


const carSchema = new mongoose.Schema({
    title: String,
    brand: String,
    price: String,
    age: Number,
    services: {
        //https://thecodebarbarian.com/whats-new-in-mongoose-5.1-map-support.html
        type: Map,
        of: String
    }
})


module.exports = mongoose.model('Car', carSchema);