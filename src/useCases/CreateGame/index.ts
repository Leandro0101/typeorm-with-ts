import { GameRepositoryTypeOrm } from '../../repositories/implementations/GameRepositoryTypeOrm'
import { CreateGameController } from './CreateGameController'
import { CreateGameUseCase } from './CreateGameUseCase'

const gameRepository = new GameRepositoryTypeOrm
const createGameUseCase = new CreateGameUseCase(gameRepository)
const userController = new CreateGameController(createGameUseCase)

export { userController }