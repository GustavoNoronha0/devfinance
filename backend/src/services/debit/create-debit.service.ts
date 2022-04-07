import { Injectable } from '@nestjs/common';
import { Debit } from '@/database/entities/debit.entity';
import { CreateDebitInput } from '@/inputs/debit/create-debit.input';
import { DebitRepository } from '@/repositories/debit.repository';
import { AccountRepository } from '@/repositories/account.repository';
import { CategoryDebitRepository } from '@/repositories/category-debit.repository';

@Injectable()
export class CreateDebitService {
  constructor(
    private debitRepository: DebitRepository,
    private accountRepository: AccountRepository,
    private categoryDebitRepository: CategoryDebitRepository,
  ) { }
  async create(input: CreateDebitInput): Promise<Debit> {
    const account = await this.accountRepository.findOne({ where: { id: input.account } })
    const categoryDebit = await this.categoryDebitRepository.findOne({ where: { title: input.categoryDebit } })
    const debitToCreate = this.debitRepository.create(
      {
        account,
        categoryDebit,
        description: input.description,
        title: input.title,
        value: input.value,
        date: input.date
      }
    )
    return this.debitRepository.save(debitToCreate);
  }
}
