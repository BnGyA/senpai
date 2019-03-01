const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();


app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) =>{
    res.json({'tutorial': 'Build a REST API with node.js'})
})


app.listen(3000, () => console.log('Node server listenning on port 3000'))