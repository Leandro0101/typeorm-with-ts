import { Request, Response } from 'express'
import { MissingParamError } from '../../errors/MissingParamError';
import { IController } from '../../protocols/IController';
import { CreateGameUseCase } from "./CreateGameUseCase";
export class CreateGameController implements IController {

  constructor(private createGameUseCase: CreateGameUseCase) { }

  async handle(httpRequest: Request, httpResponse: Response): Promise<Response> {

    const { name, description, price } = httpRequest.body

    if(!name){
      return httpResponse.status(400).json({ error: new MissingParamError('name') });
    }

    const game = await this.createGameUseCase.execute({ name, description, price })

    return httpResponse.status(201).json(game)
  }
}