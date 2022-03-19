import { CategoryReceivement } from '@/database/entities/__mocks__/category-receivement.entity';
export class FindAllCategoryReceivementsService {
  find = jest.fn(() => [CategoryReceivement]);
}
