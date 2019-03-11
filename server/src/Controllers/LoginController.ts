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
const uuidv1 = require('uuid/v1')

@JsonController('/api/login')
export class LoginController {
  password: string
  static token: string

  constructor() {
    this.password = process.argv[2]
  }

  @Authorized()
  @Get('/')
  isLoggedIn(): boolean {
    return true
  }

  @Post('/:password')
  login(@Param('password') password: string): LoginResponse {
    LoginController.token = uuidv1()
    if (password === this.password) return { token: LoginController.token }
    throw `Wrong password`
  }
}
