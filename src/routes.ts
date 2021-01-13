import { Router } from 'express'
const route = Router()
import { CreateGameController } from './useCases/CreateGame/CreateGameController'
const userController = new CreateGameController()

route.post('/games', userController.handle)

export default route