import ServiceBase from './ServiceBase'

export default class TestService extends ServiceBase {
  async test() {
    var result: Test[] = await this.get('test')
    return result
  }
}
