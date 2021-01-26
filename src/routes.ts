import { Router } from 'express'
import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Game } from './entities/Game'
import { createGameController } from './useCases/game/Create'
import { findAllGamesController } from './useCases/game/FindAll'
import { updateGameController } from './useCases/game/Update'
const route = Router()

route.post('/games', (httpRequest: Request, httpResponse: Response) =>
  createGameController(getRepository(Game)).handle(httpRequest, httpResponse)
)

route.get('/games/:page', (httpRequest: Request, httpResponse: Response) =>
  findAllGamesController(getRepository(Game)).handle(httpRequest, httpResponse)
)

route.put('/games/:id', (httpRequest: Request, httpResponse: Response) =>
  updateGameController(getRepository(Game)).handle(httpRequest, httpResponse)
)

export default route