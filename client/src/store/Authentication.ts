import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import LoginService from '../service/LoginService'

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
    try {
      return await this.loginService.isLoggedIn()
    } catch {
      return false
    }
  }

  get loginDialog() {
    return !this.tokenState
  }
}
