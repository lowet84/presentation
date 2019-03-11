import { CommandController } from './Controllers/CommandController'
import { LoginController } from './Controllers/LoginController'
import { RoutingControllersOptions } from 'routing-controllers'
import { authorizationChecker } from './auth'

var config: RoutingControllersOptions = {
  controllers: [CommandController, LoginController],
  authorizationChecker,
  routePrefix: '/api'
}

export { config }
