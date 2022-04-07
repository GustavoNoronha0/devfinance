import { Injectable } from '@nestjs/common';
import { Receivement } from '@/database/entities/receivement.entity';
import { CreateReceivementInput } from '@/inputs/receivement/create-receivement.input';
import { ReceivementRepository } from '@/repositories/receivement.repository';
import { AccountRepository } from '@/repositories/account.repository';
import { CategoryReceivementRepository } from '@/repositories/category-receivement.repository';

@Injectable()
export class CreateReceivementService {
  constructor(
    private receivementRepository: ReceivementRepository,
    private accountRepository: AccountRepository,
    private categoryReceivementRepository: CategoryReceivementRepository,
  ) { }
  async create(input: CreateReceivementInput): Promise<Receivement> {
    const account = await this.accountRepository.findOne({ where: { id: input.account } })
    const categoryReceivement = await this.categoryReceivementRepository.findOne({ where: { title: input.categoryReceivement } })
    const receivementToCreate = this.receivementRepository.create(
      {
        account,
        categoryReceivement,
        description: input.description,
        title: input.title,
        value: input.value,
        date: input.date
      }
    )
    return this.receivementRepository.save(receivementToCreate);
  }
}
