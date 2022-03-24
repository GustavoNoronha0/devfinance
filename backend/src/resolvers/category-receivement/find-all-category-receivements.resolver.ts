import { Inject, UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { FindAllCategoryReceivementsService as IFindAllCategoryReceivementsService } from '@/interfaces/category-receivement/find-all-category-receivements.interface';
import { FindAllCategoryReceivementsService } from '@/services/category-receivement/find-all-category-receivements.service';
import CategoryReceivementPaginate from './paginate/category-receivements-input.paginate';
import FindAllCategoryReceivementsInput from '@/services/category-receivement/filters/find-all-category-receivements.input';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => CategoryReceivementPaginate)
export class FindAllCategoryReceivementsResolver {
  constructor(
    @Inject(FindAllCategoryReceivementsService) private findAllCategoryReceivements: IFindAllCategoryReceivementsService,
  ) { }
  @Query(() => CategoryReceivementPaginate)
  async categoryReceivements(@Args('input') input: FindAllCategoryReceivementsInput,): ReturnType<FindAllCategoryReceivementsService['find']> {
    return this.findAllCategoryReceivements.find(input);
  }
}
