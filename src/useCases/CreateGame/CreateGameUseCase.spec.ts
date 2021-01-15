import request from 'supertest'
import app from '../../app'
import { getConnection, createConnections } from 'typeorm'
describe('CreateGameUseCase', () => {

  beforeAll(async () => {
    await createConnections()
  })

  afterAll(async done => {
    const defaultConnection = getConnection('default')
    await defaultConnection.close()
    done()
  })

  test('Should return 400 if no name is provided', async () => {
    const response = await request(app).post('/games').send({
      description: 'É um jogo',
      price: 35.00
    })

    expect(response.status).toBe(400)
  })
})