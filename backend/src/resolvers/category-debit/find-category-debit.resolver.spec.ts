import { Test } from '@nestjs/testing';
import { CategoryDebit } from '@/database/entities/__mocks__/category-debit.entity';
import { FindCategoryDebitService } from '@/services/category-debit/find-category-debit.service';
import { FindCategoryDebitResolver } from './find-category-debit.resolver';

jest.mock('@/services/category-debit/find-category-debit.service');
describe('FindCategoryDebitResolver', () => {
  type SutTypes = { sut: FindCategoryDebitResolver; service: FindCategoryDebitService };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [FindCategoryDebitService, FindCategoryDebitResolver],
    }).compile();
    const service = moduleRef.get<FindCategoryDebitService>(FindCategoryDebitService);
    const resolver = moduleRef.get<FindCategoryDebitResolver>(FindCategoryDebitResolver);
    const sutTypes = { service, sut: resolver };
    return sutTypes;
  };
  it('should find a CategoryDebit by id', async () => {
    const { sut, service } = await makeSut();
    expect(await sut.categoryDebit(CategoryDebit.id)).toBe(CategoryDebit);
    expect(service.findById).toHaveBeenCalledWith(CategoryDebit.id);
  });
});
