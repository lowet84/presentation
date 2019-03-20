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
import { commands } from '../Slides/K8S'
const util = require('util')
const exec = util.promisify(require('child_process').exec)

@JsonController('/command')
export class CommandController {
  @Authorized()
  @Get('/')
  getAll() {
    return commands
  }

  @Authorized()
  @Post('/:name/:index')
  async getOne(@Param('name') name: string, @Param('index') index: number) {
    var item = commands[name][index]
    if (process.env.MODE !== 'prod') return item.commands.map(d => d.command)
    var results: string[] = []
    for (let index = 0; index < item.commands.length; index++) {
      var command = item.commands[index]
      console.log(command.command)
      var out = ''
      try {
        var { stdout, stderr } = await exec(command.command)
        out = stdout
      } catch (e) {
        out = e
      }
      if (command.visible && out && out.length > 0) {
        var lines = stdout.split(/\r?\n/) || []
        for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
          var line = lines[lineIndex] || ''
          console.log(line)
          if (line.length > 0) results.push(line.split(' ').join('+'))
        }
      }
    }
    return results
  }
}
