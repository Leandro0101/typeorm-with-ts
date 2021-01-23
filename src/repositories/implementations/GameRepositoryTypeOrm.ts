import { IGameRepository } from '../IGameRepository'
import { ICreateGameDTO } from '../../useCases/CreateGame/ICreateGameDTO'
import { Repository } from 'typeorm'
import { Game } from '../../entities/Game'
export class GameRepositoryTypeOrm implements IGameRepository {

  constructor(private repository: Repository<Game>) { }

  async findAll(skip: number): Promise<Game[]> {
    return await this.repository.find({
      skip: (skip - 1) * 8,
      take: 8
    })
  }

  async save(game: ICreateGameDTO): Promise<Game> {
    const newGame = this.repository.create(game);

    await this.repository.save(newGame)

    return newGame
  }

  async findByName(name: string): Promise<Game> {
    const games = await this.repository.find({ where: { name } })
    return games[0]
  }
}

