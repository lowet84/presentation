import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  Authorized
} from 'routing-controllers'
const util = require('util')
const exec = util.promisify(require('child_process').exec)

var fileLines = (value: string, fileName: string): string => {
  var lines = value.split(/\r?\n/)
  var ret = ''
  lines.forEach((line, index) => {
    ret += `echo ${line} ${index === 0 ? '>' : '>>'} ${fileName} ${
      index === lines.length - 1 ? '' : '&& '
    }`
  })
  return ret
}

@JsonController('/command')
export class CommandController {
  commands: { [index: string]: Action[] } = {
    dockerBuild: [
      {
        displayName: 'cat index.js',
        commands: [
          { command: 'mkdir -p example1', visible: false },
          {
            command:
              "cd example1 && echo \"console.log('Running demo-application on host: ' + require('fs').readFileSync('/etc/hostname','utf8'))\" >> index.js",
            visible: false
          },
          { command: 'cd example1 && cat index.js', visible: true }
        ]
      },
      {
        displayName: 'node index.js',
        commands: [{ command: 'cd example1 && node index.js', visible: true }]
      },
      {
        displayName: 'cat Dockerfile',
        commands: [
          {
            command: `cd example1 && ${fileLines(
              `
FROM node:11-alpine
RUN mkdir /app
ADD index.js /app/index.js
CMD node /app/index.js
              `,
              'Dockerfile'
            )} `,
            //`cd example1 && echo "FROM node:11-alpine" > Dockerfile `,
            visible: false
          },
          { command: 'cd example1 && cat Dockerfile', visible: true }
        ]
      },
      {
        displayName: 'docker build -t docker-demo .',
        commands: [
          {
            command: 'cd example1 && docker build -t docker-demo .',
            visible: false
          }
        ]
      },
      {
        displayName: 'docker run docker-demo',
        commands: [
          {
            command:
              'cd example1 && docker run --hostname=container docker-demo',
            visible: false
          }
        ]
      }
    ]
  }

  // @Authorized()
  @Get('/')
  getAll() {
    return this.commands
  }

  // @Authorized()
  @Post('/:name/:index')
  async getOne(@Param('name') name: string, @Param('index') index: number) {
    var item = this.commands[name][index]
    var results: any[] = []
    for (let index = 0; index < item.commands.length; index++) {
      var command = item.commands[index]
      console.log(command.command)
      var { stdout, stderr } = await exec(command.command)
      var lines = stdout.split(/\r?\n/) || []
      for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
        var line = lines[lineIndex] || ''
        console.log(line)
        if (line.length > 0) results.push(line)
      }
    }
    return results
  }
}
