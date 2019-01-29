import { getMetadataArgsStorage } from 'routing-controllers'
import { routingControllersToSpec } from 'routing-controllers-openapi'
import 'reflect-metadata'
import { writeFileSync, existsSync, mkdirSync, readdirSync, createReadStream, createWriteStream } from 'fs'
import './config'
import * as ts from 'typescript'

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
writeFileSync('../client/openApi/openApi.json', JSON.stringify(spec), 'utf8')

let program = ts.createProgram(['src/index.ts'], {
  outDir: './out',
  rootDir: './src',
  sourceMap: true,
  target: ts.ScriptTarget.ES2018,
  module: ts.ModuleKind.CommonJS,
  noImplicitAny: true,
  experimentalDecorators: true,
  emitDecoratorMetadata: true
})

var definitions: { method: string; type: string, controller: string }[] = []
for (const sourceFile of program.getSourceFiles()) {
  if (!sourceFile.isDeclarationFile) {
    ts.forEachChild(sourceFile, node => {
      if (ts.isClassDeclaration(node) && node.name) {
        var className: any = node.name.escapedText
        node.members
          .filter(member => member.kind === ts.SyntaxKind.MethodDeclaration)
          .forEach(member => {
            // @ts-ignore
            var methodName = member.name.escapedText
            // @ts-ignore
            var type: any = member.type
            var typeName: string
            if (type.typeName) {
              typeName = type.typeName.escapedText
            } else if (type.elementType) {
              typeName = type.elementType.typeName.escapedText + '[]'
            }
            definitions.push({ method: className + methodName, type: typeName, controller: className.replace('Controller','') })
          })
      }
    })
  }
}

writeFileSync('../client/openApi/returnTypes.json', JSON.stringify(definitions), 'utf8')
var clientTypingsDir = '../client/typings/'
if (!existsSync(clientTypingsDir)){
  mkdirSync(clientTypingsDir);
}
var typingsDir = './typings/'
var files = readdirSync(typingsDir)
files.forEach(file => {
  createReadStream(typingsDir+file).pipe(createWriteStream(clientTypingsDir+file));
});
