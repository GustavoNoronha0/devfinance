import { Inject } from '@nestjs/common';
import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { Account } from '@/database/entities/account.entity';
import { FindAllAccountsService as IFindAllAccountsService } from '@/interfaces/account/find-all-accounts.interface';
import { FindAllAccountsService } from '@/services/account/find-all-account.service';
// TODO: add e2e tests
@Resolver(() => Account)
export class FindAllAccountsResolver {
  constructor(
    @Inject(FindAllAccountsService) private findAllAccounts: IFindAllAccountsService,
  ) { }
  @Query(() => [Account])
  async accounts(@Args('account', { type: () => ID }) account: Account['id'],): Promise<Account[]> {
    return this.findAllAccounts.find(account);
  }
}
