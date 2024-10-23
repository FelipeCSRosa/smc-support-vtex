import type {
  EventContext,
  ParamsContext,
  RecorderState,
  ServiceContext,
} from '@vtex/api'
import { LRUCache, Service } from '@vtex/api'
import { Clients } from './clients'

import { Test } from './resolvers'

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
        Test(_: any, __: any, ctx: Context) {
          return Test(_, __, ctx)
        },
      },
    },
  },
})
