import ServiceBase from './ServiceBase'
import urljoin from 'url-join'

export default class LoginService extends ServiceBase {
  async readSlides(): Promise<Slides>{
    var ret = await this.get('slides')
    return ret
  }
}
