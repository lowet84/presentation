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
const exec = require('await-exec')

@JsonController('/command')
export class CommandController {
  commands: { [index: string]: Action[] } = {
    dockerBuild: [
      {
        displayName: 'cat index.js',
        commands: [
          { command: 'mkdir -p example1', visible: false },
          { command: 'cd example1', visible: false },
          {
            command:
              "echo \"console.log('Running demo-application on host: ' + require('fs').readFileSync('/etc/hostname','utf8'))\" >> index.js",
            visible: false
          },
          { command: 'cat index.js', visible: true }
        ]
      },
      {
        displayName: 'node index.js',
        commands: [
          { command: 'cd example1', visible: false },
          { command: 'node index.js', visible: true }
        ]
      },
      {
        displayName: 'cat Dockerfile',
        commands: [
          { command: 'cd example1', visible: false },
          {
            command: 'echo "FROM arm32v7/node:10-slim" > Dockerfile ',
            visible: false
          },
          { command: 'echo "RUN mkdir /app" >> Dockerfile ', visible: false },
          {
            command: 'ADD index.js /app/index.js" >> Dockerfile ',
            visible: false
          },
          { command: 'CMD node /app/index.js" >> Dockerfile ', visible: false },
          { command: 'cat Dockerfile', visible: true }
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
  async getOne(
    @Param('name') name: string,
    @Param('index') index: number
  ) {
    var item = this.commands[name][index]
    var results: any[] = []
    item.commands.forEach(async command => {
      var result = await exec(command.command)
      results.push(result)
    })
    return JSON.stringify(results)
  }
}
