import { ICreateGameDTO } from "./ICreateGameDTO";
import { IGameRepository } from '../../repositories/IGameRepository'
import Exception from '../../errors'
import { MissingParamError } from '../../errors/MissingParamError';
import { AlreadyExist } from '../../errors/AlreadyExist';

export class CreateGameUseCase {

  constructor(private gameRepository: IGameRepository) { }

  async execute(data: ICreateGameDTO): Promise<ICreateGameDTO> {

    const requiredFields = ['name', 'description', 'price']

    for (const field of requiredFields) {
      if (!data[field]) {
        throw new Exception().handler(new MissingParamError(), 400)
      }

      if (await this.gameRepository.findByName(data.name)) {
        throw new Exception().handler(new AlreadyExist(), 200)
      }

      const { name, description, price } = await this.gameRepository.save(data) 
      return { name, description, price }
    }
  }
}