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

import { slides } from '../Slides/K8S'

@JsonController('/slides')
export class SlidesController {
  // @Authorized()
  @Get('/')
  getAll() {
    return slides
  }
}
