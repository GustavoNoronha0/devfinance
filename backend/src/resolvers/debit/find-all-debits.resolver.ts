import { Inject, UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { FindAllDebitsService as IFindAllDebitsService } from '@/interfaces/debit/find-all-debits.interface';
import { FindAllDebitsService } from '@/services/debit/find-all-debits.service';
import FindAllDebitsInput from '@/services/debit/filters/find-all-debits.input';
import DebitPaginate from './paginate/debits-input.paginate';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';


@UseGuards(GqlAuthGuard)
@Resolver(() => DebitPaginate)
export class FindAllDebitsResolver {
  constructor(
    @Inject(FindAllDebitsService) private findAllDebits: IFindAllDebitsService,
  ) { }
  @Query(() => DebitPaginate)
  async debits(@Args('input') input: FindAllDebitsInput,): ReturnType<FindAllDebitsService['find']> {
    return this.findAllDebits.find(input);
  }
}
