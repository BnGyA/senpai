var express = require('express')
var session = require('express-session')
var parser = require('body-parser')
var grant = require('grant-express')

express()
  .use(session({secret: 'dev.to'}))
  .use(parser.urlencoded()) // only needed for POST requests
  .use(grant(require('./config.json')))
  .use('/login', (req, res) => res.end(`the above HTML form`))
  .use('/hello', (req, res) => {
    var {access_token} = req.session.grant.response
    console.log(access_token)
    res.end('nice!')
  })
  .listen(3000)