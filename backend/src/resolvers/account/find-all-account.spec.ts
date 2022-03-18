import { Test } from '@nestjs/testing';
import { Account } from '@/database/entities/__mocks__/account.entity';
import { FindAllAccountsService } from '@/services/account/find-all-account.service';
import { FindAllAccountsResolver } from './find-all-account.resolver';

jest.mock('@/services/find-all-accounts.service');
describe('FindAllAccountsResolver', () => {
  type SutTypes = { sut: FindAllAccountsResolver; service: FindAllAccountsService };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [FindAllAccountsService, FindAllAccountsResolver],
    }).compile();
    const service = moduleRef.get<FindAllAccountsService>(FindAllAccountsService);
    const resolver = moduleRef.get<FindAllAccountsResolver>(FindAllAccountsResolver);
    const sutTypes = { service, sut: resolver };
    return sutTypes;
  };
  it('should find all Account', async () => {
    const { sut } = await makeSut();
    expect(await sut.accounts(Account.id)).toMatchObject([Account]);
  });
});
