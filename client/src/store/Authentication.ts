import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { LoginControllerlogin } from '../client/Login'
import { TestControllergetAll } from '../client/Test';

@Module({ namespaced: true })
export default class Authentication extends VuexModule {
  tokenString = ''

  @Mutation setToken(token: string) {
    this.tokenString = token
  }

  @Action({ commit: 'setToken' }) 
  async login() {
    var result = await LoginControllerlogin('dummy')
    console.log(result.data.token)
    var test = await TestControllergetAll()
    console.log(test)
    return result.data.token
  }

  get token() {
    return this.tokenString
  }
}
