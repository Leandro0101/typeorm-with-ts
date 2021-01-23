import { Router } from 'express'
import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Game } from './entities/Game'
import { createGameController } from './useCases/game/Create'
import { showAllGamesController } from './useCases/game/FindAll'

const route = Router()

route.post('/games', (httpRequest: Request, httpResponse: Response) => {
  return createGameController(getRepository(Game)).handle(httpRequest, httpResponse)
})

route.get('/games/:page', (httpRequest: Request, httpResponse: Response) => {
  return showAllGamesController(getRepository(Game)).handle(httpRequest, httpResponse)
})

export default route