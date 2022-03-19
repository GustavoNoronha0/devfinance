import { Test } from '@nestjs/testing';
import faker from 'faker';
import { CategoryDebit } from '@/database/entities/__mocks__/category-debit.entity';
import { CategoryDebitRepository } from '@/repositories/category-debit.repository';
import { CreateCategoryDebitService } from './create-category-debit.service';
import { CategoryDebitInput } from '@/interfaces/category-debit/create-category-debit.interface';

jest.mock('@/repositories/category-debit.repository');
describe('CreateCategoryDebitService', () => {
  type SutTypes = { sut: CreateCategoryDebitService; repository: CategoryDebitRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [CategoryDebitRepository, CreateCategoryDebitService],
    }).compile();
    const service = moduleRef.get<CreateCategoryDebitService>(CreateCategoryDebitService);
    const repository = moduleRef.get<CategoryDebitRepository>(CategoryDebitRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should create a CategoryDebit', async () => {
    const { sut, repository } = await makeSut();
    const categoryDebitCreateInput: CategoryDebitInput = {
      account: faker.random.uuid(),
      title: faker.random.words(),
      description: faker.random.words(),
    };
    expect(await sut.create(categoryDebitCreateInput)).toBe(CategoryDebit);
    expect(repository.save).toHaveBeenCalledWith(categoryDebitCreateInput);
  });
});
