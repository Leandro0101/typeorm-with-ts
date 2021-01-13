import { ICreateGameDTO } from '../useCases/CreateGame/ICreateGameDTO'
export interface IGameRepository {
  save(game: ICreateGameDTO): Promise<void>
}