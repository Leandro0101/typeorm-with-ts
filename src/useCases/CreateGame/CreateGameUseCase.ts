import { ICreateGameDTO } from "./ICreateGameDTO";
import { IGameRepository } from '../../repositories/IGameRepository'
import { badRequest } from '../../errors/badRequest';
import { MissingParamError } from '../../errors/badRequest/MissingParamError';

export class CreateGameUseCase {

  constructor(private gameRepository: IGameRepository) { }

  async execute(data: ICreateGameDTO): Promise<ICreateGameDTO> {

    const requiredFields = ['name', 'description', 'price']

    for (const field of requiredFields) {
      if (!data[field]) {
        throw badRequest(new MissingParamError())
      }
    }

    if (await this.gameRepository.findByName(data.name)) {
      throw badRequest(new MissingParamError())
    }

    const { name, description, price } = await this.gameRepository.save(data)

    return { name, description, price }
  }
}