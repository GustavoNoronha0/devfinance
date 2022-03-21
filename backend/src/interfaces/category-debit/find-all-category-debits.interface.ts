import FindAllCategoryDebitsInput from '@/services/category-debit/filters/find-all-category-debits.input';
import { CategoryDebit } from './category-debit.interface';

export interface FindAllCategoryDebitsService {
  find(input: FindAllCategoryDebitsInput): Promise<CategoryDebit[]>;
}
