import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const id = request.headers.user_id;

      const user_id: string = id.toString();
      const listUsers = this.listAllUsersUseCase.execute({ user_id });

      return response.status(201).json(listUsers);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
