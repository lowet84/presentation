import {
  getMetadataArgsStorage
} from 'routing-controllers'
import { routingControllersToSpec } from 'routing-controllers-openapi'
import 'reflect-metadata'
import { writeFileSync } from 'fs'
import './config'
import * as ts from "typescript";
import * as fs from "fs";

const storage = getMetadataArgsStorage()
const spec = routingControllersToSpec(
  storage,
  {},
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
