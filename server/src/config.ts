import { TestController } from './controllers/TestController'
import { LoginController } from './Controllers/LoginController'
import { RoutingControllersOptions } from 'routing-controllers'
import { authorizationChecker } from './auth'

var dev = process.argv[3] === 'dev'

var config: RoutingControllersOptions = {
  cors: dev,
  controllers: [TestController, LoginController],
  authorizationChecker
}

export { config }
