import { Test } from '@nestjs/testing';
import { Account } from '@/database/entities/__mocks__/account.entity';
import { DebitRepository } from '@/repositories/debit.repository';
import { ReceivementRepository } from '@/repositories/receivement.repository';
import { AccountRepository } from '@/repositories/account.repository';
import { FindAccountGraphService } from './find-account-graph.service';

jest.mock('@/repositories/debit.repository');
jest.mock('@/repositories/receivement.repository');
describe('FindAccountGraphService', () => {
  type SutTypes = { sut: FindAccountGraphService; repository: AccountRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [DebitRepository, ReceivementRepository, FindAccountGraphService],
    }).compile();
    const service = moduleRef.get<FindAccountGraphService>(FindAccountGraphService);
    const repository = moduleRef.get<AccountRepository>(AccountRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should find a Account Graph by id', async () => {
    const { sut } = await makeSut();
    expect(await sut.findGraph(Account.id)).toBe({
      countDebit: '0.00',
      countReceivement: '0.00',
      countTotal: '0.00'
    });
  });
});
