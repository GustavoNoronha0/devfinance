import { CategoryReceivement } from '@/database/entities/__mocks__/category-receivement.entity';
export class FindCategoryReceivementService {
  findById = jest.fn(() => CategoryReceivement);
}
