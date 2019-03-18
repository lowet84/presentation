var express = require('express')
var fs = require('fs')
var app = express()

const filename = '/etc/hostname'
var hostname = fs.existsSync(filename) ? fs.readFileSync(filename, 'utf8') : 'dummy'

app.get('/', function(req, res) {
  res.send(hostname)
})

app.listen(3200)


