import { Test } from '@nestjs/testing';
import faker from 'faker';
import { Account } from '@/database/entities/__mocks__/account.entity';
import { UpdateAccountInput } from '@/inputs/account/update-account.input';
import { UpdateAccountService } from '@/services/account/update-account.service';
import { UpdateAccountResolver } from './update-account.resolver';

jest.mock('@/services/account/update-account.service');
describe('UpdateAccountResolver', () => {
  type SutTypes = { sut: UpdateAccountResolver; service: UpdateAccountService };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [UpdateAccountService, UpdateAccountResolver],
    }).compile();
    const resolver = moduleRef.get<UpdateAccountResolver>(UpdateAccountResolver);
    const service = moduleRef.get<UpdateAccountService>(UpdateAccountService);
    const sutTypes = { service, sut: resolver };
    return sutTypes;
  };
  it('should update a Account', async () => {
    const { sut, service } = await makeSut();
    const input: UpdateAccountInput = {
      name: faker.random.words(),
      password: faker.internet.password()
    };
    await sut.updateAccount(Account.id, input);
    expect(service.update).toHaveBeenCalledWith(Account.id, input);
  });
});
