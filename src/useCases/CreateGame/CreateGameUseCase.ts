import { ICreateGameDTO } from "./ICreateGameDTO";
import { IGameRepository } from '../../repositories/IGameRepository'

export class CreateGameUseCase {

  constructor(private gameRepository: IGameRepository) { }

  async execute(data: ICreateGameDTO): Promise<ICreateGameDTO> {

    const { name, description, price } = await this.gameRepository.save(data)
    
    return { name, description, price }
  }
}