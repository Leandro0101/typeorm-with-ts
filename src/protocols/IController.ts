import { Request, Response } from 'express'
export interface IController {
  handle: (httpRequest: Request, httpResponse: Response) => Promise<Response>
}