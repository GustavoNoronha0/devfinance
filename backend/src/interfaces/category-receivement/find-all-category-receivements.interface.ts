import FindAllCategoryReceivementsInput from '@/services/category-receivement/filters/find-all-category-receivements.input';
import { CategoryReceivement } from './category-receivement.interface';

export interface FindAllCategoryReceivementsService {
  find(account: FindAllCategoryReceivementsInput): Promise<CategoryReceivement[]>;
}
