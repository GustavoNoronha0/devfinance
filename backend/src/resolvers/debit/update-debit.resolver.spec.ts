import { Test } from '@nestjs/testing';
import faker from 'faker';
import { Debit } from '@/database/entities/__mocks__/debit.entity';
import { UpdateDebitInput } from '@/inputs/debit/update-debit.input';
import { UpdateDebitService } from '@/services/debit/update-debit.service';
import { UpdateDebitResolver } from './update-debit.resolver';

jest.mock('@/services/debit/update-debit.service');
describe('UpdateDebitResolver', () => {
  type SutTypes = { sut: UpdateDebitResolver; service: UpdateDebitService };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [UpdateDebitService, UpdateDebitResolver],
    }).compile();
    const resolver = moduleRef.get<UpdateDebitResolver>(UpdateDebitResolver);
    const service = moduleRef.get<UpdateDebitService>(UpdateDebitService);
    const sutTypes = { service, sut: resolver };
    return sutTypes;
  };
  it('should update a TODO', async () => {
    const { sut, service } = await makeSut();
    const input: UpdateDebitInput = {
      title: faker.random.words(),
      description: faker.random.words(),
      value: faker.random.number(),
      date: faker.date.future(),
    };
    await sut.updateDebit(Debit.id, input);
    expect(service.update).toHaveBeenCalledWith(Debit.id, input);
  });
});
