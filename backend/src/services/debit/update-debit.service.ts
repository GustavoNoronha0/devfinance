import { Injectable } from '@nestjs/common';
import { Debit } from '@/database/entities/debit.entity';
import { UpdateDebitInput } from '@/inputs/debit/update-debit.input';
import { DebitRepository } from '@/repositories/debit.repository';

@Injectable()
export class UpdateDebitService {
  constructor(private debitRepository: DebitRepository) { }
  async update(id: string, input: UpdateDebitInput): Promise<Debit> {
    const debit = await this.debitRepository.findOneOrFail(id);
    const debitUpdated = Object.assign(debit, input);
    return this.debitRepository.save(debitUpdated);
  }
}
