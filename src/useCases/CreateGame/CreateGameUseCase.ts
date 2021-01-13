import { ICreateGameDTO } from "./CreateGameDTO";
import { getRepository } from 'typeorm'
import { Game } from "../../entities/Game";
export class CreateGameUseCase {

  async execute(data: ICreateGameDTO) {
    const repository = getRepository(Game)

    await repository.save(data)
  }
}