import FindAllCategoryReceivementsInput from '@/services/category-receivement/filters/find-all-category-receivements.input';
import { Pagination } from 'nestjs-typeorm-paginate';
import { CategoryReceivement } from './category-receivement.interface';

export interface FindAllCategoryReceivementsService {
  find(account: FindAllCategoryReceivementsInput): Promise<Pagination<CategoryReceivement>>;
}
