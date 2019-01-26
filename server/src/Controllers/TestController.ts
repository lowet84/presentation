import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete
} from 'routing-controllers'

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
  getAll(): Test[] {
    return this.items
  }

  @Get('/:id')
  getOne(@Param('id') id: number): Test {
    return this.items[id]
  }
}
