import { User } from "../entities/User"
import { getRepository } from "typeorm"
import { Request, Response } from 'express'
import { uuid } from "uuidv4"
export class UserController {
  async create(request: Request, response: Response): Promise<Response> {
    const repository = getRepository(User)
    const user = new User({ name: 'Wilker', surname: 'Jos[e', age: 18 })
    repository.save(user)

    return response.status(201).json(user)
  }
}
