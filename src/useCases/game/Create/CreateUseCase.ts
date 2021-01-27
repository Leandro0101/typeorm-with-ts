
import { IGameDTO } from "../../../protocols/IGameDTO";
import { IGameRepository } from '@repositories/IGameRepository'
import Exception from '@errors/index'
import { MissingParamError } from '@errors/MissingParamError';
import { AlreadyExist } from '@errors/AlreadyExist';

export class CreateUseCase {

  constructor(private gameRepository: IGameRepository) { }

  async execute(data: IGameDTO): Promise<IGameDTO> {

    const requiredFields = ['name', 'description', 'price']

    for (const field of requiredFields) {
      if (!data[field] || !/[a-z]|[0-9]/ig.test(data[field])) {
        throw new Exception().handler(new MissingParamError(), 400)
      }
    }

    if (await this.gameRepository.findByName(data.name)) {
      throw new Exception().handler(new AlreadyExist(), 200)
    }

    const { name, description, price } = await this.gameRepository.save(data)

    return { name, description, price }
  }
}