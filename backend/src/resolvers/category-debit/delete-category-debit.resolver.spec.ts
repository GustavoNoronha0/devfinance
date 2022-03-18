import { Test } from '@nestjs/testing';
import { CategoryDebit } from '@/database/entities/__mocks__/category-debit.entity';
import { DeleteCategoryDebitService } from '@/services/category-debit/delete-category-debit.service';
import { DeleteCategoryDebitResolver } from './delete-category-debit.resolver';

jest.mock('@/services/delete-categoryDebit.service');
describe('DeleteCategoryDebitResolver', () => {
  type SutTypes = { sut: DeleteCategoryDebitResolver; service: DeleteCategoryDebitService };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [DeleteCategoryDebitService, DeleteCategoryDebitResolver],
    }).compile();
    const service = moduleRef.get<DeleteCategoryDebitService>(DeleteCategoryDebitService);
    const resolver = moduleRef.get<DeleteCategoryDebitResolver>(DeleteCategoryDebitResolver);
    const sutTypes = { service, sut: resolver };
    return sutTypes;
  };
  it('should delete a CategoryDebit', async () => {
    const { sut, service } = await makeSut();
    await sut.deleteCategoryDebit(CategoryDebit.id);
    expect(service.delete).toHaveBeenCalledWith(CategoryDebit.id);
  });
});
