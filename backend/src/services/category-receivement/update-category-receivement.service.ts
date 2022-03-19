import { Injectable } from '@nestjs/common';
import { CategoryReceivement } from '@/database/entities/category-receivement.entity';
import { UpdateCategoryReceivementInput } from '@/inputs/category-receivement/update-category-receivement.input';
import { CategoryReceivementRepository } from '@/repositories/category-receivement.repository';

@Injectable()
export class UpdateCategoryReceivementService {
  constructor(private categoryReceivementRepository: CategoryReceivementRepository) { }
  async update(id: string, input: UpdateCategoryReceivementInput): Promise<CategoryReceivement> {
    const categoryReceivement = await this.categoryReceivementRepository.findOneOrFail(id);
    const categoryReceivementUpdated = Object.assign(categoryReceivement, input);
    return this.categoryReceivementRepository.save(categoryReceivementUpdated);
  }
}
