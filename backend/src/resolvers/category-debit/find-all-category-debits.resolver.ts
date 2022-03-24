import { Inject, UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { FindAllCategoryDebitsService as IFindAllCategoryDebitsService } from '@/interfaces/category-debit/find-all-category-debits.interface';
import { FindAllCategoryDebitsService } from '@/services/category-debit/find-all-category-debits.service';
import CategoryDebitPaginate from './paginate/category-debits-input.paginate';
import FindAllCategoryDebitsInput from '@/services/category-debit/filters/find-all-category-debits.input';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => CategoryDebitPaginate)
export class FindAllCategoryDebitsResolver {
  constructor(
    @Inject(FindAllCategoryDebitsService) private findAllCategoryDebits: IFindAllCategoryDebitsService,
  ) { }
  @Query(() => CategoryDebitPaginate)
  async categoryDebits(@Args('input') input: FindAllCategoryDebitsInput,): ReturnType<FindAllCategoryDebitsService['find']> {
    return this.findAllCategoryDebits.find(input);
  }
}
