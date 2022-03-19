import { Inject } from '@nestjs/common';
import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { CategoryReceivement } from '@/database/entities/category-receivement.entity';
import { FindCategoryReceivementService as IFindCategoryReceivementService } from '@/interfaces/category-receivement/find-category-receivement.interface';
import { FindCategoryReceivementService } from '@/services/category-receivement/find-category-receivement.service';

@Resolver(() => CategoryReceivement)
export class FindCategoryReceivementResolver {
  constructor(
    @Inject(FindCategoryReceivementService) private findCategoryReceivementService: IFindCategoryReceivementService,
  ) { }
  @Query(() => CategoryReceivement, { nullable: true })
  async categoryReceivement(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<CategoryReceivement | undefined> {
    return this.findCategoryReceivementService.findById(id);
  }
}
