import { CommandController } from './Controllers/CommandController'
import { LoginController } from './Controllers/LoginController'
import { RoutingControllersOptions } from 'routing-controllers'
import { authorizationChecker } from './auth'
import { SlidesController } from './Controllers/SlidesController'

var config: RoutingControllersOptions = {
  controllers: [CommandController, LoginController, SlidesController],
  authorizationChecker,
  routePrefix: '/api'
}

export { config }
