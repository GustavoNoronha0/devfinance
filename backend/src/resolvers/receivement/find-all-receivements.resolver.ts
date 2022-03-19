import { Inject } from '@nestjs/common';
import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { Receivement } from '@/database/entities/receivement.entity';
import { FindAllReceivementsService as IFindAllReceivementsService } from '@/interfaces/receivement/find-all-receivements.interface';
import { FindAllReceivementsService } from '@/services/receivement/find-all-receivements.service';
import { Account } from '@/database/entities/account.entity';

@Resolver(() => Receivement)
export class FindAllReceivementsResolver {
  constructor(
    @Inject(FindAllReceivementsService) private findAllReceivements: IFindAllReceivementsService,
  ) { }
  @Query(() => [Receivement])
  async receivements(@Args('account', { type: () => ID }) account: Account['id'],): Promise<Receivement[]> {
    return this.findAllReceivements.find(account);
  }
}
