import { createConnections } from 'typeorm'

async function connection(): Promise<void> {
    await createConnections()
} 

export default connection