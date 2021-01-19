import { createConnections, getConnection, getRepository } from 'typeorm'
import { Game } from '../../entities/Game'
import app from '../../app'
import request from 'supertest'
describe('ShowAllGamesUseCase', () => {

  const games = [
    { name: 'FIFA 21', description: 'Soccer Game', price: 210 }
  ]

  beforeAll(async () => {
    // await createConnections()
    const repository = getRepository(Game)
    await repository.clear()

    for (const game of games) {
      await repository.save(game)
    }
  })

  afterAll(async () => {
    // const defaultConnection = getConnection('default')
    // await defaultConnection.close()
  })

  test('Should return all games', async () => {
    const response = await request(app).get('/games')

    console.log(response)
    expect(response.body).toEqual(expect.arrayContaining([{ name: 'FIFA 21', description: 'Soccer Game', price: 210 }]))
  })
})
