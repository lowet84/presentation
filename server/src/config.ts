import { TestController } from './controllers/TestController'
import { LoginController } from './Controllers/LoginController'
import { RoutingControllersOptions, Action } from 'routing-controllers'

var dev = process.argv[2] === 'dev'

var config: RoutingControllersOptions = {
  cors: dev,
  controllers: [TestController, LoginController],
  authorizationChecker: async (action: Action, roles: string[]) => {
    const token = action.request.headers['authorization']
    return token === `Bearer ${LoginController.token}`
  }
}

export { config }
