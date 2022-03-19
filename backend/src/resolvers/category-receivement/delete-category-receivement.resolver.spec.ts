import { Test } from '@nestjs/testing';
import { CategoryReceivement } from '@/database/entities/__mocks__/category-receivement.entity';
import { DeleteCategoryReceivementService } from '@/services/category-receivement/delete-category-receivement.service';
import { DeleteCategoryReceivementResolver } from './delete-category-receivement.resolver';

jest.mock('@/services/category-receivement/delete-category-receivement.service');
describe('DeleteCategoryReceivementResolver', () => {
  type SutTypes = { sut: DeleteCategoryReceivementResolver; service: DeleteCategoryReceivementService };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [DeleteCategoryReceivementService, DeleteCategoryReceivementResolver],
    }).compile();
    const service = moduleRef.get<DeleteCategoryReceivementService>(DeleteCategoryReceivementService);
    const resolver = moduleRef.get<DeleteCategoryReceivementResolver>(DeleteCategoryReceivementResolver);
    const sutTypes = { service, sut: resolver };
    return sutTypes;
  };
  it('should delete a CategoryReceivement', async () => {
    const { sut, service } = await makeSut();
    await sut.deleteCategoryReceivement(CategoryReceivement.id);
    expect(service.delete).toHaveBeenCalledWith(CategoryReceivement.id);
  });
});
