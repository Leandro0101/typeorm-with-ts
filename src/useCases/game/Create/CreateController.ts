import { Request, Response } from 'express'
import { IController } from '@protocols/IController'
import { CreateUseCase } from './CreateUseCase'
export class CreateController implements IController {

  constructor(private createUseCase: CreateUseCase) { }

  async handle(httpRequest: Request, httpResponse: Response): Promise<Response> {

    try {
      const game = await this.createUseCase.execute(httpRequest.body)
      return httpResponse.status(201).json(game)
    } catch (error) {
      return httpResponse.status(error.statusCode).json(error)
    }
  }
}