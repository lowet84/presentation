import urljoin from 'url-join'

export default abstract class ServiceBase {
  protected static url: string

  public static init(url: string) {
    this.url = url
  }

  protected async get(url: string): Promise<any> {
    var url = urljoin(ServiceBase.url, url)
    var token = localStorage.getItem('token')
    var result: LoginResponse = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    }).then(response => {
      if (!response.ok) return undefined
      return response.json()
    })
    return result
  }

  protected async post(url: string): Promise<any> {}
}
