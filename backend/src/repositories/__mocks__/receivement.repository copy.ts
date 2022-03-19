import { Receivement } from '@/database/entities/__mocks__/receivement.entity';

export class ReceivementRepository {
  find = jest.fn(() => [Receivement]);
  findOne = jest.fn(() => Receivement);
  findOneOrFail = jest.fn(() => Receivement);
  remove = jest.fn();
  save = jest.fn(() => Receivement);
}
