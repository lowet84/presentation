import {
  createExpressServer,
} from 'routing-controllers'
import * as express from 'express'
import 'reflect-metadata'
import { config } from './config';
const compression = require('compression')

var app: express.Express = createExpressServer(config)
app.use(compression())

app.use(express.static('web'))

app.listen(3000)
