import { ShowAllGamesUseCase } from './ShowAllGamesUseCase'
import { ShowAllGamesController } from './ShowAllGamesController'
import { GameRepositoryTypeOrm } from '../../repositories/implementations/GameRepositoryTypeOrm'

const gameRepositoryTypeOrm = new GameRepositoryTypeOrm
const showAllGamesUseCase = new ShowAllGamesUseCase(gameRepositoryTypeOrm)
const showAllGamesController = new ShowAllGamesController(showAllGamesUseCase)

export { showAllGamesController }