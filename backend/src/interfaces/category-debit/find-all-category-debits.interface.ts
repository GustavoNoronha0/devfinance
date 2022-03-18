import { CategoryDebit } from './category-debit.interface';

export interface FindAllCategoryDebitsService {
  find(account: string): Promise<CategoryDebit[]>;
}
