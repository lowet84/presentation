import ServiceBase from './ServiceBase'
import urljoin from 'url-join'

export default class TestService extends ServiceBase {
  async test() {
    var result: Test[] = await this.get('test')
    return result
  }
}
