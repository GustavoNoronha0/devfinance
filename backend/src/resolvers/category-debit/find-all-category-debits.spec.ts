import { Test } from '@nestjs/testing';
import { CategoryDebit } from '@/database/entities/__mocks__/category-debit.entity';
import { FindAllCategoryDebitsService } from '@/services/category-debit/find-all-category-debits.service';
import { FindAllCategoryDebitsResolver } from './find-all-category-debits.resolver';

jest.mock('@/services/find-all-categoryDebits.service');
describe('FindAllCategoryDebitsResolver', () => {
  type SutTypes = { sut: FindAllCategoryDebitsResolver; service: FindAllCategoryDebitsService };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [FindAllCategoryDebitsService, FindAllCategoryDebitsResolver],
    }).compile();
    const service = moduleRef.get<FindAllCategoryDebitsService>(FindAllCategoryDebitsService);
    const resolver = moduleRef.get<FindAllCategoryDebitsResolver>(FindAllCategoryDebitsResolver);
    const sutTypes = { service, sut: resolver };
    return sutTypes;
  };
  it('should find all CategoryDebit', async () => {
    const { sut } = await makeSut();
    expect(await sut.categoryDebits(CategoryDebit.id)).toMatchObject([CategoryDebit]);
  });
});
