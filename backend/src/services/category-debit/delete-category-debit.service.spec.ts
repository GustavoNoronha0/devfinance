import { Test } from '@nestjs/testing';
import { CategoryDebit } from '@/database/entities/__mocks__/category-debit.entity';
import { CategoryDebitRepository } from '@/repositories/category-debit.repository';
import { DeleteCategoryDebitService } from '@/services/category-debit/delete-category-debit.service';

jest.mock('@/repositories/category-debit.repository');
describe('DeleteCategoryDebitService', () => {
  type SutTypes = { sut: DeleteCategoryDebitService; repository: CategoryDebitRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [CategoryDebitRepository, DeleteCategoryDebitService],
    }).compile();
    const service = moduleRef.get<DeleteCategoryDebitService>(DeleteCategoryDebitService);
    const repository = moduleRef.get<CategoryDebitRepository>(CategoryDebitRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should remove a CategoryDebit', async () => {
    const { sut, repository } = await makeSut();
    await sut.delete(CategoryDebit.id);
    expect(repository.remove).toHaveBeenCalledWith(CategoryDebit);
  });
});
