import { createExpressServer } from 'routing-controllers'
import * as express from 'express'
import 'reflect-metadata'
import { config } from './config'
import * as path from 'path'
const compression = require('compression')

var app: express.Express = createExpressServer(config)
app.use(compression())

var webdir = path.join(__dirname, 'web')
console.log(webdir)
app.use(express.static(webdir))

app.listen(3000)
