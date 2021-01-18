import { Router } from 'express'
import { createGameController } from './useCases/CreateGame'
import { showAllGamesController } from './useCases/ShowAllGames'
import { Request, Response } from 'express'
const route = Router()

route.post('/games', (httpRequest: Request, httpResponse: Response) => {
  createGameController.handle(httpRequest, httpResponse)
})

route.get('/games', (httpRequest: Request, httpResponse: Response) => {
  showAllGamesController.handle(httpRequest, httpResponse)
})


export default route