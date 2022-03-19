import { Inject } from '@nestjs/common';
import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { CategoryReceivement } from '@/database/entities/category-receivement.entity';
import { FindAllCategoryReceivementsService as IFindAllCategoryReceivementsService } from '@/interfaces/category-receivement/find-all-category-receivements.interface';
import { FindAllCategoryReceivementsService } from '@/services/category-receivement/find-all-category-receivements.service';
import { Account } from '@/database/entities/account.entity';

@Resolver(() => CategoryReceivement)
export class FindAllCategoryReceivementsResolver {
  constructor(
    @Inject(FindAllCategoryReceivementsService) private findAllCategoryReceivements: IFindAllCategoryReceivementsService,
  ) { }
  @Query(() => [CategoryReceivement])
  async categoryReceivements(@Args('account', { type: () => ID }) account: Account['id'],): Promise<CategoryReceivement[]> {
    return this.findAllCategoryReceivements.find(account);
  }
}
