import { Injectable } from '@nestjs/common';
import { AccountReports } from '@/interfaces/reports/account-reports.interface';
import { DebitRepository } from '@/repositories/debit.repository';
import { ReceivementRepository } from '@/repositories/receivement.repository';

@Injectable()
export class FindAccountReportsService {
  constructor(
    private debitRepository: DebitRepository,
    private receivementRepository: ReceivementRepository,
  ) { }
  async findReports(account: string): Promise<AccountReports> {
    const sumAmountDebits = await this.debitRepository
      .createQueryBuilder('debit')
      .select('COALESCE(SUM(debit.value), 0)', 'sum')
      .leftJoinAndSelect('debit.account', 'account')
      .where('account.id = :account', { account })
      .getRawOne();
    const sumAmountReceivements = await this.receivementRepository
      .createQueryBuilder('receivement')
      .select('COALESCE(SUM(receivement.value), 0)', 'sum')
      .leftJoinAndSelect('receivement.account', 'account')
      .where('account.id = :account', { account })
      .getRawOne();
    const amountDebit = sumAmountDebits.sum
    const amountReceivement = sumAmountReceivements.sum
    const amountTotal = amountReceivement - amountDebit
    return {
      amountDebit: amountDebit.toFixed(2),
      amountReceivement: amountReceivement.toFixed(2),
      amountTotal: amountTotal.toFixed(2)
    }
  }
}
