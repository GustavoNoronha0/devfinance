import { CategoryDebit } from './category-debit.interface';
export interface CategoryDebitData {
  account: string
  title: string
  description: string
}

export interface CreateCategoryDebitService {
  create(input: CategoryDebitData): Promise<CategoryDebit>;
}
