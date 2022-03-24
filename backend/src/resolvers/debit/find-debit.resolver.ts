import { Inject, UseGuards } from '@nestjs/common';
import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { Debit } from '@/database/entities/debit.entity';
import { FindDebitService as IFindDebitService } from '@/interfaces/debit/find-debit.interface';
import { FindDebitService } from '@/services/debit/find-debit.service';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => Debit)
export class FindDebitResolver {
  constructor(
    @Inject(FindDebitService) private findDebitService: IFindDebitService,
  ) { }
  @Query(() => Debit, { nullable: true })
  async debit(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<Debit | undefined> {
    return this.findDebitService.findById(id);
  }
}
