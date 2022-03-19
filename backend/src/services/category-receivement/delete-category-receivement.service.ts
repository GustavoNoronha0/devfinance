import { Injectable } from '@nestjs/common';
import { CategoryReceivementRepository } from '@/repositories/category-receivement.repository';

@Injectable()
export class DeleteCategoryReceivementService {
  constructor(private categoryReceivementRepository: CategoryReceivementRepository) { }
  async delete(id: string): Promise<true> {
    const categoryReceivement = await this.categoryReceivementRepository.findOneOrFail(id);
    await this.categoryReceivementRepository.remove(categoryReceivement);
    return true;
  }
}
