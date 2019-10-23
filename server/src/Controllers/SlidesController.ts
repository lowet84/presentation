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
import { slides as wsSlides } from '../Slides/Workshop'

@JsonController('/slides')
export class SlidesController {
  @Authorized()
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

  @Authorized()
  @Get('/workshop')
  getWorkshop() {
    return JSON.parse(JSON.stringify(wsSlides))
  }
}
