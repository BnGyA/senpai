const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// Init the app
const app = express();

// Set the view engine & directory
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

// Set the static folder
app.use(express.static(path.join(__dirname, 'public')));


// Register the routes
const frontRoutes = require('./routes/front');
app.use(frontRoutes);

app.listen('3000');