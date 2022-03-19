import { Test } from '@nestjs/testing';
import { CategoryReceivement } from '@/database/entities/__mocks__/category-receivement.entity';
import { FindAllCategoryReceivementsService } from '@/services/category-receivement/find-all-category-receivements.service';
import { FindAllCategoryReceivementsResolver } from './find-all-category-receivements.resolver';

jest.mock('@/services/find-all-category-receivement.service');
describe('FindAllCategoryReceivementsResolver', () => {
  type SutTypes = { sut: FindAllCategoryReceivementsResolver; service: FindAllCategoryReceivementsService };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [FindAllCategoryReceivementsService, FindAllCategoryReceivementsResolver],
    }).compile();
    const service = moduleRef.get<FindAllCategoryReceivementsService>(FindAllCategoryReceivementsService);
    const resolver = moduleRef.get<FindAllCategoryReceivementsResolver>(FindAllCategoryReceivementsResolver);
    const sutTypes = { service, sut: resolver };
    return sutTypes;
  };
  it('should find all CategoryReceivement', async () => {
    const { sut } = await makeSut();
    expect(await sut.categoryReceivements(CategoryReceivement.id)).toMatchObject([CategoryReceivement]);
  });
});
