import { Action } from 'routing-controllers'
import { LoginController } from './Controllers/LoginController'

var authorizationChecker = async (action: Action, roles: string[]) => {
  const token = action.request.headers['authorization']
  return token === `Bearer ${LoginController.token}`
}

export { authorizationChecker }
