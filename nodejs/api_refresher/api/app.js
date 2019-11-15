const express = require('express');
var bodyParser     =        require("body-parser");
const testRoutes = require('./routes/test.js');

const app = express();
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Dealing with CORS
app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization', 'Content-type, multipart/form-data');
    next();
});

app.use('/api', testRoutes);

app.listen(8080);