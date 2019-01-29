import ServiceBase from './ServiceBase'
import urljoin from 'url-join'

export default class LoginService extends ServiceBase {
  async login(password: string) {
    var url = urljoin(ServiceBase.url, 'login', password)
    var result: LoginResponse = await fetch(url, { method: 'POST' })
      .then(response => response.json())
      .catch(err => console.log(err))
    if (result.token) return result.token
    return undefined
  }
}
