import { Request, Response } from 'express'
import { IController } from '../../protocols/Controller';
import { CreateGameUseCase } from "./CreateGameUseCase";
export class CreateGameController implements IController {

  constructor(private createGameUseCase: CreateGameUseCase) { }

  async handle(httpRequest: Request, httpResponse: Response): Promise<Response> {

    const { name, description, price } = httpRequest.body

    const game = await this.createGameUseCase.execute({ name, description, price })

    return httpResponse.status(201).json(game)
  }
}