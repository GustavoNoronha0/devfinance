import { Debit } from './debit.interface';

export type UpdateDebitInput = Partial<Pick<Debit, 'title' | 'description' | 'value'>>;

export interface UpdateDebitService {
  update(id: string, input: UpdateDebitInput): Promise<Debit>;
}
