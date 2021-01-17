import { IGameRepository } from '../IGameRepository'
import { ICreateGameDTO } from '../../useCases/CreateGame/ICreateGameDTO'
import { getRepository } from 'typeorm'
import { Game } from '../../entities/Game'
export class GameRepositoryTypeOrm implements IGameRepository {

  public async save(game: ICreateGameDTO): Promise<ICreateGameDTO> {
    const repository = getRepository(Game)
    return await repository.save(game)
  }

  public async findByName(name: string): Promise<Game> {
    const repository = getRepository(Game)
    const games = await repository.find({ where: { name } })
    return games[0]
  }
}