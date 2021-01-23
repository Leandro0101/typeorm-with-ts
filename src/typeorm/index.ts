import { createConnections, getConnection } from 'typeorm'

class Connection {
  async  create(): Promise<void> {
    await createConnections()
  } 
  async  close(): Promise<void> {
    await getConnection().close()
  }
  
  async  clear(): Promise<void> {
    const connection = getConnection()
    const entities = connection.entityMetadatas
    
    entities.forEach(async (entity) => {
      const repository = connection.getRepository(entity.name)
      await repository.query(`DELETE FROM ${entity.tableName}`)
    })
  }
}

export default new Connection()