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

import { slides, commands } from '../Slides/K8S'

@JsonController('/slides')
export class SlidesController {
  // @Authorized()
  @Get('/')
  getAll() {
    var ret = JSON.parse(JSON.stringify(slides))
    ret.forEach((slide: Slides) => {
      slide.sections.forEach((section: Section) => {
        section.items.forEach((item: Item) => {
          if (item.type.startsWith('terminal')) {
            item.actions = commands[item.value]
          }
        })
      })
    })
    return ret
  }
}
