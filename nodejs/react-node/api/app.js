const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const multer = require('multer');

const feedRoutes = require('./routes/feed.route.js')
const authRoutes = require('./routes/auth.route.js')

const app = express();

// Image upload
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'images');
    },
    filename: (req, file,cb) =>{
        cb(null, new Date().toISOString + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) =>{
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
        cb(null, true);
    }
    cb(null, fasle);
}

//app.use(bodyParser.urlencoded()); // x-wwww-form-urlencoded <form>
app.use(bodyParser.json()); // applciation/json
app.use(multer({storage: fileStorage, filter: fileFilter}).single('image'));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Dealing with CORS
app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);
app.use('/auth', authRoutes);

// Error handling, this middleware will be used whenever an error is thrown
app.use((error, req, res, next) =>{
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message: message, data: data})
})

mongoose
    .connect('mongodb+srv://benjamin:TfvElkidhn9ZEQnV@senpai-ty4s4.mongodb.net/messages?retryWrites=true',  { useNewUrlParser: true })
    .then(res =>{
        app.listen(8080);
    })
    .catch(err => console.log(err));
