import { getRepository } from 'typeorm'
import  Connection  from '../../../typeorm'
import { Game } from '@entities/Game'
import request from 'supertest'
import app from '../../../app'
describe('ShowAllGamesUseCase', () => {
  
  const games = [
    { name: 'FIFA 19', description: 'Soccer game', price: 210 },
    { name: 'Naruto Storm 3', description: 'Battle game', price: 75 },
    { name: 'Tekken 5', description: 'Battle game', price: 210 },
    { name: 'Black', description: 'Shot game', price: 89 },
    { name: 'Resident Evil 4', description: 'Zombie game', price: 21 },
    { name: 'PES 18', description: 'Soccer Game', price: 77 },
    { name: 'Mario', description: 'Any description', price: 15 },
    { name: 'Def Jam', description: 'Battle Game', price: 30 },
    { name: 'Crash', description: 'Any description', price: 210 },
    { name: 'Point blank', description: 'Any description', price: 210 },
    { name: 'Rockeat league', description: 'Any description', price: 210 },
    { name: 'League of Legends', description: 'MMORPG', price: 0 },
    { name: 'Chess Rush', description: 'Any description', price: 0 },
    { name: 'Mafia', description: 'shot game', price: 60 },
    { name: 'Mafia II', description: 'shot game', price: 100 },
    { name: 'Mafia III', description: 'Shot game', price: 210 },
    { name: 'Lego', description: 'Any description', price: 129.99 },
    { name: 'Dragon Ball Budokai Takaichi III', description: 'Battle game', price: 5.99 },
    { name: 'Blade Hunter', description: 'MMORPG', price: 0 },
    { name: 'Free Fire', description: 'shot game', price: 0 },
    { name: 'Dota', description: 'any description', price: 0 },
    { name: 'State of Decay', description: 'Zombie game', price: 99.99 },
    { name: 'FIFA 21', description: 'Soccer Game', price: 210 },
  ]
  
  beforeAll(async () => {
    await Connection.create()
    const repository = getRepository(Game)
    await repository.clear()
    for (const game of games) {
      await repository.save(game)
    }
  })
  
  afterAll(async () => {
    await Connection.clear()
    await Connection.close();
  })
  
  test('Should return all games on the first page of the pagination', async () => {
    const { body } = await request(app).get('/games/1')
    expect(body.length).toBe(8)
  })
})
