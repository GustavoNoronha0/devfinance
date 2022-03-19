import { CategoryReceivement } from '@/database/entities/__mocks__/category-receivement.entity';

export class CategoryReceivementRepository {
  find = jest.fn(() => [CategoryReceivement]);
  findOne = jest.fn(() => CategoryReceivement);
  findOneOrFail = jest.fn(() => CategoryReceivement);
  remove = jest.fn();
  save = jest.fn(() => CategoryReceivement);
}
