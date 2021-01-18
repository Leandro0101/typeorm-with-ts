import { IController } from "../../protocols/IController";
import { Request, Response } from 'express'
import { ShowAllGamesUseCase } from "./ShowAllGamesUseCase";

export class ShowAllGamesController implements IController {

  constructor(private showAllGamesUseCase: ShowAllGamesUseCase){}

  async handle(httpRequest: Request, httpResponse: Response): Promise<Response> {
    const games = await this.showAllGamesUseCase.execute()
    
    return httpResponse.status(200).json(games)
  }
}