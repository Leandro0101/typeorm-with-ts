import { IGameRepository } from '../IGameRepository'
import { ICreateGameDTO } from '../../useCases/CreateGame/ICreateGameDTO'
import { getRepository } from 'typeorm'
import { Game } from '../../entities/Game'
export class GameRepositoryTypeOrm implements IGameRepository {
  save(game: ICreateGameDTO): Promise<void> {
    const repository = getRepository(Game)
    return repository.save(game)
  }
}