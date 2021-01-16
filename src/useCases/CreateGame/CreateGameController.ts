import { Request, Response } from 'express'
import { IController } from '../../protocols/IController'
import { CreateGameUseCase } from "./CreateGameUseCase"
export class CreateGameController implements IController {

  constructor(private createGameUseCase: CreateGameUseCase) { }

  async handle(httpRequest: Request, httpResponse: Response): Promise<Response> {

    try {
      const game = await this.createGameUseCase.execute(httpRequest.body)
      return httpResponse.status(201).json(game)
    } catch (error) {
      return httpResponse.status(error.statusCode).json(error)
    }
  }
}