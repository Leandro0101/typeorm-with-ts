import { Router } from 'express'
import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Game } from './entities/Game'
import { createGameController } from './useCases/CreateGame'
import { showAllGamesController } from './useCases/ShowAllGames'

const route = Router()

route.post('/games', (httpRequest: Request, httpResponse: Response) => {
  return createGameController(getRepository(Game)).handle(httpRequest, httpResponse)
})

route.get('/games', (httpRequest: Request, httpResponse: Response) => {
  return showAllGamesController(getRepository(Game)).handle(httpRequest, httpResponse)
})

export default route