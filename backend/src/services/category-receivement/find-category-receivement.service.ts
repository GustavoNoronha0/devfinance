import { Injectable } from '@nestjs/common';
import { CategoryReceivement } from '@/database/entities/category-receivement.entity';
import { CategoryReceivementRepository } from '@/repositories/category-receivement.repository';

@Injectable()
export class FindCategoryReceivementService {
  constructor(private categoryReceivementRepository: CategoryReceivementRepository) { }
  async findById(id: string): Promise<CategoryReceivement | undefined> {
    return this.categoryReceivementRepository.findOne(id);
  }
}
