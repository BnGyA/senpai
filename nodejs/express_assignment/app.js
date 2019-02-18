const express = require('express');

const app = express();

app.use('/users', (req, res, next)=>{
    res.send('<h1>User page</h1>');
})

app.use('/',(req, res, next) =>{
    res.send('<h1>Homepage</h1>');
})

app.listen(5000);