import { Game } from '@entities/Game'
import { IGameRepository } from '@repositories/IGameRepository'

export class ShowAllGamesUseCase {
  constructor(private gameRepository: IGameRepository) { }

  async execute(skip: number): Promise<Game[]> {

    const games = await this.gameRepository.findAll(skip)

    return games 
  }
}