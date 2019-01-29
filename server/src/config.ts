import { TestController } from './controllers/TestController'
import { LoginController } from './Controllers/LoginController'

var dev = process.argv[2] === 'dev'

var config = {
  cors: dev,
  controllers: [TestController, LoginController]
}

export { config }
