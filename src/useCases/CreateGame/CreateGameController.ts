import { Request, Response } from 'express'
import { badRequest } from '../../errors/badRequest';
import { MissingParamError } from '../../errors/badRequest/MissingParamError';
import { IController } from '../../protocols/IController';
import { CreateGameUseCase } from "./CreateGameUseCase";
export class CreateGameController implements IController {

  constructor(private createGameUseCase: CreateGameUseCase) { }

  async handle(httpRequest: Request, httpResponse: Response): Promise<Response> {

    const requiredFields = ['name', 'description', 'price']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        const error = badRequest(new MissingParamError(field))
        return httpResponse.status(error.statusCode).json(error.body)
      }
    }

    const game = await this.createGameUseCase.execute(httpRequest.body)

    return httpResponse.status(201).json(game)
  }
}