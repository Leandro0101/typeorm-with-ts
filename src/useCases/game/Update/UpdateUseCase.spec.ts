import { Game } from '@entities/Game'
import { getRepository } from 'typeorm'
import  Connection  from '../../../typeorm'
import request from 'supertest'
import app from '../../../app'
describe('UpdateGameUseCase', () => {
  
  let repository, game
  
  beforeAll(async () => {
    await Connection.create()
    repository = getRepository(Game)
    game = await repository.save({ name: 'Street Soccer', description: 'Game very good', price: 99 })
  })
  
  afterAll(async () => {
    await Connection.create()
    repository = getRepository(Game)
    await repository.clear()
    await Connection.close();
  })
  
  test('Test', async() => {
    const response = await request(app).put(`/games/${game.id}`).send({ name: 'Street Soccer atualizado', description: 'Game very good atualizado', price: 89 })
    const { name, description, price } = response.body
    expect({ name, description, price }).toEqual({ name: 'Street Soccer atualizado', description: 'Game very good atualizado', price: 89 })
    expect(response.status).toBe(200)
  })
})