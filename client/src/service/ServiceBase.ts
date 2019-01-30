import urljoin from 'url-join'

export default abstract class ServiceBase {
  protected static url: string
  static token: string

  public static init(url: string) {
    this.url = url
  }

  protected async get(url: string): Promise<any>{
    var url = urljoin(ServiceBase.url, url)
    var token = ServiceBase.token
    var result: LoginResponse = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    })
      .then(response => response.json())
      .catch(err => err)
    return result
  }

  protected async post(url: string): Promise<any>{

  }
}
