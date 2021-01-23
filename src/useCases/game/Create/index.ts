import { Repository } from 'typeorm'
import { Game } from '@entities/Game'
import { GameRepositoryTypeOrm } from '@repositories/implementations/GameRepositoryTypeOrm'
import { CreateGameController } from './CreateGameController'
import { CreateGameUseCase } from './CreateGameUseCase'

export const createGameController = (repository: Repository<Game>): CreateGameController => {
  const gameRepository = new GameRepositoryTypeOrm(repository)
  const createGameUseCase = new CreateGameUseCase(gameRepository)

  return new CreateGameController(createGameUseCase)
}