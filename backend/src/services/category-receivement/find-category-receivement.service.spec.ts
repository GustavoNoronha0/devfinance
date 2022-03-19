import { Test } from '@nestjs/testing';
import { CategoryReceivement } from '@/database/entities/__mocks__/category-receivement.entity';
import { CategoryReceivementRepository } from '@/repositories/category-receivement.repository';
import { FindCategoryReceivementService } from './find-category-receivement.service';

jest.mock('@/repositories/category-receivement.repository');
describe('FindCategoryReceivementService', () => {
  type SutTypes = { sut: FindCategoryReceivementService; repository: CategoryReceivementRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [CategoryReceivementRepository, FindCategoryReceivementService],
    }).compile();
    const service = moduleRef.get<FindCategoryReceivementService>(FindCategoryReceivementService);
    const repository = moduleRef.get<CategoryReceivementRepository>(CategoryReceivementRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should find a CategoryReceivement by id', async () => {
    const { sut, repository } = await makeSut();
    expect(await sut.findById(CategoryReceivement.id)).toBe(CategoryReceivement);
    expect(repository.findOne).toHaveBeenCalledWith(CategoryReceivement.id);
  });
});
