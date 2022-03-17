import { Test } from '@nestjs/testing';
import { Account } from '@/database/entities/__mocks__/account.entity';
import { FindAccountService } from '@/services/account/find-account.service';
import { FindAccountResolver } from './find-account.resolver';

jest.mock('@/services/find-account.service');
describe('FindAccountResolver', () => {
  type SutTypes = { sut: FindAccountResolver; service: FindAccountService };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [FindAccountService, FindAccountResolver],
    }).compile();
    const service = moduleRef.get<FindAccountService>(FindAccountService);
    const resolver = moduleRef.get<FindAccountResolver>(FindAccountResolver);
    const sutTypes = { service, sut: resolver };
    return sutTypes;
  };
  it('should find a Account by id', async () => {
    const { sut, service } = await makeSut();
    expect(await sut.account(Account.id)).toBe(Account);
    expect(service.findById).toHaveBeenCalledWith(Account.id);
  });
});
