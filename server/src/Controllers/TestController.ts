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
    items: string[]
  
    constructor() {
      this.items = ['a','b','c']
    }
  
    @Get('/')
    getAll() {
      return this.items
    }
  
    @Get('/:id')
    getOne(@Param('id') id: number) {
      return this.items[id]
    }
  }