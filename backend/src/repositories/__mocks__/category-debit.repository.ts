import { CategoryDebit } from '@/database/entities/__mocks__/category-debit.entity';

export class CategoryDebitRepository {
  find = jest.fn(() => [CategoryDebit]);
  findOne = jest.fn(() => CategoryDebit);
  findOneOrFail = jest.fn(() => CategoryDebit);
  remove = jest.fn();
  save = jest.fn(() => CategoryDebit);
}
