import { Test } from '@nestjs/testing';
import { CategoryReceivement } from '@/database/entities/__mocks__/category-receivement.entity';
import { CategoryReceivementRepository } from '@/repositories/category-receivement.repository';
import { FindAllCategoryReceivementsService } from './find-all-category-receivements.service';
import { Account } from '@/database/entities/__mocks__/account.entity';

jest.mock('@/repositories/category-receivements.repository');
describe('FindAllCategoryReceivementsService', () => {
  type SutTypes = { sut: FindAllCategoryReceivementsService; repository: CategoryReceivementRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [CategoryReceivementRepository, FindAllCategoryReceivementsService],
    }).compile();
    const service = moduleRef.get<FindAllCategoryReceivementsService>(FindAllCategoryReceivementsService);
    const repository = moduleRef.get<CategoryReceivementRepository>(CategoryReceivementRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should find all CategoryReceivements', async () => {
    const { sut } = await makeSut();
    const input = {
      filters: { account: Account.id },
      paginate: { page: 1, limit: 10 }
    }
    expect(await sut.find(input)).toMatchObject([CategoryReceivement]);
  });
});
