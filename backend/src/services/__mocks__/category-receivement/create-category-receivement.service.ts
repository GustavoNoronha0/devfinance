import { CategoryReceivement } from '@/database/entities/__mocks__/category-receivement.entity';
export class CreateCategoryReceivementService {
  create = jest.fn(() => CategoryReceivement);
}
