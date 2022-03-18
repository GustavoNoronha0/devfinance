import { Test } from '@nestjs/testing';
import { CategoryDebit } from '@/database/entities/__mocks__/category-debit.entity';
import { CategoryDebitRepository } from '@/repositories/category-debit.repository';
import { FindAllCategoryDebitsService } from './find-all-category-debits.service';
import { Account } from '@/database/entities/__mocks__/account.entity';

jest.mock('@/repositories/categoryDebit.repository');
describe('FindAllCategoryDebitsService', () => {
  type SutTypes = { sut: FindAllCategoryDebitsService; repository: CategoryDebitRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [CategoryDebitRepository, FindAllCategoryDebitsService],
    }).compile();
    const service = moduleRef.get<FindAllCategoryDebitsService>(FindAllCategoryDebitsService);
    const repository = moduleRef.get<CategoryDebitRepository>(CategoryDebitRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should find all CategoryDebits', async () => {
    const { sut } = await makeSut();
    expect(await sut.find(Account.id)).toMatchObject([CategoryDebit]);
  });
});
