import { CommandController } from './Controllers/CommandController'
import { LoginController } from './Controllers/LoginController'
import { RoutingControllersOptions } from 'routing-controllers'
import { authorizationChecker } from './auth'

var dev = process.argv[3] === 'dev'

var config: RoutingControllersOptions = {
  cors: dev,
  controllers: [CommandController, LoginController],
  authorizationChecker
}

export { config }
