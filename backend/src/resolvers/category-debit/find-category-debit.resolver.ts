import { Inject, UseGuards } from '@nestjs/common';
import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { CategoryDebit } from '@/database/entities/category-debit.entity';
import { FindCategoryDebitService as IFindCategoryDebitService } from '@/interfaces/category-debit/find-category-debit.interface';
import { FindCategoryDebitService } from '@/services/category-debit/find-category-debit.service';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => CategoryDebit)
export class FindCategoryDebitResolver {
  constructor(
    @Inject(FindCategoryDebitService) private findCategoryDebitService: IFindCategoryDebitService,
  ) { }
  @Query(() => CategoryDebit, { nullable: true })
  async categoryDebit(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<CategoryDebit | undefined> {
    return this.findCategoryDebitService.findById(id);
  }
}
