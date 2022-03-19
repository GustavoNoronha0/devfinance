import { Test } from '@nestjs/testing';
import { Debit } from '@/database/entities/__mocks__/debit.entity';
import { DebitRepository } from '@/repositories/debit.repository';
import { FindDebitService } from './find-debit.service';

jest.mock('@/repositories/debit.repository');
describe('FindDebitService', () => {
  type SutTypes = { sut: FindDebitService; repository: DebitRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [DebitRepository, FindDebitService],
    }).compile();
    const service = moduleRef.get<FindDebitService>(FindDebitService);
    const repository = moduleRef.get<DebitRepository>(DebitRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should find a Debit by id', async () => {
    const { sut, repository } = await makeSut();
    expect(await sut.findById(Debit.id)).toBe(Debit);
    expect(repository.findOne).toHaveBeenCalledWith(Debit.id);
  });
});
