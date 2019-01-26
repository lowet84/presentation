var fs = require('fs')

const openapi = require('openapi-client')
openapi
  .genCode({
    src: './openApi.json',
    outDir: './src/client',
    language: 'ts'
  })
  .then(complete, error)

function complete(spec) {
  var returnTypes = JSON.parse(fs.readFileSync('returnTypes.json', 'utf8'))
  returnTypes.forEach(type => {
    var code = fs.readFileSync('src/client/' + type.controller + '.ts', 'utf8')
    var lines = code.split(/\r|\n/)
    var line = lines.find(d => d.includes(`export function ${type.method}(`))
    var newLine = line.replace(
      'Promise<api.Response<any>>',
      `Promise<api.Response<${type.type}>>`
    )
    var code = code.replace(line, newLine)
    var code = fs.writeFileSync(
      'src/client/' + type.controller + '.ts',
      code,
      'utf8'
    )
  })
}

function error(e) {
  console.error(e.toString())
}
