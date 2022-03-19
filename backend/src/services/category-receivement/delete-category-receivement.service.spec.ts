import { Test } from '@nestjs/testing';
import { CategoryReceivement } from '@/database/entities/__mocks__/category-receivement.entity';
import { CategoryReceivementRepository } from '@/repositories/category-receivement.repository';
import { DeleteCategoryReceivementService } from '@/services/category-receivement/delete-category-receivement.service';

jest.mock('@/repositories/category-receivement.repository');
describe('DeleteCategoryReceivementService', () => {
  type SutTypes = { sut: DeleteCategoryReceivementService; repository: CategoryReceivementRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [CategoryReceivementRepository, DeleteCategoryReceivementService],
    }).compile();
    const service = moduleRef.get<DeleteCategoryReceivementService>(DeleteCategoryReceivementService);
    const repository = moduleRef.get<CategoryReceivementRepository>(CategoryReceivementRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should remove a CategoryReceivement', async () => {
    const { sut, repository } = await makeSut();
    await sut.delete(CategoryReceivement.id);
    expect(repository.remove).toHaveBeenCalledWith(CategoryReceivement);
  });
});
