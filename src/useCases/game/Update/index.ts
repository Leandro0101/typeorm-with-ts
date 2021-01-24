import { GameRepositoryTypeOrm } from '@repositories/implementations/GameRepositoryTypeOrm'
import { UpdateController } from './UpdateController'
import { UpdateUseCase } from './UpdateUseCase'
import { Repository } from 'typeorm'
import { Game } from '@entities/Game'

export const updateGameController = (repository: Repository<Game>): UpdateController => {
  const gameRepositoryTypeOrm = new GameRepositoryTypeOrm(repository)
  const updateGameUseCase = new UpdateUseCase(gameRepositoryTypeOrm)
  return new UpdateController(updateGameUseCase)
}