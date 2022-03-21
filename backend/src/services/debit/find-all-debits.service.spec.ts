import { Test } from '@nestjs/testing';
import { Debit } from '@/database/entities/__mocks__/debit.entity';
import { DebitRepository } from '@/repositories/debit.repository';
import { FindAllDebitsService } from './find-all-debits.service';
import { Account } from '@/database/entities/__mocks__/account.entity';

jest.mock('@/repositories/debits.repository');
describe('FindAllDebitsService', () => {
  type SutTypes = { sut: FindAllDebitsService; repository: DebitRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [DebitRepository, FindAllDebitsService],
    }).compile();
    const service = moduleRef.get<FindAllDebitsService>(FindAllDebitsService);
    const repository = moduleRef.get<DebitRepository>(DebitRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should find all Debits', async () => {
    const { sut } = await makeSut();
    const input = {
      filters: { account: Account.id },
      paginate: { page: 1, limit: 10 }
    }
    expect(await sut.find(input)).toMatchObject([Debit]);
  });
});
