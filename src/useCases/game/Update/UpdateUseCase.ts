import { IGameRepository } from "@repositories/IGameRepository";
import { Game } from '@entities/Game';
import { IGameDTO } from "@protocols/IGameDTO";
import Exception from '@errors/index'
import { MissingParamError } from "@errors/MissingParamError";

export class UpdateUseCase {
  constructor(private gameRepository: IGameRepository) {}

  async execute(id: string, data: IGameDTO): Promise<Game> {
    const game = await this.gameRepository.findById(id)
    const { name, description, price } = data
    const requiredFields = ['name', 'description', 'price']

    for(const field of requiredFields) {
      if (!data[field] || !/[a-z]|[0-9]/ig.test(data[field])) {
        throw new Exception().handler(new MissingParamError(), 400)
      }
    }
    game.description = description
    game.name = name
    game.price = price

    const updatedGame = this.gameRepository.save(game)

    return updatedGame
  }
}