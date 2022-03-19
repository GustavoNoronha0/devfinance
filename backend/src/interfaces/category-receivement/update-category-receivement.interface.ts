import { CategoryReceivement } from './category-receivement.interface';

export type UpdateCategoryReceivementInput = Partial<Pick<CategoryReceivement, 'title' | 'description'>>;

export interface UpdateCategoryReceivementService {
  update(id: string, input: UpdateCategoryReceivementInput): Promise<CategoryReceivement>;
}
