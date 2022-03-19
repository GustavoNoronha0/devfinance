import { Debit } from './debit.interface';

export interface DebitInput {
  account: string
  categoryDebit: string
  title: string
  description: string
  value: number
  date: Date
}

export interface CreateDebitService {
  create(input: DebitInput): Promise<Debit>;
}
