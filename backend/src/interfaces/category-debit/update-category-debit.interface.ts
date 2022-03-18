import { CategoryDebit } from './category-debit.interface';

export type UpdateCategoryDebitInput = Partial<Pick<CategoryDebit, 'title' | 'description'>>;

export interface UpdateCategoryDebitService {
  update(id: string, input: UpdateCategoryDebitInput): Promise<CategoryDebit>;
}
