import { Test } from '@nestjs/testing';
import faker from 'faker';
import { CategoryDebit } from '@/database/entities/__mocks__/category-debit.entity';
import { UpdateCategoryDebitInput } from '@/inputs/category-debit/update-category-debit.input';
import { UpdateCategoryDebitService } from '@/services/category-debit/update-category-debit.service';
import { UpdateCategoryDebitResolver } from './update-category-debit.resolver';

jest.mock('@/services/category-debit/update-category-debit.service');
describe('UpdateCategoryDebitResolver', () => {
  type SutTypes = { sut: UpdateCategoryDebitResolver; service: UpdateCategoryDebitService };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [UpdateCategoryDebitService, UpdateCategoryDebitResolver],
    }).compile();
    const resolver = moduleRef.get<UpdateCategoryDebitResolver>(UpdateCategoryDebitResolver);
    const service = moduleRef.get<UpdateCategoryDebitService>(UpdateCategoryDebitService);
    const sutTypes = { service, sut: resolver };
    return sutTypes;
  };
  it('should update a TODO', async () => {
    const { sut, service } = await makeSut();
    const input: UpdateCategoryDebitInput = {
      title: faker.random.words(),
      description: faker.random.words(),
    };
    await sut.updateCategoryDebit(CategoryDebit.id, input);
    expect(service.update).toHaveBeenCalledWith(CategoryDebit.id, input);
  });
});
