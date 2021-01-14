import request from 'supertest'
import app from '../../app'

describe('CreateGameUseCase', () => {
  test('Should return 400 if no name is provided', async () => {
    const response = await request(app).post('/games').send({
      name: 'Os incríves',
      description: 'É um jogo',
      price: 35.00
    })

    expect(response.status).toBe(400)
  })
})