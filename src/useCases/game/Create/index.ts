import { Repository } from 'typeorm'
import { Game } from '@entities/Game'
import { GameRepositoryTypeOrm } from '@repositories/implementations/GameRepositoryTypeOrm'
import { CreateController } from './CreateController'
import { CreateUseCase } from './CreateUseCase'

export const createGameController = (repository: Repository<Game>): CreateController => {
  const gameRepository = new GameRepositoryTypeOrm(repository)
  const createUseCase = new CreateUseCase(gameRepository)

  return new CreateController(createUseCase)
}