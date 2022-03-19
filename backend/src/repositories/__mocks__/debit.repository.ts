import { Debit } from '@/database/entities/__mocks__/debit.entity';

export class DebitRepository {
  find = jest.fn(() => [Debit]);
  findOne = jest.fn(() => Debit);
  findOneOrFail = jest.fn(() => Debit);
  remove = jest.fn();
  save = jest.fn(() => Debit);
}
