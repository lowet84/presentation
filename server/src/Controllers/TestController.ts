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

@JsonController('/test')
export class TestController {
  items: Test[] 

  constructor() {
    this.items = [
      { value: 'a' }, 
      { value: 'b' }, 
      { value: 'c' }]
  }

  @Authorized()
  @Get('/')
  getAll(): Test[] {
    return this.items
  }

  @Authorized()
  @Get('/:id')
  getOne(@Param('id') id: number): Test {
    return this.items[id]
  }
}
