import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { LoginControllerlogin } from '../client/Login'

@Module({ namespaced: true })
export default class Authentication extends VuexModule {
  tokenString = ''

  @Mutation setToken(token: string) {
    this.tokenString = token
  }

  @Action({ commit: 'setToken' }) 
  async login() {
    var result = await LoginControllerlogin()
    return result.data.token
  }

  get token() {
    return this.tokenString
  }
}
