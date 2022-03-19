import { Inject } from '@nestjs/common';
import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { Debit } from '@/database/entities/debit.entity';
import { FindAllDebitsService as IFindAllDebitsService } from '@/interfaces/debit/find-all-debits.interface';
import { FindAllDebitsService } from '@/services/debit/find-all-debits.service';
import { Account } from '@/database/entities/account.entity';

@Resolver(() => Debit)
export class FindAllDebitsResolver {
  constructor(
    @Inject(FindAllDebitsService) private findAllDebits: IFindAllDebitsService,
  ) { }
  @Query(() => [Debit])
  async debits(@Args('account', { type: () => ID }) account: Account['id'],): Promise<Debit[]> {
    return this.findAllDebits.find(account);
  }
}
