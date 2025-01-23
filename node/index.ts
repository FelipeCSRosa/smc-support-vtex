import type {
  EventContext,
  ParamsContext,
  RecorderState,
  ServiceContext,
} from '@vtex/api'
import { LRUCache, Service } from '@vtex/api'
import { Clients } from './clients'

import { TestCondicaoPagamento, TestProdutosCliente, TestPrecoProduto, getCustomerProducts } from './resolvers'

const TIMEOUT_MS = 50 * 1000

const memoryCache = new LRUCache<string, any>({ max: 5000 })

metrics.trackCache('status', memoryCache)

declare global {
  type Context = ServiceContext<Clients>
  type EventChangeContext = EventContext<Clients>
}

export default new Service<Clients, RecorderState, ParamsContext>({
  clients: {
    implementation: Clients,
    options: {
      default: {
        timeout: TIMEOUT_MS,
      },
    },
  },
  graphql: {
    resolvers: {
      Query: {
        TestCondicaoPagamento(_: any, __: any, ctx: Context) {
          return TestCondicaoPagamento(_, __, ctx)
        },
        TestProdutosCliente(_: any, __: any, ctx: Context) {
          return TestProdutosCliente(_, __, ctx)
        },
        TestPrecoProduto(_: any, __: any, ctx: Context) {
          return TestPrecoProduto(_, __, ctx)
        },
        getCustomerProducts(_: any, { cnpjcliente, pagina, tamanhopagina, familia, tipo, serie }: any, ctx: Context) {
          return getCustomerProducts(_, {cnpjcliente, pagina, tamanhopagina, familia, tipo, serie}, ctx)
        }
      },
    },
  },
})
