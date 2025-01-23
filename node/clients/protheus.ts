import type { InstanceOptions, IOContext } from "@vtex/api";
import { ExternalClient } from "@vtex/api";

export default class Protheus extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super("http://api.smcbr.com.br:80", context, options);
  }

  public async getCondicaoPagamento(): Promise<any> {
    try {
      const res = await this.http.get(
        `/atosdata/condicaoPagamento?cnpjcliente=00000000000000`,
        {
          headers: {
            "Proxy-Authorization": this.context.authToken,
            VtexIdClientAutCookie: this.context.adminUserAuthToken,
            Authorization: "Basic dnRleDp4bCRRREJIcEBRZUo5N0wyOEYzYQ==",
          },
        }
      );

      return res;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  public async getProdutosCliente(): Promise<any> {
    try {
      const res = await this.http.post(
        `/atosdata/produtosCliente`,
        {
          cnpjcliente: "00000000000000",
          produtos: ["ZZMG-82075011-2", "ZZMG-84672992-2"],
        },
        {
          headers: {
            "Proxy-Authorization": this.context.authToken,
            VtexIdClientAutCookie: this.context.adminUserAuthToken,
            Authorization: "Basic dnRleDp4bCRRREJIcEBRZUo5N0wyOEYzYQ==",
          },
        }
      );

      return res;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  public async getPrecoProduto(): Promise<any> {
    try {
      const res = await this.http.post(
        `/atosdata/precoProduto`,
        {
          cnpjcliente: "00000000000000",
          produtos: ["1525461"],
        },
        {
          headers: {
            "Proxy-Authorization": this.context.authToken,
            VtexIdClientAutCookie: this.context.adminUserAuthToken,
            Authorization: "Basic dnRleDp4bCRRREJIcEBRZUo5N0wyOEYzYQ==",
          },
        }
      );

      return res;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  public async getProdutoPorCliente(
    cnpjcliente: string,
    pagina: number,
    tamanhopagina: number,
    familia: string,
    tipo: string,
    serie: string
  ): Promise<any> {
    try {
      const res = await this.http.get(
        `/atosdata/produtosCliente?cnpjcliente=${cnpjcliente}&pagina=${pagina}&tamanhopagina=${tamanhopagina}${
          familia ? `&familia=${familia}` : ""
        }${tipo ? `&tipo=${tipo}` : ""}${serie ? `&serie=${serie}` : ""}`,
        {
          headers: {
            "Proxy-Authorization": this.context.authToken,
            VtexIdClientAutCookie: this.context.adminUserAuthToken,
            Authorization: "Basic dnRleDp4bCRRREJIcEBRZUo5N0wyOEYzYQ==",
          },
        }
      );

      return res;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
