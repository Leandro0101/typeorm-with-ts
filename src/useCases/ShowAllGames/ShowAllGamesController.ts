import { IController } from "../../protocols/IController";
import { Request, Response } from 'express'
import { ShowAllGamesUseCase } from "./ShowAllGamesUseCase";

export class ShowAllGamesController implements IController {

  constructor(private showAllGamesUseCase: ShowAllGamesUseCase) { }

  async handle(httpRequest: Request, httpResponse: Response): Promise<Response> {
    const skip = parseInt(httpRequest.params.page)
    const games = await this.showAllGamesUseCase.execute(skip)

    return httpResponse.status(200).json(games)
  }
}