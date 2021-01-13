import { IController } from "../../protocols/Controller";
import { Request, Response } from 'express'
import { CreateGameUseCase } from "./CreateGameUseCase";
export class CreateGameController {

  
  constructor(private createGameUseCase: CreateGameUseCase) { }

  async handle(httpRequest: Request, httpResponse: Response): Promise<Response> {

    await this.createGameUseCase.execute({ name: 'Game teste', description: 'kkk', price: 900 })

    return httpResponse.status(201).json({ message: 'Criado!' })
  }
}