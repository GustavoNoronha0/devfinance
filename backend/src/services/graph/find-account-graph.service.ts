import { Injectable } from '@nestjs/common';
import { AccountGraph } from '@/interfaces/graph/account-graph.interface';
import { DebitRepository } from '@/repositories/debit.repository';
import { ReceivementRepository } from '@/repositories/receivement.repository';

@Injectable()
export class FindAccountGraphService {
  constructor(
    private debitRepository: DebitRepository,
    private receivementRepository: ReceivementRepository,
  ) { }
  async findGraph(account: string): Promise<AccountGraph> {
    const countReceivement = await this.receivementRepository
      .createQueryBuilder('debit')
      .leftJoinAndSelect('debit.account', 'account')
      .where('account.id = :account', { account })
      .getCount();
    const countDebit = await this.debitRepository
      .createQueryBuilder('receivement')
      .leftJoinAndSelect('receivement.account', 'account')
      .where('account.id = :account', { account })
      .getCount();
    const countTotal = countReceivement + countDebit
    return {
      countDebit: countDebit,
      countReceivement: countReceivement,
      countTotal: countTotal.toFixed(2)
    }
  }
}
