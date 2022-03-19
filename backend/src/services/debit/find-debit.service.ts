import { Injectable } from '@nestjs/common';
import { Debit } from '@/database/entities/debit.entity';
import { DebitRepository } from '@/repositories/debit.repository';

@Injectable()
export class FindDebitService {
  constructor(private debitRepository: DebitRepository) { }
  async findById(id: string): Promise<Debit | undefined> {
    return this.debitRepository.findOne(id);
  }
}
