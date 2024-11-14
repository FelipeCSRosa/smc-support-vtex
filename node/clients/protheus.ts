import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class Protheus extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('http://api.smcbr.com.br/', context, options)
  }

  public async getCondicaoPagamento(): Promise<any> {
    try {
      const res = await this.http.get(
        `/atosdata/condicaoPagamento?cnpjcliente=00000000000000`,
        {
          headers: {
            'Proxy-Authorization': this.context.adminUserAuthToken,
            VtexIdClientAutCookie: this.context.adminUserAuthToken,
            Authorization: 'Basic ',
          },
        }
      )

      return res
    } catch (error) {
      console.error(error)
      return error
    }
  }
}
