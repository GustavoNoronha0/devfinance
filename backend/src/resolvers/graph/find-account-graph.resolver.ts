import { Inject, UseGuards } from '@nestjs/common';
import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { AccountGraph } from '@/interfaces/graph/account-graph.typing';
import { FindAccountGraphService as IFindAccountGraphService } from '@/interfaces/graph/find-account-graph.interface';
import { FindAccountGraphService } from '@/services/graph/find-account-graph.service';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => AccountGraph)
export class FindAccountGraphResolver {
  constructor(
    @Inject(FindAccountGraphService) private findAccountGraphService: IFindAccountGraphService,
  ) { }
  @Query(() => AccountGraph, { nullable: true })
  async graphAccount(
    @Args('account', { type: () => ID }) account: string,
  ): Promise<AccountGraph> {
    return this.findAccountGraphService.findGraph(account);
  }
}
