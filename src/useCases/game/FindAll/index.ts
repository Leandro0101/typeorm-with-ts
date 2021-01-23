import { FindAllGamesUseCase } from './FindAllGamesUseCase'
import { FindAllGamesController } from './FindAllGamesController'
import { GameRepositoryTypeOrm } from '@repositories/implementations/GameRepositoryTypeOrm'
import { Repository } from 'typeorm'
import { Game } from '@entities/Game'

export const showAllGamesController = (repository: Repository<Game>): FindAllGamesController => {
  const gameRepositoryTypeOrm = new GameRepositoryTypeOrm(repository)
  const showAllGamesUseCase = new FindAllGamesUseCase(gameRepositoryTypeOrm)
  return new FindAllGamesController(showAllGamesUseCase)
}

