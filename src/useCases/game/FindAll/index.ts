import { FindAllUseCase } from './FindAllUseCase'
import { FindAllController } from './FindAllController'
import { GameRepositoryTypeOrm } from '@repositories/implementations/GameRepositoryTypeOrm'
import { Repository } from 'typeorm'
import { Game } from '@entities/Game'

export const findAllGamesController = (repository: Repository<Game>): FindAllController => {
  const gameRepositoryTypeOrm = new GameRepositoryTypeOrm(repository)
  const showAllGamesUseCase = new FindAllUseCase(gameRepositoryTypeOrm)
  return new FindAllController(showAllGamesUseCase)
}

