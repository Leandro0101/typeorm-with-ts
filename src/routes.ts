import { Router } from 'express'
import { gameController } from './useCases/CreateGame'
import { Request, Response } from 'express'
const route = Router()

route.post('/games', (httpRequest: Request, httpResponse: Response) => {
  gameController.handle(httpRequest, httpResponse)
})

export default route