import { Specification } from '../../entities/Specification';
import { ISpecificationRepository } from '../../repositories/ISpecificationsRepository';

export class ListSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationRepository) {}

  execute(): Specification[] {
    const specifications = this.specificationsRepository.list();
    return specifications;
  }
}
