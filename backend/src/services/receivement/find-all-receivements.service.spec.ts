import { Test } from '@nestjs/testing';
import { Receivement } from '@/database/entities/__mocks__/receivement.entity';
import { ReceivementRepository } from '@/repositories/receivement.repository';
import { FindAllReceivementsService } from './find-all-receivements.service';
import { Account } from '@/database/entities/__mocks__/account.entity';

jest.mock('@/repositories/receivements.repository');
describe('FindAllReceivementsService', () => {
  type SutTypes = { sut: FindAllReceivementsService; repository: ReceivementRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [ReceivementRepository, FindAllReceivementsService],
    }).compile();
    const service = moduleRef.get<FindAllReceivementsService>(FindAllReceivementsService);
    const repository = moduleRef.get<ReceivementRepository>(ReceivementRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should find all Receivements', async () => {
    const { sut } = await makeSut();
    const input = {
      filters: { account: Account.id },
      paginate: { page: 1, limit: 10 }
    }
    expect(await sut.find(input)).toMatchObject([Receivement]);
  });
});
