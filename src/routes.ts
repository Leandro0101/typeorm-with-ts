import { Router } from 'express'
import { userController } from './useCases/CreateGame'
import { Request, Response } from 'express'
const route = Router()

route.post('/games', (httpRequest: Request, httpResponse: Response) => {
  userController.handle(httpRequest, httpResponse)
})

export default route