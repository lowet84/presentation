import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import LoginService from '../service/LoginService'
import ServiceBase from '../service/ServiceBase'

@Module({ namespaced: true })
export default class Authentication extends VuexModule {
  loginService = new LoginService()
  tokenState = true

  @Mutation setToken(tokenString: string) {
    this.tokenState = !!tokenString
    localStorage.setItem('token', tokenString)
  }

  @Mutation setTokenState(tokenState: boolean) {
    this.tokenState = tokenState
  }

  @Action({ commit: 'setToken' })
  async login(password: string) {
    var token = await this.loginService.login(password)
    return token
  }

  @Action({ commit: 'setTokenState' })
  async isLoggedIn() {

    if (!(await this.loginService.isLoggedIn())) {
      return false
    }
    return true
  }

  get loginDialog() {
    return !this.tokenState
  }
}
