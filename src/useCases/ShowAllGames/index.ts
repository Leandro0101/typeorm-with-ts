import { ShowAllGamesUseCase } from './ShowAllGamesUseCase'
import { ShowAllGamesController } from './ShowAllGamesController'
import { GameRepositoryTypeOrm } from '../../repositories/implementations/GameRepositoryTypeOrm'
import { Repository } from 'typeorm'
import { Game } from '../../entities/Game'

export const showAllGamesController = (repository: Repository<Game>): ShowAllGamesController => {
  const gameRepositoryTypeOrm = new GameRepositoryTypeOrm(repository)
  const showAllGamesUseCase = new ShowAllGamesUseCase(gameRepositoryTypeOrm)
  return new ShowAllGamesController(showAllGamesUseCase)
}

