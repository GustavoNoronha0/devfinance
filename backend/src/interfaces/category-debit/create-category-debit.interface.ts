import { CategoryDebit } from './category-debit.interface';

export type CreateCategoryDebitInput = Omit<CategoryDebit, 'id'>;

export interface CreateCategoryDebitService {
  create(input: CreateCategoryDebitInput): Promise<CategoryDebit>;
}
