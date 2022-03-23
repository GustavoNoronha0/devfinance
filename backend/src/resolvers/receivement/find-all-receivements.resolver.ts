import { Inject, UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { FindAllReceivementsService as IFindAllReceivementsService } from '@/interfaces/receivement/find-all-receivements.interface';
import { FindAllReceivementsService } from '@/services/receivement/find-all-receivements.service';
import CategoryReceivementPaginate from './paginate/category-receivements-input.paginate';
import FindAllReceivementsInput from '@/services/receivement/filters/find-all-receivements.input';
import { GqlAuthGuard } from '@/auth/auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => CategoryReceivementPaginate)
export class FindAllReceivementsResolver {
  constructor(
    @Inject(FindAllReceivementsService) private findAllReceivements: IFindAllReceivementsService,
  ) { }
  @Query(() => CategoryReceivementPaginate)
  async receivements(@Args('input') input: FindAllReceivementsInput,): ReturnType<FindAllReceivementsService['find']> {
    return this.findAllReceivements.find(input);
  }
}
