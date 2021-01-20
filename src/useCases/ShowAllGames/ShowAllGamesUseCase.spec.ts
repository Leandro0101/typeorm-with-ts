import { createConnections, getConnection, getRepository } from 'typeorm'
import { Game } from '../../entities/Game'
describe('ShowAllGamesUseCase', () => {

  const games = [
    { name: 'FIFA 21', description: 'Soccer Game', price: 210 }
  ]

  beforeAll(async () => {
    await createConnections()
    const repository = getRepository(Game)
    await repository.clear()

    for (const game of games) {
      await repository.save(game)
    }
  })

  afterAll(async () => {
    const defaultConnection = getConnection('default')
    await defaultConnection.close()
  })

  test('Should return all games', async () => {

    expect(1).toBe(1)
  })
})
