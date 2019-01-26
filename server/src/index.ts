import {
  createExpressServer,
  getMetadataArgsStorage
} from 'routing-controllers'
import { routingControllersToSpec } from 'routing-controllers-openapi'
import * as express from 'express'
import { TestController } from './controllers/TestController'
import 'reflect-metadata'
import { writeFileSync, existsSync, mkdirSync } from 'fs'
const compression = require('compression')
var Converter = require('api-spec-converter')

var dev = process.argv[2] === 'dev'

var config = {
  cors: dev,
  controllers: [TestController]
}

var app: express.Express = createExpressServer(config)
app.use(compression())

app.use(express.static('web'))

if (dev) {
  const storage = getMetadataArgsStorage()
  const spec = routingControllersToSpec(storage)
  
  if (!existsSync('web')) {
    mkdirSync('web')
  }
  writeFileSync('web/openApi.json', JSON.stringify(spec), 'utf8')
  Converter.convert({
    from: 'openapi_3',
    to: 'swagger_2',
    source: 'http://localhost:3000/openApi.json',
  })
  .then(function(converted: any) {
    writeFileSync('../client/openApi.json',converted.stringify(),'utf8');
  });
}

app.listen(3000)
