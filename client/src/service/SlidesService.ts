import ServiceBase from './ServiceBase'
import urljoin from 'url-join'

export default class LoginService extends ServiceBase {
  async readSlides(): Promise<Slides> {
    var presentation = window.location.hash.replace('#', '')
    var ret = await this.get(`slides/${presentation}`)
    return ret
  }
}
