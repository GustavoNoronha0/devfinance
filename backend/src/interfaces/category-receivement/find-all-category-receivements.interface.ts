import { CategoryReceivement } from './category-receivement.interface';

export interface FindAllCategoryReceivementsService {
  find(account: string): Promise<CategoryReceivement[]>;
}
