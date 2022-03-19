import { Test } from '@nestjs/testing';
import faker from 'faker';
import { CategoryDebit } from '@/database/entities/__mocks__/category-debit.entity';
import { CreateCategoryDebitService } from '@/services/category-debit/create-category-debit.service';
import { CreateCategoryDebitResolver } from './create-category-debit.resolver';
import { CategoryDebitInput } from '@/interfaces/category-debit/create-category-debit.interface';

jest.mock('@/services/category-debit/create-category-debit.service');
describe('CreateCategoryDebitResolver', () => {
  type SutTypes = { sut: CreateCategoryDebitResolver; service: CreateCategoryDebitService };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [CreateCategoryDebitService, CreateCategoryDebitResolver],
    }).compile();
    const service = moduleRef.get<CreateCategoryDebitService>(CreateCategoryDebitService);
    const resolver = moduleRef.get<CreateCategoryDebitResolver>(CreateCategoryDebitResolver);
    const sutTypes = { service, sut: resolver };
    return sutTypes;
  };
  it('should create a CategoryDebit', async () => {
    const { sut, service } = await makeSut();
    const input: CategoryDebitInput = {
      account: faker.random.uuid(),
      title: faker.random.words(),
      description: faker.internet.email(),
    };
    expect(await sut.createCategoryDebit(input)).toBe(CategoryDebit);
    expect(service.create).toHaveBeenCalledWith(input);
  });
});
