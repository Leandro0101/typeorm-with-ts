import { IController } from '@protocols/IController'
import { Request, Response } from 'express'
import { UpdateUseCase } from './UpdateUseCase'
export class UpdateController implements IController {
  
  constructor(private updateGameUseCase: UpdateUseCase){ }
  
  async handle(httpRequest: Request, httpResponse: Response) :Promise<Response> {
    
    const { id } = httpRequest.params
    
    try {
      const updatedGame = await this.updateGameUseCase.execute(id, httpRequest.body)
      
      return httpResponse.status(200).json(updatedGame) 
    } catch (error) {
      return httpResponse.status(error.statusCode).json(error)
    }
  }
}