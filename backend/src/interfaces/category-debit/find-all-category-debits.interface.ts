import FindAllCategoryDebitsInput from '@/services/category-debit/filters/find-all-category-debits.input';
import { Pagination } from 'nestjs-typeorm-paginate';
import { CategoryDebit } from './category-debit.interface';

export interface FindAllCategoryDebitsService {
  find(input: FindAllCategoryDebitsInput): Promise<Pagination<CategoryDebit>>;
}
