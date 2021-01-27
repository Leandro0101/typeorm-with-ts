import { Game } from '@entities/Game';
import { IGameDTO } from '@protocols/IGameDTO'
export interface IGameRepository {
  save(game: IGameDTO): Promise<Game>
  findByName(name: string): Promise<Game | undefined>
  findAll(skip: number): Promise<Game[]>
  findById(id: string): Promise<Game>
}