import { Debit } from '@/database/entities/__mocks__/debit.entity';
export class FindAllDebitsService {
  find = jest.fn(() => [Debit]);
}
