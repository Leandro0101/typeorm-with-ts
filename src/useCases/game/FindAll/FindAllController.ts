import { IController } from '@protocols/IController'
import { Request, Response } from 'express'
import { FindAllUseCase } from './FindAllUseCase'

export class FindAllController implements IController {
  
  constructor(private findAllGamesUseCase: FindAllUseCase) { }
  
  async handle(httpRequest: Request, httpResponse: Response): Promise<Response> {
    const skip = parseInt(httpRequest.params.page)
    const games = await this.findAllGamesUseCase.execute(skip)
    
    return httpResponse.status(200).json(games)
  }
}