import { Debit } from '@/database/entities/__mocks__/debit.entity';
export class CreateDebitService {
  create = jest.fn(() => Debit);
}
