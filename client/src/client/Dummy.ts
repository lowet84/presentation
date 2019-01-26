/** @module Dummy */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get all
 */
export function DummyControllergetAll(): Promise<api.Response<Test[]>> {
  return gateway.request(DummyControllergetAllOperation)
}

/**
 * Get one
 * 
 * @param {number} id 
 * @return {Promise<object>} Successful response
 */
export function DummyControllergetOne(id: number): Promise<api.Response<Test>> {
  const parameters: api.OperationParamGroups = {
    path: {
      id
    }
  }
  return gateway.request(DummyControllergetOneOperation, parameters)
}

const DummyControllergetAllOperation: api.OperationInfo = {
  path: '/dummy/',
  method: 'get'
}

const DummyControllergetOneOperation: api.OperationInfo = {
  path: '/dummy/{id}',
  method: 'get'
}
