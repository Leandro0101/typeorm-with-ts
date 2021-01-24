import { IGameRepository } from "@repositories/IGameRepository";
import { Game } from '@entities/Game';

export class UpdateUseCase {
  constructor(private gameRepository: IGameRepository) {}

  async execute(id: string, name: string, description: string, price: number): Promise<Game> {
    const game = await this.gameRepository.findById(id)

    game.description = description
    game.name = name
    game.price = price

    const updatedGame = this.gameRepository.save(game)

    return updatedGame
  }
}