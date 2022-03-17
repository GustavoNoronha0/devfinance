import { Account } from './account.interface';

export type CreateAccountInput = Omit<Account, 'id'>;

export interface CreateAccountService {
  create(input: CreateAccountInput): Promise<Account>;
}
