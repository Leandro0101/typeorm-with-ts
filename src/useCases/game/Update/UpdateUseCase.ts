import { IGameRepository } from "@repositories/IGameRepository";
import { Game } from '@entities/Game';
import { IGameDTO } from "@protocols/IGameDTO";
import Exception from "@errors/index";
import { MissingParamError } from "@errors/MissingParamError";

export class UpdateUseCase {
  constructor(private gameRepository: IGameRepository) { }

  async execute(id: string, data: IGameDTO): Promise<Game> {
    const game = await this.gameRepository.findById(id)

    const requiredFields = ['name', 'description', 'price']

    for (const field of requiredFields) {
      if (!data[field]) {
        throw new Exception().handler(new MissingParamError(), 400)
      }
    }

    game.description = data.description
    game.price = data.price
    game.name = data.name

    const updatedGame = this.gameRepository.save(game)

    return updatedGame
  }
}