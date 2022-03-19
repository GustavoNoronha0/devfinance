import { Test } from '@nestjs/testing';
import { CategoryReceivement } from '@/database/entities/__mocks__/category-receivement.entity';
import { FindCategoryReceivementService } from '@/services/category-receivement/find-category-receivement.service';
import { FindCategoryReceivementResolver } from './find-category-receivement.resolver';

jest.mock('@/services/category-receivement/find-category-receivement.service');
describe('FindCategoryReceivementResolver', () => {
  type SutTypes = { sut: FindCategoryReceivementResolver; service: FindCategoryReceivementService };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [FindCategoryReceivementService, FindCategoryReceivementResolver],
    }).compile();
    const service = moduleRef.get<FindCategoryReceivementService>(FindCategoryReceivementService);
    const resolver = moduleRef.get<FindCategoryReceivementResolver>(FindCategoryReceivementResolver);
    const sutTypes = { service, sut: resolver };
    return sutTypes;
  };
  it('should find a CategoryReceivement by id', async () => {
    const { sut, service } = await makeSut();
    expect(await sut.categoryReceivement(CategoryReceivement.id)).toBe(CategoryReceivement);
    expect(service.findById).toHaveBeenCalledWith(CategoryReceivement.id);
  });
});
