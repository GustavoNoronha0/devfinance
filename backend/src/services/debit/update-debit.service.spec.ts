import { Test } from '@nestjs/testing';
import faker from 'faker';
import { Debit } from '@/database/entities/__mocks__/debit.entity';
import { UpdateDebitInput } from '@/inputs/debit/update-debit.input';
import { DebitRepository } from '@/repositories/debit.repository';
import { UpdateDebitService } from './update-debit.service';

jest.mock('@/repositories/debit.repository');
describe('UpdateDebitService', () => {
  type SutTypes = { sut: UpdateDebitService; repository: DebitRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [DebitRepository, UpdateDebitService],
    }).compile();
    const repository = moduleRef.get<DebitRepository>(DebitRepository);
    const service = moduleRef.get<UpdateDebitService>(UpdateDebitService);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should update a Debit', async () => {
    const { sut, repository } = await makeSut();
    const input: UpdateDebitInput = {
      title: faker.random.words(),
      description: faker.random.words(),
      value: faker.random.number(),
      date: faker.date.future(),
    };
    expect(await sut.update(Debit.id, input)).toBe(Debit);
    expect(repository.save).toHaveBeenCalledWith(Object.assign(Debit, input));
  });
});
