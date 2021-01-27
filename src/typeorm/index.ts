import { createConnections, getConnection } from 'typeorm'

class Connection {
  async  create(): Promise<void> {
    await createConnections()
  } 
  async  close(): Promise<void> {
    await getConnection().close()
  }
}

export default new Connection()