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
  password: string

  constructor() {
    this.password = process.argv[3]
  }

  @Post('/:password')
  login(@Param('password') password: string): LoginResponse {
    if(password === this.password) return { token: '_' + Math.random().toString(36).substr(2, 9) }
    throw 'Wrong password'
  }
}
