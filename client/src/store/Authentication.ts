import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import LoginService from '../service/LoginService'
import TestService from '../service/TestService'
import ServiceBase from '../service/ServiceBase'

@Module({ namespaced: true })
export default class Authentication extends VuexModule {
  loginService = new LoginService()
  testService = new TestService()
  tokenString = localStorage.getItem('token') || undefined

  @Mutation setToken(tokenString: string) {
    this.tokenString = tokenString
    ServiceBase.token = tokenString
    localStorage.setItem('token', tokenString)
  }

  @Action({ commit: 'setToken' })
  async login(password: string) {
    var token = await this.loginService.login(password)
    return token
  }

  @Action
  async test() {
    var result = await this.testService.test()
  }

  get token() {
    return this.tokenString
  }

  get loginDialog() {
    return !this.tokenString
  }
}
