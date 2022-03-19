import { Test } from '@nestjs/testing';
import { Debit } from '@/database/entities/__mocks__/debit.entity';
import { DebitRepository } from '@/repositories/debit.repository';
import { DeleteDebitService } from '@/services/debit/delete-debit.service';

jest.mock('@/repositories/debit.repository');
describe('DeleteDebitService', () => {
  type SutTypes = { sut: DeleteDebitService; repository: DebitRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [DebitRepository, DeleteDebitService],
    }).compile();
    const service = moduleRef.get<DeleteDebitService>(DeleteDebitService);
    const repository = moduleRef.get<DebitRepository>(DebitRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should remove a Debit', async () => {
    const { sut, repository } = await makeSut();
    await sut.delete(Debit.id);
    expect(repository.remove).toHaveBeenCalledWith(Debit);
  });
});
