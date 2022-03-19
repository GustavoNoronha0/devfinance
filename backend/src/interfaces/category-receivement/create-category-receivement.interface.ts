import { CategoryReceivement } from './category-receivement.interface';

export interface CategoryReceivementInput {
  account: string
  title: string
  description: string
}

export interface CreateCategoryReceivementService {
  create(input: CategoryReceivementInput): Promise<CategoryReceivement>;
}
