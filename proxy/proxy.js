var express = require('express')
var proxy = require('http-proxy-middleware')
const compression = require('compression')

var app = express()

app.use(compression())

app.use(
  '/api',
  proxy({
    target: 'http://localhost:3000',
    changeOrigin: true
  })
)

app.use('/', proxy('http://localhost:1234'))

app.listen(3800)
