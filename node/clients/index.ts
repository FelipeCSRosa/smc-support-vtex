import { IOClients } from '@vtex/api'
import Protheus from './protheus'

export class Clients extends IOClients {
  public get protheus() {
    return this.getOrSet('protheus', Protheus)
  }
}
