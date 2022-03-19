import { Test } from '@nestjs/testing';
import faker from 'faker';
import { Debit } from '@/database/entities/__mocks__/debit.entity';
import { CreateDebitService } from '@/services/debit/create-debit.service';
import { CreateDebitResolver } from './create-debit.resolver';
import { DebitInput } from '@/interfaces/debit/create-debit.interface';

jest.mock('@/services/debit/create-debit.service');
describe('CreateDebitResolver', () => {
  type SutTypes = { sut: CreateDebitResolver; service: CreateDebitService };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [CreateDebitService, CreateDebitResolver],
    }).compile();
    const service = moduleRef.get<CreateDebitService>(CreateDebitService);
    const resolver = moduleRef.get<CreateDebitResolver>(CreateDebitResolver);
    const sutTypes = { service, sut: resolver };
    return sutTypes;
  };
  it('should create a Debit', async () => {
    const { sut, service } = await makeSut();
    const input: DebitInput = {
      account: faker.random.uuid(),
      categoryDebit: faker.random.uuid(),
      title: faker.random.words(),
      description: faker.random.words(),
      value: faker.random.number(),
      date: faker.date.future(),
    };
    expect(await sut.createDebit(input)).toBe(Debit);
    expect(service.create).toHaveBeenCalledWith(input);
  });
});
