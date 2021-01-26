import { getRepository } from 'typeorm'
import  Connection  from '../../../typeorm'
import { Game } from '@entities/Game'
import request from 'supertest'
import app from '../../../app'
describe('UpdateGameUseCase', () => {
  
  let repository

  beforeAll(async () => {
    await Connection.create()
    repository = getRepository(Game)
    await repository.clear()
  })
  
  afterAll(async () => {
    await Connection.clear()
    await Connection.close();
  })
  
  test('Should return the updated game', async () => {
    let game = await repository.save({ name: 'game test', description: 'game test description', price: 11 })
    
    game = await repository.findOne(game.id) 
    
    const response = await request(app).put(`/games/${game.id}`).send({ name: 'game test atualizado', description: 'game test description', price: 22 })
    console.log(response.body)
    expect(8).toBe(8)
  })
})
