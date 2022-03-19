import { Debit } from './debit.interface';

export interface FindDebitService {
  findById(id: string): Promise<Debit | null>;
}
