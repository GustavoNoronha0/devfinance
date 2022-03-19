import { Test } from '@nestjs/testing';
import { Debit } from '@/database/entities/__mocks__/debit.entity';
import { FindAllDebitsService } from '@/services/debit/find-all-debits.service';
import { FindAllDebitsResolver } from './find-all-debits.resolver';

jest.mock('@/services/debit/find-all-debits.service');
describe('FindAllDebitsResolver', () => {
  type SutTypes = { sut: FindAllDebitsResolver; service: FindAllDebitsService };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [FindAllDebitsService, FindAllDebitsResolver],
    }).compile();
    const service = moduleRef.get<FindAllDebitsService>(FindAllDebitsService);
    const resolver = moduleRef.get<FindAllDebitsResolver>(FindAllDebitsResolver);
    const sutTypes = { service, sut: resolver };
    return sutTypes;
  };
  it('should find all Debit', async () => {
    const { sut } = await makeSut();
    expect(await sut.debits(Debit.id)).toMatchObject([Debit]);
  });
});
