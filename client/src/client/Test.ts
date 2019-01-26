/** @module Test */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get all
 */
export function TestControllergetAll(): Promise<api.Response<any>> {
  return gateway.request(TestControllergetAllOperation)
}

/**
 * Get one
 * 
 * @param {number} id 
 * @return {Promise<object>} Successful response
 */
export function TestControllergetOne(id: number): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      id
    }
  }
  return gateway.request(TestControllergetOneOperation, parameters)
}

const TestControllergetAllOperation: api.OperationInfo = {
  path: '/test/',
  method: 'get'
}

const TestControllergetOneOperation: api.OperationInfo = {
  path: '/test/{id}',
  method: 'get'
}
