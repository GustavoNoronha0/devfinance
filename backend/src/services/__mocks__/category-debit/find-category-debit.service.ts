import { CategoryDebit } from '@/database/entities/__mocks__/category-debit.entity';
export class FindCategoryDebitService {
  findById = jest.fn(() => CategoryDebit);
}
