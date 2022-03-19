import { Injectable } from '@nestjs/common';
import { CategoryReceivement } from '@/database/entities/category-receivement.entity';
import { CategoryReceivementRepository } from '@/repositories/category-receivement.repository';
import { Account } from '@/database/entities/account.entity';

@Injectable()
export class FindAllCategoryReceivementsService {
  constructor(private categoryReceivementRepository: CategoryReceivementRepository) { }
  async find(account: Account['id']): Promise<CategoryReceivement[]> {
    return this.categoryReceivementRepository.find({ where: { account } });
  }
}
