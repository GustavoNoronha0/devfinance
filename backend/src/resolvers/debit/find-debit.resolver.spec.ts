import { Test } from '@nestjs/testing';
import { Debit } from '@/database/entities/__mocks__/debit.entity';
import { FindDebitService } from '@/services/debit/find-debit.service';
import { FindDebitResolver } from './find-debit.resolver';

jest.mock('@/services/debit/find-debit.service');
describe('FindDebitResolver', () => {
  type SutTypes = { sut: FindDebitResolver; service: FindDebitService };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [FindDebitService, FindDebitResolver],
    }).compile();
    const service = moduleRef.get<FindDebitService>(FindDebitService);
    const resolver = moduleRef.get<FindDebitResolver>(FindDebitResolver);
    const sutTypes = { service, sut: resolver };
    return sutTypes;
  };
  it('should find a Debit by id', async () => {
    const { sut, service } = await makeSut();
    expect(await sut.debit(Debit.id)).toBe(Debit);
    expect(service.findById).toHaveBeenCalledWith(Debit.id);
  });
});
