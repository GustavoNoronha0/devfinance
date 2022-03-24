import { Inject, UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { FindAllReceivementsService as IFindAllReceivementsService } from '@/interfaces/receivement/find-all-receivements.interface';
import { FindAllReceivementsService } from '@/services/receivement/find-all-receivements.service';
import ReceivementPaginate from './paginate/receivements-input.paginate';
import FindAllReceivementsInput from '@/services/receivement/filters/find-all-receivements.input';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => ReceivementPaginate)
export class FindAllReceivementsResolver {
  constructor(
    @Inject(FindAllReceivementsService) private findAllReceivements: IFindAllReceivementsService,
  ) { }
  @Query(() => ReceivementPaginate)
  async receivements(@Args('input') input: FindAllReceivementsInput,): ReturnType<FindAllReceivementsService['find']> {
    return this.findAllReceivements.find(input);
  }
}
