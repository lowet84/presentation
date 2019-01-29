import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete
} from 'routing-controllers'

@JsonController('/login')
export class LoginController {
  items: Test[]

  constructor() {
    this.items = [{ value: 'a' }, { value: 'b' }, { value: 'c' }]
  }

  @Post('/')
  login(@Body() login: Login): LoginResponse {
    return { token: 'dummytoken' }
  }
}
