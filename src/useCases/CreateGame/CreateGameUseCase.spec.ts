import request from 'supertest'
import app from '../../app'
import { getConnection, createConnections } from 'typeorm'
describe('CreateGameUseCase', () => {

  beforeAll(async () => {
    await createConnections()
  })

  afterAll(async () => {
    const defaultConnection = getConnection('default')
    await defaultConnection.close()
  })

  test('Should return 400 if no name is provided', async () => {
    const response = await request(app).post('/games').send({
      description: 'any description',
      price: 35.00
    })

    expect(response.status).toBe(400)
  })

  test('Should return 400 if no description is provided', async () => {
    const response = await request(app).post('/games').send({
      name: 'any name',
      price: 35.00
    })

    expect(response.status).toBe(400)
  })

  test('Should return 400 if no price is provided', async () => {
    const response = await request(app).post('/games').send({
      name: 'any name',
      description: 'any description',
    })

    expect(response.status).toBe(400)
  })

  // test('Should return 201 when a game is created', async () => {
  //   const response = await request(app).post('/games').send({
  //     name: 'any name',
  //     description: 'any description',
  //     price: 20
  //   })

  //   expect(response.status).toBe(201)
  // })

  // test('Should return the created game DTO', async () => {
  //   const response = await request(app).post('/games').send({
  //     name: 'any name',
  //     description: 'any description',
  //     price: 20
  //   })

  //   expect(response.body).toEqual({
  //     name: 'any name',
  //     description: 'any description',
  //     price: 20
  //   })
  // })
})