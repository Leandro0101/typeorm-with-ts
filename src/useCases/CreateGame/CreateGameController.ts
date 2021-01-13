import { IController } from "../../protocols/Controller";
import { Request, Response } from 'express'
import { CreateGameUseCase } from "./CreateGameUseCase";
export class CreateGameController implements IController {
  async handle (httpRequest: Request, httpResponse: Response): Promise<Response> {
    const c = new CreateGameUseCase()
    c.execute({ name: 'Fasd', description: 'adasd', price: 90})

    return httpResponse.status(201).json({ message: 'Criado!' })
  }
}