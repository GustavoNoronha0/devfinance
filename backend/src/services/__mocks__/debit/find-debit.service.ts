import { Debit } from '@/database/entities/__mocks__/debit.entity';
export class FindDebitService {
  findById = jest.fn(() => Debit);
}
