import { Test } from '@nestjs/testing';
import faker from 'faker';
import { Debit } from '@/database/entities/__mocks__/debit.entity';
import { DebitRepository } from '@/repositories/debit.repository';
import { CreateDebitService } from './create-debit.service';
import { DebitInput } from '@/interfaces/debit/create-debit.interface';

jest.mock('@/repositories/debit.repository');
describe('CreateDebitService', () => {
  type SutTypes = { sut: CreateDebitService; repository: DebitRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [DebitRepository, CreateDebitService],
    }).compile();
    const service = moduleRef.get<CreateDebitService>(CreateDebitService);
    const repository = moduleRef.get<DebitRepository>(DebitRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should create a Debit', async () => {
    const { sut, repository } = await makeSut();
    const debitCreateInput: DebitInput = {
      account: faker.random.uuid(),
      categoryDebit: faker.random.word(),
      title: faker.random.words(),
      description: faker.random.words(),
      value: faker.random.number(),
      date: faker.date.future(),
    };
    expect(await sut.create(debitCreateInput)).toBe(Debit);
    expect(repository.save).toHaveBeenCalledWith(debitCreateInput);
  });
});
