import { IController } from '@protocols/IController'
import { Request, Response } from 'express'
import { UpdateUseCase } from './UpdateUseCase'
export class UpdateController implements IController {
  
  constructor(private updateGameUseCase: UpdateUseCase){ }
  
  async handle(httpRequest: Request, httpResponse: Response) :Promise<Response> {
    
    const { id } = httpRequest.params

    const { description, name, price } = httpRequest.body
    const updatedGame = await this.updateGameUseCase.execute(id, name, description, price)
    
    return httpResponse.status(200).json(updatedGame)
  }
}