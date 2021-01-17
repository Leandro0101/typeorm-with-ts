import { Game } from '../entities/Game';
import { ICreateGameDTO } from '../useCases/CreateGame/ICreateGameDTO'
export interface IGameRepository {
  save(game: ICreateGameDTO): Promise<ICreateGameDTO>
  findByName(name: string): Promise<Game>
}