import { Debit } from './debit.interface';

export interface FindAllDebitsService {
  find(account: string): Promise<Debit[]>;
}
