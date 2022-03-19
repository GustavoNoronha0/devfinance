import { CategoryReceivement } from './category-receivement.interface';

export interface FindCategoryReceivementService {
  findById(id: string): Promise<CategoryReceivement | null>;
}
