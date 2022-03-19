import { Test } from '@nestjs/testing';
import faker from 'faker';
import { CategoryDebit } from '@/database/entities/__mocks__/category-debit.entity';
import { UpdateCategoryDebitInput } from '@/inputs/category-debit/update-category-debit.input';
import { CategoryDebitRepository } from '@/repositories/category-debit.repository';
import { UpdateCategoryDebitService } from './update-category-debit.service';

jest.mock('@/repositories/category-debit.repository');
describe('UpdateCategoryDebitService', () => {
  type SutTypes = { sut: UpdateCategoryDebitService; repository: CategoryDebitRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [CategoryDebitRepository, UpdateCategoryDebitService],
    }).compile();
    const repository = moduleRef.get<CategoryDebitRepository>(CategoryDebitRepository);
    const service = moduleRef.get<UpdateCategoryDebitService>(UpdateCategoryDebitService);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should update a CategoryDebit', async () => {
    const { sut, repository } = await makeSut();
    const input: UpdateCategoryDebitInput = {
      title: faker.random.words(),
      description: faker.random.words()
    };
    expect(await sut.update(CategoryDebit.id, input)).toBe(CategoryDebit);
    expect(repository.save).toHaveBeenCalledWith(Object.assign(CategoryDebit, input));
  });
});
