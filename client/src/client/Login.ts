/** @module Login */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Login
 * 
 * @param {string} password 
 * @return {Promise<object>} Successful response
 */
export function LoginControllerlogin(password: string): Promise<api.Response<LoginResponse>> {
  const parameters: api.OperationParamGroups = {
    path: {
      password
    }
  }
  return gateway.request(LoginControllerloginOperation, parameters)
}

const LoginControllerloginOperation: api.OperationInfo = {
  path: '/login/{password}',
  method: 'post'
}
