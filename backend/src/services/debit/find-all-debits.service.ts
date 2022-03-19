import { Injectable } from '@nestjs/common';
import { Debit } from '@/database/entities/debit.entity';
import { DebitRepository } from '@/repositories/debit.repository';
import { Account } from '@/database/entities/account.entity';

@Injectable()
export class FindAllDebitsService {
  constructor(private debitRepository: DebitRepository) { }
  async find(account: Account['id']): Promise<Debit[]> {
    return this.debitRepository.find({ where: { account } });
  }
}
