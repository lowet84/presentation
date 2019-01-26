import {
  createExpressServer,
  getMetadataArgsStorage
} from 'routing-controllers'
import { routingControllersToSpec } from 'routing-controllers-openapi'
import * as express from 'express'
import { TestController } from './controllers/TestController'
import 'reflect-metadata'
import { writeFileSync } from 'fs'
const compression = require('compression')

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
  const spec = routingControllersToSpec(
    storage,
    {  },
    {
      components: {},
      info: { title: 'Presentation', version: '1' }
    }
  )
  Object.keys(spec.paths).forEach(key =>
    Object.keys(spec.paths[key]).forEach(
      mkey =>
        (spec.paths[key][mkey].operationId = spec.paths[key][
          mkey
        ].operationId.replace('.', ''))
    )
  )
  writeFileSync('../client/openApi.json', JSON.stringify(spec), 'utf8')
}

app.listen(3000)
