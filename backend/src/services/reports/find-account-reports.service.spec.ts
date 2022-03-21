import { Test } from '@nestjs/testing';
import { Account } from '@/database/entities/__mocks__/account.entity';
import { DebitRepository } from '@/repositories/debit.repository';
import { ReceivementRepository } from '@/repositories/receivement.repository';
import { AccountRepository } from '@/repositories/account.repository';
import { FindAccountReportsService } from './find-account-reports.service';

jest.mock('@/repositories/debit.repository');
jest.mock('@/repositories/receivement.repository');
describe('FindAccountReportsService', () => {
  type SutTypes = { sut: FindAccountReportsService; repository: AccountRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [DebitRepository, ReceivementRepository, FindAccountReportsService],
    }).compile();
    const service = moduleRef.get<FindAccountReportsService>(FindAccountReportsService);
    const repository = moduleRef.get<AccountRepository>(AccountRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should find a Account Reports by id', async () => {
    const { sut } = await makeSut();
    expect(await sut.findReports(Account.id)).toBe({
      amountDebit: '0.00',
      amountReceivement: '0.00',
      amountTotal: '0.00'
    });
  });
});
