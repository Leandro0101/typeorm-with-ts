import { IGameRepository } from '../IGameRepository'
import { ICreateGameDTO } from '../../useCases/CreateGame/ICreateGameDTO'
import { getRepository } from 'typeorm'
import { Game } from '../../entities/Game'
export class GameRepositoryTypeOrm implements IGameRepository {
  async findAll(): Promise<Game[]> {
    const repository = getRepository(Game)
    return repository.find()
  }

  async save(game: ICreateGameDTO): Promise<ICreateGameDTO> {
    const repository = getRepository(Game)
    return await repository.save(game)
  }

  async findByName(name: string): Promise<Game> {
    const repository = getRepository(Game)
    const games = await repository.find({ where: { name } })
    return games[0]
  }
}