const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const feedRoutes = require('./routes/feed.route.js')



const app = express();

//app.use(bodyParser.urlencoded()); // x-wwww-form-urlencoded <form>
app.use(bodyParser.json()); // applciation/json
// static images
app.use('/images', express.static(path.join(__dirname, 'images')));

// Dealing with CORS
app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);


mongoose
    .connect('mongodb+srv://benjamin:TfvElkidhn9ZEQnV@senpai-ty4s4.mongodb.net/messages?retryWrites=true',  { useNewUrlParser: true })
    .then(res =>{
        app.listen(8080);
    })
    .catch(err => console.log(err));
