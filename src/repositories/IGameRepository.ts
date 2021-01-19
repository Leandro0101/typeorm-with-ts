import { Game } from '../entities/Game';
import { ICreateGameDTO } from '../useCases/CreateGame/ICreateGameDTO'
export interface IGameRepository {
  save(game: ICreateGameDTO): Promise<Game>
  findByName(name: string): Promise<Game | undefined>
  findAll(skip: number): Promise<Game[]>
}