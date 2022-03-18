import { Injectable } from '@nestjs/common';
import { CategoryDebit } from '@/database/entities/category-debit.entity';
import { CreateCategoryDebitInput } from '@/inputs/category-debit/create-category-debit.input';
import { CategoryDebitRepository } from '@/repositories/category-debit.repository';
import { AccountRepository } from '@/repositories/account.repository';

@Injectable()
export class CreateCategoryDebitService {
  constructor(private categoryDebitRepository: CategoryDebitRepository,
    private accountRepository: AccountRepository) { }
  async create(input: CreateCategoryDebitInput): Promise<CategoryDebit> {
    const account = await this.accountRepository.findOne({ where: { id: input.account } })
    const categoryDebitToCreate = this.categoryDebitRepository.create(
      {
        account, description: input.description, title: input.title,
      }
    )
    return this.categoryDebitRepository.save(categoryDebitToCreate);
  }
}
