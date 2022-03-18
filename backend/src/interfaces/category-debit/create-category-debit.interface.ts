import { CategoryDebit } from './category-debit.interface';
export interface CategoryDebitInput {
  account: string
  title: string
  description: string
}

export interface CreateCategoryDebitService {
  create(input: CategoryDebitInput): Promise<CategoryDebit>;
}
