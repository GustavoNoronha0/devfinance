import { Inject } from '@nestjs/common';
import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { CategoryReceivement } from '@/database/entities/category-receivement.entity';
import { FindAllCategoryReceivementsService as IFindAllCategoryReceivementsService } from '@/interfaces/category-receivement/find-all-category-receivements.interface';
import { FindAllCategoryReceivementsService } from '@/services/category-receivement/find-all-category-receivements.service';
import { Account } from '@/database/entities/account.entity';
import CategoryReceivementPaginate from './paginate/category-receivements-input.paginate';
import FindAllCategoryReceivementsInput from '@/services/category-receivement/filters/find-all-category-receivements.input';

@Resolver(() => CategoryReceivementPaginate)
export class FindAllCategoryReceivementsResolver {
  constructor(
    @Inject(FindAllCategoryReceivementsService) private findAllCategoryReceivements: IFindAllCategoryReceivementsService,
  ) { }
  @Query(() => CategoryReceivementPaginate)
  async categoryReceivements(@Args('input') input: FindAllCategoryReceivementsInput,): Promise<CategoryReceivement[]> {
    return this.findAllCategoryReceivements.find(input);
  }
}
