import { IGameRepository } from '../IGameRepository'
import { IGameDTO } from '@protocols/IGameDTO'
import { Repository } from 'typeorm'
import { Game } from '@entities/Game'
export class GameRepositoryTypeOrm implements IGameRepository {

  constructor(private repository: Repository<Game>) { }

  async findById(id: string): Promise<Game | undefined> {
    return await this.repository.findOne(id)
  }

  async findAll(skip: number): Promise<Game[]> {
    return await this.repository.find({
      skip: (skip - 1) * 8,
      take: 8
    })
  }

  async save(game: IGameDTO): Promise<Game> {
    const newGame = this.repository.create(game);

    await this.repository.save(newGame)

    return newGame
  }

  async findByName(name: string): Promise<Game> {
    const games = await this.repository.find({ where: { name } })
    return games[0]
  }
}

