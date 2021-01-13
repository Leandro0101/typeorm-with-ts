import { ICreateGameDTO } from "./ICreateGameDTO";
import { IGameRepository } from '../../repositories/IGameRepository'

export class CreateGameUseCase {

  constructor(private gameRepository: IGameRepository) { }

  async execute(data: ICreateGameDTO) {
    await this.gameRepository.save(data)
  }
}