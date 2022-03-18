import { CategoryDebit } from '@/database/entities/__mocks__/category-debit.entity';
export class FindAllCategoryDebitsService {
  find = jest.fn(() => [CategoryDebit]);
}
