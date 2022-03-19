import { Test } from '@nestjs/testing';
import faker from 'faker';
import { Account } from '@/database/entities/__mocks__/account.entity';
import { CreateAccountService } from '@/services/account/create-account.service';
import { CreateAccountResolver } from './create-account.resolver';
import { CreateAccountInput } from '@/interfaces/account/create-account.interface';

jest.mock('@/services/account/create-account.service');
describe('CreateAccountResolver', () => {
  type SutTypes = { sut: CreateAccountResolver; service: CreateAccountService };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [CreateAccountService, CreateAccountResolver],
    }).compile();
    const service = moduleRef.get<CreateAccountService>(CreateAccountService);
    const resolver = moduleRef.get<CreateAccountResolver>(CreateAccountResolver);
    const sutTypes = { service, sut: resolver };
    return sutTypes;
  };
  it('should create a Account', async () => {
    const { sut, service } = await makeSut();
    const input: CreateAccountInput = {
      name: faker.random.words(),
      email: faker.internet.email(),
      password: faker.internet.password()
    };
    expect(await sut.createAccount(input)).toBe(Account);
    expect(service.create).toHaveBeenCalledWith(input);
  });
});
