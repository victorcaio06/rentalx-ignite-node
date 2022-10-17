import { Request, Response } from 'express';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const listCategories = this.listCategoriesUseCase.execute();
    return response.status(200).json(listCategories);
  }
}
