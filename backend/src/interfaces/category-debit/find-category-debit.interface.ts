import { CategoryDebit } from './category-debit.interface';

export interface FindCategoryDebitService {
  findById(id: string): Promise<CategoryDebit | null>;
}
