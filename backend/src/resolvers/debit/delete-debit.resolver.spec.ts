import { Test } from '@nestjs/testing';
import { Debit } from '@/database/entities/__mocks__/debit.entity';
import { DeleteDebitService } from '@/services/debit/delete-debit.service';
import { DeleteDebitResolver } from './delete-debit.resolver';

jest.mock('@/services/debit/delete-debit.service');
describe('DeleteDebitResolver', () => {
  type SutTypes = { sut: DeleteDebitResolver; service: DeleteDebitService };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [DeleteDebitService, DeleteDebitResolver],
    }).compile();
    const service = moduleRef.get<DeleteDebitService>(DeleteDebitService);
    const resolver = moduleRef.get<DeleteDebitResolver>(DeleteDebitResolver);
    const sutTypes = { service, sut: resolver };
    return sutTypes;
  };
  it('should delete a Debit', async () => {
    const { sut, service } = await makeSut();
    await sut.deleteDebit(Debit.id);
    expect(service.delete).toHaveBeenCalledWith(Debit.id);
  });
});
