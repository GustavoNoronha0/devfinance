import { Injectable } from '@nestjs/common';
import { DebitRepository } from '@/repositories/debit.repository';

@Injectable()
export class DeleteDebitService {
  constructor(private debitRepository: DebitRepository) { }
  async delete(id: string): Promise<true> {
    const debit = await this.debitRepository.findOneOrFail(id);
    await this.debitRepository.remove(debit);
    return true;
  }
}
