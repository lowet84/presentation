import express from 'express'
import { readFileSync, existsSync } from 'fs'

var app = express()

const filename = '/etc/hostname'
var hostname = existsSync(filename) ? readFileSync(filename, 'utf8') : 'dummy'

app.get('/', function(req, res) {
  res.send(hostname)
})

app.listen(3000)
