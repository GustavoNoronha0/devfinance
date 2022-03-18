import { Injectable } from '@nestjs/common';
import { CategoryDebit } from '@/database/entities/category-debit.entity';
import { CategoryDebitRepository } from '@/repositories/category-debit.repository';
import { Account } from '@/database/entities/account.entity';

@Injectable()
export class FindAllCategoryDebitsService {
  constructor(private categoryDebitRepository: CategoryDebitRepository) { }
  async find(account: Account['id']): Promise<CategoryDebit[]> {
    return this.categoryDebitRepository.find({ where: { account } });
  }
}
