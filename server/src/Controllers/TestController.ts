import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete
} from 'routing-controllers'
import { ResponseSchema } from 'routing-controllers-openapi'

@JsonController('/test')
export class TestController {
  items: Test[] 

  constructor() {
    this.items = [
      { value: 'a' }, 
      { value: 'b' }, 
      { value: 'c' }]
  }

  @Get('/')
  @ResponseSchema('Test[]')
  getAll() {
    return this.items
  }

  @Get('/:id')
  @ResponseSchema('Test')
  getOne(@Param('id') id: number) {
    return this.items[id]
  }
}
