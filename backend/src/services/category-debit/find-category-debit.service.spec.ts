import { Test } from '@nestjs/testing';
import { CategoryDebit } from '@/database/entities/__mocks__/category-debit.entity';
import { CategoryDebitRepository } from '@/repositories/category-debit.repository';
import { FindCategoryDebitService } from './find-category-debit.service';

jest.mock('@/repositories/category-debit.repository');
describe('FindCategoryDebitService', () => {
  type SutTypes = { sut: FindCategoryDebitService; repository: CategoryDebitRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [CategoryDebitRepository, FindCategoryDebitService],
    }).compile();
    const service = moduleRef.get<FindCategoryDebitService>(FindCategoryDebitService);
    const repository = moduleRef.get<CategoryDebitRepository>(CategoryDebitRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should find a CategoryDebit by id', async () => {
    const { sut, repository } = await makeSut();
    expect(await sut.findById(CategoryDebit.id)).toBe(CategoryDebit);
    expect(repository.findOne).toHaveBeenCalledWith(CategoryDebit.id);
  });
});
