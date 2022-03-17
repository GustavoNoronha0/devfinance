import { Account } from './account.interface';

export interface FindAllAccountService {
  find(account: string): Promise<Account[]>;
}
