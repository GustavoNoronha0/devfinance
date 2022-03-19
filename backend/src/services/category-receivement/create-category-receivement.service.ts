import { Injectable } from '@nestjs/common';
import { CategoryReceivement } from '@/database/entities/category-receivement.entity';
import { CreateCategoryReceivementInput } from '@/inputs/category-receivement/create-category-receivement.input';
import { CategoryReceivementRepository } from '@/repositories/category-receivement.repository';
import { AccountRepository } from '@/repositories/account.repository';

@Injectable()
export class CreateCategoryReceivementService {
  constructor(private categoryReceivementRepository: CategoryReceivementRepository,
    private accountRepository: AccountRepository) { }
  async create(input: CreateCategoryReceivementInput): Promise<CategoryReceivement> {
    const account = await this.accountRepository.findOne({ where: { id: input.account } })
    const categoryReceivementToCreate = this.categoryReceivementRepository.create(
      {
        account, description: input.description, title: input.title,
      }
    )
    return this.categoryReceivementRepository.save(categoryReceivementToCreate);
  }
}
