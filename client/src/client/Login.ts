/** @module Login */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Login
 */
export function LoginControllerlogin(): Promise<api.Response<LoginResponse>> {
  return gateway.request(LoginControllerloginOperation)
}

const LoginControllerloginOperation: api.OperationInfo = {
  path: '/login/',
  method: 'post'
}
